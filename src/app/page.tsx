import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChamakSection from "@/components/sections/WhyChamak";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import Testimonial from "@/components/sections/Testimonial";
import CTAStrip from "@/components/sections/CTAStrip";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "চমক ফিশ ফিড — মাছ চাষির বিশ্বস্ত সঙ্গী | বেস্ট পদ্মা এগ্রো ফিডস",
  description:
    "চমক ফিশ ফিড — বাংলাদেশের রাজশাহী থেকে উৎপাদিত উচ্চমানের মৎস্য খাদ্য। ভাসমান ও ডুবন্ত ফিড, কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য সেরা পুষ্টি। বেস্ট পদ্মা এগ্রো ফিডস।",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "চমক ফিশ ফিড — বেস্ট পদ্মা এগ্রো ফিডস",
  alternateName: "Chamok Fish Feed",
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo/chamok-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${siteConfig.whatsapp}`,
    contactType: "customer service",
    availableLanguage: ["Bengali", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "চিনি পট্টি গলি",
    addressLocality: "রাজশাহী",
    addressCountry: "BD",
  },
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <FeaturedProducts />
      <WhyChamakSection />
      <AboutSnapshot />
      <Testimonial />
      <CTAStrip />
    </>
  );
}
