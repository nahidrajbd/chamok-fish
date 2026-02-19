import type { Metadata } from "next";
import { Phone, MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
    title: "যোগাযোগ করুন — চমক ফিশ ফিড",
    description:
        "চমক ফিশ ফিডের সাথে যোগাযোগ করুন। ফোন, WhatsApp বা ফর্মের মাধ্যমে পণ্যের তথ্য, অর্ডার ও ডিলার সম্পর্কে জানুন।",
};

const contactInfo = [
    {
        icon: Phone,
        label: "ফোন",
        value: siteConfig.phoneDisplay,
        href: `tel:${siteConfig.phone}`,
        color: "text-teal",
        bg: "bg-teal/10",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+৮৮০১৭৪১৯৭৩৪২৬",
        href: siteConfig.whatsappUrl,
        color: "text-[#25D366]",
        bg: "bg-[#25D366]/10",
    },
    {
        icon: Mail,
        label: "ইমেইল",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        color: "text-steel",
        bg: "bg-steel/10",
    },
    {
        icon: MapPin,
        label: "অফিস",
        value: siteConfig.officeAddressFull,
        href: "#map",
        color: "text-navy",
        bg: "bg-navy/10",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-navy py-16">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
                        <Phone className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm font-[family-name:var(--font-bengali)]">
                            যোগাযোগ
                        </span>
                    </div>
                    <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                        আমাদের সাথে যোগাযোগ করুন
                    </h1>
                    <p className="text-white/65 max-w-xl mx-auto font-[family-name:var(--font-bengali)]">
                        পণ্য সম্পর্কে জানতে, অর্ডার করতে বা যেকোনো প্রশ্নের জন্য আমাদের
                        সাথে যোগাযোগ করুন।
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-10">
                        {/* Left: Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-cardBg rounded-[12px] p-8 border border-border/40 shadow-sm">
                                <h2 className="text-navy font-bold text-xl mb-6 font-[family-name:var(--font-bengali)]">
                                    বার্তা পাঠান
                                </h2>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Right: Info Panel */}
                        <div className="lg:col-span-2 space-y-5">
                            {/* Contact Info Cards */}
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target={info.href.startsWith("http") ? "_blank" : undefined}
                                        rel={
                                            info.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="flex items-start gap-4 bg-cardBg rounded-[12px] p-5 border border-border/40 hover:border-teal/30 hover:shadow-md transition-all duration-200 group"
                                    >
                                        <div
                                            className={`w-10 h-10 ${info.bg} rounded-xl flex items-center justify-center shrink-0`}
                                        >
                                            <Icon className={`w-5 h-5 ${info.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-bodyGray text-xs mb-0.5 font-[family-name:var(--font-bengali)]">
                                                {info.label}
                                            </p>
                                            <p className="text-navy font-semibold text-sm group-hover:text-teal transition-colors font-[family-name:var(--font-bengali)]">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}

                            {/* Factory Address */}
                            <div className="flex items-start gap-4 bg-cardBg rounded-[12px] p-5 border border-border/40">
                                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <p className="text-bodyGray text-xs mb-0.5 font-[family-name:var(--font-bengali)]">
                                        কারখানা
                                    </p>
                                    <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">
                                        {siteConfig.factoryAddress}
                                    </p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-mist/50 rounded-[12px] p-5 border border-border/30">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="w-5 h-5 text-teal" />
                                    <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">
                                        কার্যালয়ের সময়
                                    </p>
                                </div>
                                <div className="space-y-1.5 text-sm font-[family-name:var(--font-bengali)]">
                                    <div className="flex justify-between">
                                        <span className="text-bodyGray">শনি–বৃহস্পতি</span>
                                        <span className="text-navy font-medium">সকাল ৮টা – রাত ৮টা</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-bodyGray">শুক্রবার</span>
                                        <span className="text-navy font-medium">সকাল ১০টা – দুপুর ২টা</span>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Quick Action */}
                            <a
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-4 rounded-xl hover:bg-[#22c55e] transition-all shadow-md hover:shadow-lg font-[family-name:var(--font-bengali)]"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp-এ সরাসরি কথা বলুন
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section id="map" className="py-12 bg-panelBg">
                <div className="container-custom">
                    <h2 className="text-navy mb-6 text-center font-[family-name:var(--font-bengali)]">
                        আমাদের অফিস খুঁজুন
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
                </div>
            </section>
        </>
    );
}
