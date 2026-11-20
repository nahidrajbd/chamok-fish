import Seo from '@/components/Seo';
import { productJsonLd, breadcrumbJsonLd } from '@/data/jsonLd';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
    ArrowLeft,
    Check,
    MessageCircle,
    Phone,
} from 'lucide-react';
import { products } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';

/* ── helpers ─────────────────────────────────────────────── */
const feedTypeLabels: Record<string, string> = {
    floating: 'ভাসমান (Floating)',
    sinking: 'ডুবন্ত (Sinking)',
    mash: 'ম্যাশ (Mash)',
};

const feedTypeShort: Record<string, string> = {
    floating: 'ভাসমান',
    sinking: 'ডুবন্ত',
    mash: 'ম্যাশ',
};

const fishLabels: Record<string, string> = {
    tilapia: 'তেলাপিয়া',
    carp: 'কার্প (রুই/কাতলা/মৃগেল)',
    pangas: 'পাঙ্গাস',
    nursery: 'রেণু / পোনা',
};

const brandLabel: Record<string, string> = {
    chamok: 'চমক',
    biotech: 'বায়োটেক',
};

function buildProteinRows(protein: (typeof products)[0]['protein']) {
    const rows: { label: string; value: string }[] = [];
    if (protein.general) rows.push({ label: 'প্রোটিন', value: `${protein.general}%` });
    if (protein.tilapia) rows.push({ label: 'তেলাপিয়া প্রোটিন', value: `${protein.tilapia}%` });
    if (protein.carp) rows.push({ label: 'কার্প প্রোটিন', value: `${protein.carp}%` });
    if (protein.pangas) rows.push({ label: 'পাঙ্গাস প্রোটিন', value: `${protein.pangas}%` });
    if (protein.premium) rows.push({ label: 'প্রিমিয়াম প্রোটিন', value: `${protein.premium}%` });
    if (protein.economy) rows.push({ label: 'ইকোনোমি প্রোটিন', value: `${protein.economy}%` });
    return rows;
}

