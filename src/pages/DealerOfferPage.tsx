import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Phone,
    MapPin,
    Building2,
    Calendar,
    Store,
    TrendingUp,
    CheckCircle2,
    Loader2,
    Send,
    AlertCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// ── Google Apps Script Web App URL ────────────────────────────────────────
// Replace this with your deployed Apps Script URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXn1ZHF-nOKmqARkRjXU_UoLRlV503XWLu67oJH4cb_79sEIBphTvImhiFWcKKWwio/exec';

// ── Types ─────────────────────────────────────────────────────────────────
interface FormData {
    fullName: string;
    mobile: string;
    address: string;
    businessName: string;
    yearsInBusiness: string;
    hasShop: string;
    monthlySales: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ── Constants ──────────────────────────────────────────────────────────────
const YEARS_OPTIONS = [
    '১ বছরের কম',
    '১–৩ বছর',
    '৩–৫ বছর',
    '৫–১০ বছর',
    '১০ বছরের বেশি',
];

const MONTHLY_SALES_OPTIONS = [
    '১০০–৩০০ বস্তা',
    '৩০০–৫০০ বস্তা',
    '৫০০–১,০০০ বস্তা',
    '১,০০০–৩,০০০ বস্তা',
    '৩,০০০ বস্তার বেশি',
];

// ── Shared field label ─────────────────────────────────────────────────────
function FieldLabel({ icon: Icon, label, required }: { icon: React.ElementType; label: string; required?: boolean }) {
    return (
        <label className="flex items-center gap-2 text-navy font-semibold text-sm mb-2 font-[family-name:var(--font-bengali)]">
            <Icon className="w-4 h-4 text-teal" />
            {label}
            {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
    );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function DealerOfferPage() {
    const [form, setForm] = useState<FormData>({
        fullName: '',
        mobile: '',
        address: '',
        businessName: '',
        yearsInBusiness: '',
        hasShop: '',
        monthlySales: '',
    });
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

    // ── Handlers ─────────────────────────────────────────────────────────
    const handleChange = (field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const isFieldInvalid = (field: keyof FormData) =>
        touched[field] && form[field].trim() === '';

    const isFormValid = Object.values(form).every((v) => v.trim() !== '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched to show validation
        const allTouched = Object.keys(form).reduce(
            (acc, k) => ({ ...acc, [k]: true }),
            {} as Record<keyof FormData, boolean>
        );
        setTouched(allTouched);

        if (!isFormValid) return;

        setStatus('loading');

        try {
            const params = new URLSearchParams({
                fullName: form.fullName,
                mobile: form.mobile,
                address: form.address,
                businessName: form.businessName,
                yearsInBusiness: form.yearsInBusiness,
                hasShop: form.hasShop,
                monthlySales: form.monthlySales,
                submittedAt: new Date().toISOString(),
            });

            // Image() trick: fires a GET request that follows redirects with no CORS issues.
            // This is the most reliable method for Google Apps Script web apps.
            await new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve(); // Apps Script returns non-image, so onerror fires — that's OK
                img.src = `${APPS_SCRIPT_URL}?${params.toString()}`;
                // Fallback timeout in case neither event fires
                setTimeout(resolve, 5000);
            });

            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const handleReset = () => {
        setForm({
            fullName: '',
            mobile: '',
            address: '',
            businessName: '',
            yearsInBusiness: '',
            hasShop: '',
            monthlySales: '',
        });
        setTouched({});
        setStatus('idle');
    };

    // ── Render ────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>ডিলার আবেদন ফর্ম — চমক ফিশ ফিড</title>
                <meta
                    name="description"
                    content="চমক ফিশ ফিডের ডিলার হওয়ার জন্য আবেদন করুন। আপনার ব্যক্তিগত ও ব্যবসায়িক তথ্য পূরণ করে সাবমিট করুন।"
                />
                <link rel="canonical" href={`${siteConfig.siteUrl}/dealer-offer`} />
            </Helmet>

            {/* ── Hero ──────────────────────────────────────────────────── */}
            <section className="bg-navy py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 15% 50%, #2A8A8A 0%, transparent 50%), radial-gradient(circle at 85% 30%, #FFB703 0%, transparent 50%)',
                    }}
                />
                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-white font-bold mb-4 font-[family-name:var(--font-bengali)]">
                            ডিলার হওয়ার আবেদন করুন
                        </h1>
                        <p className="text-white/65 max-w-2xl mx-auto font-[family-name:var(--font-bengali)] leading-relaxed">
                            নিচের ফর্মটি পূরণ করুন। আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Form Section ──────────────────────────────────────────── */}
            <section className="section-padding bg-pageBg">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            /* ── Success State ──────────────────────────── */
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="max-w-lg mx-auto text-center"
                            >
                                <div className="bg-cardBg rounded-2xl p-10 border border-border/40 shadow-lg">
                                    <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-teal" />
                                    </div>
                                    <h2 className="text-navy font-bold mb-3 font-[family-name:var(--font-bengali)]">
                                        আবেদন সফলভাবে জমা হয়েছে!
                                    </h2>
                                    <p className="text-bodyGray text-sm leading-relaxed mb-8 font-[family-name:var(--font-bengali)]">
                                        ধন্যবাদ! আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
                                        আপনার মোবাইল নম্বরে কল বা WhatsApp-এ বার্তা পাঠানো হবে।
                                    </p>
                                    <button
                                        onClick={handleReset}
                                        className="btn-teal font-[family-name:var(--font-bengali)]"
                                    >
                                        নতুন আবেদন করুন
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            /* ── Form ───────────────────────────────────── */
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                noValidate
                                className="max-w-2xl mx-auto"
                            >
                                {/* Error banner */}
                                {status === 'error' && (
                                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6 text-sm font-[family-name:var(--font-bengali)]">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        সমস্যা হয়েছে, আবার চেষ্টা করুন অথবা WhatsApp-এ যোগাযোগ করুন।
                                    </div>
                                )}

                                {/* ── Section 1: Personal Info ─────────── */}
                                <SectionHeader
                                    number="১"
                                    title="ব্যক্তিগত তথ্য"
                                    delay={0.05}
                                />

                                <div className="bg-cardBg rounded-card p-6 border border-border/40 shadow-sm mb-6 space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <FieldLabel icon={User} label="আপনার পূর্ণ নাম" required />
                                        <input
                                            id="fullName"
                                            type="text"
                                            value={form.fullName}
                                            onChange={(e) => handleChange('fullName', e.target.value)}
                                            placeholder="যেমন: মো. রফিকুল ইসলাম"
                                            className={`form-input ${isFieldInvalid('fullName') ? 'border-red-400 focus:ring-red-300' : ''}`}
                                        />
                                        {isFieldInvalid('fullName') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                পূর্ণ নাম লিখুন
                                            </p>
                                        )}
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <FieldLabel icon={Phone} label="মোবাইল নম্বর" required />
                                        <input
                                            id="mobile"
                                            type="tel"
                                            value={form.mobile}
                                            onChange={(e) => handleChange('mobile', e.target.value)}
                                            placeholder="যেমন: 01712345678"
                                            className={`form-input ${isFieldInvalid('mobile') ? 'border-red-400 focus:ring-red-300' : ''}`}
                                        />
                                        {isFieldInvalid('mobile') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                মোবাইল নম্বর লিখুন
                                            </p>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <FieldLabel icon={MapPin} label="ঠিকানা" required />
                                        <textarea
                                            id="address"
                                            rows={3}
                                            value={form.address}
                                            onChange={(e) => handleChange('address', e.target.value)}
                                            placeholder="গ্রাম / ওয়ার্ড, উপজেলা, জেলা"
                                            className={`form-input resize-none ${isFieldInvalid('address') ? 'border-red-400 focus:ring-red-300' : ''}`}
                                        />
                                        {isFieldInvalid('address') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                ঠিকানা লিখুন
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* ── Section 2: Business Info ─────────── */}
                                <SectionHeader
                                    number="২"
                                    title="ব্যবসায়িক তথ্য"
                                    delay={0.1}
                                />

                                <div className="bg-cardBg rounded-card p-6 border border-border/40 shadow-sm space-y-6">
                                    {/* Business Name */}
                                    <div>
                                        <FieldLabel icon={Building2} label="ব্যবসাপ্রতিষ্ঠানের নাম" required />
                                        <input
                                            id="businessName"
                                            type="text"
                                            value={form.businessName}
                                            onChange={(e) => handleChange('businessName', e.target.value)}
                                            placeholder="যেমন: রফিক এন্টারপ্রাইজ"
                                            className={`form-input ${isFieldInvalid('businessName') ? 'border-red-400 focus:ring-red-300' : ''}`}
                                        />
                                        {isFieldInvalid('businessName') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                প্রতিষ্ঠানের নাম লিখুন
                                            </p>
                                        )}
                                    </div>

