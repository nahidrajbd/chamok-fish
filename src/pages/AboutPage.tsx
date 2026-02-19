import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    Users, Factory, MapPin, Phone, Mail,
    Quote, ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAStrip from '@/components/sections/CTAStrip';
import { siteConfig } from '@/data/siteConfig';
import basharPhoto from '@/images/bashar.png';
import feedsPond from '@/images/feeds-pond.jpg';

/* ── Team data ───────────────────────────────────────────────── */
const team = [
    {
        name: 'মো. খায়রুল বাশার',
        nameEn: 'Md. Khairul Bashar',
        title: 'প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক',
        titleEn: 'Founder & Managing Director',
        initials: 'KB',
        color: 'from-navy to-teal',
        dept: 'নেতৃত্ব',
        photo: basharPhoto,
    },
    {
        name: 'মো. রফিকুল ইসলাম',
        nameEn: 'Md. Rafiqul Islam',
        title: 'বিক্রয় ব্যবস্থাপক',
        titleEn: 'Sales Manager',
        initials: 'RI',
        color: 'from-teal to-steel',
        dept: 'বিক্রয় ও বিপণন',
        photo: null,
    },
    {
        name: 'মো. আনোয়ার হোসেন',
        nameEn: 'Md. Anwar Hossain',
        title: 'কারখানা সুপারভাইজার',
        titleEn: 'Factory Supervisor',
        initials: 'AH',
        color: 'from-steel to-[#5a8090]',
        dept: 'উৎপাদন',
        photo: null,
    },
    {
        name: 'মোছা. শাহিনা বেগম',
        nameEn: 'Mst. Shahina Begum',
        title: 'মান নিয়ন্ত্রণ কর্মকর্তা',
        titleEn: 'Quality Control Officer',
        initials: 'SB',
        color: 'from-[#3a7a7a] to-teal',
        dept: 'মান নিয়ন্ত্রণ',
        photo: null,
    },
    {
        name: 'মো. জাহিদুল ইসলাম',
        nameEn: 'Md. Zahidul Islam',
        title: 'হিসাব রক্ষণ কর্মকর্তা',
        titleEn: 'Accounts Officer',
        initials: 'ZI',
        color: 'from-navy to-[#2a5570]',
        dept: 'অর্থ ও হিসাব',
        photo: null,
    },
    {
        name: 'মো. মামুনুর রশিদ',
        nameEn: 'Md. Mamunur Rashid',
        title: 'ডিলার সম্পর্ক ব্যবস্থাপক',
        titleEn: 'Dealer Relations Manager',
        initials: 'MR',
        color: 'from-[#1e4060] to-teal',
        dept: 'ডিলার নেটওয়ার্ক',
        photo: null,
    },
];


