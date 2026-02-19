import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Droplets, TrendingUp, Leaf, MapPin, CheckCircle2, Award } from 'lucide-react';
import CTAStrip from '@/components/sections/CTAStrip';
import { siteConfig } from '@/data/siteConfig';

const benefits = [
    {
        icon: Droplets,
        title: 'ওয়েল কোটেড ভাসমান ফিড',
        color: 'text-teal bg-teal/10',
        points: [
            'তেলের আবরণে পুষ্টি সম্পূর্ণ সংরক্ষিত থাকে।',
            'মাছের হজমশক্তি বৃদ্ধি পায়।',
            'পানিতে ডুবে না, অপচয় নেই।',
            'শক্তির মাত্রা অনেক বেশি।',
        ],
    },
    {
        icon: TrendingUp,
        title: 'কম FCR — বেশি লাভ',
        color: 'text-gold bg-gold/10',
        points: [
            'FCR ১.৫:১ এর নিচে রাখা সম্ভব।',
            'কম ফিড দিয়ে বেশি ওজন বাড়ে।',
            'উৎপাদন খরচ উল্লেখযোগ্যভাবে কমে।',
            'বাজারে প্রতিযোগিতামূলক মুনাফা।',
        ],
    },
    {
        icon: Leaf,
        title: 'পরিবেশবান্ধব উৎপাদন',
        color: 'text-steel bg-steel/10',
        points: [
            'পানি দূষণ শূন্যের কাছাকাছি।',
            'পরিবেশ বান্ধব কাঁচামাল ব্যবহার।',
            'টেকসই মাছ চাষে অবদান রাখে।',
            'ISO মান অনুসরণ করা হয়।',
        ],
    },
    {
        icon: MapPin,
        title: 'স্থানীয়ভাবে উৎপাদিত',
        color: 'text-navy bg-navy/10',
        points: [
            'রাজশাহীর নিজস্ব কারখানায় তৈরি।',
            'সর্বদা তাজা ও মানসম্পন্ন স্টক।',
            'দ্রুত ডেলিভারি সম্ভব।',
            'স্থানীয় কৃষকদের সহায়তা।',
        ],
    },
];

export default function WhyChamakPage() {
    return (
        <>
            <Helmet>
                <title>কেন চমক ফিশ ফিড — সেরা মৎস্য খাদ্যের কারণ</title>
                <meta name="description" content="চমক ফিশ ফিড কেন সেরা। ওয়েল কোটেড, কম FCR, পরিবেশবান্ধব এবং স্থানীয়ভাবে উৎপাদিত।" />
                <link rel="canonical" href={`${siteConfig.siteUrl}/why-chamok`} />
            </Helmet>

            {/* Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Award className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">আমাদের বিশেষত্ব</span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">কেন চমক ফিশ ফিড?</h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)]">
                        আমাদের প্রতিটি পণ্য মাছ চাষিদের সর্বোচ্চ সুবিধার কথা ভেবে তৈরি।
                    </p>
                </div>
            </section>

            {/* Benefits */}
            {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                const isEven = i % 2 === 0;
                return (
                    <section key={benefit.title} className={`section-padding ${isEven ? 'bg-pageBg' : 'bg-panelBg'}`}>
                        <div className="container-custom">
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={!isEven ? 'lg:order-2' : ''}
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-navy mb-5 font-[family-name:var(--font-bengali)]">{benefit.title}</h2>
                                    <ul className="space-y-3">
                                        {benefit.points.map(point => (
                                            <li key={point} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                                <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`${!isEven ? 'lg:order-1' : ''} flex items-center justify-center`}
                                >
                                    <div className={`w-64 h-64 rounded-full ${benefit.color} flex items-center justify-center`}>
                                        <Icon className="w-32 h-32 opacity-20" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <CTAStrip />
        </>
    );
}
