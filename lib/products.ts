export type ProductCategory =
  | 'Audio'
  | 'Workspace'
  | 'Wearables'
  | 'Home'
  | 'Entertainment'
  | 'Display';

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  specs: Array<{ label: string; value: string }>;
  accent: [string, string, string];
};

const products: Product[] = [
  {
    id: 1,
    slug: 'aurora-wireless-headphones',
    name: 'Aurora Wireless Headphones',
    category: 'Audio',
    price: 249,
    rating: 4.9,
    reviews: 182,
    badge: 'Best seller',
    summary: 'Hybrid noise cancellation, cinematic sound, and all-day comfort.',
    description:
      'Built for deep focus and immersive listening, Aurora balances studio-grade tuning with adaptive noise control and a featherlight frame.',
    features: ['40-hour battery', 'Adaptive ANC', 'Spatial audio'],
    specs: [
      { label: 'Connectivity', value: 'Bluetooth 5.4' },
      { label: 'Charge', value: 'USB-C fast charge' },
      { label: 'Weight', value: '238 g' },
    ],
    accent: ['#f97316', '#fb7185', '#facc15'],
  },
  {
    id: 2,
    slug: 'prism-creator-monitor',
    name: 'Prism Creator Monitor',
    category: 'Display',
    price: 529,
    rating: 4.8,
    reviews: 96,
    badge: 'New arrival',
    summary: 'A color-accurate 4K panel tuned for builders, editors, and teams.',
    description:
      'Prism expands a creator workflow with a wide color gamut, factory calibration, and thin bezels that keep the interface in focus.',
    features: ['4K UHD', '99% DCI-P3', 'USB-C docking'],
    specs: [
      { label: 'Panel', value: '27-inch IPS' },
      { label: 'Refresh', value: '144 Hz' },
      { label: 'Ports', value: '2x USB-C, 2x HDMI' },
    ],
    accent: ['#0f172a', '#22d3ee', '#818cf8'],
  },
  {
    id: 3,
    slug: 'halo-fit-smartwatch',
    name: 'Halo Fit Smartwatch',
    category: 'Wearables',
    price: 299,
    rating: 4.7,
    reviews: 141,
    badge: 'Editor choice',
    summary: 'Health tracking, on-wrist payments, and two-day battery life.',
    description:
      'Halo Fit blends premium materials with detailed wellness data, guided workouts, and fast charging for a clean daily carry.',
    features: ['ECG tracking', 'Sleep coaching', 'Water resistant'],
    specs: [
      { label: 'Display', value: 'Always-on OLED' },
      { label: 'Battery', value: 'Up to 48 hours' },
      { label: 'Material', value: 'Titanium + sapphire' },
    ],
    accent: ['#0891b2', '#14b8a6', '#a78bfa'],
  },
  {
    id: 4,
    slug: 'atlas-smart-speaker',
    name: 'Atlas Smart Speaker',
    category: 'Home',
    price: 189,
    rating: 4.6,
    reviews: 77,
    badge: 'Smart home pick',
    summary: 'Room-filling audio with contextual voice control and privacy guard.',
    description:
      'Atlas acts as the center of a connected home, delivering rich audio while staying responsive to routines, timers, and scenes.',
    features: ['360° sound', 'Local voice wake', 'Privacy mic switch'],
    specs: [
      { label: 'Assistant', value: 'Voice-enabled hub' },
      { label: 'Audio', value: 'Dual passive radiators' },
      { label: 'Power', value: 'AC powered' },
    ],
    accent: ['#22c55e', '#84cc16', '#f59e0b'],
  },
  {
    id: 5,
    slug: 'canvas-compact-keyboard',
    name: 'Canvas Compact Keyboard',
    category: 'Workspace',
    price: 129,
    rating: 4.8,
    reviews: 214,
    badge: 'Desk upgrade',
    summary: 'Low-profile tactile switches and a slim layout for intense workflows.',
    description:
      'Canvas is tuned for long writing sessions and fast navigation with programmable layers, a silent acoustic profile, and multi-device pairing.',
    features: ['Hot-swappable', 'Multi-device', 'Macro support'],
    specs: [
      { label: 'Layout', value: '75% compact' },
      { label: 'Switches', value: 'Low-profile tactile' },
      { label: 'Connection', value: 'USB-C and wireless' },
    ],
    accent: ['#7c3aed', '#ec4899', '#f97316'],
  },
  {
    id: 6,
    slug: 'ember-portable-projector',
    name: 'Ember Portable Projector',
    category: 'Entertainment',
    price: 449,
    rating: 4.7,
    reviews: 58,
    badge: 'Weekend essential',
    summary: 'Cinema-grade projection in a compact chassis with instant setup.',
    description:
      'Ember creates a flexible big-screen experience with auto keystone correction, punchy brightness, and whisper-quiet cooling.',
    features: ['Autofocus', 'Built-in stereo', 'Streaming apps'],
    specs: [
      { label: 'Resolution', value: '1080p native' },
      { label: 'Brightness', value: '900 ANSI lumens' },
      { label: 'Throw', value: 'Short throw' },
    ],
    accent: ['#ef4444', '#f97316', '#fde047'],
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function getFeaturedProducts() {
  return products.slice(0, 3);
}

export function searchProducts(query: string, category: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [product.name, product.summary, product.description, product.category, product.badge]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}