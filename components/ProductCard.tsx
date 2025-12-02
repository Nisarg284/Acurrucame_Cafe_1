"use client";

import { Product } from "@/types";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    isTrending?: boolean;
    onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, isTrending, onAddToCart }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Fallback image if product.imageUrl is empty
    const imageSrc = product.imageUrl && product.imageUrl.trim() !== ""
        ? product.imageUrl
        : "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 p-3 backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white/10 hover:border-amber-500/30"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isTrending && (
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/90 text-black backdrop-blur-md shadow-lg shadow-amber-500/20">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">Popular</span>
                </div>
            )}

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-4 bg-neutral-900">
                <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Quick Add Button Overlay */}
                <div className={cn(
                    "absolute bottom-4 right-4 transition-all duration-300 transform",
                    isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart?.(product);
                        }}
                        className="p-3 rounded-full bg-amber-500 text-black shadow-lg hover:bg-amber-400 hover:scale-110 transition-all duration-300"
                    >
                        <Plus size={20} strokeWidth={3} />
                    </button>
                </div>
            </div>

            <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white font-serif tracking-wide leading-tight group-hover:text-amber-200 transition-colors">
                        {product.name}
                    </h3>
                    <span className="text-lg font-medium text-amber-400 ml-2">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 font-light leading-relaxed">
                    {product.description}
                </p>
            </div>
        </motion.div>
    );
}
