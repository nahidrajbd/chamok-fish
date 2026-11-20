import Seo from '@/components/Seo';
import {
    Users, Factory, MapPin, Phone, Mail,
    ChevronRight, ShieldCheck, Leaf,
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
        dept: 'নেতৃত্ব',
        photo: basharPhoto,
    },
    {
        name: 'মো. রফিকুল ইসলাম',
        nameEn: 'Md. Rafiqul Islam',
        title: 'বিক্রয় ব্যবস্থাপক',
        titleEn: 'Sales Manager',
        initials: 'RI',
        dept: 'বিক্রয় ও বিপণন',
        photo: null,
    },
    {
        name: 'মো. আনোয়ার হোসেন',
        nameEn: 'Md. Anwar Hossain',
        title: 'কারখানা সুপারভাইজার',
        titleEn: 'Factory Supervisor',
        initials: 'AH',
        dept: 'উৎপাদন',
        photo: null,
    },
    {
        name: 'মোছা. শাহিনা বেগম',
        nameEn: 'Mst. Shahina Begum',
        title: 'মান নিয়ন্ত্রণ কর্মকর্তা',
        titleEn: 'Quality Control Officer',
        initials: 'SB',
        dept: 'মান নিয়ন্ত্রণ',
        photo: null,
    },
    {
        name: 'মো. জাহিদুল ইসলাম',
        nameEn: 'Md. Zahidul Islam',
        title: 'হিসাব রক্ষণ কর্মকর্তা',
        titleEn: 'Accounts Officer',
        initials: 'ZI',
        dept: 'অর্থ ও হিসাব',
        photo: null,
    },
    {
        name: 'মো. মামুনুর রশিদ',
        nameEn: 'Md. Mamunur Rashid',
        title: 'ডিলার সম্পর্ক ব্যবস্থাপক',
        titleEn: 'Dealer Relations Manager',
        initials: 'MR',
        dept: 'ডিলার নেটওয়ার্ক',
        photo: null,
    },
];

