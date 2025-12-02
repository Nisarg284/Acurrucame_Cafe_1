import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30">
            <Navbar />

            <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                        Get in <span className="text-amber-500">Touch</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Have a question or want to book a private event? We'd love to hear from you.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-panel p-8 rounded-2xl space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                    <p className="text-gray-400">123 Coffee Lane, Brew City</p>
                                    <p className="text-gray-400">CA 90210, United States</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                    <p className="text-gray-400">hello@acurrucame.com</p>
                                    <p className="text-gray-400">events@acurrucame.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                    <p className="text-gray-400">Mon-Fri, 9am - 6pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="glass-panel rounded-2xl h-64 w-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-gray-500">
                                Interactive Map Component
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">First Name</label>
                                    <input type="text" className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Last Name</label>
                                    <input type="text" className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea rows={5} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" placeholder="How can we help you?" />
                            </div>

                            <button type="button" className="w-full py-4 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
