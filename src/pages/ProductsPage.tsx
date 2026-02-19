import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Package } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';

type Brand = 'all' | 'chamak' | 'biotech';

const tabs: { value: Brand; label: string }[] = [
    { value: 'all', label: 'সব পণ্য' },
    { value: 'chamak', label: 'চমক ব্র্যান্ড' },
    { value: 'biotech', label: 'বায়োটেক ব্র্যান্ড' },
];

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState<Brand>('all');
    const filtered = activeTab === 'all' ? products : products.filter(p => p.brand === activeTab);

    return (
        <>
            <Helmet>
                <title>পণ্যসমূহ — চমক ফিশ ফিড রাজশাহী</title>
                <meta name="description" content="চমক ও বায়োটেক ব্র্যান্ডের ভাসমান ও ডুবন্ত মৎস্য খাদ্য। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি।" />
                <link rel="canonical" href={`${siteConfig.siteUrl}/products`} />
            </Helmet>

            {/* Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Package className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">আমাদের পণ্য</span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">পণ্যসমূহ</h1>
                    <p className="text-white/65 max-w-xl mx-auto font-[family-name:var(--font-bengali)]">
                        দুটি শক্তিশালী ব্র্যান্ডের আওতায় আমাদের ৫টি উন্নত মৎস্য খাদ্য পণ্য।
                    </p>
                </div>
            </section>

            {/* Tab Switcher */}
            <section className="bg-panelBg border-b border-border/40 sticky top-16 lg:top-20 z-30">
                <div className="container-custom py-4 flex items-center gap-2 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all font-[family-name:var(--font-bengali)] ${activeTab === tab.value
                                    ? 'bg-navy text-white shadow-sm'
                                    : 'bg-white text-bodyGray hover:bg-mist border border-border/40'
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
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* PDF Download Strip */}
            <section className="py-12 bg-mist/60 border-t border-border/30">
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
