import { Coffee } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 flex items-center justify-center relative overflow-hidden px-4 py-12">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

            <div className="w-full max-w-md glass-panel p-8 rounded-2xl relative z-10 animate-fade-in-up">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                        <div className="p-3 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                            <Coffee className="text-amber-500" size={32} />
                        </div>
                    </Link>
                    <h1 className="text-3xl font-serif font-bold mb-2">Create Account</h1>
                    <p className="text-gray-400">Join our community of coffee lovers</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button type="button" className="w-full py-3 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02]">
                        Sign Up
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Already have an account? <Link href="/login" className="text-amber-500 hover:text-amber-400 font-bold">Sign in</Link>
                </div>
            </div>
        </main>
    );
}
