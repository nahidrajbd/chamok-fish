// src/data/products.ts
export type FishType = "tilapia" | "carp" | "pangas" | "nursery";
export type FeedType = "floating" | "sinking" | "mash";
export type Brand = "chamak" | "biotech";

export interface ProductSpec {
    id: string;
    brand: Brand;
    nameBn: string;
    nameEn: string;
    descriptionBn: string;
    feedType: FeedType;
    pelletSizeMm: number | null;
    packKg: number;
    protein: {
        tilapia?: number;
        carp?: number;
        pangas?: number;
        general?: number;
        premium?: number;
        economy?: number;
    };
    fat: number;
    moisture: number;
    fiber?: number;
    carbs?: number;
    ash?: number;
    energy?: string;
    features: string[];
    suitableFor: FishType[];
    image: string;
    featured?: boolean;
}

export const products: ProductSpec[] = [
    {
        id: "chamak-carp-grower",
        brand: "chamak",
        nameBn: "চমক কার্প গ্রোয়ার",
        nameEn: "Chamak Carp Grower",
        descriptionBn:
            "কার্প জাতীয় মাছের দ্রুত বৃদ্ধির জন্য বিশেষভাবে তৈরি ডুবন্ত পিলেট ফিড। উচ্চ প্রোটিন ও শক্তি সমৃদ্ধ।",
        feedType: "sinking",
        pelletSizeMm: 3.5,
        packKg: 25,
        protein: {
            carp: 24,
            tilapia: 28,
        },
        fat: 6,
        moisture: 11,
        energy: "২৯০০–৩০০০ কিলো ক্যালোরি/কেজি",
        features: [
            "ডুবন্ত পিলেট",
            "৩.৫ মি.মি. পিলেট সাইজ",
            "উচ্চ শক্তিসম্পন্ন",
            "কার্প ও তেলাপিয়ার জন্য",
        ],
        suitableFor: ["carp", "tilapia"],
        image: "/images/products/chamak-carp-grower.jpg",
        featured: true,
    },
    {
        id: "chamak-floating-feed",
        brand: "chamak",
        nameBn: "চমক ভাসমান ফিড (Oil Coated)",
        nameEn: "Chamak Floating Feed (Oil Coated)",
        descriptionBn:
            "তেলাপিয়া, কার্প এবং পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি ওয়েল কোটেড ভাসমান ফিড। উচ্চ FCR নিশ্চিত করে।",
        feedType: "floating",
        pelletSizeMm: null,
        packKg: 25,
        protein: {
            tilapia: 30,
            pangas: 28,
            carp: 23,
        },
        fat: 5,
        moisture: 11,
        fiber: 8,
        features: [
            "ওয়েল কোটেড",
            "ভাসমান ফিড",
            "খাদ্যের অপচয় নেই",
            "উচ্চ FCR নিশ্চিত",
        ],
        suitableFor: ["tilapia", "carp", "pangas"],
        image: "/images/products/chamak-floating-feed.jpg",
        featured: true,
    },
    {
        id: "biotech-nursery-carp-care",
        brand: "biotech",
        nameBn: "বায়োটেক নার্সারি / কার্প কেয়ার",
        nameEn: "Biotech Nursery / Carp Care",
        descriptionBn:
            "রেণু বা ছোট মাছের প্রাথমিক পর্যায়ের জন্য বিশেষভাবে তৈরি ম্যাশ ফিড। সর্বোচ্চ প্রোটিন ও পুষ্টিগুণ।",
        feedType: "mash",
        pelletSizeMm: null,
        packKg: 20,
        protein: {
            general: 36,
        },
        fat: 7,
        moisture: 11,
        carbs: 26,
        ash: 16,
        features: [
            "ম্যাশ ফিড",
            "সর্বোচ্চ প্রোটিন ৩৬%",
            "রেণু ও ছোট মাছের জন্য",
            "সহজ হজমযোগ্য",
        ],
        suitableFor: ["carp", "nursery"],
        image: "/images/products/biotech-nursery.jpg",
        featured: true,
    },
    {
        id: "biotech-floating-grower",
        brand: "biotech",
        nameBn: "বায়োটেক ভাসমান গ্রোয়ার",
        nameEn: "Biotech Floating Grower",
        descriptionBn:
            "তেলাপিয়া, কার্প ও পাঙ্গাস মাছের জন্য বিভিন্ন সাইজের ভাসমান ফিড। মাছভেদে সঠিক প্রোটিন নিশ্চিত।",
        feedType: "floating",
        pelletSizeMm: 3,
        packKg: 20,
        protein: {
            tilapia: 30,
            carp: 25,
            pangas: 23,
        },
        fat: 5,
        moisture: 11,
        features: [
            "ভাসমান ফিড",
            "৩ মি.মি. (পাঙ্গাস: ৪ মি.মি.)",
            "তিন প্রজাতির জন্য",
            "২৩%–৩০% প্রোটিন",
        ],
        suitableFor: ["tilapia", "carp", "pangas"],
        image: "/images/products/biotech-floating-grower.jpg",
    },
    {
        id: "biotech-carp-grower",
        brand: "biotech",
        nameBn: "বায়োটেক কার্প গ্রোয়ার",
        nameEn: "Biotech Carp Grower",
        descriptionBn:
            "কার্প মাছের জন্য প্রিমিয়াম ও ইকোনোমি দুটি ভ্যারিয়েন্টে পাওয়া যায়। সাশ্রয়ী মূল্যে সর্বোচ্চ পুষ্টিগুণ।",
        feedType: "sinking",
        pelletSizeMm: 3.5,
        packKg: 25,
        protein: {
            premium: 24,
            economy: 22,
        },
        fat: 5,
        moisture: 11,
        features: [
            "ডুবন্ত ফিড",
            "প্রিমিয়াম: ২৪% প্রোটিন",
            "ইকোনোমি: ২২% প্রোটিন",
            "সাশ্রয়ী মূল্যে সেরা মান",
        ],
        suitableFor: ["carp"],
        image: "/images/products/biotech-carp-grower.jpg",
    },
];

export const chamakProducts = products.filter((p) => p.brand === "chamak");
export const biotechProducts = products.filter((p) => p.brand === "biotech");
export const featuredProducts = products.filter((p) => p.featured);
