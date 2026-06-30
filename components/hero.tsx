import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Full-stack commerce capstone</p>
        <h1>Design-forward product discovery with production-ready routing and deployment.</h1>
        <p className="hero__lede">
          A modular Next.js storefront for showing how a polished catalog can be architected, optimized, and deployed to Render with confidence.
        </p>

        <div className="hero__actions">
          <Link className="button button-primary" href="/#catalog">
            Explore products
          </Link>
          <Link className="button button-secondary" href="/#architecture">
            View architecture
          </Link>
        </div>

        <dl className="hero__stats">
          <div>
            <dt>Routes</dt>
            <dd>Client + server navigation</dd>
          </div>
          <div>
            <dt>Performance</dt>
            <dd>Standalone output and optimized assets</dd>
          </div>
          <div>
            <dt>Deployment</dt>
            <dd>Render-ready configuration</dd>
          </div>
        </dl>
      </div>

      <div className="hero__panel" aria-hidden="true">
        <div className="hero__panel-card hero__panel-card--large">
          <span className="hero__panel-chip">Featured drop</span>
          <h2>Studio-grade sound. Lightweight shell. Fast checkout preview.</h2>
        </div>
        <div className="hero__panel-grid">
          <div className="hero__panel-card">
            <span className="hero__panel-chip">Search</span>
            <p>Instant filters across categories, copy, and tags.</p>
          </div>
          <div className="hero__panel-card">
            <span className="hero__panel-chip">Cart</span>
            <p>Persistent client state with localStorage hydration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}