/* ══════════════════════════════════════════════════════════════ */
export default function AboutPage() {

    return (
        <>
            <Seo title="আমাদের সম্পর্কে | About Chamok Fish Feed, Best Padma Agro Feeds" description="বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের পূর্ণ পরিচয় — প্রতিষ্ঠাতা, কারখানা, ব্র্যান্ড ইতিহাস এবং আমাদের দলের সাথে পরিচিত হন।" path="/about" />

            {/* ── Hero Banner ─────────────────────────────────────── */}
            <section className="bg-navy py-20">
                <div className="container-custom text-center">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-5 mx-auto" />
                    <h1 className="text-white font-semibold mb-4 font-[family-name:var(--font-bengali)]">
                        বেস্ট পদ্মা এগ্রো ফিডস
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg font-[family-name:var(--font-bengali)] leading-relaxed">
                        রাজশাহীর মাটি থেকে উঠে আসা একটি স্বপ্নের নাম, যা আজ হাজারো মৎস্য চাষির জীবিকার ভরসা।
                    </p>

                    {/* ── Facts row (from the company's own story below) ── */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { num: '২০১০', label: 'প্রতিষ্ঠা সাল' },
                            { num: '২', label: 'ব্র্যান্ড' },
                            { num: '৫টি', label: 'পণ্য' },
                            { num: '১টি', label: 'নিজস্ব কারখানা' },
                        ].map((s) => (
                            <div key={s.label} className="py-5 px-3">
                                <p className="text-gold font-semibold text-3xl font-[family-name:var(--font-bengali)]">{s.num}</p>
                                <p className="text-white/60 text-xs mt-1 font-[family-name:var(--font-bengali)]">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CEO Message ─────────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                        <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">MD-এর কথা</h2>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
                        {/* Photo column */}
                        <div className="lg:col-span-2 flex flex-col items-center gap-5">
                            <div className="w-52 h-52 rounded-full overflow-hidden border border-navy/10">
                                <img
                                    src={basharPhoto}
                                    alt="মো. খায়রুল বাশার — প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="text-center">
                                <p className="text-navy font-semibold text-xl font-[family-name:var(--font-bengali)]">{siteConfig.founder}</p>
                                <p className="text-teal text-sm mt-1 font-[family-name:var(--font-bengali)]">{siteConfig.founderTitle}</p>
                                <p className="text-bodyGray/60 text-xs mt-0.5">Best Padma Agro Feeds</p>
                            </div>

                            <div className="flex flex-col gap-2 w-full max-w-xs">
                                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-bodyGray hover:text-teal transition-colors text-sm">
                                    <Phone className="w-4 h-4 text-teal shrink-0" />
                                    <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                                </a>
                                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-bodyGray hover:text-teal transition-colors text-sm">
                                    <Mail className="w-4 h-4 text-teal shrink-0" />
                                    <span>{siteConfig.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* Message text */}
                        <div className="lg:col-span-3">
                            <div className="space-y-5 text-bodyGray font-[family-name:var(--font-bengali)] leading-[1.9] text-[16px]">
                                <p>
                                    বিসমিল্লাহির রাহমানির রাহিম। আমাদের ওয়েবসাইটে আপনাকে স্বাগত জানাই। আমি মো. খায়রুল বাশার, বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের প্রতিষ্ঠাতা।
                                </p>
                                <p>
                                    ২০১০ সালে যখন এই প্রতিষ্ঠান শুরু করি, তখন আমার একটিমাত্র লক্ষ্য ছিল, বাংলাদেশের হাজারো মৎস্য চাষিকে একটি বিশ্বস্ত ও মানসম্পন্ন ফিড সরবরাহ করা। সেই স্বপ্ন আজ বাস্তবে রূপ নিয়েছে।
                                </p>
                                <p>
                                    আমি বিশ্বাস করি, একজন চাষি যখন সকালে পুকুরে ফিড দেন এবং সন্ধ্যায় মাছের বৃদ্ধি দেখে চোখে আনন্দের আলো খেলে, সেটাই আমাদের সবচেয়ে বড় পুরস্কার। আমাদের প্রতিটি কর্মী, ডিলার এবং চাষি ভাই-বোন এই পরিবারের অংশ।
                                </p>
                                <p>
                                    আমরা প্রতিশ্রুতি দিচ্ছি, আজকে যে উচ্চমান আমরা বজায় রেখেছি, আগামীতে তা আরও উন্নত হবে। গবেষণা, প্রযুক্তি ও আপনাদের বিশ্বাসের উপর ভর দিয়ে চমক ফিশ ফিড এগিয়ে যাবে।
                                </p>
                                <p className="text-bodyGray/60 text-sm font-normal">
                                    আল্লাহ হাফিজ। আপনার মৎস্য চাষ সমৃদ্ধ হোক।
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <p className="text-navy font-semibold font-[family-name:var(--font-bengali)]">{siteConfig.founder}</p>
                                    <p className="text-teal text-sm font-[family-name:var(--font-bengali)]">{siteConfig.founderTitle}</p>
                                </div>
                                <Link
                                    to="/ceo"
                                    className="inline-flex items-center gap-1.5 text-teal hover:text-[#236f6f] text-sm font-semibold font-[family-name:var(--font-bengali)] transition-colors"
                                >
                                    পূর্ণ পরিচয় পড়ুন
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Company Essay ───────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom max-w-4xl">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                    <h2 className="text-navy font-semibold mb-8 font-[family-name:var(--font-bengali)]">
                        কীভাবে শুরু হলো চমক ফিশ ফিডের যাত্রা
                    </h2>

                    <div className="space-y-6 text-bodyGray leading-[1.9] text-[17px] font-[family-name:var(--font-bengali)]">
                        <p>
                            বাংলাদেশ একটি নদীমাতৃক দেশ, আমাদের সংস্কৃতি, অর্থনীতি এবং খাদ্যাভ্যাস সবকিছুতেই মাছের গভীর ছাপ রয়েছে। কিন্তু এই বিশাল মৎস্য শিল্পের চাষিরা দীর্ঘদিন ধরে যে সমস্যায় ভুগছিলেন তা হলো উচ্চমানের, সাশ্রয়ী এবং বিজ্ঞানসম্মত ফিডের অভাব। এই শূন্যতা পূরণের স্বপ্ন নিয়েই ২০১০ সালে মো. খায়রুল বাশার রাজশাহীতে প্রতিষ্ঠা করেন <strong className="text-navy">বেস্ট পদ্মা এগ্রো ফিডস</strong>।
                        </p>
                        <p>
                            শুরুটা ছিল ছোট, রাজশাহীর চিনি পট্টি গলির একটি ছোট্ট অফিস, সামান্য পুঁজি, কিন্তু অসীম সংকল্প। প্রথম দিকে স্থানীয় বাজারে চাষিদের কাছে মৎস্য খাদ্যের গুণমান ও বৈজ্ঞানিক পদ্ধতির ব্যাপারে সচেতনতা তৈরি করাই ছিল সবচেয়ে বড় চ্যালেঞ্জ। কিন্তু মো. খায়রুল বাশার হাল ছাড়েননি। তিনি নিজে মাঠে গেছেন, চাষিদের ক্ষেতে গেছেন, তাদের সমস্যা শুনেছেন এবং সমাধান নিয়ে ফিরে এসেছেন।
                        </p>
                        <div className="border-l-[3px] border-gold pl-6 py-1 my-8">
                            <p className="text-navy font-semibold text-lg font-[family-name:var(--font-bengali)] leading-relaxed">
                                "আমাদের লক্ষ্য সবসময় একটাই, মাছ চাষি যেন তার প্রতিটি টাকার সর্বোচ্চ মূল্য পান। ভালো ফিড মানে ভালো উৎপাদন, আর ভালো উৎপাদন মানেই চাষির মুখে হাসি।"
                            </p>
                            <p className="text-teal text-sm mt-3 font-[family-name:var(--font-bengali)]">— মো. খায়রুল বাশার, প্রতিষ্ঠাতা</p>
                        </div>
                        <p>
                            ২০১৩ সালে আসে বড় মাইলফলক, <strong className="text-navy">চমক ফিশ ফিড</strong> ব্র্যান্ডের আনুষ্ঠানিক যাত্রা শুরু। বিশেষভাবে ফর্মুলেট করা ওয়েল কোটেড ভাসমান ফিড বাজারে আনা হয়, যা স্থানীয় চাষিদের মধ্যে তুমুল সাড়া ফেলে। ভাসমান ফিডের মূল সুবিধা হলো, মাছ যতটুকু খায় ততটুকুই ভাসমান থাকে, ফলে অপচয় কম হয় এবং পুকুরের পানি দূষিত হয় না।
                        </p>
                        <p>
                            ব্যবসার প্রসারের সাথে সাথে ২০১৭ সালে পুঠিয়া উপজেলার ধোপাপাড়ায় স্থাপিত হয় নিজস্ব কারখানা, <strong className="text-navy">ইনাম ফিড মিল</strong>। আধুনিক যন্ত্রপাতি ও দক্ষ জনবলের সমন্বয়ে এই কারখানায় প্রতিদিন উৎপাদিত হয় টন টন উচ্চমানের ফিশ ফিড। নিজস্ব কারখানা স্থাপনের ফলে পণ্যের মান নিয়ন্ত্রণ আরও নিখুঁত হয়েছে এবং উৎপাদন খরচ কমে এসেছে, যার সুফল পাচ্ছেন সরাসরি চাষিরা।
                        </p>
                        <p>
                            ২০২০ সালে আসে আরেকটি নতুন অধ্যায়, <strong className="text-navy">বায়োটেক ফিশ ফিড</strong> ব্র্যান্ডের সূচনা। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের বিভিন্ন বৃদ্ধির ধাপে বিশেষভাবে চাহিদা অনুযায়ী ফিড সরবরাহের জন্য এই ব্র্যান্ড তৈরি করা হয়। বায়োটেক ব্র্যান্ডের ফিড প্রিমিয়াম ও ইকোনমি দুটি রেঞ্জে পাওয়া যায়, ফলে ছোট-বড় সব ধরনের চাষির প্রয়োজন মেটানো সম্ভব হয়।
                        </p>
                        <p>
                            আজ, ২০২৫ সালে বেস্ট পদ্মা এগ্রো ফিডস রাজশাহী বিভাগের ১০০ এরও বেশি ডিলারের মাধ্যমে হাজার হাজার চাষির ঘরে পৌঁছে যাচ্ছে। আমাদের দুটি ব্র্যান্ড ও পাঁচটি ভিন্ন পণ্য মিলিয়ে আমরা মৎস্য চাষের প্রতিটি চাহিদাকে পূরণ করতে সক্ষম। এটি কেবল একটি ব্যবসার গল্প নয়, এটি একটি স্বপ্নের গল্প, একটি পরিবারের গল্প, এবং হাজারো মাছ চাষির জীবন বদলে দেওয়ার গল্প।
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Factory Section ──────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                            <h2 className="text-navy font-semibold mb-5 font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</h2>
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
                                    { icon: ShieldCheck, label: 'কঠোর মান নিয়ন্ত্রণ' },
                                    { icon: Leaf, label: 'পরিবেশবান্ধব' },
                                    { icon: Users, label: 'দক্ষ জনবল' },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-teal" />
                                            </div>
                                            <span className="text-navy text-sm font-medium font-[family-name:var(--font-bengali)]">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="aspect-video rounded-xl overflow-hidden border border-navy/10">
                                <img
                                    src={feedsPond}
                                    alt="Inam Feed Mill Factory Interior"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex items-start gap-3 px-1">
                                <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">কারখানার ঠিকানা</p>
                                    <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{siteConfig.factoryAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Team Members ─────────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                        <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">যাঁদের নিয়ে আমরা</h2>
                        <p className="text-bodyGray mt-3 max-w-xl mx-auto text-sm font-[family-name:var(--font-bengali)]">
                            প্রতিভাবান ও নিবেদিতপ্রাণ একটি দল প্রতিদিন পরিশ্রম করে চমক ফিশ ফিডকে এগিয়ে নিয়ে যাচ্ছে।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member) => (
                            <div key={member.name} className="bg-white rounded-xl overflow-hidden border border-navy/10">
                                {/* Avatar area */}
                                <div className="relative h-44 bg-navy flex items-center justify-center overflow-hidden">
                                    {member.photo ? (
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <span className="text-white font-semibold text-3xl">{member.initials}</span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-navy font-semibold text-base font-[family-name:var(--font-bengali)]">{member.name}</h3>
                                    <p className="text-teal text-xs mt-0.5 mb-1 font-[family-name:var(--font-bengali)]">{member.title}</p>
                                    <p className="text-bodyGray/60 text-xs">{member.nameEn} · {member.titleEn}</p>
                                    <p className="text-bodyGray text-xs mt-2 font-[family-name:var(--font-bengali)]">{member.dept}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
