import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { routesMeta, prerenderRoutes, type RouteMeta } from '@/data/routesMeta';

export { prerenderRoutes as routes };
import { organizationJsonLd, productJsonLd, breadcrumbJsonLd, itemListJsonLd, faqJsonLd, guidesItemListJsonLd } from '@/data/jsonLd';
import { products } from '@/data/products';
import { guides } from '@/data/guides';

/** Render one route to static HTML for the build-time prerender. */
export function render(url: string): string {
    return renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </React.StrictMode>
    );
}

/** Route meta (title, description, og type, product image stem) for the prerender script. */
export function metaFor(url: string): RouteMeta | undefined {
    return routesMeta[url];
}

/**
 * JSON-LD schemas for a route, mirroring what the page components pass to <Seo>
 * at runtime, so the prerendered HTML and the client-rendered DOM agree.
 */
export function schemasFor(url: string): object[] {
    if (url === '/') return [organizationJsonLd];
    if (url === '/products') return [itemListJsonLd];
    if (url === '/faq') return [faqJsonLd];
    if (url === '/guides') return [guidesItemListJsonLd];
    if (url.startsWith('/guides/')) {
        const slug = url.slice('/guides/'.length);
        const guide = guides.find((g) => g.slug === slug);
        if (guide) {
            return [breadcrumbJsonLd([['হোম', '/'], ['গাইড', '/guides'], [guide.title, url]])];
        }
    }
    if (url.startsWith('/products/')) {
        const id = url.slice('/products/'.length);
        const product = products.find((p) => p.id === id);
        if (product) {
            return [
                productJsonLd(product),
                breadcrumbJsonLd([['হোম', '/'], ['পণ্যসমূহ', '/products'], [product.nameBn, url]]),
            ];
        }
    }
    return [];
}
