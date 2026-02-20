import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Package, TrendingUp, Droplets, Package2 } from 'lucide-react';
import { products, ProductSpec } from '@/data/products';

// Show the 2 chamak featured products on the homepage
const getHomePageProducts = () => {
    const targetIds = ['chamak-carp-grower', 'chamak-floating-feed'];
    return products.filter(p => targetIds.includes(p.id));
};

const HorizontalProductCard = ({ product }: { product: ProductSpec }) => {
    return (
        <div className="bg-cardBg rounded-card border border-border/40 overflow-hidden card-hover shadow-sm grid grid-cols-1 md:grid-cols-5 h-full">
            {/* Column 1: Photo (Portrait) - spans 2 cols on desktop */}
            <div className="md:col-span-2 relative h-64 md:h-auto bg-mist/20">
                <img
                    src={product.image}
                    alt={product.nameBn}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full font-[family-name:var(--font-bengali)]">
                        {product.brand === 'chamak' ? 'চমক' : 'বায়োটেক'}
                    </span>
                </div>
            </div>

            {/* Column 2: Product Information - spans 3 cols on desktop */}
            <div className="md:col-span-3 p-6 flex flex-col justify-center">
                <div className="mb-4">
                    <h3 className="text-navy font-bold text-2xl mb-2 font-[family-name:var(--font-bengali)]">{product.nameBn}</h3>
                    <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                        {product.descriptionBn}
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-pageBg rounded-lg p-3 border border-border/30">
                        <span className="text-bodyGray text-xs flex items-center gap-1.5 mb-1 font-[family-name:var(--font-bengali)]">
                            <TrendingUp className="w-3.5 h-3.5 text-teal" /> প্রোটিন
                        </span>
                        <span className="text-teal font-bold text-lg">
                            {product.protein.general || product.protein.tilapia || product.protein.carp || 25}%
                        </span>
                    </div>
                    <div className="bg-pageBg rounded-lg p-3 border border-border/30">
                        <span className="text-bodyGray text-xs flex items-center gap-1.5 mb-1 font-[family-name:var(--font-bengali)]">
                            <Droplets className="w-3.5 h-3.5 text-steel" /> ফ্যাট
                        </span>
                        <span className="text-steel font-bold text-lg">{product.fat}%</span>
                    </div>
                    <div className="bg-pageBg rounded-lg p-3 border border-border/30">
                        <span className="text-bodyGray text-xs flex items-center gap-1.5 mb-1 font-[family-name:var(--font-bengali)]">
                            <Package2 className="w-3.5 h-3.5 text-bodyGray" /> প্যাকিং
                        </span>
                        <span className="text-navy font-bold text-lg font-[family-name:var(--font-bengali)]">{product.packKg} কেজি</span>
                    </div>
                    <div className="bg-pageBg rounded-lg p-3 border border-border/30">
                        <span className="text-bodyGray text-xs flex items-center gap-1.5 mb-1 font-[family-name:var(--font-bengali)]">
                            ফিড টাইপ
                        </span>
                        <span className="text-navy font-bold text-lg font-[family-name:var(--font-bengali)]">
                            {product.feedType === 'floating' ? 'ভাসমান' : product.feedType === 'sinking' ? 'ডুবন্ত' : 'ম্যাশ'}
                        </span>
                    </div>
                </div>

                <Link to="/contact" className="btn-teal inline-flex justify-center w-full sm:w-auto font-[family-name:var(--font-bengali)]">
                    অর্ডার করতে যোগাযোগ করুন
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default function FeaturedProducts() {
    const productsToShow = getHomePageProducts();

    return (
        <section className="section-padding bg-mist/40">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-3 font-[family-name:var(--font-bengali)]">
                            <Package className="w-4 h-4" />
                            আমাদের পণ্য
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">জনপ্রিয় পণ্যসমূহ</h2>
                    </div>
                    <Link to="/products" className="btn-teal-outline text-sm whitespace-nowrap font-[family-name:var(--font-bengali)]">
                        সব পণ্য দেখুন
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {productsToShow.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <HorizontalProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
