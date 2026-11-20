import { Droplets, TrendingUp, Leaf, MapPin } from 'lucide-react';

const benefits = [
    {
        icon: Droplets,
        title: 'ওয়েল কোটেড ভাসমান ফিড',
        description: 'তেল মেশানো ভাসমান ফিড পানিতে বেশিক্ষণ ভেসে থাকে, তাই মাছ নিজের সময়মতো সহজে খেতে পারে।',
    },
    {
        icon: TrendingUp,
        title: 'ভালো FCR পেতে সাহায্য করে',
        description: 'সঠিক ব্যবস্থাপনায়, মাছের জাত, পানির মান ও যত্ন ঠিক থাকলে, আমাদের ফিড ভালো FCR পেতে সাহায্য করে।',
    },
    {
        icon: Leaf,
        title: 'পরিবেশবান্ধব',
        description: 'ভাসমান ফিড পানিতে দ্রুত গলে যায় না, তাই পুকুরের পানি তুলনামূলক পরিষ্কার থাকে।',
    },
    {
        icon: MapPin,
        title: 'স্থানীয়ভাবে উৎপাদিত',
        description: 'রাজশাহীর পুঠিয়ায় আমাদের নিজস্ব কারখানা ইনাম ফিড মিলে প্রতিটি ব্যাগ তৈরি হয়।',
    },
];

export default function WhyChamokSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                    <h2 className="text-navy font-semibold mb-4 font-[family-name:var(--font-bengali)]">কেন চমক ফিশ ফিড বেছে নেবেন?</h2>
                    <p className="text-bodyGray max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-bengali)]">
                        প্রতিটি পণ্য তৈরি হয় মাছের সঠিক বাড়তির জন্য দরকারি পুষ্টি মাথায় রেখে।
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.title}
                                className="bg-pageBg rounded-xl p-6 border border-navy/10"
                            >
                                <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-navy font-semibold text-base mb-2 font-[family-name:var(--font-bengali)]">{benefit.title}</h3>
                                <p className="text-bodyGray text-sm leading-relaxed font-[family-name:var(--font-bengali)]">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
