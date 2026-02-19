import type { Metadata } from "next";
import { Phone, MapPin, Users } from "lucide-react";
import DealerInquiryForm from "@/components/forms/DealerInquiryForm";
import CTAStrip from "@/components/sections/CTAStrip";
import { dealers } from "@/data/dealers";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
    title: "ডিলার নেটওয়ার্ক — চমক ফিশ ফিড রাজশাহী",
    description:
        "চমক ফিশ ফিডের রাজশাহী বিভাগের ডিলার তালিকা। আপনার কাছের ডিলার খুঁজুন অথবা নতুন ডিলার হওয়ার আবেদন করুন।",
};

export default function DealersPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">
                            আমাদের ডিলার
                        </span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                        ডিলার নেটওয়ার্ক
                    </h1>
                    <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)]">
                        রাজশাহী বিভাগের বিভিন্ন উপজেলায় আমাদের বিশ্বস্ত ডিলাররা সর্বদা
                        সেবা প্রদানের জন্য প্রস্তুত।
                    </p>
                </div>
            </section>

            {/* Dealer Cards */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="mb-8">
                        <h2 className="text-navy mb-2 font-[family-name:var(--font-bengali)]">
                            আমাদের ডিলার তালিকা
                        </h2>
                        <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                            আপনার কাছের ডিলারের সাথে যোগাযোগ করুন
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {dealers.map((dealer) => (
                            <div
                                key={dealer.id}
                                className="bg-cardBg rounded-[12px] p-6 border border-border/40 shadow-sm card-hover"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-teal" />
                                    </div>
                                    <span className="text-xs bg-mist text-teal px-2.5 py-1 rounded-full font-[family-name:var(--font-bengali)]">
                                        {dealer.upazila}
                                    </span>
                                </div>

                                <h3 className="text-navy font-bold text-base mb-2 font-[family-name:var(--font-bengali)]">
                                    {dealer.nameBn}
                                </h3>

                                <div className="flex items-start gap-2 mb-4">
                                    <MapPin className="w-4 h-4 text-bodyGray shrink-0 mt-0.5" />
                                    <p className="text-bodyGray text-sm font-[family-name:var(--font-bengali)]">
                                        {dealer.location}
                                    </p>
                                </div>

                                <a
                                    href={`tel:${dealer.phone}`}
                                    className="flex items-center justify-center gap-2 w-full bg-teal/10 hover:bg-teal text-teal hover:text-white font-semibold py-2.5 rounded-lg transition-all duration-200 text-sm font-[family-name:var(--font-bengali)]"
                                >
                                    <Phone className="w-4 h-4" />
                                    এখনই কল করুন
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Embed */}
            <section className="py-12 bg-panelBg">
                <div className="container-custom">
                    <h2 className="text-navy mb-6 text-center font-[family-name:var(--font-bengali)]">
                        আমাদের অফিসের অবস্থান
                    </h2>
                    <div className="rounded-[12px] overflow-hidden border border-border/40 shadow-md h-80">
                        <iframe
                            src={siteConfig.googleMapsEmbedOffice}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="চমক ফিশ ফিড অফিস - রাজশাহী"
                        />
                    </div>
                    <p className="text-center text-bodyGray text-sm mt-4 font-[family-name:var(--font-bengali)]">
                        📍 {siteConfig.officeAddressFull}
                    </p>
                </div>
            </section>

            {/* Dealer Inquiry Form */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom max-w-2xl">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-gold/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-bengali)]">
                            ডিলার হওয়ার সুযোগ
                        </span>
                        <h2 className="text-navy mb-4 font-[family-name:var(--font-bengali)]">
                            ডিলার হওয়ার আবেদন করুন
                        </h2>
                        <p className="text-bodyGray leading-relaxed font-[family-name:var(--font-bengali)]">
                            আপনার এলাকায় চমক ফিশ ফিডের ডিলার হোন। লাভজনক ব্যবসার সুযোগ
                            নিন। আমরা ডিলারদের সম্পূর্ণ সহায়তা প্রদান করি।
                        </p>
                    </div>

                    <div className="bg-cardBg rounded-[12px] p-8 border border-border/40 shadow-sm">
                        <DealerInquiryForm />
                    </div>
                </div>
            </section>

            <CTAStrip />
        </>
    );
}
