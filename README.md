# Aleksandra Chargeishvili — portfolio website

A responsive, multi-page portfolio for GitHub Pages. The live site is plain HTML, CSS and JavaScript: no paid hosting, framework or build process is required.

## Publish on GitHub Pages

1. Create a public GitHub repository named `aleksandra-chargeishvili-portfolio`.
2. Unzip this package and upload its **contents** to the repository root. `index.html` must sit in the root, not inside another folder.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then click **Save**.
6. The site will appear at `https://YOUR-GITHUB-USERNAME.github.io/aleksandra-chargeishvili-portfolio/`.

## Recommended repository details

**Description**

`Portfolio of Amsterdam-based artist, designer and creative producer Aleksandra Chargeishvili: films, objects, installations, websites, publications and public work.`

**Topics**

`artist-portfolio` · `creative-production` · `industrial-design` · `interaction-design` · `editorial-design` · `installation-art` · `amsterdam` · `portfolio`

## Structure

- `index.html` — homepage;
- `projects/` — fourteen individual project pages;
- `assets/media/` — optimised WebP images and MP4 clips;
- `styles.css` — responsive design system;
- `script.js` — hover previews, date and video behaviour;
- `favicon.svg` — browser icon;
- `robots.txt`, `sitemap.xml` and `llms.txt` — search and AI discovery files;
- `.nojekyll` — tells GitHub Pages to serve the files as-is;
- `scripts/build.mjs` — optional source script used to regenerate the HTML pages.

## One SEO edit after choosing a GitHub username

Search for `YOUR-GITHUB-USERNAME` in `sitemap.xml` and replace it with the real username. If you use another repository name, replace `aleksandra-chargeishvili-portfolio` there as well.

## Updating the site later

Project text and page data live in `scripts/build.mjs`. After editing it, run:

```bash
node scripts/build.mjs
```

To replace an image without changing the HTML, use the same filename in `assets/media/`. Keep images in WebP format and preferably below 500 KB.