                                    {/* Years in Business */}
                                    <div>
                                        <FieldLabel icon={Calendar} label="কত বছর ধরে ব্যবসা করছেন?" required />
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                            {YEARS_OPTIONS.map((opt) => (
                                                <RadioChip
                                                    key={opt}
                                                    name="yearsInBusiness"
                                                    value={opt}
                                                    selected={form.yearsInBusiness === opt}
                                                    onChange={(v) => handleChange('yearsInBusiness', v)}
                                                />
                                            ))}
                                        </div>
                                        {isFieldInvalid('yearsInBusiness') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                একটি বিকল্প বেছে নিন
                                            </p>
                                        )}
                                    </div>

                                    {/* Has Shop */}
                                    <div>
                                        <FieldLabel icon={Store} label="আপনার কি নিজস্ব দোকান বা গুদাম আছে?" required />
                                        <div className="flex gap-3">
                                            {['হ্যাঁ', 'না'].map((opt) => (
                                                <RadioChip
                                                    key={opt}
                                                    name="hasShop"
                                                    value={opt}
                                                    selected={form.hasShop === opt}
                                                    onChange={(v) => handleChange('hasShop', v)}
                                                    wide
                                                />
                                            ))}
                                        </div>
                                        {isFieldInvalid('hasShop') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                একটি বিকল্প বেছে নিন
                                            </p>
                                        )}
                                    </div>

                                    {/* Monthly Sales Potential */}
                                    <div>
                                        <FieldLabel icon={TrendingUp} label="মাসিক বিক্রির সম্ভাবনা" required />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {MONTHLY_SALES_OPTIONS.map((opt) => (
                                                <RadioChip
                                                    key={opt}
                                                    name="monthlySales"
                                                    value={opt}
                                                    selected={form.monthlySales === opt}
                                                    onChange={(v) => handleChange('monthlySales', v)}
                                                    wide
                                                />
                                            ))}
                                        </div>
                                        {isFieldInvalid('monthlySales') && (
                                            <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-bengali)]">
                                                একটি বিকল্প বেছে নিন
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <button
                                            id="submit-dealer-form"
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="btn-teal w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed font-[family-name:var(--font-bengali)]"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    পাঠানো হচ্ছে...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    আবেদন জমা দিন
                                                </>
                                            )}
                                        </button>
                                        <p className="text-bodyGray text-xs text-center mt-3 font-[family-name:var(--font-bengali)]">
                                            আবেদনের পর আমাদের টিম আপনার সাথে যোগাযোগ করবে।
                                        </p>
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}

