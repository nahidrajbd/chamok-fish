"use client";

import Link from "next/link";
import { Package2, Droplets, TrendingUp, ArrowRight } from "lucide-react";
import { ProductSpec } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: ProductSpec;
    className?: string;
}

const feedTypeLabels: Record<string, string> = {
    floating: "ভাসমান",
    sinking: "ডুবন্ত",
    mash: "ম্যাশ",
};

const feedTypeBg: Record<string, string> = {
    floating: "bg-teal/10 text-teal border-teal/20",
    sinking: "bg-steel/10 text-steel border-steel/20",
    mash: "bg-gold/10 text-gold border-gold/20",
};

function getProteinDisplay(protein: ProductSpec["protein"]): string {
    if (protein.general) return `${protein.general}%`;
    if (protein.premium && protein.economy)
        return `${protein.economy}%–${protein.premium}%`;
    const values = [];
    if (protein.tilapia) values.push(`তেলাপিয়া ${protein.tilapia}%`);
    if (protein.carp) values.push(`কার্প ${protein.carp}%`);
    if (protein.pangas) values.push(`পাঙ্গাস ${protein.pangas}%`);
    return values.join(", ");
}

const brandBadge: Record<string, string> = {
    chamak: "bg-navy text-white",
    biotech: "bg-teal text-white",
};

const brandLabel: Record<string, string> = {
    chamak: "চমক",
    biotech: "বায়োটেক",
};

export function ProductCard({ product, className }: ProductCardProps) {
    const proteinDisplay = getProteinDisplay(product.protein);

    return (
        <div
            className={cn(
                "bg-cardBg rounded-[12px] border border-border/40 overflow-hidden card-hover shadow-sm flex flex-col",
                className
            )}
        >
            {/* Image area */}
            <div className="relative h-44 bg-gradient-to-br from-mist to-cardSurf flex items-center justify-center overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: "radial-gradient(circle at 20% 50%, #83A5B3 1px, transparent 1px), radial-gradient(circle at 80% 50%, #83A5B3 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                    }} />
                </div>
                <div className="text-center z-10">
                    <div className="text-6xl mb-2">🐟</div>
                    <p className="text-dark/40 text-xs font-[family-name:var(--font-bengali)]">
                        {product.nameBn}
                    </p>
                </div>

                {/* Brand Badge */}
                <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${brandBadge[product.brand]} font-[family-name:var(--font-bengali)]`}
                >
                    {brandLabel[product.brand]}
                </span>

                {/* Feed Type Badge */}
                <span
                    className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border ${feedTypeBg[product.feedType]} font-[family-name:var(--font-bengali)]`}
                >
                    {feedTypeLabels[product.feedType]}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-navy font-bold text-base mb-1.5 font-[family-name:var(--font-bengali)]">
                    {product.nameBn}
                </h3>
                <p className="text-bodyGray text-xs leading-relaxed mb-4 font-[family-name:var(--font-bengali)]">
                    {product.descriptionBn}
                </p>

                {/* Nutrition Table */}
                <div className="bg-pageBg rounded-lg p-3.5 mb-4 border border-border/30 flex-1">
                    <p className="text-navy text-xs font-semibold mb-2.5 font-[family-name:var(--font-bengali)]">
                        পুষ্টি উপাদান
                    </p>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-bodyGray text-xs flex items-center gap-1.5 font-[family-name:var(--font-bengali)]">
                                <TrendingUp className="w-3 h-3 text-teal" /> প্রোটিন
                            </span>
                            <span className="text-teal text-xs font-semibold">{proteinDisplay}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-bodyGray text-xs flex items-center gap-1.5 font-[family-name:var(--font-bengali)]">
                                <Droplets className="w-3 h-3 text-steel" /> ফ্যাট
                            </span>
                            <span className="text-steel text-xs font-semibold">{product.fat}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-bodyGray text-xs flex items-center gap-1.5 font-[family-name:var(--font-bengali)]">
                                <Package2 className="w-3 h-3 text-bodyGray" /> আর্দ্রতা
                            </span>
                            <span className="text-bodyGray text-xs font-semibold">{product.moisture}%</span>
                        </div>
                        {product.pelletSizeMm && (
                            <div className="flex items-center justify-between">
                                <span className="text-bodyGray text-xs font-[family-name:var(--font-bengali)]">
                                    পিলেট সাইজ
                                </span>
                                <span className="text-bodyGray text-xs font-semibold">
                                    {product.pelletSizeMm} মি.মি.
                                </span>
                            </div>
                        )}
                        <div className="flex items-center justify-between">
                            <span className="text-bodyGray text-xs font-[family-name:var(--font-bengali)]">
                                প্যাকিং
                            </span>
                            <span className="text-bodyGray text-xs font-semibold">
                                {product.packKg} কেজি
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="btn-gold text-sm justify-center font-[family-name:var(--font-bengali)]"
                >
                    অর্ডার করুন
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
