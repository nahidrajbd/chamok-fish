import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import CTAStrip from "@/components/sections/CTAStrip";
import { Download, Package } from "lucide-react";

export const metadata: Metadata = {
    title: "পণ্যসমূহ — চমক ও বায়োটেক ফিশ ফিড",
    description:
        "চমক ও বায়োটেক ব্র্যান্ডের সম্পূর্ণ পণ্য তালিকা। কার্প গ্রোয়ার, ভাসমান ফিড, নার্সারি ফিড সহ আরও পণ্য। পুষ্টি বিবরণ ও অর্ডার তথ্য।",
};

const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "চমক ও বায়োটেক ফিশ ফিড পণ্য তালিকা",
    description: "Best Padma Agro Feeds — মৎস্য খাদ্য পণ্যসমূহ",
    numberOfItems: 5,
};

export default function ProductsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />

            {/* Page Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Package className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">
                            আমাদের পণ্য
                        </span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                        মৎস্য খাদ্য পণ্যসমূহ
                    </h1>
                    <p className="text-white/65 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-bengali)]">
                        চমক ও বায়োটেক ব্র্যান্ডের অধীনে কার্প, তেলাপিয়া ও পাঙ্গাস মাছের
                        জন্য বিশেষভাবে তৈরি ৫টি উচ্চমানের মৎস্য খাদ্য পণ্য।
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <ProductGrid />
                </div>
            </section>

            {/* PDF Download Strip */}
            <section className="py-12 bg-mist/60">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-cardBg rounded-[12px] p-8 border border-border/40 shadow-sm">
                        <div>
                            <h3 className="text-navy font-bold text-lg mb-2 font-[family-name:var(--font-bengali)]">
                                সম্পূর্ণ পণ্য তালিকা ডাউনলোড করুন
                            </h3>
                            <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                                বিস্তারিত পুষ্টি তথ্য ও মূল্য তালিকা সহ PDF ডাউনলোড করুন।
                            </p>
                        </div>
                        <a
                            href="/chamak-product-catalog.pdf"
                            download
                            className="btn-outline-navy whitespace-nowrap font-[family-name:var(--font-bengali)]"
                        >
                            <Download className="w-5 h-5" />
                            PDF ডাউনলোড
                        </a>
                    </div>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
