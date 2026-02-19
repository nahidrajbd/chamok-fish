import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { dealers } from '@/data/dealers';

export default function DealerCTA() {
    // Show top 3 dealers
    const topDealers = dealers.slice(0, 3);

    return (
        <section className="py-12 bg-white border-t border-border/20">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-navy font-bold text-2xl font-[family-name:var(--font-bengali)] mb-2">
                            আপনার এলাকার ডিলার খুঁজছেন?
                        </h2>
                        <p className="text-bodyGray font-[family-name:var(--font-bengali)]">
                            আমাদের নিবন্ধিত ডিলারদের তালিকা দেখুন।
                        </p>
                    </div>


                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {topDealers.map((dealer) => (
                            <div
                                key={dealer.id}
                                className="flex items-center gap-2 bg-mist/50 px-4 py-2.5 rounded-lg border border-border/40 transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-bodyGray font-[family-name:var(--font-bengali)] leading-none mb-1">{dealer.upazila}</p>
                                    <p className="text-sm font-semibold text-navy font-[family-name:var(--font-bengali)] leading-none">{dealer.nameBn}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link to="/dealers" className="btn-navy text-sm font-[family-name:var(--font-bengali)] shrink-0">
                        সব ডিলার দেখুন
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section >
    );
}
