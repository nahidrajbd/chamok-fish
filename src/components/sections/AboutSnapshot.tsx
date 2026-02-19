import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import feedsPond from '@/images/feeds-pond.jpg';

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
                        {/* Factory Image */}
                        <div className="aspect-[4/3] rounded-card overflow-hidden shadow-lg border border-border/40 group relative">
                            <img
                                src={feedsPond}
                                alt="Chamok Fish Feed Pond"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="font-bold text-lg font-[family-name:var(--font-bengali)] text-white">ইনাম ফিড মিল</p>
                                <p className="text-white/80 text-xs mt-1">ধোপাপাড়া, পুঠিয়া, রাজশাহী</p>
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -top-4 -right-4 bg-teal text-white font-bold px-5 py-3 rounded-xl shadow-lg border border-white/20 z-20">
                            <p className="text-2xl leading-none">১০+</p>
                            <p className="text-xs mt-0.5 opacity-90 font-[family-name:var(--font-bengali)]">বছরের অভিজ্ঞতা</p>
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

                        {/* Segmented Text */}
                        <div className="space-y-4 text-bodyGray font-[family-name:var(--font-bengali)] text-base">
                            <p className="leading-relaxed">
                                বেস্ট পদ্মা এগ্রো ফিডস-এর গর্বিত উদ্যোগ হিসেবে, <span className="text-navy font-semibold">চমক ফিশ ফিড</span> বাংলাদেশের মৎস্য চাষ শিল্পে এক নতুন দিগন্ত উন্মোচন করছে।
                            </p>
                            <p className="leading-relaxed">
                                রাজশাহীর চিনি পট্টি থেকে পরিচালিত এই প্রতিষ্ঠানটি আজ গুণগত মান ও বিশ্বস্ততার প্রতীক। মো. খায়রুল বাশার-এর সুদক্ষ নেতৃত্বে আমাদের যাত্রা অব্যাহত রয়েছে।
                            </p>
                            <p className="leading-relaxed">
                                পুঠিয়ার ধোপাপাড়ায় অবস্থিত আমাদের অত্যাধুনিক কারখানা 'ইনাম ফিড মিল'-এ প্রতিটি পণ্য অত্যন্ত যত্নসহকারে ও প্রযুক্তির সাহায্যে উৎপাদিত হয়।
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {[
                                { label: 'অফিস', value: siteConfig.officeAddress },
                                { label: 'কারখানা', value: 'ধোপাপাড়া, পুঠিয়া' },
                                { label: 'প্রতিষ্ঠাতা', value: siteConfig.founder },
                                { label: 'যোগাযোগ', value: siteConfig.phoneDisplay },
                            ].map((item) => (
                                <div key={item.label} className="bg-mist/30 rounded-xl p-4 border border-border/40 hover:bg-mist/60 transition-colors">
                                    <p className="text-teal text-xs font-medium mb-1 font-[family-name:var(--font-bengali)]">{item.label}</p>
                                    <p className="text-navy text-sm font-semibold font-[family-name:var(--font-bengali)]">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Link to="/about" className="btn-teal inline-flex text-sm font-[family-name:var(--font-bengali)]">
                                আরও জানুন
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
