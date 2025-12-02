"use client";

import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

interface MenuGridProps {
    products: Product[];
    trendingProductIds: number[];
}

export function MenuGrid({ products, trendingProductIds }: MenuGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <ProductCard
                        product={product}
                        isTrending={trendingProductIds.includes(product.id)}
                    />
                </motion.div>
            ))}
        </div>
    );
}
