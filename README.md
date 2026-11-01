# Ecommerce

A responsive e-commerce storefront UI built with React and Tailwind CSS.

The home page combines a rotating carousel, hero banner, feature cards and a contact block, with a separate About page behind client-side routing. The layout is built mobile-first and scales up to desktop.

## Sections

- **Navbar** — persistent site navigation
- **Carousel** — rotating promotions
- **Hero** — primary storefront banner
- **Cards** — product and feature highlights
- **Contact block** — message form UI
- **Footer** — links and site information
- **About page** — standalone route at `/about`

## Tech stack

- React 19 + Vite
- Tailwind CSS 4
- Flowbite components
- React Router 7

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

## Structure

```
src/
├── Components/   # Navbar, Herosection, Carousel, Cards, Textarea, Footer
├── Pages/        # About
├── App.jsx       # routes and page composition
├── index.css     # Tailwind entry
└── main.jsx
```

## Scope

This is a front-end build: product data is static and there is no cart state or backend. The focus is responsive layout, reusable section components and routing.
