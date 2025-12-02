import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/5" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Brewing <br />
                            <span className="text-amber-500">Stories</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Founded in 2024, Acurrucame Cafe began with a simple mission: to create a sanctuary where the art of coffee meets the warmth of human connection. "Acurrucame" means "cuddle me" or "snuggle me" in Spanish, reflecting our desire to provide a cozy embrace in every cup.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white">5k+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white">12+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Signature Blends</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden glass-panel p-2 rotate-3 hover:rotate-0 transition-transform duration-700">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop"
                                alt="Cafe Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Values</h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Coffee, title: "Quality First", desc: "We source only the finest beans from sustainable farms across the globe." },
                            { icon: Users, title: "Community", desc: "We believe in building a space where everyone feels welcome and valued." },
                            { icon: Heart, title: "Passion", desc: "Every cup is crafted with love, precision, and an unyielding dedication to excellence." }
                        ].map((item, i) => (
                            <div key={i} className="glass-panel p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
