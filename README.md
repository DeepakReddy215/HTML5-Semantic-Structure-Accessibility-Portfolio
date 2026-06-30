# Thirnaex Market

A production-ready e-commerce catalog capstone built with Next.js, TypeScript, and the App Router.

## What it includes

- Modular homepage and product detail routes
- Client-side catalog search, category filtering, and sorting
- Persistent cart state in localStorage
- Typed data layer plus REST API routes
- Render deployment config with standalone build output

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Render deployment

1. Push this repository to GitHub.
2. Create a new Render Web Service from the repo.
3. Render will read [render.yaml](render.yaml) and use `npm run build` plus `npm start`.
4. After deploy, Render will provide the public URL for the app.

## API endpoints

- `GET /api/products`
- `GET /api/products/[slug]`