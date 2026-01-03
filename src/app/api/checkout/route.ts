import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
  isPreorder?: boolean;
}

interface CheckoutRequest {
  items: CartItem[];
  fulfillmentType: 'ship' | 'pickup';
  shippingAddress?: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { items, fulfillmentType, shippingAddress } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    // Calculate shipping
    const hasPreorderItems = items.some(item => item.isPreorder);
    const shippingCost = fulfillmentType === 'pickup' && hasPreorderItems ? 0 : 999; // $9.99 in cents

    // Create line items for Stripe
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: `Size: ${item.size}${item.isPreorder ? ' (Pre-Order)' : ''}`,
          images: item.image.startsWith('http')
            ? [item.image]
            : [`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${item.image}`],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Add shipping as a line item if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
            description: 'Standard shipping',
            images: [],
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout`,
      automatic_tax: {
        enabled: true,
      },
      billing_address_collection: 'required',
      shipping_address_collection: fulfillmentType === 'ship' ? {
        allowed_countries: ['US'],
      } : undefined,
      customer_email: shippingAddress?.email,
      metadata: {
        fulfillmentType,
        hasPreorderItems: hasPreorderItems.toString(),
        itemCount: items.length.toString(),
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
