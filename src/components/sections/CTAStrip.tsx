import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CTAStrip() {
    return (
        <section className="bg-navy py-16">
            <div className="container-custom">
                <div className="text-center">
                    <h2 className="text-white font-semibold mb-3 font-[family-name:var(--font-bengali)]">
                        আজই আমাদের সাথে যোগাযোগ করুন
                    </h2>
                    <p className="text-white/75 text-lg mb-8 font-[family-name:var(--font-bengali)]">
                        পণ্যের দাম ও অর্ডারের জন্য কল করুন অথবা WhatsApp-এ মেসেজ পাঠান।
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="flex items-center gap-3 bg-white text-navy font-semibold px-8 py-3.5 rounded-lg hover:bg-gold transition-colors w-full sm:w-auto justify-center"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                        </a>

                        <a
                            href={siteConfig.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-whatsapp text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#1eb856] transition-colors w-full sm:w-auto justify-center"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-[family-name:var(--font-bengali)]">WhatsApp-এ মেসেজ করুন</span>
                        </a>
                    </div>

                    <p className="text-white/70 text-sm mt-6 font-[family-name:var(--font-bengali)]">
                        ডিলার হতে চাইলে{' '}
                        <Link to="/dealer-offer" className="text-white font-semibold underline underline-offset-4">
                            আবেদন করুন
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
