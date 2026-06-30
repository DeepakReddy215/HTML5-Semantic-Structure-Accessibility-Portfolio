import { CatalogBrowser } from '@/components/catalog-browser';
import { Hero } from '@/components/hero';
import { getAllProducts, getCategories, getFeaturedProducts } from '@/lib/products';

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();

  return (
    <>
      <Hero />

      <section className="showcase" id="features">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Feature set</p>
            <h2>Built to demonstrate real production concerns, not just a static mockup.</h2>
          </div>
          <p>
            The project combines modular UI composition, route-driven product detail pages, a persistent client cart, and a deployable Node service.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Route architecture</h3>
            <p>App Router pages for the home, product detail, API catalog, and not-found states.</p>
          </article>
          <article className="feature-card">
            <h3>Performance</h3>
            <p>Standalone output, server-rendered details, local font loading, and lean client components.</p>
          </article>
          <article className="feature-card">
            <h3>Deployment</h3>
            <p>Render blueprint included so the same repo can be pushed into a live production service.</p>
          </article>
        </div>
      </section>

      <section className="featured-strip" aria-label="Featured products">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Featured picks</p>
            <h2>Three products selected to show the design system at a glance.</h2>
          </div>
        </div>

        <div className="featured-strip__grid">
          {featuredProducts.map((product) => (
            <article className="mini-card" key={product.slug} style={{ background: `linear-gradient(135deg, ${product.accent[0]}, ${product.accent[1]} 55%, ${product.accent[2]})` }}>
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <CatalogBrowser categories={categories} products={products} />

      <section className="architecture" id="architecture">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Architecture</p>
            <h2>The app is split so data, presentation, and interactivity stay independently testable.</h2>
          </div>
        </div>

        <div className="architecture__grid">
          <article className="architecture-card">
            <h3>Data layer</h3>
            <p>All catalog content lives in a typed library module and is exposed through REST route handlers.</p>
          </article>
          <article className="architecture-card">
            <h3>Presentation layer</h3>
            <p>Server components render the shell and detail pages; client components handle catalog controls and the cart.</p>
          </article>
          <article className="architecture-card">
            <h3>Deployment layer</h3>
            <p>Render config keeps build and start commands explicit, while Next standalone output improves container portability.</p>
          </article>
        </div>
      </section>
    </>
  );
}