// ── Sub-components ────────────────────────────────────────────────────────

function SectionHeader({ number, title, delay }: { number: string; title: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="flex items-center gap-3 mb-4"
        >
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold font-[family-name:var(--font-bengali)]">{number}</span>
            </div>
            <h2 className="text-navy font-bold text-lg font-[family-name:var(--font-bengali)]">{title}</h2>
            <div className="flex-1 h-px bg-border/40" />
        </motion.div>
    );
}

function RadioChip({
    name,
    value,
    selected,
    onChange,
    wide = false,
}: {
    name: string;
    value: string;
    selected: boolean;
    onChange: (v: string) => void;
    wide?: boolean;
}) {
    return (
        <label
            className={`flex items-center gap-2.5 border rounded-xl px-4 py-3 cursor-pointer transition-all duration-150 select-none font-[family-name:var(--font-bengali)] text-sm
                ${selected
                    ? 'border-teal bg-teal/8 text-teal font-semibold shadow-sm'
                    : 'border-border/60 bg-white text-bodyGray hover:border-teal/40 hover:bg-teal/4'
                }
                ${wide ? 'col-span-1' : ''}
            `}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={selected}
                onChange={() => onChange(value)}
                className="sr-only"
            />
            <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    selected ? 'border-teal' : 'border-gray-300'
                }`}
            >
                {selected && <span className="w-2 h-2 rounded-full bg-teal block" />}
            </span>
            {value}
        </label>
    );
}
