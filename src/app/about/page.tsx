import type { Metadata } from "next";
import { Users, Award, MapPin, Heart } from "lucide-react";
import CTAStrip from "@/components/sections/CTAStrip";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
    title: "আমাদের সম্পর্কে — বেস্ট পদ্মা এগ্রো ফিডস",
    description:
        "চমক ফিশ ফিড-এর উৎপত্তি, প্রতিষ্ঠাতা মো. খায়রুল বাশার, ইনাম ফিড মিল কারখানা ও আমাদের মিশন-ভিশন সম্পর্কে জানুন।",
};

const timeline = [
    {
        year: "২০১৫",
        title: "যাত্রা শুরু",
        desc: "রাজশাহীর চিনি পট্টি থেকে মো. খায়রুল বাশারের উদ্যোগে বেস্ট পদ্মা এগ্রো ফিডস প্রতিষ্ঠিত হয়।",
    },
    {
        year: "২০১৭",
        title: "কারখানা স্থাপন",
        desc: "পুঠিয়ার ধোপাপাড়ায় ইনাম ফিড মিল স্থাপনের মাধ্যমে নিজস্ব উৎপাদন শুরু হয়।",
    },
    {
        year: "২০১৯",
        title: "চমক ব্র্যান্ড লঞ্চ",
        desc: "চমক ফিশ ফিড মূল ব্র্যান্ড হিসেবে বাজারে আসে, দ্রুত চাষিদের আস্থা অর্জন করে।",
    },
    {
        year: "২০২১",
        title: "বায়োটেক যোগ",
        desc: "বায়োটেক ফিশ ফিড অ্যাসোসিয়েট ব্র্যান্ড হিসেবে যোগ দেয়, পণ্য পরিসর বিস্তার।",
    },
    {
        year: "২০২৪",
        title: "বিস্তার",
        desc: "রাজশাহী বিভাগ জুড়ে ডিলার নেটওয়ার্ক শক্তিশালী হয়, শত শত চাষির বিশ্বাস অর্জন।",
    },
    {
        year: "২০২৬",
        title: "ডিজিটাল যুগ",
        desc: "অনলাইন উপস্থিতি শক্তিশালী করে দেশজুড়ে মৎস্য চাষিদের কাছে পৌঁছানোর লক্ষ্য।",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Heart className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">
                            আমাদের গল্প
                        </span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                        আমাদের সম্পর্কে
                    </h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)]">
                        রাজশাহীর ছোট একটি উদ্যোগ থেকে বাংলাদেশের মৎস্য শিল্পে একটি
                        বিশ্বস্ত নাম।
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-navy mb-4 font-[family-name:var(--font-bengali)]">
                                আমাদের যাত্রার গল্প
                            </h2>
                        </div>
                        <div className="bg-cardBg rounded-[12px] p-8 border border-border/40 shadow-sm">
                            <div className="space-y-5 text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                <p>
                                    বেস্ট পদ্মা এগ্রো ফিডস-এর গর্বিত উদ্যোগ হিসেবে, চমক ফিশ ফিড
                                    বাংলাদেশের মৎস্য চাষ শিল্পে এক নতুন দিগন্ত উন্মোচন করছে।
                                    আমাদের যাত্রা শুরু হয়েছিল চাষিদের মুখে হাসি ফোটানো এবং দেশের
                                    মৎস্য সম্পদের টেকসই উন্নয়ন নিশ্চিত করার এক দৃঢ় অঙ্গীকার নিয়ে।
                                </p>
                                <p>
                                    রাজশাহীর ঐতিহ্যবাহী চিনি পট্টির গলি থেকে পরিচালিত এই প্রতিষ্ঠানটি
                                    আজ তার গুণগত মান এবং বিশ্বস্ততার জন্য চাষিদের আস্থার প্রতীকে
                                    পরিণত হয়েছে। আমাদের প্রতিটি পণ্যের পেছনে রয়েছে আধুনিক গবেষণা
                                    এবং উন্নত প্রযুক্তির সমন্বয়।
                                </p>
                                <p>
                                    আমরা পুঠিয়ার ধোপাপাড়ায় অবস্থিত আমাদের নিজস্ব অত্যাধুনিক কারখানা
                                    ইনাম ফিড মিলে অত্যন্ত যত্নসহকারে প্রতিটি পণ্য উৎপাদন করি। এই
                                    কারখানায় আধুনিক যন্ত্রপাতি ও দক্ষ জনবল ব্যবহার করে নিরাপদ ও
                                    পুষ্টিকর মৎস্য খাদ্য তৈরি করা হয়।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Profile */}
            <section className="section-padding bg-mist/40">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-navy mb-10 text-center font-[family-name:var(--font-bengali)]">
                            প্রতিষ্ঠাতার পরিচয়
                        </h2>
                        <div className="bg-cardBg rounded-[12px] p-8 border border-border/40 shadow-sm">
                            <div className="flex flex-col sm:flex-row gap-8 items-start">
                                {/* Avatar */}
                                <div className="shrink-0 mx-auto sm:mx-0">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                        খ
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <h3 className="text-navy font-bold text-xl mb-1 font-[family-name:var(--font-bengali)]">
                                        {siteConfig.founder}
                                    </h3>
                                    <p className="text-teal text-sm font-medium mb-4 font-[family-name:var(--font-bengali)]">
                                        {siteConfig.founderTitle}
                                    </p>
                                    <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)] mb-4">
                                        মো. খায়রুল বাশার-এর সুদক্ষ নেতৃত্বে এবং দীর্ঘ অভিজ্ঞতায়
                                        চমক ফিশ ফিড আজ গুণগত মান বজায় রাখতে বদ্ধপরিকর। তিনি বিশ্বাস
                                        করেন যে, একটি সমৃদ্ধ জাতি গঠনে নিরাপদ এবং পুষ্টিকর মৎস্য
                                        খাদ্যের কোনো বিকল্প নেই।
                                    </p>
                                    <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                        তাঁর নেতৃত্বে চমক ফিশ ফিড মাছের জাত ও বয়স ভেদে প্রোটিন,
                                        ফ্যাট এবং প্রয়োজনীয় ভিটামিনের সঠিক ভারসাম্য নিশ্চিত করে,
                                        যা মাছের দ্রুত বৃদ্ধি এবং চাষিদের সর্বোচ্চ মুনাফা অর্জনে
                                        সরাসরি সহায়তা করে।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory Section */}
            <section className="section-padding bg-panelBg">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-navy mb-10 text-center font-[family-name:var(--font-bengali)]">
                            আমাদের কারখানা
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="aspect-[4/3] bg-gradient-to-br from-teal/20 to-steel/20 rounded-[12px] flex items-center justify-center border border-border/30">
                                <div className="text-center p-6">
                                    <div className="text-6xl mb-3">🏭</div>
                                    <p className="text-navy font-bold font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</p>
                                    <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">ধোপাপাড়া, পুঠিয়া</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-5">
                                <div>
                                    <h3 className="text-navy font-bold text-lg mb-3 font-[family-name:var(--font-bengali)]">
                                        ইনাম ফিড মিল, পুঠিয়া
                                    </h3>
                                    <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                        আমাদের অत্যাধুনিক কারখানাটি রাজশাহীর পুঠিয়া উপজেলার ধোপাপাড়ায়
                                        অবস্থিত। এখানে সর্বাধুনিক যন্ত্রপাতি ও দক্ষ জনবলের মাধ্যমে
                                        প্রতিদিন উচ্চমানের মৎস্য খাদ্য উৎপাদিত হয়।
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "⚙️", label: "আধুনিক যন্ত্রপাতি" },
                                        { icon: "🔬", label: "মান নিয়ন্ত্রণ ল্যাব" },
                                        { icon: "🌱", label: "তাজা উপাদান" },
                                        { icon: "📦", label: "নিজস্ব গুদামঘর" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-mist/50 rounded-xl p-3 text-center border border-border/30"
                                        >
                                            <div className="text-2xl mb-1">{item.icon}</div>
                                            <p className="text-navy text-xs font-medium font-[family-name:var(--font-bengali)]">
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                                    <MapPin className="w-4 h-4 text-teal shrink-0" />
                                    {siteConfig.factoryAddress}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-navy mb-10 text-center font-[family-name:var(--font-bengali)]">
                            আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-cardBg rounded-[12px] p-8 border-t-4 border-t-teal border border-border/40 shadow-sm">
                                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-5">
                                    <Award className="w-6 h-6 text-teal" />
                                </div>
                                <h3 className="text-navy font-bold text-lg mb-3 font-[family-name:var(--font-bengali)]">
                                    আমাদের মিশন
                                </h3>
                                <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                    বাংলাদেশের মৎস্য চাষিদের জন্য সর্বোচ্চ মানের, সাশ্রয়ী ও
                                    পুষ্টিকর মৎস্য খাদ্য সরবরাহ করা এবং তাদের উৎপাদনশীলতা ও
                                    মুনাফা বাড়াতে সহায়তা করা।
                                </p>
                            </div>
                            <div className="bg-cardBg rounded-[12px] p-8 border-t-4 border-t-gold border border-border/40 shadow-sm">
                                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                                    <Users className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="text-navy font-bold text-lg mb-3 font-[family-name:var(--font-bengali)]">
                                    আমাদের ভিশন
                                </h3>
                                <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                    বাংলাদেশের শীর্ষস্থানীয় মৎস্য খাদ্য ব্র্যান্ড হিসেবে
                                    প্রতিষ্ঠিত হওয়া এবং পরিবেশবান্ধব উৎপাদন পদ্ধতির মাধ্যমে
                                    দেশের মৎস্য সম্পদের টেকসই উন্নয়নে অবদান রাখা।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Timeline */}
            <section className="section-padding bg-mist/40">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-navy mb-12 text-center font-[family-name:var(--font-bengali)]">
                            আমাদের যাত্রার ইতিহাস
                        </h2>
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/60" />

                            <div className="space-y-8">
                                {timeline.map((item, i) => (
                                    <div key={i} className="flex gap-6 relative">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-navy text-gold font-bold text-xs flex items-center justify-center z-10 relative shadow-md font-[family-name:var(--font-bengali)]">
                                            {item.year.substring(2)}
                                        </div>
                                        <div className="flex-1 bg-cardBg rounded-[12px] p-5 border border-border/40 shadow-sm mt-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-teal text-xs font-semibold font-[family-name:var(--font-bengali)]">
                                                    {item.year}
                                                </span>
                                                <span className="w-1 h-1 bg-border rounded-full" />
                                                <h4 className="text-navy font-bold text-sm font-[family-name:var(--font-bengali)]">
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
