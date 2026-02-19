import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
    { href: '/', label: 'হোম' },
    { href: '/products', label: 'পণ্যসমূহ' },
    { href: '/about', label: 'আমাদের সম্পর্কে' },
    { href: '/dealers', label: 'ডিলার নেটওয়ার্ক' },
    { href: '/contact', label: 'যোগাযোগ' },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // Close drawer on route change
    useEffect(() => { setIsMenuOpen(false); }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-white/90 backdrop-blur-sm shadow-sm'
                    }`}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 shrink-0">
                            <img src="/logo.svg" alt="Chamok Fish Feed" className="h-12 w-auto max-w-[180px]" />
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-[family-name:var(--font-bengali)] ${isActive ? 'text-teal' : 'text-dark hover:text-teal hover:bg-mist'
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="flex items-center gap-2 text-sm font-semibold text-dark hover:text-teal transition-colors"
                            >
                                <Phone className="w-4 h-4 text-teal" />
                                <span>{siteConfig.phoneDisplay}</span>
                            </a>
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#22c55e] transition-all hover:shadow-md"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-dark hover:bg-mist transition-colors"
                            aria-label="মেনু খুলুন"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <img src="/logo.svg" alt="Chamok Fish Feed" className="h-10 w-auto bg-white rounded px-2 py-1" />
                        </div>
                        <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">
                            <X size={22} />
                        </button>
                    </div>

                    <nav className="flex-1 py-4 overflow-y-auto">
                        {navLinks.map((link) => {
                            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`flex items-center px-6 py-3.5 text-base font-medium transition-all font-[family-name:var(--font-bengali)] ${isActive
                                        ? 'text-gold bg-white/10 border-r-2 border-gold'
                                        : 'text-white/80 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-5 border-t border-white/10 space-y-3">
                        <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/90 hover:text-gold transition-colors">
                            <Phone className="w-4 h-4 text-gold" />
                            <span className="font-[family-name:var(--font-bengali)]">{siteConfig.phoneDisplay}</span>
                        </a>
                        <a
                            href={siteConfig.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl transition-all hover:bg-[#22c55e]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp-এ মেসেজ করুন
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
