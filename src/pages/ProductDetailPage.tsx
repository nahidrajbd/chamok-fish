import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    CheckCircle2,
    TrendingUp,
    Droplets,
    Package2,
    Layers,
    Fish,
    Zap,
    MessageCircle,
    Phone,
} from 'lucide-react';
import { products } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';
import OrderForm from '@/components/forms/OrderForm';

/* ── helpers ─────────────────────────────────────────────── */
const feedTypeLabels: Record<string, string> = {
    floating: 'ভাসমান (Floating)',
    sinking: 'ডুবন্ত (Sinking)',
    mash: 'ম্যাশ (Mash)',
};

const fishLabels: Record<string, string> = {
    tilapia: 'তেলাপিয়া',
    carp: 'কার্প (রুই/কাতলা/মৃগেল)',
    pangas: 'পাঙ্গাস',
    nursery: 'রেণু / পোনা',
};

const brandLabel: Record<string, string> = {
    chamak: 'চমক',
    biotech: 'বায়োটেক',
};

const brandAccent: Record<string, string> = {
    chamak: 'bg-navy text-white',
    biotech: 'bg-teal text-white',
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

    const proteinRows = buildProteinRows(product.protein);

    const specItems = [
        ...proteinRows.map((r) => ({ icon: TrendingUp, color: 'text-teal', label: r.label, value: r.value })),
        { icon: Droplets, color: 'text-steel', label: 'ফ্যাট', value: `${product.fat}%` },
        { icon: Droplets, color: 'text-bodyGray', label: 'আর্দ্রতা', value: `${product.moisture}%` },
        { icon: Package2, color: 'text-navy', label: 'প্যাকিং', value: `${product.packKg} কেজি` },
        { icon: Layers, color: 'text-gold', label: 'ফিড ধরন', value: feedTypeLabels[product.feedType] },
        ...(product.pelletSizeMm
            ? [{ icon: Layers, color: 'text-navy', label: 'পিলেট সাইজ', value: `${product.pelletSizeMm} মি.মি.` }]
            : []),
        ...(product.fiber
            ? [{ icon: Layers, color: 'text-bodyGray', label: 'ফাইবার', value: `${product.fiber}%` }]
            : []),
        ...(product.carbs
            ? [{ icon: Layers, color: 'text-bodyGray', label: 'কার্বোহাইড্রেট', value: `${product.carbs}%` }]
            : []),
        ...(product.ash
            ? [{ icon: Layers, color: 'text-bodyGray', label: 'অ্যাশ', value: `${product.ash}%` }]
            : []),
        ...(product.energy
            ? [{ icon: Zap, color: 'text-gold', label: 'শক্তি', value: product.energy }]
            : []),
    ];

    return (
        <>
            <Helmet>
                <title>{product.nameBn} — চমক ফিশ ফিড রাজশাহী</title>
                <meta
                    name="description"
                    content={`${product.nameBn}: ${product.descriptionBn} মৎস্য খামারিদের জন্য সেরা মানের ফিড।`}
                />
                <link rel="canonical" href={`${siteConfig.siteUrl}/products/${product.id}`} />
                {/* Open Graph for marketing share */}
                <meta property="og:title" content={`${product.nameBn} — চমক ফিশ ফিড`} />
                <meta property="og:description" content={product.descriptionBn} />
                <meta property="og:image" content={product.image} />
                <meta property="og:url" content={`${siteConfig.siteUrl}/products/${product.id}`} />
                <meta property="og:type" content="product" />
            </Helmet>

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
                    <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full font-[family-name:var(--font-bengali)] ${brandAccent[product.brand]}`}>
                            {brandLabel[product.brand]} ব্র্যান্ড
                        </span>
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 font-[family-name:var(--font-bengali)]">
                            {feedTypeLabels[product.feedType]}
                        </span>
                    </div>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl mt-3 mb-2 font-[family-name:var(--font-bengali)]">
                        {product.nameBn}
                    </h1>
                    <p className="text-white/65 text-base max-w-2xl font-[family-name:var(--font-bengali)]">
                        {product.descriptionBn}
                    </p>
                </div>
            </section>

            {/* ── Main two-column content ───────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* LEFT: Photo + Specs + Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            {/* Product photo */}
                            <div className="rounded-card overflow-hidden border border-border/40 shadow-md aspect-[4/3] bg-mist/20">
                                <img
                                    src={product.image}
                                    alt={product.nameBn}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Nutrition specs grid */}
                            <div className="bg-cardBg rounded-card border border-border/40 p-6 shadow-sm">
                                <h2 className="text-navy font-bold text-lg mb-4 font-[family-name:var(--font-bengali)]">
                                    পুষ্টি উপাদান ও স্পেসিফিকেশন
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {specItems.map(({ icon: Icon, color, label, value }) => (
                                        <div
                                            key={label}
                                            className="bg-pageBg rounded-xl p-3.5 border border-border/30"
                                        >
                                            <span className={`flex items-center gap-1.5 text-xs text-bodyGray mb-1.5 font-[family-name:var(--font-bengali)]`}>
                                                <Icon className={`w-3.5 h-3.5 ${color} shrink-0`} />
                                                {label}
                                            </span>
                                            <span className={`font-bold text-base ${color !== 'text-bodyGray' ? color : 'text-dark'}`}>
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key features */}
                            <div className="bg-cardBg rounded-card border border-border/40 p-6 shadow-sm">
                                <h2 className="text-navy font-bold text-lg mb-4 font-[family-name:var(--font-bengali)]">
                                    মূল বৈশিষ্ট্য
                                </h2>
                                <ul className="space-y-3">
                                    {product.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                            <span className="text-dark text-sm font-[family-name:var(--font-bengali)]">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Suitable for */}
                            <div className="bg-cardBg rounded-card border border-border/40 p-6 shadow-sm">
                                <h2 className="text-navy font-bold text-lg mb-4 font-[family-name:var(--font-bengali)] flex items-center gap-2">
                                    <Fish className="w-5 h-5 text-teal" />
                                    উপযুক্ত মাছের ধরন
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.suitableFor.map((fish) => (
                                        <span
                                            key={fish}
                                            className="bg-teal/10 text-teal border border-teal/20 text-sm font-semibold px-4 py-1.5 rounded-full font-[family-name:var(--font-bengali)]"
                                        >
                                            {fishLabels[fish]}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Order form + WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            className="space-y-6"
                        >
                            {/* Sticky order card */}
                            <div className="bg-cardBg rounded-card border border-border/40 p-7 shadow-sm lg:sticky lg:top-28">
                                <h2 className="text-navy font-bold text-xl mb-1 font-[family-name:var(--font-bengali)]">
                                    অর্ডার করুন
                                </h2>
                                <p className="text-bodyGray text-sm mb-6 font-[family-name:var(--font-bengali)]">
                                    ফর্ম পূরণ করুন, আমরা সরাসরি যোগাযোগ করব।
                                </p>

                                <OrderForm productName={product.nameBn} />

                                <div className="mt-5 pt-5 border-t border-border/30 space-y-3">
                                    <p className="text-center text-bodyGray text-xs font-[family-name:var(--font-bengali)]">
                                        অথবা সরাসরি যোগাযোগ করুন
                                    </p>
                                    <a
                                        href={siteConfig.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-3.5 rounded-xl hover:bg-[#22c55e] transition-all shadow-sm hover:shadow-md font-[family-name:var(--font-bengali)]"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp-এ অর্ডার করুন
                                    </a>
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="flex items-center justify-center gap-3 w-full bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy/90 transition-all font-[family-name:var(--font-bengali)]"
                                    >
                                        <Phone className="w-5 h-5" />
                                        {siteConfig.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Other products strip ─────────────────────── */}
            <section className="py-12 bg-mist/40 border-t border-border/30">
                <div className="container-custom">
                    <h2 className="text-navy font-bold text-lg mb-6 font-[family-name:var(--font-bengali)]">
                        আরও পণ্য দেখুন
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {products
                            .filter((p) => p.id !== product.id)
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/products/${p.id}`}
                                    className="bg-cardBg rounded-card border border-border/40 overflow-hidden card-hover shadow-sm group"
                                >
                                    <div className="h-32 overflow-hidden bg-mist/20">
                                        <img
                                            src={p.image}
                                            alt={p.nameBn}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
