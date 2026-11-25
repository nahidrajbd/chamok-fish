import Seo from '@/components/Seo';
import CTAStrip from '@/components/sections/CTAStrip';
import { faqs } from '@/data/faq';
import { faqJsonLd } from '@/data/jsonLd';

export default function FaqPage() {
    return (
        <div className="min-h-screen bg-pageBg">
            <Seo
                title="সাধারণ জিজ্ঞাসা | Fish Feed FAQ, Chamok Fish Feed"
                description="FCR, ভাসমান ও ডুবন্ত ফিড, খাবারের পরিমাণ, দাম, ডিলার ও ফিড সংরক্ষণ নিয়ে চাষিদের সাধারণ প্রশ্নের উত্তর।"
                path="/faq"
                jsonLd={faqJsonLd}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-14 lg:py-20">
                <div className="container-custom">
                    <span className="block w-8 h-[3px] bg-gold mb-5" aria-hidden="true" />
                    <h1 className="text-white mb-4 font-[family-name:var(--font-bengali)]">সাধারণ জিজ্ঞাসা</h1>
                    <p className="text-lg text-white/75 max-w-2xl font-[family-name:var(--font-bengali)]">
                        মাছ চাষ ও ফিড নিয়ে চাষিদের সবচেয়ে সাধারণ প্রশ্নগুলোর সহজ উত্তর।
                    </p>
                </div>
            </section>

            {/* Questions */}
            <section className="py-14 lg:py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        {faqs.map((item) => (
                            <article key={item.q} className="border-b border-border py-7 first:pt-0 last:border-b-0">
                                <h2 className="text-xl text-navy font-semibold mb-3 font-[family-name:var(--font-bengali)]">{item.q}</h2>
                                <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">{item.a}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CTAStrip />
        </div>
    );
}
