"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-[#1e3a52] to-[#2a5a7a]">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
            </div>

            {/* Water wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
                        fill="#EBF0F4"
                    />
                </svg>
            </div>

            <div className="container-custom relative z-10 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                        >
                            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-[family-name:var(--font-bengali)]">
                                বেস্ট পদ্মা এগ্রো ফিডস
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-white font-bold leading-tight mb-4 font-[family-name:var(--font-bengali)]"
                            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
                        >
                            চমক ফিশ ফিড
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-gold font-semibold text-xl mb-5 font-[family-name:var(--font-bengali)]"
                        >
                            মাছ চাষির বিশ্বস্ত সঙ্গী
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-white/75 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-[family-name:var(--font-bengali)]"
                        >
                            রাজশাহীর ইনাম ফিড মিল থেকে উৎপাদিত উচ্চমানের মৎস্য খাদ্য।
                            কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য বিশেষভাবে তৈরি ভাসমান
                            ও ডুবন্ত ফিড।
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/products"
                                className="btn-gold text-base px-8 py-3.5 rounded-xl justify-center"
                            >
                                আমাদের পণ্য দেখুন
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/dealers"
                                className="flex items-center gap-2 justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Dealer হন
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="flex flex-wrap items-center gap-4 mt-8 justify-center lg:justify-start"
                        >
                            {[
                                "✓ উচ্চমানের উপাদান",
                                "✓ নিজস্ব কারখানা",
                                "✓ ২ ব্র্যান্ড",
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="text-white/60 text-sm font-[family-name:var(--font-bengali)]"
                                >
                                    {badge}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Central Circle */}
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-teal/30 to-steel/20 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl mb-3">🐟</div>
                                    <p className="text-white font-bold text-2xl font-[family-name:var(--font-bengali)]">
                                        চমক
                                    </p>
                                    <p className="text-gold text-sm">Fish Feed</p>
                                </div>
                            </div>

                            {/* Orbiting cards */}
                            {[
                                { icon: "🌊", label: "ভাসমান ফিড", pos: "top-0 -right-6" },
                                { icon: "⬇️", label: "ডুবন্ত ফিড", pos: "bottom-4 -left-8" },
                                { icon: "🧪", label: "উচ্চ প্রোটিন", pos: "-top-4 left-4" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`absolute ${item.pos} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center`}
                                >
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <p className="text-white text-xs font-[family-name:var(--font-bengali)]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1"
            >
                <span className="text-xs font-[family-name:var(--font-bengali)]">নিচে স্ক্রল করুন</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
}
