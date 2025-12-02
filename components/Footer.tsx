import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Coffee className="text-amber-500" size={24} />
                            <span className="text-xl font-serif font-bold text-white tracking-wide">
                                Acurrucame<span className="text-amber-500">.</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting moments of tranquility through the perfect cup of coffee. Experience the warmth of our hospitality.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Reservations</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>123 Coffee Lane, Brew City</li>
                            <li>hello@acurrucame.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-300 text-gray-400">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Acurrucame Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
