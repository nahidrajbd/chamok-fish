import { siteConfig } from '@/data/siteConfig';
import { products } from '@/data/products';
import { guides } from '@/data/guides';

export interface RouteMeta {
    title: string;
    description: string;
    /** og:type for the page (website, product, profile...). */
    type?: string;
    /** File stem of the product image in src/images, used by the prerender script to resolve the built asset URL for og:image. */
    imageStem?: string;
}

/**
 * Per-route title and description for the build-time prerender.
 * These mirror the <Seo> props in each page component; keep the two in step.
 * Product routes are generated from products.ts, mirroring ProductDetailPage.
 */
export const routesMeta: Record<string, RouteMeta> = {
    '/': {
        title: siteConfig.seo.defaultTitle,
        description: siteConfig.seo.defaultDescription,
    },
    '/about': {
        title: 'আমাদের সম্পর্কে | About Chamok Fish Feed, Best Padma Agro Feeds',
        description: 'বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের পূর্ণ পরিচয় — প্রতিষ্ঠাতা, কারখানা, ব্র্যান্ড ইতিহাস এবং আমাদের দলের সাথে পরিচিত হন।',
    },
    '/products': {
        title: 'ফিশ ফিড পণ্যসমূহ | Fish Feed Products, Chamok Fish Feed',
        description: 'চমক ও বায়োটেক ব্র্যান্ডের ভাসমান ও ডুবন্ত মৎস্য খাদ্য। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি।',
    },
    '/ceo': {
        title: 'মো. খায়রুল বাশার | Founder of Chamok Fish Feed',
        description: 'মো. খায়রুল বাশার — বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক। তাঁর জীবনী, উদ্যোক্তা যাত্রা এবং দর্শন সম্পর্কে জানুন।',
        type: 'profile',
    },
    '/dealers': {
        title: 'ডিলার নেটওয়ার্ক | Fish Feed Dealers in Rajshahi, Chamok Fish Feed',
        description: 'চমক ফিশ ফিডের রাজশাহী বিভাগের ডিলার তালিকা। আপনার কাছের ডিলার খুঁজুন অথবা নতুন ডিলার হওয়ার জন্য WhatsApp-এ যোগাযোগ করুন।',
    },
    '/contact': {
        title: 'যোগাযোগ | Contact Chamok Fish Feed, Rajshahi',
        description: 'চমক ফিশ ফিডের সাথে যোগাযোগ করুন। ফোন, WhatsApp বা ফর্মের মাধ্যমে পণ্যের তথ্য, অর্ডার ও ডিলার সম্পর্কে জানুন।',
    },
    '/dealer-offer': {
        title: 'ডিলার আবেদন | Become a Fish Feed Dealer, Chamok Fish Feed',
        description: 'চমক ফিশ ফিডের ডিলার হওয়ার জন্য আবেদন করুন। আপনার ব্যক্তিগত ও ব্যবসায়িক তথ্য পূরণ করে সাবমিট করুন।',
    },
    '/faq': {
        title: 'সাধারণ জিজ্ঞাসা | Fish Feed FAQ, Chamok Fish Feed',
        description: 'FCR, ভাসমান ও ডুবন্ত ফিড, খাবারের পরিমাণ, দাম, ডিলার ও ফিড সংরক্ষণ নিয়ে চাষিদের সাধারণ প্রশ্নের উত্তর।',
    },
    '/guides': {
        title: 'মাছ চাষ গাইড | Fish Farming Guides, Chamok Fish Feed',
        description: 'FCR হিসাব, ভাসমান ও ডুবন্ত ফিড, খাবারের পরিমাণ, পোনার ফিড, সংরক্ষণ ও পিলেট সাইজ নিয়ে সহজ গাইড।',
    },
};

for (const g of guides) {
    routesMeta[`/guides/${g.slug}`] = {
        title: `${g.title} | চমক ফিশ ফিড`,
        description: g.cardLine,
        type: 'article',
    };
}

const imageStems: Record<string, string> = {
    'chamok-carp-grower': 'chamok-carp-grower',
    'chamok-floating-feed': 'chamok-vasoman-feed',
    'biotech-nursery-carp-care': 'biotech-carp-mash',
    'biotech-floating-grower': 'biotech-vasoman-grower',
    'biotech-carp-grower': 'biotech-carp-grower',
};

for (const p of products) {
    routesMeta[`/products/${p.id}`] = {
        title: `${p.nameBn} | ${p.nameEn} - Chamok Fish Feed`,
        description: `${p.nameBn}: ${p.descriptionBn}`,
        type: 'product',
        imageStem: imageStems[p.id],
    };
}

/** All public routes that get prerendered (the sitemap set). */
export const prerenderRoutes = Object.keys(routesMeta);
