// src/data/products.ts
import chamokCarpGrowerImg from '@/images/chamok-carp-grower.jpg';
import chamokVasomanFeedImg from '@/images/chamok-vasoman-feed.jpg';
import biotechCarpMashImg from '@/images/biotech-carp-mash.jpg';
import biotechVasomanGrowerImg from '@/images/biotech-vasoman-grower.jpg';
import biotechCarpGrowerImg from '@/images/biotech-carp-grower.jpg';

export type FishType = "tilapia" | "carp" | "pangas" | "nursery";
export type FeedType = "floating" | "sinking" | "mash";
export type Brand = "chamok" | "biotech";

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
        id: "chamok-carp-grower",
        brand: "chamok",
        nameBn: "চমক কার্প গ্রোয়ার",
        nameEn: "Chamok Carp Grower",
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
        image: chamokCarpGrowerImg,
        featured: true,
    },
    {
        id: "chamok-floating-feed",
        brand: "chamok",
        nameBn: "চমক ভাসমান ফিড (Oil Coated)",
        nameEn: "Chamok Floating Feed (Oil Coated)",
        descriptionBn:
            "তেলাপিয়া, কার্প এবং পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি ওয়েল কোটেড ভাসমান ফিড। সঠিক ব্যবস্থাপনায় ভালো FCR পেতে সাহায্য করে।",
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
            "সঠিক ব্যবস্থাপনায় ভালো FCR পেতে সাহায্য করে",
        ],
        suitableFor: ["tilapia", "carp", "pangas"],
        image: chamokVasomanFeedImg,
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
        image: biotechCarpMashImg,
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
        image: biotechVasomanGrowerImg,
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
        image: biotechCarpGrowerImg,
    },
];

export const chamokProducts = products.filter((p) => p.brand === "chamok");
export const biotechProducts = products.filter((p) => p.brand === "biotech");
export const featuredProducts = products.filter((p) => p.featured);
