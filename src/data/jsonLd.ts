import { siteConfig } from '@/data/siteConfig';
import type { ProductSpec } from '@/data/products';
import { products } from '@/data/products';
import { faqs } from '@/data/faq';
import { guides } from '@/data/guides';

const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.pinterest,
    'https://www.tiktok.com/@chamakfishfeed',
    'https://www.youtube.com/@ChamakFishFeed',
    'https://x.com/ChamakFishFeed',
];

/** Organization + LocalBusiness + WebSite graph for the homepage. Facts come from siteConfig and the Contact page hours. */
export const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${siteConfig.siteUrl}/#organization`,
            name: 'Chamok Fish Feed',
            alternateName: 'চমক ফিশ ফিড',
            url: siteConfig.siteUrl,
            logo: `${siteConfig.siteUrl}/logo.svg`,
            description: siteConfig.seo.defaultDescription,
            email: siteConfig.email,
            telephone: '+8801741973426',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+8801741973426',
                email: siteConfig.email,
                contactType: 'sales',
                areaServed: 'BD',
                availableLanguage: ['bn', 'en'],
            },
            parentOrganization: {
                '@type': 'Organization',
                name: 'Best Padma Agro Feeds',
            },
            founder: {
                '@type': 'Person',
                name: 'Md. Khairul Bashar',
                jobTitle: 'Founder and Managing Director',
            },
            sameAs,
        },
        {
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.siteUrl}/#localbusiness`,
            name: 'Chamok Fish Feed',
            alternateName: 'চমক ফিশ ফিড',
            url: siteConfig.siteUrl,
            image: siteConfig.seo.ogImage,
            email: siteConfig.email,
            telephone: '+8801741973426',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Chini Patti Goli, Boalia',
                addressLocality: 'Rajshahi',
                addressRegion: 'Rajshahi',
                addressCountry: 'BD',
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                    opens: '08:00',
                    closes: '20:00',
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: 'Friday',
                    opens: '10:00',
                    closes: '14:00',
                },
            ],
            sameAs,
        },
        {
            '@type': 'WebSite',
            '@id': `${siteConfig.siteUrl}/#website`,
            url: siteConfig.siteUrl,
            name: 'Chamok Fish Feed',
            publisher: { '@id': `${siteConfig.siteUrl}/#organization` },
        },
    ],
};

const feedTypeEn: Record<ProductSpec['feedType'], string> = {
    floating: 'Floating',
    sinking: 'Sinking',
    mash: 'Mash',
};

/** Spec rows for Product additionalProperty, built only from data already in products.ts. */
function specProperties(product: ProductSpec) {
    const props: { '@type': string; name: string; value: string }[] = [];
    const add = (name: string, value: string) => props.push({ '@type': 'PropertyValue', name, value });
    if (product.protein.general) add('Protein', `${product.protein.general}%`);
    if (product.protein.tilapia) add('Protein (Tilapia)', `${product.protein.tilapia}%`);
    if (product.protein.carp) add('Protein (Carp)', `${product.protein.carp}%`);
    if (product.protein.pangas) add('Protein (Pangas)', `${product.protein.pangas}%`);
    if (product.protein.premium) add('Protein (Premium)', `${product.protein.premium}%`);
    if (product.protein.economy) add('Protein (Economy)', `${product.protein.economy}%`);
    add('Fat', `${product.fat}%`);
    add('Moisture (max)', `${product.moisture}%`);
    add('Pack size', `${product.packKg} kg`);
    if (product.pelletSizeMm) add('Pellet size', `${product.pelletSizeMm} mm`);
    if (product.fiber) add('Fiber', `${product.fiber}%`);
    if (product.carbs) add('Carbohydrates', `${product.carbs}%`);
    if (product.ash) add('Ash', `${product.ash}%`);
    if (product.energy) add('Energy', product.energy);
    add('Feed type', feedTypeEn[product.feedType]);
    return props;
}

/** Product schema for a product detail page. No offers block: the site publishes no prices. */
export function productJsonLd(product: ProductSpec) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': `${siteConfig.siteUrl}/products/${product.id}#product`,
        url: `${siteConfig.siteUrl}/products/${product.id}`,
        name: `${product.nameBn} (${product.nameEn})`,
        description: product.descriptionBn,
        image: `${siteConfig.siteUrl}${product.image}`,
        brand: {
            '@type': 'Brand',
            name: product.brand === 'chamok' ? 'Chamok' : 'Biotech',
        },
        manufacturer: { '@id': `${siteConfig.siteUrl}/#organization` },
        category: 'Fish Feed',
        additionalProperty: specProperties(product),
    };
}

/** ItemList schema for the /products listing page. */
export const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chamok Fish Feed Products',
    itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${p.nameBn} (${p.nameEn})`,
        url: `${siteConfig.siteUrl}/products/${p.id}`,
    })),
};

/** FAQPage schema for /faq, built from the same data the page renders. */
export const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
};

/** ItemList schema for the /guides listing page. */
export const guidesItemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chamok Fish Feed Guides',
    itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: `${siteConfig.siteUrl}/guides/${g.slug}`,
    })),
};

/** Breadcrumb schema: pass [name, path] pairs in order. */
export function breadcrumbJsonLd(items: [string, string][]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, path], i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name,
            item: path === '/' ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`,
        })),
    };
}
