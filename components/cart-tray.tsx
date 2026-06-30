'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-provider';
import { formatCurrency } from '@/lib/format';

export function CartTray() {
  const { items, isOpen, toggleCart, closeCart, removeItem, subtotal, totalItems } = useCart();

  return (
    <>
      <button className="cart-button" onClick={toggleCart} type="button">
        <span>Cart</span>
        <strong>{totalItems}</strong>
      </button>

      {isOpen ? <button aria-label="Close cart overlay" className="cart-backdrop" onClick={closeCart} type="button" /> : null}

      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping cart" aria-modal={isOpen} role="dialog">
        <div className="cart-drawer__header">
          <div>
            <p className="eyebrow">Selected items</p>
            <h2>Your cart</h2>
          </div>
          <button className="icon-button" onClick={closeCart} type="button">
            Close
          </button>
        </div>

        <div className="cart-drawer__content">
          {items.length === 0 ? (
            <div className="empty-state compact">
              <p>No items yet. Add a product to preview the cart flow.</p>
              <Link className="button button-secondary" href="/#catalog" onClick={closeCart}>
                Browse catalog
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <article className="cart-item" key={item.slug}>
                <span className="cart-item__swatch" style={{ background: `linear-gradient(135deg, ${item.accent[0]}, ${item.accent[1]} 60%, ${item.accent[2]})` }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>
                <button className="icon-button" onClick={() => removeItem(item.slug)} type="button">
                  Remove
                </button>
              </article>
            ))
          )}
        </div>

        <div className="cart-drawer__footer">
          <div>
            <p className="eyebrow">Subtotal</p>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <button className="button button-primary" type="button">
            Checkout preview
          </button>
        </div>
      </aside>
    </>
  );
}