import { NextResponse } from 'next/server';
import { getAllProducts, getCategories, searchProducts } from '@/lib/products';

export function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') ?? '';
  const category = url.searchParams.get('category') ?? 'All';

  const products = query.length > 0 || category !== 'All' ? searchProducts(query, category) : getAllProducts();

  return NextResponse.json({
    products,
    categories: getCategories(),
    count: products.length,
  });
}