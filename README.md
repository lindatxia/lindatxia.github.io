# Linda Xia’s personal website

A minimal personal site with writing, an about page, a résumé link, and a 35mm photo grid. Typography uses locally hosted HK Grotesk; its license is in `site-assets/fonts/LICENSE.txt`.

## Edit

- `site-src/App.tsx`: navigation, posts, biography, and photographs.
- `site-src/styles.css`: layout and typography.
- `index.html`: page title and metadata.

## Build and preview

```sh
npm ci
npm run build
python3 -m http.server 8000
```

Open http://localhost:8000. After editing source, rebuild and commit the updated `site-assets/` files with the source. GitHub Pages serves the checked-in root `index.html` and static assets; no server runtime is required.

The current post bodies use lorem ipsum. The gallery currently uses externally hosted reference images.
