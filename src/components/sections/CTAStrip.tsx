import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CTAStrip() {
    return (
        <section className="bg-gradient-to-r from-teal to-steel py-16">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-white font-bold mb-3 font-[family-name:var(--font-bengali)]">
                        আজই আমাদের সাথে যোগাযোগ করুন
                    </h2>
                    <p className="text-white/80 text-lg mb-8 font-[family-name:var(--font-bengali)]">
                        সেরা মানের মৎস্য খাদ্যের জন্য এখনই অর্ডার করুন অথবা ডিলার হওয়ার সুযোগ নিন।
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="flex items-center gap-3 bg-white text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold transition-all duration-200 hover:shadow-lg w-full sm:w-auto justify-center"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                        </a>

                        <a
                            href={siteConfig.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#22c55e] transition-all duration-200 hover:shadow-lg w-full sm:w-auto justify-center"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-[family-name:var(--font-bengali)]">WhatsApp-এ মেসেজ করুন</span>
                        </a>

                        <Link
                            to="/dealers"
                            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
                        >
                            <span className="font-[family-name:var(--font-bengali)]">Dealer হন</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
