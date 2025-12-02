import { Footer } from "@/components/Footer";
import { MenuGrid } from "@/components/MenuGrid";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/types";

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

export default async function MenuPage() {
    const products = await getProducts();
    const categories = Array.from(new Set(products.map(p => p.category)));

    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30">
            <Navbar />

            <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
                <header className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                        Our <span className="text-amber-500">Menu</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our carefully curated selection of artisanal coffees, teas, and gourmet snacks.
                    </p>
                </header>

                {/* Category Filter (Mock UI - Functional filtering would require client component state) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button className="px-6 py-2 rounded-full bg-amber-500 text-black font-bold transition-all">All</button>
                    {categories.map(cat => (
                        <button key={cat} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-300 hover:text-white">
                            {cat}
                        </button>
                    ))}
                </div>

                <MenuGrid products={products} trendingProductIds={[3, 4]} />
            </div>

            <Footer />
        </main>
    );
}
