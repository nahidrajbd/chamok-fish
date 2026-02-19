"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "চমক ভাসমান ফিড ব্যবহার শুরুর পর থেকে আমার তেলাপিয়ার বৃদ্ধি প্রায় ৩০% বেড়েছে। খাবার নষ্ট হয় না, পানিও পরিষ্কার থাকে। সত্যিই অসাধারণ পণ্য!",
        author: "মো. রফিকুল ইসলাম",
        location: "বাগমারা, রাজশাহী",
        role: "মৎস্য চাষি",
        rating: 5,
    },
    {
        quote:
            "বায়োটেক কার্প গ্রোয়ার দিয়ে আমার কার্প মাছের ওজন দ্রুত বেড়েছে। FCR অনেক কম বলে খরচও সাশ্রয় হয়েছে। চমক দলকে অনেক ধন্যবাদ।",
        author: "মো. আবুল কালাম",
        location: "পুঠিয়া, রাজশাহী",
        role: "মৎস্য চাষি",
        rating: 5,
    },
];

export default function Testimonial() {
    return (
        <section className="section-padding bg-ice/40">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                        চাষিদের মতামত
                    </span>
                    <h2 className="text-navy font-[family-name:var(--font-bengali)]">
                        আমাদের চাষিরা কী বলেন
                    </h2>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="bg-cardBg rounded-[12px] p-6 border border-border/40 border-l-4 border-l-teal shadow-sm relative"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-teal/20 absolute top-4 right-4" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, j) => (
                                    <span key={j} className="text-gold text-lg">
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-bodyGray leading-relaxed mb-5 font-[family-name:var(--font-bengali)] italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal to-steel flex items-center justify-center text-white font-bold text-base">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-bodyGray text-xs font-[family-name:var(--font-bengali)]">
                                        {testimonial.role} • {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
