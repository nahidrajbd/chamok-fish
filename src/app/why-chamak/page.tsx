import type { Metadata } from "next";
import { Droplets, TrendingUp, Leaf, MapPin, CheckCircle } from "lucide-react";
import CTAStrip from "@/components/sections/CTAStrip";

export const metadata: Metadata = {
    title: "কেন চমক? — চমক ফিশ ফিডের বিশেষত্ব",
    description:
        "চমক ফিশ ফিড কেন সেরা? ওয়েল কোটেড ভাসমান ফিড, কম FCR, পরিবেশবান্ধব উৎপাদন ও স্থানীয় তাজা স্টকের বিস্তারিত সুবিধা জানুন।",
};

const benefits = [
    {
        id: "oil-coated",
        icon: Droplets,
        title: "ওয়েল কোটেড ভাসমান ফিড",
        subtitle: "আমাদের সবচেয়ে জনপ্রিয় বৈশিষ্ট্য",
        color: "bg-teal",
        lightColor: "bg-teal/10",
        textColor: "text-teal",
        points: [
            "তেলে মিশ্রিত ফিড মাছের শক্তির চাহিদা পূরণ করে",
            "পানিতে ভাসা অবস্থায় মাছের খাওয়ার সুযোগ তৈরি করে",
            "খাদ্যের অপচয় শূন্যের কাছাকাছি নামিয়ে আনে",
            "পানির গুণগত মান ভালো রাখে",
            "মাছের বৃদ্ধির হার উল্লেখযোগ্যভাবে বৃদ্ধি পায়",
        ],
        desc: "আমাদের তেল-মিশ্রিত (Oil Coated) ভাসমান ফিড মাছের পক্ষে হজম করা অত্যন্ত সহজ এবং শক্তিসমৃদ্ধ। এই ফিড পানির উপরে থাকে বলে মাছ সহজেই খেতে পারে এবং কোনো খাবার পানির তলানিতে পড়ে নষ্ট হয় না।",
    },
    {
        id: "low-fcr",
        icon: TrendingUp,
        title: "কম FCR — বেশি লাভ",
        subtitle: "ফুড কনভার্সন রেশিও",
        color: "bg-gold",
        lightColor: "bg-gold/10",
        textColor: "text-gold",
        points: [
            "মাছের ওজন বৃদ্ধিতে কম খাবারের প্রয়োজন",
            "খরচ উল্লেখযোগ্যভাবে হ্রাস পায়",
            "মাছ দ্রুত বাজারযোগ্য ওজনে পৌঁছায়",
            "খামারের মুনাফা সর্বোচ্চ হয়",
            "একই খরচে বেশি উৎপাদন সম্ভব",
        ],
        desc: "FCR (Food Conversion Ratio) হল কতটুকু খাবার খেলে মাছ ১ কেজি ওজন বাড়ায়। আমাদের ফিডে FCR অন্য ব্র্যান্ডের তুলনায় উল্লেখযোগ্যভাবে কম, যার মানে একই বিনিয়োগে আপনি অনেক বেশি মাছ পাবেন।",
    },
    {
        id: "environment",
        icon: Leaf,
        title: "পরিবেশবান্ধব উৎপাদন",
        subtitle: "জলাশয় ও পরিবেশ সুরক্ষা",
        color: "bg-steel",
        lightColor: "bg-steel/10",
        textColor: "text-steel",
        points: [
            "পানি দূষণ সর্বনিম্ন পর্যায়ে রাখে",
            "জলাশয়ের জৈব-রাসায়নিক ভারসাম্য বজায় থাকে",
            "অপচয় রোধ করে পরিবেশ রক্ষা",
            "প্রাকৃতিক উপাদান ব্যবহার",
            "ক্ষতিকর রাসায়নিক মুক্ত ফর্মুলা",
        ],
        desc: "চমক ফিশ ফিড আপনার পুকুর বা জলাশয়ের পরিবেশ রক্ষায় বিশেষ ভূমিকা পালন করে। আমাদের ফিড পানিতে সহজে দ্রবীভূত হয় না, ফলে পানির অক্সিজেন মাত্রা স্বাভাবিক থাকে এবং মাছের স্বাস্থ্য ভালো থাকে।",
    },
    {
        id: "local",
        icon: MapPin,
        title: "স্থানীয় উৎপাদন, তাজা স্টক",
        subtitle: "রাজশাহী থেকে সরাসরি",
        color: "bg-navy",
        lightColor: "bg-navy/10",
        textColor: "text-navy",
        points: [
            "রাজশাহীর নিজস্ব কারখানায় উৎপাদিত",
            "সর্বদা তাজা ও মানসম্পন্ন পণ্য",
            "দীর্ঘ পরিবহনে গুণগত মান নষ্ট হয় না",
            "স্থানীয় চাষিদের প্রয়োজন বোঝা সম্ভব",
            "দ্রুত সরবরাহ নিশ্চিত",
        ],
        desc: "আমাদের কারখানা রাজশাহীর পুঠিয়ায় স্থাপিত হওয়ায় স্থানীয় চাষিরা সর্বদা তাজা পণ্য পান। মাঝারি পরিবহন দূরত্বের কারণে পণ্যের গুণগত মান সম্পূর্ণ অক্ষুণ্ণ থাকে।",
    },
];

export default function WhyChamakPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                        কেন চমক ফিশ ফিড?
                    </h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)]">
                        আমাদের ৪টি মূল সুবিধা যা চমক ফিশ ফিডকে অন্যদের থেকে আলাদা করে
                        তোলে।
                    </p>
                </div>
            </section>

            {/* Benefits Sections */}
            {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                const isEven = i % 2 === 0;
                return (
                    <section
                        key={benefit.id}
                        className={`section-padding ${isEven ? "bg-pageBg" : "bg-panelBg"}`}
                    >
                        <div className="container-custom">
                            <div
                                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""
                                    }`}
                            >
                                {/* Visual */}
                                <div className={!isEven ? "lg:col-start-2" : ""}>
                                    <div
                                        className={`aspect-square max-w-sm mx-auto rounded-[12px] ${benefit.lightColor} border border-border/30 flex flex-col items-center justify-center p-8 text-center`}
                                    >
                                        <div
                                            className={`w-20 h-20 ${benefit.color} rounded-[12px] flex items-center justify-center mb-6 shadow-lg`}
                                        >
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className={`${benefit.textColor} font-bold text-xl mb-2 font-[family-name:var(--font-bengali)]`}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                                            {benefit.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                                    <span
                                        className={`inline-block ${benefit.lightColor} ${benefit.textColor} text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]`}
                                    >
                                        সুবিধা {String(i + 1).padStart(2, "০")}
                                    </span>
                                    <h2 className="text-navy mb-4 font-[family-name:var(--font-bengali)]">
                                        {benefit.title}
                                    </h2>
                                    <p className="text-bodyGray leading-relaxed mb-6 font-[family-name:var(--font-bengali)]">
                                        {benefit.desc}
                                    </p>

                                    {/* Points List */}
                                    <ul className="space-y-3">
                                        {benefit.points.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <CheckCircle
                                                    className={`w-5 h-5 ${benefit.textColor} shrink-0 mt-0.5`}
                                                />
                                                <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <CTAStrip />
        </>
    );
}
