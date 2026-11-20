import Seo from '@/components/Seo';
import { MapPin, Users, MessageCircle, Check, TrendingUp, Handshake, Award } from 'lucide-react';
import CTAStrip from '@/components/sections/CTAStrip';
import { dealers } from '@/data/dealers';
import { siteConfig } from '@/data/siteConfig';

const dealerBenefits = [
    { icon: TrendingUp, title: 'লাভজনক ব্যবসা', desc: 'প্রতিযোগিতামূলক দামে পণ্য সংগ্রহ করে নিজের এলাকায় বিক্রি করুন।' },
    { icon: Award, title: 'বিশ্বস্ত ব্র্যান্ড', desc: 'রাজশাহীতে প্রতিষ্ঠিত, চাষিদের পরিচিত দুটি ব্র্যান্ড।' },
    { icon: Handshake, title: 'সরাসরি সহায়তা', desc: 'আমাদের টিম আপনার পাশে আছে, পণ্য সরবরাহ থেকে বিক্রয় সহায়তায়।' },
    { icon: Users, title: 'বিস্তৃত বাজার', desc: 'মৎস্য চাষি ও পুকুর মালিকরা আমাদের পণ্যের নিয়মিত ক্রেতা।' },
];

const requirements = [
    'নিজস্ব দোকান বা ব্যবসায়িক প্রতিষ্ঠান থাকতে হবে',
    'স্থানীয় কৃষি / মৎস্য বাজারে সংযোগ থাকলে অগ্রাধিকার',
    'ন্যূনতম মাসিক অর্ডার ক্যাপাসিটি নিশ্চিত করতে হবে',
    'চুক্তিভিত্তিক ডিলারশিপ — সম্পূর্ণ বৈধ প্রক্রিয়া',
];

export default function DealersPage() {
    return (
        <>
            <Seo title="ডিলার নেটওয়ার্ক | Fish Feed Dealers in Rajshahi, Chamok Fish Feed" description="চমক ফিশ ফিডের রাজশাহী বিভাগের ডিলার তালিকা। আপনার কাছের ডিলার খুঁজুন অথবা নতুন ডিলার হওয়ার জন্য WhatsApp-এ যোগাযোগ করুন।" path="/dealers" />

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-5 mx-auto" />
                    <h1 className="text-white font-semibold mb-4 font-[family-name:var(--font-bengali)]">আমাদের ডিলার নেটওয়ার্ক</h1>
                    <p className="text-white/70 max-w-2xl mx-auto font-[family-name:var(--font-bengali)] leading-relaxed">
                        রাজশাহী বিভাগের বিভিন্ন উপজেলায় আমাদের ডিলাররা মৎস্য চাষিদের কাছে পৌঁছে দিচ্ছে চমক ফিশ ফিড।
                    </p>
                </div>
            </section>

            {/* ── Dealer Info / Benefits ───────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                        <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">কেন চমক ফিশ ফিডের ডিলার হবেন?</h2>
                        <p className="text-bodyGray mt-3 max-w-2xl mx-auto text-sm font-[family-name:var(--font-bengali)] leading-relaxed">
                            চমক ফিশ ফিডের ডিলার হয়ে নিজের এলাকায় মৎস্য খাদ্যের ব্যবসা গড়ে তুলুন।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {dealerBenefits.map((b) => {
                            const Icon = b.icon;
                            return (
                                <div
                                    key={b.title}
                                    className="bg-white rounded-xl p-6 border border-navy/10"
                                >
                                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-teal" />
                                    </div>
                                    <h3 className="text-navy font-semibold text-base mb-2 font-[family-name:var(--font-bengali)]">{b.title}</h3>
                                    <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">{b.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Requirements + WhatsApp CTA */}
                    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Requirements */}
                        <div className="bg-white rounded-xl p-7 border border-navy/10">
                            <h3 className="text-navy font-semibold text-lg mb-5 font-[family-name:var(--font-bengali)]">ডিলারশিপের শর্তাবলী</h3>
                            <ul className="space-y-3">
                                {requirements.map((r) => (
                                    <li key={r} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                                        <span className="text-bodyGray text-sm font-[family-name:var(--font-bengali)] leading-relaxed">{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-navy rounded-xl p-7 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2 font-[family-name:var(--font-bengali)]">ডিলার হতে চান?</h3>
                            <p className="text-white/70 text-sm mb-6 font-[family-name:var(--font-bengali)] leading-relaxed">
                                সরাসরি WhatsApp-এ যোগাযোগ করুন। আমাদের টিম দ্রুত সাড়া দেবে।
                            </p>
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-whatsapp hover:bg-[#1eb856] text-white font-semibold py-3.5 rounded-lg transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-[family-name:var(--font-bengali)]">WhatsApp-এ যোগাযোগ করুন</span>
                            </a>
                            <p className="text-white/50 text-xs mt-3">
                                {siteConfig.phoneDisplay}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Dealer Cards ─────────────────────────────────── */}
            <section className="section-padding bg-white border-t border-navy/10">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                        <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">আমাদের ডিলার তালিকা</h2>
                        <p className="text-bodyGray text-sm mt-2 font-[family-name:var(--font-bengali)]">আপনার কাছের ডিলারের সাথে সরাসরি যোগাযোগ করুন</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dealers.map((dealer) => (
                            <div
                                key={dealer.id}
                                className="bg-pageBg rounded-xl p-6 border border-navy/10"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-teal" />
                                    </div>
                                    <span className="text-xs text-bodyGray font-[family-name:var(--font-bengali)]">
                                        {dealer.upazila}
                                    </span>
                                </div>
                                <h3 className="text-navy font-semibold text-base mb-2 font-[family-name:var(--font-bengali)]">{dealer.nameBn}</h3>
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-bodyGray shrink-0 mt-0.5" />
                                    <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">{dealer.location}</p>
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
