import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

const brandLabel: Record<string, string> = {
    chamok: 'চমক',
    biotech: 'বায়োটেক',
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

// Specs are set like the printed label on a feed sack: label left, value right,
// hairline rules between rows. Same signature as the homepage cards.
const SpecRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
        <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)] shrink-0">{label}</span>
        <span className="text-navy font-semibold tabular-nums text-right font-[family-name:var(--font-bengali)]">{value}</span>
    </div>
);

export function ProductCard({ product, className }: ProductCardProps) {
    const proteinDisplay = getProteinDisplay(product.protein);

    return (
        <div className={cn('bg-white rounded-xl border border-navy/10 overflow-hidden grid grid-cols-1 md:grid-cols-5 h-full', className)}>
            {/* Photo */}
            <div className="md:col-span-2 relative h-56 md:h-auto bg-pageBg">
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
                    {brandLabel[product.brand]}
                </p>
                <h3 className="text-navy font-semibold text-2xl mb-2 font-[family-name:var(--font-bengali)]">{product.nameBn}</h3>
                <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                    {product.descriptionBn}
                </p>

                {/* Bag label specs */}
                <div className="mt-5 border-t border-navy/10 divide-y divide-navy/10">
                    <SpecRow label="প্রোটিন" value={proteinDisplay} />
                    <SpecRow label="ফ্যাট" value={`${product.fat}%`} />
                    <SpecRow label="প্যাকিং" value={`${product.packKg} কেজি`} />
                    <SpecRow label="ফিড টাইপ" value={feedTypeLabels[product.feedType]} />
                </div>

                <Link to={`/products/${product.id}`} className="btn-teal inline-flex justify-center w-full sm:w-auto mt-6 font-[family-name:var(--font-bengali)]">
                    বিস্তারিত ও অর্ডার করুন
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
