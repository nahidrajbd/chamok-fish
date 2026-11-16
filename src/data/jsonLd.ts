import { siteConfig } from '@/data/siteConfig';
import type { ProductSpec } from '@/data/products';

const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.pinterest,
    'https://www.tiktok.com/@chamakfishfeed',
    'https://www.youtube.com/@ChamakFishFeed',
    'https://x.com/ChamakFishFeed',
];

/** Organization + LocalBusiness graph for the homepage. Facts come from siteConfig and the Contact page hours. */
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
            email: siteConfig.email,
            telephone: '+8801741973426',
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
    ],
};

/** Product schema for a product detail page. No offers block: the site publishes no prices. */
export function productJsonLd(product: ProductSpec) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${product.nameBn} (${product.nameEn})`,
        description: product.descriptionBn,
        image: `${siteConfig.siteUrl}${product.image}`,
        brand: {
            '@type': 'Brand',
            name: product.brand === 'chamok' ? 'Chamok' : 'Biotech',
        },
        category: 'Fish Feed',
    };
}

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
