import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="empty-state not-found">
      <p className="eyebrow">404</p>
      <h1>This route does not exist.</h1>
      <p>Use the product catalog or return home to continue the storefront flow.</p>
      <Link className="button button-primary" href="/">
        Go home
      </Link>
    </section>
  );
}