/* ── Fade-in wrapper ─────────────────────────────────────────── */
const FadeIn = ({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

/* ══════════════════════════════════════════════════════════════ */
export default function AboutPage() {

    return (
        <>
            <Helmet>
                <title>আমাদের সম্পর্কে — চমক ফিশ ফিড | বেস্ট পদ্মা এগ্রো ফিডস</title>
                <meta
                    name="description"
                    content="বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের পূর্ণ পরিচয় — প্রতিষ্ঠাতা, কারখানা, ব্র্যান্ড ইতিহাস এবং আমাদের দলের সাথে পরিচিত হন।"
                />
                <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
            </Helmet>

            {/* ── Hero Banner ─────────────────────────────────────── */}
            <section className="relative bg-navy overflow-hidden py-24">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 25% 60%, #2A8A8A 0%, transparent 55%), radial-gradient(circle at 80% 20%, #FFB703 0%, transparent 45%)',
                    }}
                />
                <div className="container-custom relative z-10 text-center">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                            <Users className="w-4 h-4 text-gold" />
                            <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">আমাদের সম্পর্কে</span>
                        </span>
                        <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                            বেস্ট পদ্মা এগ্রো ফিডস
                        </h1>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg font-[family-name:var(--font-bengali)] leading-relaxed">
                            রাজশাহীর মাটি থেকে উঠে আসা একটি স্বপ্নের নাম — যা আজ হাজার মৎস্য চাষির জীবিকার ভরসা।
                        </p>
                    </FadeIn>

                    {/* ── Stats row ───────────────────────────────────────── */}
                    <FadeIn delay={0.2} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { num: '১৫+', label: 'বছরের অভিজ্ঞতা' },
                            { num: '২', label: 'শক্তিশালী ব্র্যান্ড' },
                            { num: '১০০+', label: 'ডিলার নেটওয়ার্ক' },
                            { num: '৫টি', label: 'পণ্যের বৈচিত্র্য' },
                        ].map((s) => (
                            <div key={s.label} className="py-5 px-3">
                                <p className="text-gold font-bold text-3xl font-[family-name:var(--font-bengali)]">{s.num}</p>
                                <p className="text-white/60 text-xs mt-1 font-[family-name:var(--font-bengali)]">{s.label}</p>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </section>

            {/* ── CEO Message ─────────────────────────────────────── */}
            <section className="section-padding bg-panelBg">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                            প্রতিষ্ঠাতার বার্তা
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">MD-এর কথা</h2>
                    </FadeIn>

                    <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
                        {/* Photo column */}
                        <FadeIn delay={0.1} className="lg:col-span-2 flex flex-col items-center gap-5">
                            <div className="relative">
                                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-gold/40 shadow-sm">
                                    <img
                                        src={basharPhoto}
                                        alt="মো. খায়রুল বাশার — প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-navy font-bold text-xl font-[family-name:var(--font-bengali)]">{siteConfig.founder}</p>
                                <p className="text-teal text-sm mt-1 font-[family-name:var(--font-bengali)]">{siteConfig.founderTitle}</p>
                                <p className="text-bodyGray/60 text-xs mt-0.5">Best Padma Agro Feeds</p>
                            </div>

                            <div className="flex flex-col gap-2 w-full max-w-xs">
                                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-bodyGray hover:text-gold transition-colors text-sm">
                                    <Phone className="w-4 h-4 text-teal shrink-0" />
                                    <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                                </a>
                                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-bodyGray hover:text-gold transition-colors text-sm">
                                    <Mail className="w-4 h-4 text-teal shrink-0" />
                                    <span>{siteConfig.email}</span>
                                </a>
                            </div>
                        </FadeIn>

                        {/* Message text */}
                        <FadeIn delay={0.2} className="lg:col-span-3">
                            <Quote className="w-12 h-12 text-teal/20 mb-4" />
                            <div className="space-y-5 text-bodyGray font-[family-name:var(--font-bengali)] leading-[1.9] text-[16px]">
                                <p>
                                    বিসমিল্লাহির রাহমানির রাহিম। আমাদের ওয়েবসাইটে আপনাকে স্বাগত জানাই। আমি মো. খায়রুল বাশার — বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের প্রতিষ্ঠাতা।
                                </p>
                                <p>
                                    ২০১০ সালে যখন এই প্রতিষ্ঠান শুরু করি, তখন আমার একটিমাত্র লক্ষ্য ছিল — বাংলাদেশের হাজারো মৎস্য চাষিকে একটি বিশ্বস্ত ও মানসম্পন্ন ফিড সরবরাহ করা। সেই স্বপ্ন আজ বাস্তবে রূপ নিয়েছে।
                                </p>
                                <p>
                                    আমি বিশ্বাস করি, একজন চাষি যখন সকালে পুকুরে ফিড দেন এবং সন্ধ্যায় মাছের বৃদ্ধি দেখে চোখে আনন্দের আলো খেলে, সেটাই আমাদের সবচেয়ে বড় পুরস্কার। আমাদের প্রতিটি কর্মী, ডিলার এবং চাষি ভাই-বোন — এই পরিবারের অংশ।
                                </p>
                                <p>
                                    আমরা প্রতিশ্রুতি দিচ্ছি — আজকে যে উচ্চমান আমরা বজায় রেখেছি, আগামীতে তা আরও উন্নত হবে। গবেষণা, প্রযুক্তি ও আপনাদের বিশ্বাসের উপর ভর দিয়ে চমক ফিশ ফিড এগিয়ে যাবে।
                                </p>
                                <p className="text-bodyGray/60 text-sm font-normal">
                                    আল্লাহ হাফিজ। আপনার মৎস্য চাষ সমৃদ্ধ হোক।
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-border/20 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <p className="text-navy font-bold font-[family-name:var(--font-bengali)]">{siteConfig.founder}</p>
                                    <p className="text-teal text-sm font-[family-name:var(--font-bengali)]">{siteConfig.founderTitle}</p>
                                </div>
                                <Link
                                    to="/ceo"
                                    className="inline-flex items-center gap-1.5 text-gold hover:text-gold/80 text-sm font-[family-name:var(--font-bengali)] transition-colors"
                                >
                                    পূর্ণ পরিচয় পড়ুন
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Company Essay ───────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom max-w-4xl">
                    <FadeIn>
                        <span className="inline-block bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-5 font-[family-name:var(--font-bengali)]">
                            আমাদের গল্প
                        </span>
                        <h2 className="text-navy mb-8 font-[family-name:var(--font-bengali)]">
                            কীভাবে শুরু হলো চমক ফিশ ফিডের যাত্রা
                        </h2>
                    </FadeIn>

                    <div className="space-y-6 text-bodyGray leading-[1.9] text-[17px] font-[family-name:var(--font-bengali)]">
                        <FadeIn delay={0.05}>
                            <p>
                                বাংলাদেশ একটি নদীমাতৃক দেশ — আমাদের সংস্কৃতি, অর্থনীতি এবং খাদ্যাভ্যাস সবকিছুতেই মাছের গভীর ছাপ রয়েছে। কিন্তু এই বিশাল মৎস্য শিল্পের চাষিরা দীর্ঘদিন ধরে যে সমস্যায় ভুগছিলেন তা হলো উচ্চমানের, সাশ্রয়ী এবং বিজ্ঞানসম্মত ফিডের অভাব। এই শূন্যতা পূরণের স্বপ্ন নিয়েই ২০১০ সালে মো. খায়রুল বাশার রাজশাহীতে প্রতিষ্ঠা করেন <strong className="text-navy">বেস্ট পদ্মা এগ্রো ফিডস</strong>।
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p>
                                শুরুটা ছিল ছোট — রাজশাহীর চিনি পট্টি গলির একটি ছোট্ট অফিস, সামান্য পুঁজি, কিন্তু অসীম সংকল্প। প্রথম দিকে স্থানীয় বাজারে চাষিদের কাছে মৎস্য খাদ্যের গুণমান ও বৈজ্ঞানিক পদ্ধতির ব্যাপারে সচেতনতা তৈরি করাই ছিল সবচেয়ে বড় চ্যালেঞ্জ। কিন্তু মো. খায়রুল বাশার হাল ছাড়েননি। তিনি নিজে মাঠে গেছেন, চাষিদের ক্ষেতে গেছেন, তাদের সমস্যা শুনেছেন এবং সমাধান নিয়ে ফিরে এসেছেন।
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.15}>
                            <div className="border-l-4 border-teal pl-6 py-2 bg-mist/30 rounded-r-xl my-8">
                                <p className="text-navy font-semibold text-lg font-[family-name:var(--font-bengali)] leading-relaxed">
                                    "আমাদের লক্ষ্য সবসময় একটাই — মাছ চাষি যেন তার প্রতিটি টাকার সর্বোচ্চ মূল্য পান। ভালো ফিড মানে ভালো উৎপাদন, আর ভালো উৎপাদন মানেই চাষির মুখে হাসি।"
                                </p>
                                <p className="text-teal text-sm mt-3 font-[family-name:var(--font-bengali)]">— মো. খায়রুল বাশার, প্রতিষ্ঠাতা</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p>
                                ২০১৩ সালে আসে বড় মাইলফলক — <strong className="text-navy">চমক ফিশ ফিড</strong> ব্র্যান্ডের আনুষ্ঠানিক যাত্রা শুরু। বিশেষভাবে ফর্মুলেট করা ওয়েল কোটেড ভাসমান ফিড বাজারে আনা হয়, যা স্থানীয় চাষিদের মধ্যে তুমুল সাড়া ফেলে। ভাসমান ফিডের মূল সুবিধা হলো — মাছ যতটুকু খায় ততটুকুই ভাসমান থাকে, ফলে অপচয় নেই এবং পুকুরের পানি দূষিত হয় না।
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.25}>
                            <p>
                                ব্যবসার প্রসারের সাথে সাথে ২০১৭ সালে পুঠিয়া উপজেলার ধোপাপাড়ায় স্থাপিত হয় নিজস্ব কারখানা — <strong className="text-navy">ইনাম ফিড মিল</strong>। আধুনিক যন্ত্রপাতি ও দক্ষ জনবলের সমন্বয়ে এই কারখানায় প্রতিদিন উৎপাদিত হয় টন টন উচ্চমানের ফিশ ফিড। নিজস্ব কারখানা স্থাপনের ফলে পণ্যের মান নিয়ন্ত্রণ আরও নিখুঁত হয়েছে এবং উৎপাদন খরচ কমে এসেছে, যার সুফল পাচ্ছেন সরাসরি চাষিরা।
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p>
                                ২০২০ সালে আসে আরেকটি নতুন অধ্যায় — <strong className="text-navy">বায়োটেক ফিশ ফিড</strong> ব্র্যান্ডের সূচনা। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের বিভিন্ন বৃদ্ধির ধাপে বিশেষভাবে চাহিদা অনুযায়ী ফিড সরবরাহের জন্য এই ব্র্যান্ড তৈরি করা হয়। বায়োটেক ব্র্যান্ডের ফিড প্রিমিয়াম ও ইকোনমি দুটি রেঞ্জে পাওয়া যায়, ফলে ছোট-বড় সব ধরনের চাষির প্রয়োজন মেটানো সম্ভব হয়।
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.35}>
                            <p>
                                আজ, ২০২৫ সালে বেস্ট পদ্মা এগ্রো ফিডস রাজশাহী বিভাগের ১০০ এরও বেশি ডিলারের মাধ্যমে হাজার হাজার চাষির ঘরে পৌঁছে যাচ্ছে। আমাদের দুটি ব্র্যান্ড ও পাঁচটি ভিন্ন পণ্য মিলিয়ে আমরা মৎস্য চাষের প্রতিটি চাহিদাকে পূরণ করতে সক্ষম। এটি কেবল একটি ব্যবসার গল্প নয় — এটি একটি স্বপ্নের গল্প, একটি পরিবারের গল্প, এবং হাজারো মাছ চাষির জীবন বদলে দেওয়ার গল্প।
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Factory Section ──────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <span className="inline-block bg-gold/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-5 font-[family-name:var(--font-bengali)]">
                                আমাদের কারখানা
                            </span>
                            <h2 className="text-navy mb-5 font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</h2>
                            <div className="space-y-4 text-bodyGray font-[family-name:var(--font-bengali)] leading-relaxed">
                                <p>
                                    পুঠিয়া উপজেলার ধোপাপাড়ায় অবস্থিত <strong className="text-navy">ইনাম ফিড মিল</strong> আমাদের উৎপাদনের কেন্দ্রবিন্দু। এই কারখানায় আধুনিক পেলেট মেশিন, মিক্সার, ড্রায়ার এবং গুণমান নিয়ন্ত্রণ ল্যাব রয়েছে।
                                </p>
                                <p>
                                    প্রতিটি ব্যাচ উৎপাদনের আগে কাঁচামালের মান যাচাই করা হয়। উৎপাদনের পর নমুনা পরীক্ষা করে তবেই বাজারে ছাড়া হয়। এই কড়া মান নিয়ন্ত্রণই চমক ফিশ ফিডকে বিশ্বাসযোগ্য করে তুলেছে।
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    { icon: Factory, label: 'আধুনিক উৎপাদন লাইন' },
                                    { icon: MapPin, label: 'কঠোর মান নিয়ন্ত্রণ' },
                                    { icon: Users, label: 'পরিবেশবান্ধব' },
                                    { icon: Factory, label: 'দক্ষ জনবল' },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} className="flex items-center gap-3 p-2">
                                            <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4 text-teal" />
                                            </div>
                                            <span className="text-navy text-sm font-medium font-[family-name:var(--font-bengali)]">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="space-y-4">
                                <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src={feedsPond}
                                        alt="Inam Feed Mill Factory Interior"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex items-start gap-3 p-4">
                                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">কারখানার ঠিকানা</p>
                                        <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{siteConfig.factoryAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Team Members ─────────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                            আমাদের দল
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">যাঁদের নিয়ে আমরা</h2>
                        <p className="text-bodyGray mt-3 max-w-xl mx-auto text-sm font-[family-name:var(--font-bengali)]">
                            প্রতিভাবান ও নিবেদিতপ্রাণ একটি দল প্রতিদিন পরিশ্রম করে চমক ফিশ ফিডকে এগিয়ে নিয়ে যাচ্ছে।
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.07}>
                                <div className="bg-cardBg rounded-card overflow-hidden border border-border/40 shadow-sm card-hover group">
                                    {/* Avatar area */}
                                    <div className={`relative aspect-square bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}>
                                        {member.photo ? (
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 opacity-10"
                                                    style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                                                />
                                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center z-10">
                                                    <span className="text-white font-bold text-3xl">{member.initials}</span>
                                                </div>
                                            </>
                                        )}
                                        {/* Dept badge */}
                                        <span className="absolute top-3 right-3 bg-black/30 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm font-[family-name:var(--font-bengali)]">
                                            {member.dept}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="text-navy font-bold text-base font-[family-name:var(--font-bengali)]">{member.name}</h3>
                                        <p className="text-teal text-xs mt-0.5 mb-1 font-[family-name:var(--font-bengali)]">{member.title}</p>
                                        <p className="text-bodyGray/60 text-xs">{member.nameEn} · {member.titleEn}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
