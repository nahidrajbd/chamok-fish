import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { siteConfig } from '@/data/siteConfig';

export default function HeroSection() {
    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
            {/* Background photo with a flat navy scrim for legibility */}
            <div className="absolute inset-0">
                <img
                    src="/hero-banner.jpg"
                    alt="Fish feeding in a pond"
                    className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-navy/70" />
            </div>

            <div className="container-custom relative z-10 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-2xl text-center lg:text-left"
                >
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-6 mx-auto lg:mx-0" />
                    <h1
                        className="text-white font-semibold leading-[1.15] mb-5 font-[family-name:var(--font-bengali)]"
                        style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
                    >
                        চমক ফিশ ফিড
                    </h1>

                    <p className="text-white/85 font-medium text-xl md:text-2xl mb-5 font-[family-name:var(--font-bengali)]">
                        {siteConfig.tagline}
                    </p>

                    <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-[family-name:var(--font-bengali)]">
                        রাজশাহীর ইনাম ফিড মিল থেকে উৎপাদিত মৎস্য খাদ্য। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য ভাসমান ও ডুবন্ত ফিড।
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="/products"
                            className="bg-gold hover:bg-[#e6a502] text-navy font-semibold text-lg px-8 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors font-[family-name:var(--font-bengali)]"
                        >
                            আমাদের পণ্য দেখুন
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/dealer-offer"
                            className="border border-white/40 hover:bg-white/10 text-white font-semibold text-lg px-8 py-3.5 rounded-lg inline-flex items-center justify-center transition-colors font-[family-name:var(--font-bengali)]"
                        >
                            ডিলার হতে আবেদন করুন
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
