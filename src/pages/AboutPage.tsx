import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Factory, Leaf, Award, MapPin, Phone, Mail } from 'lucide-react';
import CTAStrip from '@/components/sections/CTAStrip';
import { siteConfig } from '@/data/siteConfig';

const milestones = [
    { year: '২০১০', event: 'সূচনা — বেস্ট পদ্মা এগ্রো ফিডস প্রতিষ্ঠা, রাজশাহী।' },
    { year: '২০১৩', event: 'চমক ব্র্যান্ডের আওতায় প্রথম ভাসমান ফিড বাজারে আসে।' },
    { year: '২০১৭', event: 'পুঠিয়ায় ইনাম ফিড মিল কারখানা স্থাপন।' },
    { year: '২০২০', event: 'বায়োটেক ব্র্যান্ড লঞ্চ — কার্প ও পাঙ্গাসের জন্য বিশেষ ফিড।' },
    { year: '২০২৩', event: '১০০+ ডিলার নেটওয়ার্ক গড়ে উঠেছে সারা রাজশাহী বিভাগে।' },
    { year: '২০২৫', event: 'ডিজিটাল উপস্থিতি ও নতুন পণ্য সংযোজন।' },
];

const values = [
    { icon: Award, title: 'মান নিয়ন্ত্রণ', desc: 'প্রতিটি ব্যাচ পরীক্ষা করা হয়।', color: 'text-gold bg-gold/10' },
    { icon: Leaf, title: 'পরিবেশবান্ধব', desc: 'টেকসই উৎপাদন প্রক্রিয়া।', color: 'text-teal bg-teal/10' },
    { icon: Users, title: 'কমিউনিটি', desc: 'কৃষকদের সাথে দীর্ঘমেয়াদি সম্পর্ক।', color: 'text-steel bg-steel/10' },
    { icon: Factory, title: 'নিজস্ব উৎপাদন', desc: 'নিজস্ব কারখানায় সরাসরি উৎপাদন।', color: 'text-navy bg-navy/10' },
];

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>আমাদের সম্পর্কে — চমক ফিশ ফিড | বেস্ট পদ্মা এগ্রো ফিডস</title>
                <meta name="description" content="বেস্ট পদ্মা এগ্রো ফিডসের সম্পর্কে জানুন — প্রতিষ্ঠাতা, কারখানা, ইতিহাস এবং আমাদের লক্ষ্য।" />
                <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
            </Helmet>

            {/* Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">আমাদের সম্পর্কে</span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">বেস্ট পদ্মা এগ্রো ফিডস</h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)]">
                        রাজশাহীর গর্বিত মৎস্য খাদ্য উৎপাদনকারী প্রতিষ্ঠান — মো. খায়রুল বাশার-এর নেতৃত্বে।
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                                আমাদের গল্প
                            </span>
                            <h2 className="text-navy mb-5 font-[family-name:var(--font-bengali)]">একটি স্বপ্নের যাত্রা</h2>
                            <div className="space-y-4 text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                <p>
                                    ২০১০ সালে মো. খায়রুল বাশার রাজশাহীতে বেস্ট পদ্মা এগ্রো ফিডস প্রতিষ্ঠা করেন একটি সাহসী স্বপ্ন নিয়ে — বাংলাদেশের অগণিত মৎস্য চাষিকে উন্নত মানের মৎস্য খাদ্য সরবরাহ করা।
                                </p>
                                <p>
                                    শুরুতে ছোট অফিস থেকে কাজ শুরু হলেও আজ আমাদের রয়েছে নিজস্ব কারখানা, দুটি শক্তিশালী ব্র্যান্ড এবং ১০০+ এর বেশি বিশ্বস্ত ডিলার সারা রাজশাহী বিভাগে।
                                </p>
                                <p>
                                    আমাদের লক্ষ্য সর্বদা একটাই — মাছ চাষিরা যেন কম বিনিয়োগে সর্বোচ্চ উৎপাদন পায়।
                                </p>
                            </div>
                        </motion.div>

                        {/* Founder Card */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="bg-cardBg rounded-card p-8 border border-border/40 shadow-sm text-center">
                                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center mx-auto mb-5">
                                    <Users className="w-14 h-14 text-white/50" />
                                </div>
                                <h3 className="text-navy font-bold text-xl mb-1 font-[family-name:var(--font-bengali)]">{siteConfig.founder}</h3>
                                <p className="text-teal text-sm mb-4 font-[family-name:var(--font-bengali)]">{siteConfig.founderTitle}</p>
                                <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                                    দীর্ঘ অভিজ্ঞতা ও দূরদর্শী নেতৃত্বে বেস্ট পদ্মা এগ্রো ফিডসকে রাজশাহীর শীর্ষ মৎস্য খাদ্য সরবরাহকারী প্রতিষ্ঠানে পরিণত করেছেন।
                                </p>
                                <div className="mt-5 pt-5 border-t border-border/30 space-y-2 text-left">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-teal shrink-0" />
                                        <a href={`tel:${siteConfig.phone}`} className="text-sm text-navy hover:text-teal transition-colors font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-teal shrink-0" />
                                        <a href={`mailto:${siteConfig.email}`} className="text-sm text-navy hover:text-teal transition-colors">{siteConfig.email}</a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                                        <p className="text-sm text-bodyGray font-[family-name:var(--font-bengali)]">{siteConfig.officeAddressFull}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Factory Section */}
            <section className="section-padding bg-panelBg">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-gold/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">কারখানা</span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4 text-bodyGray font-[family-name:var(--font-bengali)]">
                            <p>ধোপাপাড়া, পুঠিয়া, রাজশাহীতে অবস্থিত আমাদের অত্যাধুনিক কারখানা — ইনাম ফিড মিল। এখানে আধুনিক যন্ত্রপাতি ব্যবহার করে প্রতিটি ব্যাচ উৎপাদিত হয়।</p>
                            <ul className="space-y-2">
                                {['আধুনিক উৎপাদন প্রযুক্তি', 'কঠোর মান নিয়ন্ত্রণ', 'পরিবেশবান্ধব প্রক্রিয়া', 'দক্ষ জনবল'].map(item => (
                                    <li key={item} className="flex items-center gap-2.5">
                                        <span className="w-2 h-2 bg-teal rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video rounded-card overflow-hidden">
                            <iframe
                                src={siteConfig.googleMapsEmbedFactory}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ইনাম ফিড মিল - পুঠিয়া, রাজশাহী"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'আমাদের লক্ষ্য (Mission)', text: 'বাংলাদেশের মৎস্য চাষিদের জন্য সাশ্রয়ী, উচ্চমানের ও বিজ্ঞানসম্মত মৎস্য খাদ্য সরবরাহ করা এবং তাদের উৎপাদনশীলতা বৃদ্ধিতে অবদান রাখা।', accent: 'border-teal bg-teal/5' },
                            { title: 'আমাদের দৃষ্টিভঙ্গি (Vision)', text: 'দক্ষিণ এশিয়ার অন্যতম শীর্ষ মৎস্য খাদ্য উৎপাদনকারী ব্র্যান্ড হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং বাংলাদেশের মৎস্য শিল্পের টেকসই উন্নয়নে নেতৃত্ব দেওয়া।', accent: 'border-gold bg-gold/5' },
                        ].map(item => (
                            <div key={item.title} className={`rounded-card p-8 border-l-4 ${item.accent}`}>
                                <h3 className="text-navy font-bold text-lg mb-4 font-[family-name:var(--font-bengali)]">{item.title}</h3>
                                <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-panelBg">
                <div className="container-custom">
                    <h2 className="text-navy text-center mb-10 font-[family-name:var(--font-bengali)]">আমাদের মূল্যবোধ</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="bg-cardBg rounded-card p-6 text-center border border-border/40 card-hover">
                                    <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mx-auto mb-4`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-navy font-semibold text-sm mb-2 font-[family-name:var(--font-bengali)]">{v.title}</h3>
                                    <p className="text-bodyGray text-xs font-[family-name:var(--font-bengali)]">{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-navy text-center mb-10 font-[family-name:var(--font-bengali)]">আমাদের যাত্রাপথ</h2>
                    <div className="relative">
                        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-border/60" />
                        <div className="space-y-8">
                            {milestones.map((m, i) => (
                                <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6">
                                    <div className="shrink-0 w-14 text-right">
                                        <span className="text-teal font-bold text-sm font-[family-name:var(--font-bengali)]">{m.year}</span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="w-3 h-3 bg-teal rounded-full border-2 border-white shadow z-10" style={{ marginLeft: '-1.75rem' }} />
                                    </div>
                                    <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)] pt-0.5 pl-2">{m.event}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Location */}
            <section className="py-12 bg-panelBg">
                <div className="container-custom">
                    <h2 className="text-navy mb-6 text-center font-[family-name:var(--font-bengali)]">অফিসের অবস্থান</h2>
                    <div className="rounded-card overflow-hidden border border-border/40 shadow-md h-72">
                        <iframe src={siteConfig.googleMapsEmbedOffice} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="চমক ফিশ ফিড অফিস" />
                    </div>
                    <p className="text-center text-bodyGray text-sm mt-4 font-[family-name:var(--font-bengali)]">
                        📍 {siteConfig.officeAddressFull}
                    </p>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
