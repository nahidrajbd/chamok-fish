import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppFAB() {
    return (
        <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-fab"
            aria-label="WhatsApp-এ যোগাযোগ করুন"
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group"
        >
            <MessageCircle className="w-7 h-7 text-white fill-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {/* Tooltip */}
            <span className="absolute right-16 bg-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-[family-name:var(--font-bengali)]">
                WhatsApp-এ মেসেজ করুন
            </span>
        </a>
    );
}
