# Tsung-Shan (Kevin) Yang's website

This is a static site published by GitHub Pages. GitHub serves `index.html` from the `main` branch, so a commit to that branch updates the live site.

## Where to make changes

| What you want to change | File or folder |
| --- | --- |
| Biography, experience, education, publications, and links | `index.html` |
| Site-specific appearance | `css/main.css` |
| Profile and publication images | `images/` |
| CV and publication PDFs | `document/` |
| Animation setup | `scripts/main.js` |

## Common updates

### Add a publication

1. Put the PDF in `document/publication/` and its thumbnail in `images/`.
2. Copy an existing publication row in the appropriate section of `index.html`.
3. Update the PDF path, image path and alternative text, title, venue, year, and description.

### Update social links

Social links appear in both the introduction and footer. Update both entries in `index.html` so they stay consistent. External links that open a new tab should include `target="_blank" rel="noopener noreferrer"`.

## Local preview

Open `index.html` in a browser for a quick preview. Because this is a static site, no build step or package installation is required.
