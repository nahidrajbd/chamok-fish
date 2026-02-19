"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, chamakProducts, biotechProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

export default function ProductGrid() {
    const [activeTab, setActiveTab] = useState<"chamak" | "biotech">("chamak");

    const displayedProducts =
        activeTab === "chamak" ? chamakProducts : biotechProducts;

    return (
        <div>
            {/* Tab Switcher */}
            <div className="flex justify-center mb-10">
                <div className="bg-panelBg border border-border/50 rounded-xl p-1.5 flex gap-1">
                    <button
                        onClick={() => setActiveTab("chamak")}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 font-[family-name:var(--font-bengali)] ${activeTab === "chamak"
                                ? "bg-navy text-white shadow-md"
                                : "text-bodyGray hover:text-navy"
                            }`}
                    >
                        চমক ফিশ ফিড
                    </button>
                    <button
                        onClick={() => setActiveTab("biotech")}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 font-[family-name:var(--font-bengali)] ${activeTab === "biotech"
                                ? "bg-teal text-white shadow-md"
                                : "text-bodyGray hover:text-navy"
                            }`}
                    >
                        বায়োটেক ফিশ ফিড
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {displayedProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Product count */}
            <p className="text-center text-bodyGray text-sm mt-6 font-[family-name:var(--font-bengali)]">
                {activeTab === "chamak" ? "চমক ফিশ ফিড" : "বায়োটেক ফিশ ফিড"} ব্র্যান্ডের{" "}
                {displayedProducts.length}টি পণ্য দেখাচ্ছে
            </p>
        </div>
    );
}
