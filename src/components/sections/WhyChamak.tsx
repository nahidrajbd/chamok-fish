import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, TrendingUp, Leaf, MapPin } from 'lucide-react';

const benefits = [
    {
        icon: Droplets,
        title: 'ওয়েল কোটেড ভাসমান ফিড',
        description: 'তেলে মিশ্রিত আমাদের ভাসমান ফিড মাছের এনার্জি বাড়ায় এবং খাদ্যের অপচয় শূন্যে নামিয়ে আনে।',
        color: 'bg-teal/10 text-teal',
        delay: 0,
    },
    {
        icon: TrendingUp,
        title: 'কম FCR, বেশি লাভ',
        description: 'আমাদের ফিডের ফুড কনভার্সন রেশিও অন্যদের তুলনায় উল্লেখযোগ্যভাবে কম — কম খরচে বেশি উৎপাদন।',
        color: 'bg-gold/10 text-gold',
        delay: 0.1,
    },
    {
        icon: Leaf,
        title: 'পরিবেশবান্ধব',
        description: 'আমাদের ফিড জলাশয়ের পানি দূষণ করে না। পরিবেশ সুরক্ষায় আমরা প্রতিশ্রুতিবদ্ধ।',
        color: 'bg-steel/10 text-steel',
        delay: 0.2,
    },
    {
        icon: MapPin,
        title: 'স্থানীয়ভাবে উৎপাদিত',
        description: 'রাজশাহীর নিজস্ব কারখানা ইনাম ফিড মিলে তৈরি — সর্বদা তাজা ও মানসম্পন্ন স্টক।',
        color: 'bg-mist/50 text-navy',
        delay: 0.3,
    },
];

export default function WhyChamakSection() {
    return (
        <section className="section-padding bg-pageBg">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                        আমাদের বিশেষত্ব
                    </span>
                    <h2 className="text-navy mb-4 font-[family-name:var(--font-bengali)]">কেন চমক ফিশ ফিড বেছে নেবেন?</h2>
                    <p className="text-bodyGray max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-bengali)]">
                        আমাদের প্রতিটি পণ্য আধুনিক গবেষণা ও উন্নত প্রযুক্তির সমন্বয়ে তৈরি, যা মাছের দ্রুত বৃদ্ধি ও চাষির সর্বোচ্চ মুনাফা নিশ্চিত করে।
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: benefit.delay, duration: 0.5 }}
                                className="bg-cardBg rounded-card p-6 border border-border/50 card-hover shadow-sm"
                            >
                                <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-5`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-navy font-semibold text-base mb-3 font-[family-name:var(--font-bengali)]">{benefit.title}</h3>
                                <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <Link to="/why-chamok" className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all font-[family-name:var(--font-bengali)]">
                        বিস্তারিত জানুন
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
