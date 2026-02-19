import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "চমক ফিশ ফিড | বেস্ট পদ্মা এগ্রো ফিডস",
    template: "%s | চমক ফিশ ফিড",
  },
  description:
    "চমক ফিশ ফিড — বাংলাদেশের মৎস্য চাষির বিশ্বস্ত সঙ্গী। কার্প, তেলাপিয়া ও পাঙ্গাস মাছের জন্য উচ্চমানের ভাসমান ও ডুবন্ত ফিড। রাজশাহী থেকে সরাসরি উৎপাদিত।",
  keywords: [
    "চমক ফিশ ফিড",
    "ভাসমান ফিশ ফিড",
    "কার্প গ্রোয়ার",
    "তেলাপিয়া ফিড",
    "পাঙ্গাস ফিড",
    "মৎস্য খাদ্য রাজশাহী",
    "বায়োটেক ফিশ ফিড",
    "Chamok Fish Feed",
    "fish feed Bangladesh",
  ],
  authors: [{ name: "বেস্ট পদ্মা এগ্রো ফিডস" }],
  creator: "Best Padma Agro Feeds",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://chamakfishfeed.com.bd",
    siteName: "চমক ফিশ ফিড",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "চমক ফিশ ফিড — মাছ চাষির বিশ্বস্ত সঙ্গী",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${poppins.variable} ${hindSiliguri.variable}`}>
      <body className={`${hindSiliguri.className} antialiased`}>
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
