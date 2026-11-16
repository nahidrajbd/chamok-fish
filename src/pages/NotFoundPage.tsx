import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
    return (
        <>
            <Seo
                title="পেজটি পাওয়া যায়নি | Page Not Found - Chamok Fish Feed"
                description="দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।"
                path="/404"
                noindex
            />
            <section className="bg-navy py-28">
                <div className="container-custom text-center">
                    <p className="text-gold font-bold text-6xl mb-4">404</p>
                    <h1 className="text-white font-bold text-3xl mb-4 font-[family-name:var(--font-bengali)]">
                        পেজটি পাওয়া যায়নি
                    </h1>
                    <p className="text-white/70 max-w-md mx-auto mb-8 font-[family-name:var(--font-bengali)] leading-relaxed">
                        দুঃখিত, আপনি যে পেজটি খুঁজছেন তা নেই অথবা সরিয়ে ফেলা হয়েছে। হোম পেজ বা পণ্যের পেজ থেকে আবার শুরু করুন।
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/" className="bg-teal text-white font-semibold px-6 py-3 rounded-xl font-[family-name:var(--font-bengali)]">
                            হোম পেজ
                        </Link>
                        <Link to="/products" className="bg-white/10 text-white font-semibold px-6 py-3 rounded-xl font-[family-name:var(--font-bengali)]">
                            পণ্যসমূহ
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
