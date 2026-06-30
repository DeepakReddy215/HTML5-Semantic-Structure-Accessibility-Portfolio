'use client';

import { useDeferredValue, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { searchProducts } from '@/lib/products';
import type { Product } from '@/lib/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating-desc', label: 'Top rated' },
];

export function CatalogBrowser({ products, categories }: { products: Product[]; categories: string[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const deferredQuery = useDeferredValue(query);

  const filteredProducts = searchProducts(deferredQuery, category).slice();

  filteredProducts.sort((left, right) => {
    if (sort === 'price-asc') {
      return left.price - right.price;
    }

    if (sort === 'price-desc') {
      return right.price - left.price;
    }

    if (sort === 'rating-desc') {
      return right.rating - left.rating;
    }

    return left.id - right.id;
  });

  return (
    <section className="catalog" id="catalog">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Catalog browser</p>
          <h2>Search, filter, and compare products without leaving the page.</h2>
        </div>
        <p>
          The controls below are fully client-side, so navigation stays smooth while the product detail routes still pre-render on the server.
        </p>
      </div>

      <div className="catalog__controls">
        <label className="field">
          <span>Search</span>
          <input
            name="query"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by product, feature, or category"
            value={query}
          />
        </label>

        <label className="field">
          <span>Category</span>
          <select name="category" onChange={(event) => setCategory(event.target.value)} value={category}>
            <option value="All">All</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sort</span>
          <select name="sort" onChange={(event) => setSort(event.target.value)} value={sort}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="chip-row" aria-label="Available categories">
        <span className="chip chip-active">All</span>
        {categories.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>

      <p className="catalog__results">
        Showing <strong>{filteredProducts.length}</strong> products
      </p>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h3>No products match that search.</h3>
          <p>Try a different keyword or switch back to the full catalog.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}