// Pre-render every public route to static HTML after the Vite builds,
// so each page ships its own title, description, canonical, JSON-LD and
// body content in raw HTML for crawlers that do not run JavaScript.
// Also writes a real 404.html and refreshes the sitemap lastmod dates.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { render, metaFor, schemasFor, routes } from '../dist-server/entry-server.js';

const DIST = 'dist';
const ORIGIN = 'https://chamokfish.com';
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

// Built asset lookup by image stem, e.g. 'chamok-carp-grower' -> '/assets/chamok-carp-grower-AbCd1234.jpg'
const assetByStem = {};
for (const f of readdirSync(join(DIST, 'assets'))) {
    const m = f.match(/^(.*)-[A-Za-z0-9_-]{8,}\.(jpg|jpeg|png|webp)$/);
    if (m) assetByStem[m[1]] = `/assets/${f}`;
}

function pageHtml(url) {
    const meta = metaFor(url);
    if (!meta) throw new Error(`No route meta for ${url}`);
    const canonical = url === '/' ? `${ORIGIN}` : `${ORIGIN}${url}`;
    let html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
        .replace(/<meta name="description"\s+content="[\s\S]*?" \/>/, `<meta name="description" content="${meta.description}" />`)
        .replace(/<meta property="og:title" content="[\s\S]*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
        .replace(/<meta property="og:description" content="[\s\S]*?" \/>/, `<meta property="og:description" content="${meta.description}" />`)
        .replace(/<meta property="og:url" content="[\s\S]*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
        .replace(/<meta name="twitter:title" content="[\s\S]*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`)
        .replace(/<meta name="twitter:description" content="[\s\S]*?" \/>/, `<meta name="twitter:description" content="${meta.description}" />`)
        .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);

    if (meta.type) {
        html = html.replace(/<meta property="og:type" content="[\s\S]*?" \/>/, `<meta property="og:type" content="${meta.type}" />`);
    }
    if (meta.imageStem && assetByStem[meta.imageStem]) {
        const img = `${ORIGIN}${assetByStem[meta.imageStem]}`;
        html = html
            .replace(/<meta property="og:image" content="[\s\S]*?" \/>/, `<meta property="og:image" content="${img}" />`)
            .replace(/<meta name="twitter:image" content="[\s\S]*?" \/>/, `<meta name="twitter:image" content="${img}" />`);
    }

    const headExtras = [`<link rel="canonical" href="${canonical}" />`];
    for (const schema of schemasFor(url)) {
        headExtras.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    }
    html = html.replace('</head>', `${headExtras.join('\n  ')}\n</head>`);
    return html;
}

for (const url of routes) {
    // Flat .html files: Cloudflare Pages serves them at the extensionless
    // path with a 200, matching the site's slash-free canonicals. Directory
    // index files would 308-redirect every URL to a trailing-slash form.
    const out = url === '/' ? join(DIST, 'index.html') : join(DIST, `${url.replace(/^\//, '')}.html`);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, pageHtml(url));
    console.log('pre-rendered', url);
}

// 404 page (Cloudflare Pages serves 404.html with a real 404 status)
writeFileSync(
    join(DIST, '404.html'),
    `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">
<title>পেজটি পাওয়া যায়নি | চমক ফিশ ফিড</title>
<style>body{font-family:system-ui,sans-serif;background:#F8FAFA;color:#1A2433;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0}main{text-align:center;padding:24px;max-width:480px}.rule{width:32px;height:3px;background:#FFB703;margin:0 auto 16px}a{color:#2A8A8A;font-weight:600}</style>
</head>
<body>
<main>
<div class="rule"></div>
<h1>পেজটি পাওয়া যায়নি</h1>
<p>আপনি যে পেজটি খুঁজছেন তা এখানে নেই।</p>
<p><a href="/">হোম পেজে যান</a> · <a href="/products">পণ্যসমূহ দেখুন</a></p>
</main>
</body>
</html>
`
);
console.log('wrote 404.html');

// Sitemap with every public route and today's date as lastmod
const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((u) => `  <url><loc>${u === '/' ? ORIGIN : ORIGIN + u}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml');