/* ── page ─────────────────────────────────────────────────── */
export default function ProductDetailPage() {
    const { productId } = useParams<{ productId: string }>();
    const product = products.find((p) => p.id === productId);

    if (!product) return <Navigate to="/products" replace />;

    // The full spec list, set like the printed label on a feed sack.
    const specRows: { label: string; value: string }[] = [
        ...buildProteinRows(product.protein),
        { label: 'ফ্যাট', value: `${product.fat}%` },
        { label: 'আর্দ্রতা', value: `${product.moisture}%` },
        { label: 'প্যাকিং', value: `${product.packKg} কেজি` },
        { label: 'ফিড ধরন', value: feedTypeLabels[product.feedType] },
        ...(product.pelletSizeMm
            ? [{ label: 'পিলেট সাইজ', value: `${product.pelletSizeMm} মি.মি.` }]
            : []),
        ...(product.fiber
            ? [{ label: 'ফাইবার', value: `${product.fiber}%` }]
            : []),
        ...(product.carbs
            ? [{ label: 'কার্বোহাইড্রেট', value: `${product.carbs}%` }]
            : []),
        ...(product.ash
            ? [{ label: 'অ্যাশ', value: `${product.ash}%` }]
            : []),
        ...(product.energy
            ? [{ label: 'শক্তি', value: product.energy }]
            : []),
    ];

    return (
        <>
            <Seo title={`${product.nameBn} | ${product.nameEn} - Chamok Fish Feed`} description={`${product.nameBn}: ${product.descriptionBn}`} path={`/products/${product.id}`} image={`${siteConfig.siteUrl}${product.image}`} type="product" jsonLd={[productJsonLd(product), breadcrumbJsonLd([["হোম", "/"], ["পণ্যসমূহ", "/products"], [product.nameBn, `/products/${product.id}`]])]} />

            {/* ── Hero banner ───────────────────────────────── */}
            <section className="bg-navy py-10">
                <div className="container-custom">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors font-[family-name:var(--font-bengali)]"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        সব পণ্য দেখুন
                    </Link>
                    <p className="text-white/70 text-sm mb-2 font-[family-name:var(--font-bengali)]">
                        {brandLabel[product.brand]} ব্র্যান্ড • {feedTypeShort[product.feedType]}
                    </p>
                    <h1 className="text-white font-semibold text-3xl sm:text-4xl mt-1 mb-2 font-[family-name:var(--font-bengali)]">
                        {product.nameBn}
                    </h1>
                    <p className="text-white/70 text-base max-w-2xl font-[family-name:var(--font-bengali)]">
                        {product.descriptionBn}
                    </p>
                </div>
            </section>

            {/* ── Main two-column content ───────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* LEFT: Photo + Specs + Features */}
                        <div className="space-y-6">
                            {/* Product photo */}
                            <div className="rounded-xl overflow-hidden border border-navy/10 aspect-[4/3] bg-white">
                                <img
                                    src={product.image}
                                    alt={product.nameBn}
                                    className="w-full h-full object-contain p-6"
                                />
                            </div>

                            {/* Nutrition specs, as a bag label */}
                            <div className="bg-white rounded-xl border border-navy/10 p-6">
                                <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                                <h2 className="text-navy font-semibold text-lg mb-2 font-[family-name:var(--font-bengali)]">
                                    পুষ্টি উপাদান ও স্পেসিফিকেশন
                                </h2>
                                <div className="divide-y divide-navy/10">
                                    {specRows.map((row) => (
                                        <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
                                            <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{row.label}</span>
                                            <span className="text-navy font-semibold tabular-nums font-[family-name:var(--font-bengali)]">{row.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key features */}
                            <div className="bg-white rounded-xl border border-navy/10 p-6">
                                <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                                <h2 className="text-navy font-semibold text-lg mb-4 font-[family-name:var(--font-bengali)]">
                                    মূল বৈশিষ্ট্য
                                </h2>
                                <ul className="space-y-3">
                                    {product.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                            <span className="text-dark text-sm font-[family-name:var(--font-bengali)]">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Suitable for */}
                            <div className="bg-white rounded-xl border border-navy/10 p-6">
                                <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                                <h2 className="text-navy font-semibold text-lg mb-4 font-[family-name:var(--font-bengali)]">
                                    উপযুক্ত মাছের ধরন
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.suitableFor.map((fish) => (
                                        <span
                                            key={fish}
                                            className="border border-navy/15 text-navy text-sm px-3 py-1.5 rounded-lg font-[family-name:var(--font-bengali)]"
                                        >
                                            {fishLabels[fish]}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Order card */}
                        <div>
                            <div className="bg-white rounded-xl border border-navy/10 p-7 lg:sticky lg:top-28">
                                <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                                <h2 className="text-navy font-semibold text-xl mb-1 font-[family-name:var(--font-bengali)]">
                                    অর্ডার করুন
                                </h2>
                                <p className="text-bodyGray text-sm mb-6 font-[family-name:var(--font-bengali)]">
                                    সরাসরি WhatsApp-এর মাধ্যমে আমাদের সাথে যোগাযোগ করে অর্ডার কনফার্ম করুন।
                                </p>

                                <div className="space-y-3 mt-4">
                                    <a
                                        href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(`হ্যালো, আমি আপনাদের "${product.nameBn}" পণ্যটি সম্পর্কে জানতে এবং অর্ডার করতে চাচ্ছি।`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-semibold py-4 rounded-lg hover:bg-[#1eb856] transition-colors font-[family-name:var(--font-bengali)] text-base"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        সরাসরি WhatsApp-এ অর্ডার
                                    </a>
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="flex items-center justify-center gap-3 w-full bg-navy text-white font-semibold py-4 rounded-lg hover:bg-navy/90 transition-colors font-[family-name:var(--font-bengali)] text-base"
                                    >
                                        <Phone className="w-6 h-6" />
                                        কল করুন: {siteConfig.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Other products strip ─────────────────────── */}
            <section className="py-12 bg-white border-t border-navy/10">
                <div className="container-custom">
                    <h2 className="text-navy font-semibold text-lg mb-6 font-[family-name:var(--font-bengali)]">
                        আরও পণ্য দেখুন
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products
                            .filter((p) => p.id !== product.id)
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/products/${p.id}`}
                                    className="bg-pageBg rounded-xl border border-navy/10 overflow-hidden"
                                >
                                    <div className="h-32 overflow-hidden p-2">
                                        <img
                                            src={p.image}
                                            alt={p.nameBn}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <p className="text-navy font-semibold text-xs leading-snug font-[family-name:var(--font-bengali)]">
                                            {p.nameBn}
                                        </p>
                                        <p className="text-teal text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                            বিস্তারিত →
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
