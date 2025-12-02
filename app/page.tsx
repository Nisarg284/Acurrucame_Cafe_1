import { Footer } from "@/components/Footer";
import { MenuGrid } from "@/components/MenuGrid";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/types";
import { ArrowRight, ChevronDown } from "lucide-react";

async function getProducts(): Promise<Product[]> {
  // Mock data with real images from Google
  return [
    { id: 1, name: "Iced Espresso", description: "Rich espresso served over ice for a refreshing kick", price: 4.50, imageUrl: "https://lh3.googleusercontent.com/p/AF1QipMQHLQHsywotnA_INEf5KTO9IlorqJoftLivoan=w215-h280-p-k-no", category: "Coffee", ingredients: "Coffee, Ice", isAvailable: true },
    { id: 2, name: "Classic Iced Latte", description: "Smooth espresso with cold milk and ice", price: 5.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCxGik21EMrhDekEFaqsDIMcaQNvxwG7JTBQ95EQXEZB4PLElNMBhS5lLM5qRAsUfv9jE42C3HmWcQ6lPm7Z3ZSBxk0pJB8eMuarJuqz8KAhm3iIbWE_RkH4cexx7Z4CqwGhuK=w215-h280-p-k-no", category: "Coffee", ingredients: "Espresso, Milk, Ice", isAvailable: true },
    { id: 3, name: "Cinnamon Cappuccino", description: "Hot cappuccino topped with aromatic cinnamon", price: 5.00, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaoNbw-VfG8iUpFqmI6J-A9na7B7q0WMskkCEDcN3mpoJi3UCjb9oDQBnulhTyTtPhzA6pmgfdGIF6eNEXA3nLiUcZSza1LrThZLhSg-_R45MGwDiru-RKcSlG21rO3KhqWFrN=w215-h280-p-k-no", category: "Coffee", ingredients: "Espresso, Steamed Milk, Cinnamon", isAvailable: true },
    { id: 4, name: "Strawberry Matcha", description: "Premium matcha layered with sweet strawberry milk", price: 6.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyKJUHkdLGRgwdBBg9dkyl2RfAPT3rli0k7AAHQFr86hTPry6K9kWrFhPFwAUFxBp7XHjUrvGweGuG3WuVDwO67cHabda6zv_YcQ7Iku2_EMELHfwSVdM5qbvG27lSyv6-L1FM=w215-h280-p-k-no", category: "Tea", ingredients: "Matcha, Strawberry Milk, Ice", isAvailable: true },
    { id: 5, name: "Caramel Macchiato", description: "Espresso with vanilla and caramel drizzle", price: 6.00, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzt-Xn62IXvjA5gXqtPHzlS6JX9KczpT1ow_8D_X6kS8LAfk939z6Ag6y2MlT8jSZC1z8x3NDeJ0ZfEZfsqWHKHIG4Xh5t_5FhdebfC3J91aSFNUnrOXJl6-stZjh--eMOpr8kB=w215-h280-p-k-no", category: "Coffee", ingredients: "Espresso, Vanilla, Caramel", isAvailable: true },
    { id: 6, name: "Berry Smoothie", description: "Mixed berries, yogurt, and chia seeds", price: 7.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwrhbrwZPGue0mFE4jthTY6Y_xhBrEloUQR742BhL1Ae0HwreeNI9cL6OxA13zNWc0xeKg3NP66G8yxS6IFpnarEODb0-KtRErhTjqP9qz6gncE640vhpcf2PbE0U5WSMNDlNU=w215-h280-p-k-no", category: "Drinks", ingredients: "Berries, Yogurt, Chia", isAvailable: true },
    { id: 7, name: "Avocado Toast", description: "Sourdough, smashed avocado, chili flakes", price: 12.00, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx8JL_UHUf2RWE2R2km8E2IBCpUfgVNW-y2V-nsEqYxSBMYvlqKDXC-CFTNQBxxplB8wIaYBuxlln-1bZmVyh5WpQDl7JceGm29mub8XSwxft3tOeJNNfMmBHJoUmU0xKQsWdxDkg=w215-h280-p-k-no", category: "Food", ingredients: "Bread, Avocado, Chili", isAvailable: true },
    { id: 8, name: "Croissant", description: "Buttery, flaky, freshly baked pastry", price: 3.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz-IATl-2-Ef5w-5qx-AMA7W4Eqb7eIk2cEddqEbMO1oNvFrJ6uuG40-Ep9FbjMEc8p8eIsC7SiXoBWUp9x1APvAyMlKD_sMrAgJclR1ZPzLvpRwwXULHsGjlBgw7fjrJ6Z3rqdwQ=w215-h280-p-k-no", category: "Food", ingredients: "Flour, Butter", isAvailable: true },
    { id: 9, name: "Signature Blend", description: "Our house special blend", price: 15.00, imageUrl: "https://lh3.googleusercontent.com/p/AF1QipODAJ2f4k1mObQfJ3D6jbKkMmHiU4PbsoUw4Lnb=w215-h280-p-k-no", category: "Coffee", ingredients: "Coffee Beans", isAvailable: true },
  ];
}

async function getTrending(): Promise<Product[]> {
  return [
    { id: 3, name: "Cinnamon Cappuccino", description: "", price: 0, imageUrl: "", category: "", ingredients: "", isAvailable: true },
    { id: 4, name: "Strawberry Matcha", description: "", price: 0, imageUrl: "", category: "", ingredients: "", isAvailable: true },
  ];
}

export default async function Home() {
  const products = await getProducts();
  const trending = await getTrending();
  const trendingIds = trending.map(p => p.id);

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient/Image Placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzOO_bMOLFLGzT51KDOSzqPQirUQz6ab80vxov97hz5qn6Q0avsUv4z0MUdngrNtC46BvcIYuncTJiSN3lytUFXdxKHaMGMf8acKjp3L-jJ3c3hy2gR8wBm5-YjR2VdHlQRU6wTWt0tzWtH=w140-h140-p-k-no')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <div className="inline-block animate-fade-in-up">
            <span className="py-1 px-3 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              Est. 2024
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 leading-tight tracking-tight animate-fade-in-up delay-100">
            Savor the <br />
            <span className="text-amber-500 italic">Moment</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Experience the art of coffee in a sanctuary of taste and tranquility.
            Where every cup tells a story and every sip is a memory.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold tracking-wide hover:bg-amber-400 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              View Menu <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              Book a Table
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Featured/Menu Section */}
      <section id="menu" className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our <span className="text-amber-500">Signature</span> Menu
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
            <p className="text-gray-400 max-w-xl mx-auto">
              Curated selection of premium blends and artisanal snacks.
            </p>
          </div>

          <MenuGrid products={products} trendingProductIds={trendingIds} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-900/10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Join Our Community
          </h2>
          <p className="text-gray-400">
            Subscribe to receive updates on new blends, events, and exclusive offers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button className="px-8 py-3 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
