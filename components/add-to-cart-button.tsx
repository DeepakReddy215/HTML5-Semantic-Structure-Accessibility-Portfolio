'use client';

import { useState } from 'react';
import { useCart } from '@/components/cart-provider';
import type { Product } from '@/lib/products';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button
      className="button button-primary"
      onClick={() => {
        addItem(product);
        setIsAdded(true);
        window.setTimeout(() => setIsAdded(false), 1500);
      }}
      type="button"
    >
      {isAdded ? 'Added to cart' : 'Add to cart'}
    </button>
  );
}