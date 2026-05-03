# Care Toolkit

A free online resource of tools for UK families navigating elderly care. Pure static HTML — no build step, no framework, no dependencies.

## Project structure

```
caretoolkit/
├── index.html                          # Homepage
├── care-home-cost-calculator/
│   └── index.html                      # The calculator
├── about/index.html
├── privacy/index.html
├── contact/index.html
├── 404.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/shared.css                  # Design system used by every page
    └── js/shared.js                    # Cookie banner + AdSense gating
```

## Local preview

Open any `index.html` in your browser, or run a local server:

```bash
cd caretoolkit
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding a new tool

1. Create a folder: `mkdir my-new-tool`
2. Copy the structure of `care-home-cost-calculator/index.html`
3. Update title, description, canonical URL, schema.org JSON
4. Add the URL to `sitemap.xml`
5. Add a card link on the homepage `index.html`

## Going live (Cloudflare Pages)

See DEPLOY.md for step-by-step instructions.

## Switching on AdSense

In `assets/js/shared.js`:
1. Uncomment the Google Analytics block; replace `G-XXXXXXXXXX` with your real GA4 ID
2. Uncomment the AdSense block; replace `ca-pub-XXXXXXXXXXXXXXXX` with your real publisher ID
3. In each page, replace the `<div class="ad-slot">` placeholders with real `<ins class="adsbygoogle">` units from your AdSense dashboard

Don't do this until you've been approved by AdSense — applying with the script tag already in place is fine, but only switch on real ad units once approved.
