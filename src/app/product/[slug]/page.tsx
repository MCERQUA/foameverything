'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { LetterAnimation } from '@/components/animations/LetterAnimation';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductBySlug, products, getProductPriceDisplay } from '@/lib/products';
import { calculatePrice, formatPrice, ProductSize } from '@/types/product';
import { Minus, Plus, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Script from 'next/script';

const sizes: ProductSize[] = ['SM', 'M', 'L', 'XL', '2XL', '3XL'];

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<ProductSize>('M');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const priceDisplay = getProductPriceDisplay(product);
  const currentPrice = product.isPreorder && product.preorderDiscount
    ? product.basePrice * (1 - product.preorderDiscount / 100)
    : product.basePrice;
  const finalPrice = calculatePrice(currentPrice, selectedSize);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
      isPreorder: product.isPreorder,
    });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Product schema for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://foameverything.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.brand.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://foameverything.com/product/${product.slug}`,
      priceCurrency: "USD",
      price: finalPrice.toFixed(2),
      availability: product.isPreorder
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Foam Everything",
      },
    },
  };

  // Breadcrumb schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://foameverything.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://foameverything.com/shop",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://foameverything.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="min-h-screen bg-[var(--bg-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-[var(--text-grey)]">
              <li><a href="/" className="hover:text-[var(--neon-cyan)]">Home</a></li>
              <li>/</li>
              <li><a href="/shop" className="hover:text-[var(--neon-cyan)]">Shop</a></li>
              <li>/</li>
              <li className="text-white">{product.name}</li>
            </ol>
          </nav>
        </ScrollReveal>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--bg-charcoal)] border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />

                {/* Pre-order Badge */}
                {product.isPreorder && (
                  <div className="absolute top-4 left-4">
                    <span className="badge-preorder text-base px-4 py-2">
                      PRE-ORDER
                    </span>
                  </div>
                )}

                {/* Discount Badge */}
                {product.isPreorder && product.preorderDiscount && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[var(--neon-cyan)] text-black font-bold px-3 py-1 rounded-full text-sm">
                      {product.preorderDiscount}% OFF
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Strip (if multiple images) */}
              {product.images.length > 1 && (
                <div className="flex gap-4 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-white/20 hover:border-[var(--neon-cyan)] transition-colors"
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <div>
            <ScrollReveal variant="fadeLeft" delay={0.3}>
              {/* Category */}
              <span className="text-[var(--neon-cyan)] text-sm uppercase tracking-wider">
                {product.category} • {product.brand.replace('-', ' ')}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[var(--neon-cyan)]">
                  {formatPrice(finalPrice)}
                </span>
                {product.isPreorder && priceDisplay.originalPrice && (
                  <span className="text-xl text-[var(--text-muted)] line-through">
                    {formatPrice(calculatePrice(product.basePrice, selectedSize))}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[var(--text-grey)] mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-[var(--neon-cyan)] text-black shadow-[0_0_15px_var(--neon-cyan)]'
                          : 'bg-[var(--bg-charcoal)] text-white border border-white/20 hover:border-[var(--neon-cyan)]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  2XL+ sizes have additional cost
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-white mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[var(--bg-charcoal)] rounded-lg border border-white/20">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:text-[var(--neon-cyan)] transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:text-[var(--neon-cyan)] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[var(--text-grey)]">
                    Total: <span className="text-white font-bold">{formatPrice(finalPrice * quantity)}</span>
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <MagneticButton
                  variant={product.isPreorder ? 'preorder' : 'primary'}
                  className="flex-1 text-lg py-4 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {product.isPreorder ? 'Pre-Order Now' : 'Add to Cart'}
                    </>
                  )}
                </MagneticButton>

                <button className="p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/20 hover:border-[var(--neon-pink)] hover:text-[var(--neon-pink)] transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                <button className="p-4 bg-[var(--bg-charcoal)] rounded-xl border border-white/20 hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Pre-order Info */}
              {product.isPreorder && (
                <div className="p-4 bg-[var(--neon-red)]/10 border border-[var(--neon-red)]/30 rounded-xl">
                  <h4 className="text-[var(--neon-red)] font-bold mb-2">Pre-Order Information</h4>
                  <ul className="text-sm text-[var(--text-grey)] space-y-1">
                    <li>• Expected to ship by March 15, 2026</li>
                    <li>• Convention pickup available March 22-25</li>
                    <li>• Early bird pricing ends March 1, 2026</li>
                  </ul>
                </div>
              )}

              {/* Product Details */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-bold mb-4">Product Details</h4>
                <ul className="text-sm text-[var(--text-grey)] space-y-2">
                  <li><span className="text-white">Material:</span> 50/50 Cotton/Polyester Blend</li>
                  <li><span className="text-white">Fit:</span> Relaxed, pre-shrunk</li>
                  <li><span className="text-white">Care:</span> Machine wash cold, tumble dry low</li>
                  <li><span className="text-white">Style:</span> {product.style?.replace('_', ' ')}</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-white/10 pt-16">
            <LetterAnimation
              text="RELATED PRODUCTS"
              variant="wave"
              as="h2"
              className="text-3xl font-black uppercase tracking-wider heading-cyan mb-8 text-center"
              staggerDelay={0.04}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => {
                const relPriceDisplay = getProductPriceDisplay(relProduct);
                return (
                  <ProductCard
                    key={relProduct.id}
                    name={relProduct.name}
                    slug={relProduct.slug}
                    price={relPriceDisplay.price}
                    originalPrice={relPriceDisplay.originalPrice}
                    image={relProduct.image}
                    category={relProduct.category}
                    isPreorder={relProduct.isPreorder}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
