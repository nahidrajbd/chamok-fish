"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export default function FeaturedProducts() {
    return (
        <section className="section-padding bg-mist/40">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-3 font-[family-name:var(--font-bengali)]">
                            <Package className="w-4 h-4" />
                            আমাদের পণ্য
                        </span>
                        <h2 className="text-navy font-[family-name:var(--font-bengali)]">
                            বিশেষ পণ্যসমূহ
                        </h2>
                    </div>
                    <Link
                        href="/products"
                        className="btn-teal text-sm whitespace-nowrap font-[family-name:var(--font-bengali)]"
                    >
                        সব পণ্য দেখুন
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
