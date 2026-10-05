import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Mail, Instagram } from 'lucide-react';
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
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shrink-0">
                                <img src="/logo.svg" alt="Chamok Fish Feed" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg leading-tight font-[family-name:var(--font-bengali)]">
                                    চমক ফিশ ফিড
                                </p>
                                <p className="text-white text-xs opacity-60">Best Padma Agro Feeds</p>
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
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href={siteConfig.social.pinterest}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E60023] flex items-center justify-center transition-colors"
                                aria-label="Pinterest"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                </svg>
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
