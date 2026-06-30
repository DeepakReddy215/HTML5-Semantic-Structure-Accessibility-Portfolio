import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { formatCurrency } from '@/lib/format';
import { getAllProducts, getProductBySlug } from '@/lib/products';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product not found' };
  }

  return {
    title: `${product.name} | Thirnaex Market`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="product-detail">
      <Link className="back-link" href="/#catalog">
        Back to catalog
      </Link>

      <div className="product-detail__hero">
        <div
          className="product-detail__visual"
          style={{ background: `linear-gradient(135deg, ${product.accent[0]}, ${product.accent[1]} 55%, ${product.accent[2]})` }}
        >
          <span className="product-card__badge">{product.badge}</span>
        </div>

        <div className="product-detail__copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__summary">{product.description}</p>

          <div className="product-detail__meta">
            <strong>{formatCurrency(product.price)}</strong>
            <span>
              {product.rating.toFixed(1)} rating · {product.reviews} reviews
            </span>
          </div>

          <div className="hero__actions">
            <AddToCartButton product={product} />
            <Link className="button button-secondary" href="/#catalog">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <article className="detail-card">
          <h2>Why it stands out</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h2>Specs</h2>
          <dl className="spec-list">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}