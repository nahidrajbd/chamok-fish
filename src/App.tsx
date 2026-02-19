import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';

import DealersPage from '@/pages/DealersPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Navbar />
                <main className="pt-16 lg:pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/products" element={<ProductsPage />} />

                        <Route path="/dealers" element={<DealersPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppFAB />
                <Toaster richColors position="top-right" />
            </BrowserRouter>
        </HelmetProvider>
    );
}
