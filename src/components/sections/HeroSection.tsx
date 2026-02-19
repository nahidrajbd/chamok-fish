import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/hero-banner.jpg"
                    alt="Fish feeding in a pond"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
            </div>

            {/* Decorative blurs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container-custom relative z-10 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg"
                        >
                            <span className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(255,183,3,0.6)]" />
                            <span className="text-white font-medium text-sm font-[family-name:var(--font-bengali)]">বেস্ট পদ্মা এগ্রো ফিডস</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-white font-extrabold leading-[1.1] mb-6 font-[family-name:var(--font-bengali)] drop-shadow-lg"
                            style={{ fontSize: 'clamp(48px, 6vw, 76px)' }}
                        >
                            চমক ফিশ ফিড
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-gold font-bold text-2xl mb-6 font-[family-name:var(--font-bengali)] drop-shadow-md"
                        >
                            মাছ চাষির বিশ্বস্ত সঙ্গী
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-white/85 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-[family-name:var(--font-bengali)] drop-shadow"
                        >
                            রাজশাহীর ইনাম ফিড মিল থেকে উৎপাদিত উচ্চমানের মৎস্য খাদ্য। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি ভাসমান ও ডুবন্ত ফিড।
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <Link to="/products" className="bg-gold hover:bg-white text-navy font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,183,3,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:-translate-y-1 font-[family-name:var(--font-bengali)]">
                                আমাদের পণ্য দেখুন
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/dealers"
                                className="flex items-center gap-2 justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 font-[family-name:var(--font-bengali)]"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Dealer হন
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 justify-center lg:justify-start"
                        >
                            {['✓ উচ্চমানের উপাদান', '✓ নিজস্ব কারখানা', '✓ ২ ব্র্যান্ড'].map((badge) => (
                                <span key={badge} className="bg-navy/40 backdrop-blur-sm px-3 py-1 rounded-lg text-white/80 text-sm font-medium border border-white/10 font-[family-name:var(--font-bengali)]">
                                    {badge}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right side - simplified or removed illustration to let background shine */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-xs font-[family-name:var(--font-bengali)] tracking-widest uppercase">Scroll Down</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
}
