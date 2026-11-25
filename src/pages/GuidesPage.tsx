import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import CTAStrip from '@/components/sections/CTAStrip';
import { guides } from '@/data/guides';
import { guidesItemListJsonLd } from '@/data/jsonLd';

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-pageBg">
            <Seo
                title="মাছ চাষ গাইড | Fish Farming Guides, Chamok Fish Feed"
                description="FCR হিসাব, ভাসমান ও ডুবন্ত ফিড, খাবারের পরিমাণ, পোনার ফিড, সংরক্ষণ ও পিলেট সাইজ নিয়ে সহজ গাইড।"
                path="/guides"
                jsonLd={guidesItemListJsonLd}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-14 lg:py-20">
                <div className="container-custom">
                    <span className="block w-8 h-[3px] bg-gold mb-5" aria-hidden="true" />
                    <h1 className="text-white mb-4 font-[family-name:var(--font-bengali)]">মাছ চাষ গাইড</h1>
                    <p className="text-lg text-white/75 max-w-2xl font-[family-name:var(--font-bengali)]">
                        খাবার দেওয়ার নিয়ম, FCR হিসাব আর ফিড বাছাই নিয়ে সহজ ভাষায় লেখা গাইড।
                    </p>
                </div>
            </section>

            {/* Guide list */}
            <section className="py-14 lg:py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                        {guides.map((guide) => (
                            <Link
                                key={guide.slug}
                                to={`/guides/${guide.slug}`}
                                className="block bg-cardBg border border-border rounded-xl p-6 hover:border-teal transition-colors"
                            >
                                <h2 className="text-lg text-navy font-semibold mb-2 font-[family-name:var(--font-bengali)]">{guide.title}</h2>
                                <p className="text-bodyGray leading-relaxed mb-4 font-[family-name:var(--font-bengali)]">{guide.cardLine}</p>
                                <span className="inline-flex items-center gap-2 text-teal font-semibold font-[family-name:var(--font-bengali)]">
                                    পড়ুন
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTAStrip />
        </div>
    );
}
