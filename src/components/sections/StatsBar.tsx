"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
    value: number;
    suffix: string;
    label: string;
    icon: string;
}

const stats: StatItem[] = [
    { value: 2, suffix: "টি", label: "ব্র্যান্ড", icon: "🏷️" },
    { value: 5, suffix: "টি", label: "পণ্য", icon: "📦" },
    { value: 10, suffix: "+", label: "বছরের অভিজ্ঞতা", icon: "⭐" },
    { value: 100, suffix: "+", label: "সক্রিয় ডিলার", icon: "🤝" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    const duration = 1500;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, hasStarted]);

    return (
        <span ref={ref} className="font-bold text-4xl text-gold">
            {count}
            {suffix}
        </span>
    );
}

export default function StatsBar() {
    return (
        <section className="bg-navy py-14">
            <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <CountUp target={stat.value} suffix={stat.suffix} />
                            <p className="text-white/70 text-sm mt-1 font-[family-name:var(--font-bengali)]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
