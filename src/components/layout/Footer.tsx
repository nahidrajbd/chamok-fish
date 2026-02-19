import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Fish, Mail } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const quickLinks = [
    { href: '/', label: 'হোম' },
    { href: '/products', label: 'পণ্যসমূহ' },
    { href: '/why-chamok', label: 'কেন চমক?' },
    { href: '/about', label: 'আমাদের সম্পর্কে' },
    { href: '/dealers', label: 'ডিলার নেটওয়ার্ক' },
    { href: '/contact', label: 'যোগাযোগ' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Column 1 */}
                    <div className="space-y-5">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center border border-gold/30">
                                <Fish className="w-7 h-7 text-gold" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg leading-tight font-[family-name:var(--font-bengali)]">
                                    চমক ফিশ ফিড
                                </p>
                                <p className="text-white/50 text-xs">Best Padma Agro Feeds</p>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                            {siteConfig.tagline} — উচ্চমানের মৎস্য খাদ্য উৎপাদনে আমরা বদ্ধপরিকর। রাজশাহী থেকে সারাদেশে।
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-5">
                        <h3 className="text-white font-semibold text-base font-[family-name:var(--font-bengali)]">
                            দ্রুত নেভিগেশন
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-white/65 hover:text-gold text-sm transition-colors flex items-center gap-2 font-[family-name:var(--font-bengali)]"
                                    >
                                        <span className="w-1 h-1 bg-teal rounded-full" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-5">
                        <h3 className="text-white font-semibold text-base font-[family-name:var(--font-bengali)]">যোগাযোগ</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-white/50 text-xs mb-0.5">অফিস</p>
                                    <p className="text-white/75 text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                                        {siteConfig.officeAddressFull}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-white/50 text-xs mb-0.5">কারখানা</p>
                                    <p className="text-white/75 text-sm leading-relaxed font-[family-name:var(--font-bengali)]">
                                        {siteConfig.factoryAddress}
                                    </p>
                                </div>
                            </div>
                            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/75 hover:text-gold transition-colors">
                                <Phone className="w-4 h-4 text-teal shrink-0" />
                                <span className="font-[family-name:var(--font-bengali)] text-sm">{siteConfig.phoneDisplay}</span>
                            </a>
                            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/75 hover:text-gold transition-colors">
                                <Mail className="w-4 h-4 text-teal shrink-0" />
                                <span className="text-sm">{siteConfig.email}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/40 text-xs text-center font-[family-name:var(--font-bengali)]">
                        © {currentYear} {siteConfig.company} — সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p className="text-white/40 text-xs text-center">
                        Chamok Fish Feed | Best Padma Agro Feeds | Rajshahi, Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    );
}
