import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';

import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChamakSection from '@/components/sections/WhyChamak';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import Testimonial from '@/components/sections/Testimonial';
import CTAStrip from '@/components/sections/CTAStrip';
import { siteConfig } from '@/data/siteConfig';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>{siteConfig.seo.defaultTitle}</title>
                <meta name="description" content={siteConfig.seo.defaultDescription} />
                <meta property="og:title" content={siteConfig.seo.defaultTitle} />
                <meta property="og:description" content={siteConfig.seo.defaultDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteConfig.siteUrl} />
                <link rel="canonical" href={siteConfig.siteUrl} />
            </Helmet>

            <HeroSection />

            <FeaturedProducts />
            <WhyChamakSection />
            <AboutSnapshot />
            <Testimonial />
            <CTAStrip />
        </>
    );
}
