"use client";

import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                        <Coffee className="text-amber-500" size={24} />
                    </div>
                    <span className="text-xl font-serif font-bold text-white tracking-wide">
                        Acurrucame<span className="text-amber-500">.</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors uppercase tracking-widest relative group",
                                pathname === item.href ? "text-amber-500" : "text-gray-300 hover:text-amber-400"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-300 hover:text-white transition-colors">
                        <Search size={20} />
                    </button>
                    <Link href="/login" className="p-2 text-gray-300 hover:text-white transition-colors">
                        <User size={20} />
                    </Link>
                    <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                        <ShoppingBag size={20} />
                        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                            0
                        </span>
                    </button>
                    <button className="md:hidden p-2 text-gray-300 hover:text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
