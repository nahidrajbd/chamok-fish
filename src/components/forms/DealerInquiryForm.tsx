import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { sendDealerInquiry, DealerInquiryData } from "@/lib/emailjs";

export default function DealerInquiryForm() {
    const [formData, setFormData] = useState<DealerInquiryData>({
        name: "",
        shopName: "",
        location: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.shopName || !formData.location) {
            toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন।");
            return;
        }

        setIsSubmitting(true);
        try {
            await sendDealerInquiry(formData);
            toast.success("আপনার আবেদন সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।");
            setFormData({ name: "", shopName: "", location: "", phone: "", message: "" });
        } catch (error) {
            toast.error("আবেদন পাঠাতে সমস্যা হয়েছে। সরাসরি ফোন করুন: 01741973426");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="dealer-name"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="dealer-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="মো. রহিম"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-white border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="dealer-phone"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="dealer-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-white border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Shop Name */}
            <div>
                <label
                    htmlFor="dealer-shopName"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    দোকান/ব্যবসার নাম <span className="text-red-500">*</span>
                </label>
                <input
                    id="dealer-shopName"
                    type="text"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleChange}
                    placeholder="রহিম এগ্রো সেন্টার"
                    required
                    className="w-full px-4 py-3 rounded-[8px] bg-white border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                />
            </div>

            {/* Location */}
            <div>
                <label
                    htmlFor="dealer-location"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    অবস্থান (উপজেলা/জেলা) <span className="text-red-500">*</span>
                </label>
                <input
                    id="dealer-location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="পুঠিয়া, রাজশাহী"
                    required
                    className="w-full px-4 py-3 rounded-[8px] bg-white border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                />
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="dealer-message"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    অতিরিক্ত তথ্য
                </label>
                <textarea
                    id="dealer-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার এলাকায় বাজারের আকার, বর্তমান পণ্য বিক্রির পরিমাণ ইত্যাদি..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-[8px] bg-white border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none font-[family-name:var(--font-bengali)] text-sm"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed font-[family-name:var(--font-bengali)]"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        পাঠানো হচ্ছে...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        আবেদন পাঠান
                    </>
                )}
            </button>
        </form>
    );
}
