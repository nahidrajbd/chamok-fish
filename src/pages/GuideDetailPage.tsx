import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Seo from '@/components/Seo';
import CTAStrip from '@/components/sections/CTAStrip';
import NotFoundPage from '@/pages/NotFoundPage';
import { guides } from '@/data/guides';
import { breadcrumbJsonLd } from '@/data/jsonLd';

export default function GuideDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const guide = guides.find((g) => g.slug === slug);

    if (!guide) {
        return <NotFoundPage />;
    }

    const path = `/guides/${guide.slug}`;

    return (
        <div className="min-h-screen bg-pageBg">
            <Seo
                title={`${guide.title} | চমক ফিশ ফিড`}
                description={guide.cardLine}
                path={path}
                type="article"
                jsonLd={breadcrumbJsonLd([['হোম', '/'], ['গাইড', '/guides'], [guide.title, path]])}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-14 lg:py-20">
                <div className="container-custom">
                    <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6 font-[family-name:var(--font-bengali)]" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-gold transition-colors">হোম</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/guides" className="hover:text-gold transition-colors">গাইড</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white/90">{guide.title}</span>
                    </nav>
                    <span className="block w-8 h-[3px] bg-gold mb-5" aria-hidden="true" />
                    <h1 className="text-white font-[family-name:var(--font-bengali)]">{guide.title}</h1>
                </div>
            </section>

            {/* Article */}
            <section className="py-14 lg:py-20">
                <div className="container-custom">
                    <article className="max-w-3xl">
                        {guide.intro.map((p, i) => (
                            <p key={i} className="text-lg text-bodyGray leading-relaxed mb-6 font-[family-name:var(--font-bengali)]">{p}</p>
                        ))}

                        {guide.sections.map((section, i) => (
                            <div key={i} className="mb-10">
                                {section.heading && (
                                    <h2 className="text-2xl text-navy font-semibold mb-4 font-[family-name:var(--font-bengali)]">{section.heading}</h2>
                                )}
                                {section.list && (
                                    <ul className="space-y-3 mb-6">
                                        {section.list.map((item, j) => (
                                            <li key={j} className="flex gap-3 text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                                                <span className="mt-[9px] w-2 h-2 shrink-0 bg-gold" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.paragraphs?.map((p, j) => (
                                    <p key={j} className="text-bodyGray leading-relaxed mb-4 font-[family-name:var(--font-bengali)]">{p}</p>
                                ))}
                            </div>
                        ))}

                        <div className="border-t border-border pt-8 flex flex-wrap gap-x-8 gap-y-3">
                            <Link to="/guides" className="text-teal font-semibold hover:underline underline-offset-4 font-[family-name:var(--font-bengali)]">
                                সব গাইড দেখুন
                            </Link>
                            <Link to="/faq" className="text-teal font-semibold hover:underline underline-offset-4 font-[family-name:var(--font-bengali)]">
                                সাধারণ জিজ্ঞাসা
                            </Link>
                            <Link to="/products" className="text-teal font-semibold hover:underline underline-offset-4 font-[family-name:var(--font-bengali)]">
                                পণ্যসমূহ দেখুন
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <CTAStrip />
        </div>
    );
}
