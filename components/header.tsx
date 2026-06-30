import Link from 'next/link';
import { CartTray } from '@/components/cart-tray';

const navItems = [
  { href: '/#catalog', label: 'Catalog' },
  { href: '/#features', label: 'Features' },
  { href: '/#architecture', label: 'Architecture' },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand__mark" aria-hidden="true">
          TM
        </span>
        <span>
          <strong>Thirnaex Market</strong>
          <small>Capstone storefront</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <CartTray />
    </header>
  );
}