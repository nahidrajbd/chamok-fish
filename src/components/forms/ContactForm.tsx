import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { sendContactEmail, ContactFormData } from "@/lib/emailjs";

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.message) {
            toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন।");
            return;
        }

        setIsSubmitting(true);
        try {
            await sendContactEmail(formData);
            toast.success("আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।");
            setFormData({ name: "", phone: "", subject: "", message: "" });
        } catch (error) {
            toast.error("বার্তা পাঠাতে সমস্যা হয়েছে। সরাসরি ফোন করুন: 01741973426");
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
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="মো. রহিম"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Subject */}
            <div>
                <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    বিষয়
                </label>
                <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="পণ্য সম্পর্কে জানতে চাই">পণ্য সম্পর্কে জানতে চাই</option>
                    <option value="অর্ডার করতে চাই">অর্ডার করতে চাই</option>
                    <option value="ডিলার হতে চাই">ডিলার হতে চাই</option>
                    <option value="অভিযোগ">অভিযোগ</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    বার্তা <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none font-[family-name:var(--font-bengali)] text-sm"
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
                        বার্তা পাঠান
                    </>
                )}
            </button>
        </form>
    );
}
