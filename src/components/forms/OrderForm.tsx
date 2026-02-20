import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, ShoppingCart } from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";

interface OrderFormProps {
    productName: string;
}

export default function OrderForm({ productName }: OrderFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        quantity: "",
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
        if (!formData.name || !formData.phone) {
            toast.error("নাম ও মোবাইল নম্বর পূরণ করুন।");
            return;
        }

        setIsSubmitting(true);
        try {
            await sendContactEmail({
                name: formData.name,
                phone: formData.phone,
                subject: `অর্ডার: ${productName}`,
                message: `পণ্য: ${productName}\nপরিমাণ: ${formData.quantity || "উল্লেখ করা হয়নি"}\nএলাকা: ${formData.location || "উল্লেখ করা হয়নি"}\n\n${formData.message}`.trim(),
            });
            toast.success("আপনার অর্ডার অনুরোধ পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।");
            setFormData({ name: "", phone: "", location: "", quantity: "", message: "" });
        } catch {
            toast.error("পাঠাতে সমস্যা হয়েছে। সরাসরি ফোন করুন: 01741973426");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Product badge */}
            <div className="flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-xl px-4 py-3">
                <ShoppingCart className="w-4 h-4 text-teal shrink-0" />
                <span className="text-teal text-sm font-semibold font-[family-name:var(--font-bengali)]">
                    {productName}
                </span>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="order-name"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="order-name"
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
                        htmlFor="order-phone"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="order-phone"
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

            {/* Location & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="order-location"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        আপনার এলাকা
                    </label>
                    <input
                        id="order-location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="যেমন: রাজশাহী, চাঁপাইনবাবগঞ্জ"
                        className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="order-quantity"
                        className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                    >
                        কত বস্তা / কেজি প্রয়োজন?
                    </label>
                    <input
                        id="order-quantity"
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="যেমন: ১০ বস্তা"
                        className="w-full px-4 py-3 rounded-[8px] bg-panelBg border border-border text-dark placeholder:text-bodyGray/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all font-[family-name:var(--font-bengali)] text-sm"
                    />
                </div>
            </div>

            {/* Additional message */}
            <div>
                <label
                    htmlFor="order-message"
                    className="block text-sm font-medium text-navy mb-1.5 font-[family-name:var(--font-bengali)]"
                >
                    অতিরিক্ত তথ্য (ঐচ্ছিক)
                </label>
                <textarea
                    id="order-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="অন্য কোনো তথ্য বা প্রশ্ন থাকলে লিখুন..."
                    rows={3}
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
                        অর্ডার করুন
                    </>
                )}
            </button>
        </form>
    );
}
