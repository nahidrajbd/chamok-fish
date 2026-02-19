import { Helmet } from 'react-helmet-async';
import { MapPin, Users, MessageCircle, CheckCircle, TrendingUp, Handshake, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAStrip from '@/components/sections/CTAStrip';
import { dealers } from '@/data/dealers';
import { siteConfig } from '@/data/siteConfig';

const dealerBenefits = [
    { icon: TrendingUp, title: 'লাভজনক ব্যবসা', desc: 'প্রতিযোগিতামূলক মূল্যে পণ্য কিনুন, বেশি মুনাফা নিশ্চিত করুন।' },
    { icon: Award, title: 'বিশ্বস্ত ব্র্যান্ড', desc: 'রাজশাহীতে প্রতিষ্ঠিত ও চাষিদের পছন্দের দুটি শক্তিশালী ব্র্যান্ড।' },
    { icon: Handshake, title: 'সরাসরি সহায়তা', desc: 'আমাদের টিম সর্বদা আপনার পাশে — পণ্য সরবরাহ থেকে বিক্রয় সহায়তায়।' },
    { icon: Users, title: 'বিস্তৃত বাজার', desc: 'মৎস্য চাষি, পুকুর মালিক — সবাই আমাদের পণ্যের নিয়মিত ক্রেতা।' },
];

const requirements = [
    'নিজস্ব দোকান বা ব্যবসায়িক প্রতিষ্ঠান থাকতে হবে',
    'স্থানীয় কৃষি / মৎস্য বাজারে সংযোগ থাকলে অগ্রাধিকার',
    'ন্যূনতম মাসিক অর্ডার ক্যাপাসিটি নিশ্চিত করতে হবে',
    'চুক্তিভিত্তিক ডিলারশিপ — সম্পূর্ণ বৈধ প্রক্রিয়া',
];

export default function DealersPage() {
    return (
        <>
            <Helmet>
                <title>ডিলার নেটওয়ার্ক — চমক ফিশ ফিড রাজশাহী</title>
                <meta name="description" content="চমক ফিশ ফিডের রাজশাহী বিভাগের ডিলার তালিকা। আপনার কাছের ডিলার খুঁজুন অথবা নতুন ডিলার হওয়ার জন্য WhatsApp-এ যোগাযোগ করুন।" />
                <link rel="canonical" href={`${siteConfig.siteUrl}/dealers`} />
            </Helmet>

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="bg-navy py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #2A8A8A 0%, transparent 50%), radial-gradient(circle at 80% 30%, #FFB703 0%, transparent 50%)' }}
                />
                <div className="container-custom text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">ডিলার নেটওয়ার্ক</span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">আমাদের ডিলার নেটওয়ার্ক</h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)] leading-relaxed">
                        রাজশাহী বিভাগের বিভিন্ন উপজেলায় আমাদের বিশ্বস্ত ডিলাররা মৎস্য চাষিদের দোরগোড়ায় পৌঁছে দিচ্ছে চমক ফিশ ফিড।
                    </p>
                </div>
            </section>

            {/* ── Dealer Info / Benefits ───────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                            ডিলার হওয়ার সুবিধা
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">কেন চমক ফিশ ফিডের ডিলার হবেন?</h2>
                        <p className="text-bodyGray mt-3 max-w-2xl mx-auto text-sm font-[family-name:var(--font-bengali)] leading-relaxed">
                            বাংলাদেশের দ্রুত বর্ধনশীল মৎস্য শিল্পে অংশ নিন। চমক ফিশ ফিডের ডিলার হয়ে গড়ে তুলুন একটি টেকসই ও লাভজনক ব্যবসা।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                        {dealerBenefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="bg-cardBg rounded-card p-6 border border-border/40 shadow-sm text-center card-hover"
                                >
                                    <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-teal" />
                                    </div>
                                    <h3 className="text-navy font-semibold text-sm mb-2 font-[family-name:var(--font-bengali)]">{b.title}</h3>
                                    <p className="text-bodyGray text-xs leading-relaxed font-[family-name:var(--font-bengali)]">{b.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Requirements + WhatsApp CTA */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Requirements */}
                        <div className="bg-cardBg rounded-card p-7 border border-border/40">
                            <h3 className="text-navy font-bold text-lg mb-5 font-[family-name:var(--font-bengali)]">ডিলারশিপের শর্তাবলী</h3>
                            <ul className="space-y-3">
                                {requirements.map((r) => (
                                    <li key={r} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                        <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)] leading-relaxed">{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-gradient-to-br from-navy to-[#1a3550] rounded-card p-7 flex flex-col items-center justify-center text-center">
                            <div className="w-14 h-14 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mb-4">
                                <MessageCircle className="w-7 h-7 text-[#25D366]" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 font-[family-name:var(--font-bengali)]">ডিলার হতে চান?</h3>
                            <p className="text-white/60 text-sm mb-6 font-[family-name:var(--font-bengali)] leading-relaxed">
                                সরাসরি WhatsApp-এ যোগাযোগ করুন। আমাদের টিম দ্রুত সাড়া দেবে।
                            </p>
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/20 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-[family-name:var(--font-bengali)]">WhatsApp-এ যোগাযোগ করুন</span>
                            </a>
                            <p className="text-white/35 text-xs mt-3">
                                {siteConfig.phoneDisplay}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Dealer Cards ─────────────────────────────────── */}
            <section className="section-padding bg-panelBg">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <span className="inline-block bg-gold/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                            বর্তমান ডিলার
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">আমাদের ডিলার তালিকা</h2>
                        <p className="text-bodyGray text-sm mt-2 font-[family-name:var(--font-bengali)]">আপনার কাছের ডিলারের সাথে সরাসরি যোগাযোগ করুন</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {dealers.map((dealer, i) => (
                            <motion.div
                                key={dealer.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-cardBg rounded-card p-6 border border-border/40 shadow-sm card-hover"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-teal" />
                                    </div>
                                    <span className="text-xs bg-mist text-teal px-2.5 py-1 rounded-full font-[family-name:var(--font-bengali)]">
                                        {dealer.upazila}
                                    </span>
                                </div>
                                <h3 className="text-navy font-bold text-base mb-2 font-[family-name:var(--font-bengali)]">{dealer.nameBn}</h3>
                                <div className="flex items-start gap-2 mb-4">
                                    <MapPin className="w-4 h-4 text-bodyGray shrink-0 mt-0.5" />
                                    <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{dealer.location}</p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            <CTAStrip />
        </>
    );
}
