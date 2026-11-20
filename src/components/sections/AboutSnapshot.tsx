import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import feedsPond from '@/images/feeds-pond.jpg';

export default function AboutSnapshot() {
    return (
        <section className="section-padding bg-pageBg">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Mill photo with a plain caption strip */}
                    <div className="rounded-xl overflow-hidden border border-navy/10 bg-white">
                        <div className="aspect-[4/3]">
                            <img
                                src={feedsPond}
                                alt="Chamok Fish Feed Pond"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-5 py-4">
                            <p className="font-semibold text-navy font-[family-name:var(--font-bengali)]">ইনাম ফিড মিল</p>
                            <p className="text-bodyGray text-sm mt-0.5 font-[family-name:var(--font-bengali)]">ধোপাপাড়া, পুঠিয়া, রাজশাহী</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                            <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">বেস্ট পদ্মা এগ্রো ফিডস</h2>
                        </div>

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

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {[
                                { label: 'অফিস', value: siteConfig.officeAddress },
                                { label: 'কারখানা', value: 'ধোপাপাড়া, পুঠিয়া' },
                                { label: 'প্রতিষ্ঠাতা', value: siteConfig.founder },
                                { label: 'যোগাযোগ', value: siteConfig.phoneDisplay },
                            ].map((item) => (
                                <div key={item.label} className="bg-white rounded-lg p-4 border border-navy/10">
                                    <p className="text-bodyGray text-xs font-medium mb-1 font-[family-name:var(--font-bengali)]">{item.label}</p>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
