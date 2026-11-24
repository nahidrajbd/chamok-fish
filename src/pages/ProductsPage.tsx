import Seo from '@/components/Seo';
import { itemListJsonLd } from '@/data/jsonLd';
import { useState } from 'react';
import { Download } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

type Brand = 'all' | 'chamok' | 'biotech';

const tabs: { value: Brand; label: string }[] = [
    { value: 'all', label: 'সব পণ্য' },
    { value: 'chamok', label: 'চমক ব্র্যান্ড' },
    { value: 'biotech', label: 'বায়োটেক ব্র্যান্ড' },
];

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState<Brand>('all');
    const filtered = activeTab === 'all' ? products : products.filter(p => p.brand === activeTab);

    return (
        <>
            <Seo title="ফিশ ফিড পণ্যসমূহ | Fish Feed Products, Chamok Fish Feed" description="চমক ও বায়োটেক ব্র্যান্ডের ভাসমান ও ডুবন্ত মৎস্য খাদ্য। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি।" path="/products" jsonLd={itemListJsonLd} />

            {/* Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-5 mx-auto" />
                    <h1 className="text-white font-semibold mb-4 font-[family-name:var(--font-bengali)]">পণ্যসমূহ</h1>
                    <p className="text-white/70 max-w-xl mx-auto font-[family-name:var(--font-bengali)]">
                        চমক ও বায়োটেক, দুটি ব্র্যান্ডের মোট ৫টি মৎস্য খাদ্য পণ্য।
                    </p>
                </div>
            </section>

            {/* Tab Switcher */}
            <section className="bg-panelBg border-b border-navy/10 sticky top-16 lg:top-20 z-30">
                <div className="container-custom py-4 flex items-center gap-2 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors font-[family-name:var(--font-bengali)] ${activeTab === tab.value
                                ? 'bg-navy text-white'
                                : 'bg-white text-bodyGray hover:text-navy border border-navy/10'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Grid */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filtered.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Download Strip */}
            <section className="py-12 bg-white border-t border-navy/10">
                <div className="container-custom text-center">
                    <p className="text-navy font-semibold text-lg mb-2 font-[family-name:var(--font-bengali)]">
                        সম্পূর্ণ পণ্য তালিকা ডাউনলোড করুন
                    </p>
                    <p className="text-bodyGray text-sm mb-5 font-[family-name:var(--font-bengali)]">
                        আমাদের PDF ক্যাটালগে সব পণ্যের বিস্তারিত তথ্য পাবেন।
                    </p>
                    <a
                        href="/catalog.pdf"
                        download
                        className="btn-teal inline-flex font-[family-name:var(--font-bengali)]"
                    >
                        <Download className="w-5 h-5" />
                        ক্যাটালগ ডাউনলোড করুন (PDF)
                    </a>
                </div>
            </section>
        </>
    );
}
