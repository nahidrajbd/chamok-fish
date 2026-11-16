import Seo from '@/components/Seo';
import { organizationJsonLd } from '@/data/jsonLd';
import HeroSection from '@/components/sections/HeroSection';

import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChamokSection from '@/components/sections/WhyChamok';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import Testimonial from '@/components/sections/Testimonial';
import DealerCTA from '@/components/sections/DealerCTA';
import CTAStrip from '@/components/sections/CTAStrip';
import { siteConfig } from '@/data/siteConfig';

export default function HomePage() {
    return (
        <>
            <Seo title={siteConfig.seo.defaultTitle} description={siteConfig.seo.defaultDescription} path="/" jsonLd={organizationJsonLd} />

            <HeroSection />

            <FeaturedProducts />
            <WhyChamokSection />
            <AboutSnapshot />
            <Testimonial />
            <DealerCTA />
            <CTAStrip />
        </>
    );
}
