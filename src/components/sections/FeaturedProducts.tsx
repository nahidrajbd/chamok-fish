import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, ProductSpec } from '@/data/products';

// Show the 2 chamok featured products on the homepage
const getHomePageProducts = () => {
    const targetIds = ['chamok-carp-grower', 'chamok-floating-feed'];
    return products.filter(p => targetIds.includes(p.id));
};

// Specs are set like the printed label on a feed sack: label left, value right,
// hairline rules between rows. This is the homepage's signature detail.
const SpecRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
        <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{label}</span>
        <span className="text-navy font-semibold tabular-nums font-[family-name:var(--font-bengali)]">{value}</span>
    </div>
);

const HorizontalProductCard = ({ product }: { product: ProductSpec }) => {
    const protein = product.protein.general || product.protein.tilapia || product.protein.carp || 25;
    return (
        <div className="bg-white rounded-xl border border-navy/10 overflow-hidden grid grid-cols-1 md:grid-cols-5 h-full">
            {/* Photo */}
            <div className="md:col-span-2 relative h-64 md:h-auto bg-pageBg">
                <img
                    src={product.image}
                    alt={product.nameBn}
                    className="w-full h-full object-contain p-6"
                    loading="lazy"
                />
            </div>

            {/* Information */}
            <div className="md:col-span-3 p-6 flex flex-col justify-center">
                <p className="text-teal text-sm font-medium mb-1 font-[family-name:var(--font-bengali)]">
                    {product.brand === 'chamok' ? 'চমক' : 'বায়োটেক'}
                </p>
                <h3 className="text-navy font-semibold text-2xl mb-2 font-[family-name:var(--font-bengali)]">{product.nameBn}</h3>
                <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                    {product.descriptionBn}
                </p>

                {/* Bag label specs */}
                <div className="mt-5 border-t border-navy/10 divide-y divide-navy/10">
                    <SpecRow label="প্রোটিন" value={`${protein}%`} />
                    <SpecRow label="ফ্যাট" value={`${product.fat}%`} />
                    <SpecRow label="প্যাকিং" value={`${product.packKg} কেজি`} />
                    <SpecRow
                        label="ফিড টাইপ"
                        value={product.feedType === 'floating' ? 'ভাসমান' : product.feedType === 'sinking' ? 'ডুবন্ত' : 'ম্যাশ'}
                    />
                </div>

                <Link to="/contact" className="btn-teal inline-flex justify-center w-full sm:w-auto mt-6 font-[family-name:var(--font-bengali)]">
                    অর্ডার করতে যোগাযোগ করুন
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default function FeaturedProducts() {
    const productsToShow = getHomePageProducts();

    return (
        <section className="section-padding bg-pageBg">
            <div className="container-custom">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                        <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">জনপ্রিয় পণ্যসমূহ</h2>
                    </div>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-teal font-semibold text-sm whitespace-nowrap hover:text-[#236f6f] transition-colors font-[family-name:var(--font-bengali)]"
                    >
                        সব পণ্য দেখুন
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {productsToShow.map((product) => (
                        <HorizontalProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
