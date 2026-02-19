import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Factory } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSnapshot() {
    return (
        <section className="section-padding bg-panelBg">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-card overflow-hidden bg-gradient-to-br from-navy to-teal flex items-center justify-center">
                            <div className="text-center">
                                <Factory className="w-20 h-20 text-white/30 mx-auto mb-4" />
                                <p className="text-white/50 text-sm font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</p>
                                <p className="text-white/30 text-xs">ধোপাপাড়া, পুঠিয়া, রাজশাহী</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-gold text-navy font-bold px-5 py-3 rounded-xl shadow-lg">
                            <p className="text-2xl leading-none">১০+</p>
                            <p className="text-xs mt-0.5 font-[family-name:var(--font-bengali)]">বছরের অভিজ্ঞতা</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6"
                    >
                        <div>
                            <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                                আমাদের সম্পর্কে
                            </span>
                            <h2 className="text-navy mb-4 font-[family-name:var(--font-bengali)]">বেস্ট পদ্মা এগ্রো ফিডস</h2>
                        </div>

                        <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                            বেস্ট পদ্মা এগ্রো ফিডস-এর গর্বিত উদ্যোগ হিসেবে, চমক ফিশ ফিড বাংলাদেশের মৎস্য চাষ শিল্পে এক নতুন দিগন্ত উন্মোচন করছে। রাজশাহীর চিনি পট্টি থেকে পরিচালিত এই প্রতিষ্ঠানটি আজ গুণগত মান ও বিশ্বস্ততার প্রতীক।
                        </p>

                        <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                            মো. খায়রুল বাশার-এর সুদক্ষ নেতৃত্বে পুঠিয়ার ধোপাপাড়ায় অবস্থিত আমাদের অত্যাধুনিক কারখানা ইনাম ফিড মিলে প্রতিটি পণ্য অত্যন্ত যত্নসহকারে উৎপাদিত হয়।
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'অফিস', value: siteConfig.officeAddress },
                                { label: 'কারখানা', value: 'ধোপাপাড়া, পুঠিয়া' },
                                { label: 'প্রতিষ্ঠাতা', value: siteConfig.founder },
                                { label: 'যোগাযোগ', value: siteConfig.phoneDisplay },
                            ].map((item) => (
                                <div key={item.label} className="bg-mist/50 rounded-xl p-4 border border-border/40">
                                    <p className="text-teal text-xs font-medium mb-1 font-[family-name:var(--font-bengali)]">{item.label}</p>
                                    <p className="text-navy text-sm font-semibold font-[family-name:var(--font-bengali)]">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="btn-teal inline-flex text-sm font-[family-name:var(--font-bengali)]">
                            আরও জানুন
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
