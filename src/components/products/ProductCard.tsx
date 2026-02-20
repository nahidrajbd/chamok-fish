import { Link } from 'react-router-dom';
import { Package2, Droplets, TrendingUp, ArrowRight } from 'lucide-react';
import { ProductSpec } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: ProductSpec;
    className?: string;
}

const feedTypeLabels: Record<string, string> = {
    floating: 'ভাসমান',
    sinking: 'ডুবন্ত',
    mash: 'ম্যাশ',
};

const feedTypeBg: Record<string, string> = {
    floating: 'bg-teal border-teal text-white shadow-sm',
    sinking: 'bg-navy border-navy text-white shadow-sm',
    mash: 'bg-gold border-gold text-navy shadow-sm',
};

function getProteinDisplay(protein: ProductSpec['protein']): string {
    if (protein.general) return `${protein.general}%`;
    if (protein.premium && protein.economy) return `${protein.economy}%–${protein.premium}%`;
    const values: string[] = [];
    if (protein.tilapia) values.push(`তেলাপিয়া ${protein.tilapia}%`);
    if (protein.carp) values.push(`কার্প ${protein.carp}%`);
    if (protein.pangas) values.push(`পাঙ্গাস ${protein.pangas}%`);
    return values.join(', ');
}

const brandBadge: Record<string, string> = {
    chamak: 'bg-navy text-white',
    biotech: 'bg-teal text-white',
};

const brandLabel: Record<string, string> = {
    chamak: 'চমক',
    biotech: 'বায়োটেক',
};

export function ProductCard({ product, className }: ProductCardProps) {
    const proteinDisplay = getProteinDisplay(product.protein);

    return (
        <div className={cn('bg-cardBg rounded-card border border-border/40 overflow-hidden card-hover shadow-sm grid grid-cols-1 md:grid-cols-5 h-full', className)}>
            {/* Column 1: Photo — spans 2 of 5 cols on desktop */}
            <div className="md:col-span-2 relative h-56 md:h-auto bg-mist/20">
                <img
                    src={product.image}
                    alt={product.nameBn}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full font-[family-name:var(--font-bengali)] ${brandBadge[product.brand]}`}>
                        {brandLabel[product.brand]}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${feedTypeBg[product.feedType]} font-[family-name:var(--font-bengali)]`}>
                        {feedTypeLabels[product.feedType]}
                    </span>
                </div>
            </div>

            {/* Column 2: Info — spans 3 of 5 cols on desktop */}
            <div className="md:col-span-3 p-6 flex flex-col justify-center">
                <div className="mb-4">
                    <h3 className="text-navy font-bold text-xl mb-2 font-[family-name:var(--font-bengali)]">{product.nameBn}</h3>
                    <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                        {product.descriptionBn}
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-pageBg rounded-lg p-3 border border-border/30">
                        <span className="text-bodyGray text-xs flex items-center gap-1.5 mb-1 font-[family-name:var(--font-bengali)]">
                            <TrendingUp className="w-3.5 h-3.5 text-teal" /> প্রোটিন
                        </span>
                        <span className="text-teal font-bold text-lg">{proteinDisplay}</span>
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
                            {feedTypeLabels[product.feedType]}
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
}
