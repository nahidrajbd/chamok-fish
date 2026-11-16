import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/siteConfig';

interface SeoProps {
    title: string;
    description: string;
    /** Route path, e.g. "/" or "/products". Canonical and og:url are built from it. */
    path: string;
    /** Absolute og:image URL. Defaults to the site-wide og image. */
    image?: string;
    type?: string;
    noindex?: boolean;
    jsonLd?: object | object[];
}

/**
 * One place for every page's SEO tags: title, meta description, canonical,
 * Open Graph, Twitter card and optional JSON-LD structured data.
 */
export default function Seo({ title, description, path, image, type = 'website', noindex = false, jsonLd }: SeoProps) {
    const url = path === '/' ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`;
    const img = image ?? siteConfig.seo.ogImage;
    const scripts = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex, follow" />}
            <link rel="canonical" href={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={img} />
            <meta property="og:site_name" content="Chamok Fish Feed" />
            <meta property="og:locale" content="bn_BD" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />
            {scripts.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
