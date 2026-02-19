import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Quote } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import basharPhoto from '@/images/bashar.png';
import CTAStrip from '@/components/sections/CTAStrip';

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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function CeoPage() {
    return (
        <>
            <Helmet>
                <title>মো. খায়রুল বাশার — প্রতিষ্ঠাতা | চমক ফিশ ফিড</title>
                <meta
                    name="description"
                    content="মো. খায়রুল বাশার — বেস্ট পদ্মা এগ্রো ফিডস ও চমক ফিশ ফিডের প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক। তাঁর জীবনী, উদ্যোক্তা যাত্রা এবং দর্শন সম্পর্কে জানুন।"
                />
                <link rel="canonical" href={`${siteConfig.siteUrl}/ceo`} />
            </Helmet>

            {/* ── Thin top bar ────────────────────────────────── */}
            <div className="bg-navy h-1 w-full" />

            {/* ── Hero: Photo + Identity ───────────────────────── */}
            <section className="bg-pageBg pt-16 pb-0">
                <div className="container-custom max-w-4xl">
                    <FadeIn className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

                        {/* Photo */}
                        <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
                            <div className="w-52 h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl border border-border/40">
                                <img
                                    src={basharPhoto}
                                    alt="মো. খায়রুল বাশার"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Contact pills */}
                            <div className="flex flex-col gap-2 w-full">
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="flex items-center gap-2.5 text-sm text-bodyGray hover:text-teal transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-teal shrink-0" />
                                    <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                                </a>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-center gap-2.5 text-sm text-bodyGray hover:text-teal transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-teal shrink-0" />
                                    <span>{siteConfig.email}</span>
                                </a>
                                <a
                                    href={siteConfig.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-sm text-bodyGray hover:text-[#1877F2] transition-colors"
                                >
                                    <Facebook className="w-4 h-4 text-[#1877F2] shrink-0" />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Identity */}
                        <div className="flex-1 pt-2">
                            <p className="text-teal text-sm font-medium tracking-widest uppercase mb-3">
                                Founder & Managing Director
                            </p>
                            <h1 className="text-navy font-bold leading-tight mb-2 font-[family-name:var(--font-bengali)]">
                                মো. খায়রুল বাশার
                            </h1>
                            <p className="text-bodyGray/60 text-sm mb-5 font-[family-name:var(--font-bengali)]">
                                প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক, বেস্ট পদ্মা এগ্রো ফিডস
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-teal mb-5 rounded-full" />

                            <p className="text-bodyGray leading-[1.85] font-[family-name:var(--font-bengali)] text-[16px]">
                                রাজশাহীর একজন দূরদর্শী উদ্যোক্তা যিনি বাংলাদেশের মৎস্য শিল্পে বিপ্লব আনার স্বপ্ন নিয়ে ২০১০ সালে প্রতিষ্ঠা করেছিলেন বেস্ট পদ্মা এগ্রো ফিডস। তাঁর নেতৃত্বে চমক ফিশ ফিড আজ রাজশাহী বিভাগের হাজারো মৎস্য চাষির বিশ্বস্ত সঙ্গী।
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {['উদ্যোক্তা', 'মৎস্য শিল্প', 'রাজশাহী', '১৫+ বছরের অভিজ্ঞতা', 'দুটি ব্র্যান্ড'].map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-mist text-navy/70 text-xs px-3 py-1.5 rounded-full font-[family-name:var(--font-bengali)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Essay ────────────────────────────────────────── */}
            <section className="py-16 bg-pageBg">
                <div className="container-custom max-w-3xl">

                    {/* Pull quote */}
                    <FadeIn className="my-10">
                        <div className="border-l-4 border-teal pl-6 py-1">
                            <Quote className="w-7 h-7 text-teal/30 mb-3" />
                            <p className="text-navy font-semibold text-xl leading-relaxed font-[family-name:var(--font-bengali)]">
                                "মাছ চাষির মুখে হাসি দেখাই আমার সবচেয়ে বড় পুরস্কার।"
                            </p>
                            <p className="text-teal text-sm mt-3 font-[family-name:var(--font-bengali)]">— মো. খায়রুল বাশার</p>
                        </div>
                    </FadeIn>

                    {/* Long-form essay */}
                    <div className="space-y-6 text-bodyGray leading-[1.95] text-[17px] font-[family-name:var(--font-bengali)]">

                        <FadeIn delay={0.05}>
                            <h2 className="text-navy text-2xl font-bold mb-4 font-[family-name:var(--font-bengali)]">শুরুর গল্প</h2>
                            <p>
                                মো. খায়রুল বাশারের জন্ম ও বেড়ে ওঠা রাজশাহীতে — পদ্মার তীরের এই শহর তাঁর চিন্তা ও স্বপ্নের গভীরে মিশে আছে। ছোটবেলা থেকেই তিনি দেখেছেন কৃষক ও মৎস্যজীবীদের অক্লান্ত পরিশ্রম এবং তাদের জীবনের অনিশ্চয়তা। এই অভিজ্ঞতাই তাঁর মধ্যে জন্ম দিয়েছিল একটি গভীর প্রশ্ন — কীভাবে এই পরিশ্রমী মানুষগুলোর জীবনকে আরও ভালো করা যায়?
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <p>
                                কর্মজীবনের শুরুতে তিনি বিভিন্ন কৃষি সংশ্লিষ্ট ব্যবসায় কাজ করেন এবং বাংলাদেশের মৎস্য চাষ শিল্পের বিশাল সম্ভাবনা ও একই সাথে মানসম্পন্ন ফিডের অভাব লক্ষ্য করেন। তিনি দেখলেন — চাষিরা পুকুরে হাজার হাজার টাকা বিনিয়োগ করছেন, কিন্তু নিম্নমানের ফিডের কারণে প্রত্যাশিত উৎপাদন পাচ্ছেন না। এই বাস্তবতাই তাঁকে উদ্যোক্তা হওয়ার সিদ্ধান্ত নিতে অনুপ্রাণিত করে।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="text-navy text-2xl font-bold mb-4 pt-4 font-[family-name:var(--font-bengali)]">বেস্ট পদ্মা এগ্রো ফিডস প্রতিষ্ঠা</h2>
                            <p>
                                ২০১০ সালে সীমিত পুঁজি কিন্তু অসীম আত্মবিশ্বাস নিয়ে মো. খায়রুল বাশার প্রতিষ্ঠা করেন <strong className="text-navy">বেস্ট পদ্মা এগ্রো ফিডস</strong>। রাজশাহীর চিনি পট্টি গলির একটি ছোট্ট অফিস থেকে শুরু হয় এই যাত্রা। প্রথম দিনগুলো ছিল কঠিন — স্থানীয় চাষিদের কাছে উন্নত মানের ফিডের ধারণা বোঝানো, বাজারে নিজের জায়গা করে নেওয়া, এবং সীমিত সম্পদে ব্যবসা পরিচালনা করা।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <p>
                                কিন্তু মো. খায়রুল বাশার বিশ্বাস করেন যে সততা ও মানের সাথে কোনো আপোস নেই। তিনি নিজে মাঠে গেছেন, প্রতিটি পুকুরে গেছেন, প্রতিটি চাষির সাথে কথা বলেছেন। ফলে তৈরি হয়েছে এক অটুট বিশ্বাসের সম্পর্ক — যা আজও চমক ফিশ ফিডের সবচেয়ে বড় সম্পদ।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.14}>
                            <h2 className="text-navy text-2xl font-bold mb-4 pt-4 font-[family-name:var(--font-bengali)]">উদ্ভাবন ও সম্প্রসারণ</h2>
                            <p>
                                ২০১৩ সালে তাঁর নেতৃত্বে বাজারে আসে <strong className="text-navy">চমক ফিশ ফিড</strong> — বিশেষভাবে ফর্মুলেট করা ওয়েল কোটেড ভাসমান ফিড। এই পণ্য মৎস্য চাষিদের মধ্যে তাৎক্ষণিক সাড়া ফেলে। ভাসমান ফিডের অনন্য সুবিধা — কম অপচয়, পরিষ্কার পুকুর এবং দ্রুত মাছের বৃদ্ধি — চাষিদের বিশ্বাস অর্জনে সহায়ক হয়।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.16}>
                            <p>
                                ব্যবসার ক্রমবর্ধমান চাহিদা পূরণে ২০১৭ সালে পুঠিয়া উপজেলার ধোপাপাড়ায় স্থাপন করা হয় নিজস্ব উৎপাদন কেন্দ্র <strong className="text-navy">ইনাম ফিড মিল</strong>। আধুনিক যন্ত্রপাতি ও দক্ষ জনবলের সমন্বয়ে এই কারখানা নিশ্চিত করে সর্বোচ্চ মানের উৎপাদন। নিজস্ব কারখানা স্থাপন তাঁর ব্যবসায়িক দূরদর্শিতার একটি বড় প্রমাণ।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.18}>
                            <p>
                                ২০২০ সালে আসে আরেকটি মাইলফলক — <strong className="text-navy">বায়োটেক ফিশ ফিড</strong> ব্র্যান্ডের যাত্রা শুরু। কার্প, তেলাপিয়া ও পাঙ্গাসের বিভিন্ন চাহিদা অনুযায়ী বিশেষ ফর্মুলায় তৈরি এই পণ্য প্রিমিয়াম ও ইকোনমি — দুটি রেঞ্জে বাজারে আসে। এই পদক্ষেপ তাঁর উদ্যোক্তা মানসিকতার একটি পরিষ্কার প্রতিফলন: সব স্তরের চাষির চাহিদা পূরণ করা।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-navy text-2xl font-bold mb-4 pt-4 font-[family-name:var(--font-bengali)]">দর্শন ও নেতৃত্ব</h2>
                            <p>
                                মো. খায়রুল বাশার বিশ্বাস করেন যে একজন সফল উদ্যোক্তার সাফল্য পরিমাপ হয় শুধু মুনাফা দিয়ে নয়, বরং সমাজে তিনি কতটুকু পরিবর্তন আনতে পেরেছেন তার দিয়েও। তাঁর দর্শনের কেন্দ্রে রয়েছে মৎস্য চাষি — তাদের উৎপাদনশীলতা বাড়ানো, তাদের আয় বৃদ্ধি করা এবং তাদের পরিবারের জীবনমান উন্নত করা।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.22}>
                            <p>
                                তাঁর নেতৃত্বের বড় বৈশিষ্ট্য হলো সরাসরি সম্পর্ক। তিনি ডিলার ও চাষিদের সাথে ব্যক্তিগতভাবে যোগাযোগ রাখেন, তাদের সমস্যা সরাসরি শোনেন এবং দ্রুত সমাধান দেন। এই অ্যাপ্রোচই চমক ফিশ ফিডকে একটি ব্র্যান্ড থেকে একটি পরিবারে পরিণত করেছে।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.24}>
                            <h2 className="text-navy text-2xl font-bold mb-4 pt-4 font-[family-name:var(--font-bengali)]">ভবিষ্যৎ পরিকল্পনা</h2>
                            <p>
                                মো. খায়রুল বাশারের স্বপ্ন থেমে নেই। আগামী বছরগুলোতে তিনি চমক ফিশ ফিডকে কেবল রাজশাহী নয়, সমগ্র বাংলাদেশে ছড়িয়ে দিতে চান। উৎপাদন ক্ষমতা বাড়ানো, নতুন পণ্য উদ্ভাবন, গবেষণায় বিনিয়োগ এবং ডিজিটাল প্ল্যাটফর্মের মাধ্যমে চাষিদের কাছে আরও সহজে পৌঁছানো — এসবই তাঁর রোডম্যাপে রয়েছে।
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.26}>
                            <p>
                                তিনি বিশ্বাস করেন, বাংলাদেশের মৎস্য শিল্পের অপার সম্ভাবনা এখনও পুরোপুরি কাজে লাগানো হয়নি। সঠিক প্রযুক্তি, মানসম্পন্ন ইনপুট এবং কৃষকদের সক্ষমতা বৃদ্ধির মাধ্যমে এই শিল্পকে আন্তর্জাতিক মানে নিয়ে যাওয়া সম্ভব। সেই স্বপ্নের পথে চমক ফিশ ফিড একটি নিরন্তর যাত্রা চালিয়ে যাচ্ছে।
                            </p>
                        </FadeIn>
                    </div>

                    {/* Signature block */}
                    <FadeIn delay={0.28} className="mt-14 pt-8 border-t border-border/40 flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal/30 shrink-0">
                            <img src={basharPhoto} alt="মো. খায়রুল বাশার" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-navy font-bold font-[family-name:var(--font-bengali)]">মো. খায়রুল বাশার</p>
                            <p className="text-teal text-sm font-[family-name:var(--font-bengali)]">প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক</p>
                            <p className="text-bodyGray/50 text-xs">বেস্ট পদ্মা এগ্রো ফিডস · রাজশাহী</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
