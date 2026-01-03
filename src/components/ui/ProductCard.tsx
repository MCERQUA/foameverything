'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ProductCardProps {
  name: string;
  slug: string;
  price: string;
  image: string;
  category?: string;
  isPreorder?: boolean;
  originalPrice?: string;
}

export function ProductCard({
  name,
  slug,
  price,
  image,
  category,
  isPreorder = false,
  originalPrice,
}: ProductCardProps) {
  return (
    <TiltCard
      variant={isPreorder ? 'featured' : 'default'}
      className="group h-full"
    >
      <Link href={`/product/${slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-[var(--bg-dark-grey)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Pre-order Badge */}
          {isPreorder && (
            <span className="absolute top-3 left-3 badge-preorder">
              Pre-Order
            </span>
          )}

          {/* Category Badge */}
          {category && !isPreorder && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs uppercase tracking-wider bg-[var(--bg-black)]/80 text-[var(--neon-cyan)] rounded">
              {category}
            </span>
          )}

          {/* Quick View Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--bg-black)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
            initial={false}
          >
            <span className="text-sm text-white/80 uppercase tracking-wider">
              View Details
            </span>
          </motion.div>
        </div>

        {/* Product Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[var(--neon-cyan)] transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-2">
            {isPreorder && originalPrice ? (
              <>
                <span className="price-sale text-lg">{price}</span>
                <span className="price-original text-sm">{originalPrice}</span>
              </>
            ) : (
              <span className="price">{price}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="mt-4">
        <MagneticButton
          variant={isPreorder ? 'preorder' : 'primary'}
          className="w-full text-sm py-2"
          onClick={() => {
            // Add to cart logic will go here
            console.log('Add to cart:', slug);
          }}
        >
          {isPreorder ? 'Pre-Order Now' : 'Add to Cart'}
        </MagneticButton>
      </div>
    </TiltCard>
  );
}

export default ProductCard;
