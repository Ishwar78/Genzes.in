# GENZES Landing Page

A responsive React + Vite landing page recreated from the supplied GENZES reference design.

## Included

- React + Vite
- BrowserRouter (clean `/` URL — no `#/` hash routing)
- `src/components`, `src/pages`, `src/lib`
- No `data.js`
- Montserrat font via `@fontsource/montserrat`
- React Icons
- Dedicated CSS file for every component/page
- No shared/common CSS file and no `index.css`
- Responsive desktop, tablet and mobile layout
- Minimal navbar with logo + Download App only

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the generated `dist` folder to your hosting.

## React Router deployment note

Because BrowserRouter uses clean URLs, your production server should redirect unknown frontend routes to `index.html` if you add routes later.
