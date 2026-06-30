import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import { CartProvider } from '@/components/cart-provider';
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Thirnaex Market',
  description: 'A production-ready e-commerce catalog capstone built with Next.js and deployed on Render.',
  metadataBase: new URL('https://thirnaex-market.onrender.com'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <CartProvider>
          <div className="app-shell">
            <Header />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}