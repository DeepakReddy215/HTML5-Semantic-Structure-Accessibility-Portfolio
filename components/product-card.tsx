'use client';

import Link from 'next/link';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { formatCurrency } from '@/lib/format';
import type { Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div
        className="product-card__visual"
        style={{ background: `linear-gradient(135deg, ${product.accent[0]}, ${product.accent[1]} 55%, ${product.accent[2]})` }}
      >
        <span className="product-card__badge">{product.badge}</span>
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <h3>
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <p>{product.summary}</p>
          </div>
          <strong>{formatCurrency(product.price)}</strong>
        </div>

        <ul className="product-card__features">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="product-card__footer">
          <span>
            {product.rating.toFixed(1)} rating · {product.reviews} reviews
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}