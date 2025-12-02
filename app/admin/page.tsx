import { BillingForm } from "@/components/admin/BillingForm";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/types";
import { BarChart3, DollarSign, ShoppingBag, Users } from "lucide-react";

async function getProducts(): Promise<Product[]> {
    // Mock data with real images from Google
    return [
        { id: 1, name: "Iced Espresso", description: "Rich espresso served over ice", price: 4.50, imageUrl: "https://lh3.googleusercontent.com/p/AF1QipMQHLQHsywotnA_INEf5KTO9IlorqJoftLivoan=w215-h280-p-k-no", category: "Coffee", ingredients: "Coffee, Ice", isAvailable: true },
        { id: 2, name: "Classic Iced Latte", description: "Smooth espresso with cold milk", price: 5.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCxGik21EMrhDekEFaqsDIMcaQNvxwG7JTBQ95EQXEZB4PLElNMBhS5lLM5qRAsUfv9jE42C3HmWcQ6lPm7Z3ZSBxk0pJB8eMuarJuqz8KAhm3iIbWE_RkH4cexx7Z4CqwGhuK=w215-h280-p-k-no", category: "Coffee", ingredients: "Espresso, Milk", isAvailable: true },
        { id: 3, name: "Cinnamon Cappuccino", description: "Hot cappuccino with cinnamon", price: 5.00, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaoNbw-VfG8iUpFqmI6J-A9na7B7q0WMskkCEDcN3mpoJi3UCjb9oDQBnulhTyTtPhzA6pmgfdGIF6eNEXA3nLiUcZSza1LrThZLhSg-_R45MGwDiru-RKcSlG21rO3KhqWFrN=w215-h280-p-k-no", category: "Coffee", ingredients: "Espresso, Milk, Cinnamon", isAvailable: true },
        { id: 4, name: "Strawberry Matcha", description: "Matcha with strawberry milk", price: 6.50, imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyKJUHkdLGRgwdBBg9dkyl2RfAPT3rli0k7AAHQFr86hTPry6K9kWrFhPFwAUFxBp7XHjUrvGweGuG3WuVDwO67cHabda6zv_YcQ7Iku2_EMELHfwSVdM5qbvG27lSyv6-L1FM=w215-h280-p-k-no", category: "Tea", ingredients: "Matcha, Strawberry", isAvailable: true },
    ];
}

export default async function AdminPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 pb-24">
            <Navbar />

            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-serif font-bold text-white mb-2">Admin Dashboard</h1>
                    <p className="text-gray-400">Manage orders, inventory, and view analytics.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Billing Form */}
                    <div className="lg:col-span-2">
                        <BillingForm products={products} />
                    </div>

                    {/* Right Column: Stats & Analytics */}
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="glass-panel p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2 text-amber-500">
                                    <DollarSign size={20} />
                                    <span className="text-sm font-bold uppercase tracking-wider">Revenue</span>
                                </div>
                                <p className="text-3xl font-bold text-white">$1,245.00</p>
                                <p className="text-xs text-green-400 mt-1">+12% from yesterday</p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2 text-blue-400">
                                    <ShoppingBag size={20} />
                                    <span className="text-sm font-bold uppercase tracking-wider">Orders</span>
                                </div>
                                <p className="text-3xl font-bold text-white">48</p>
                                <p className="text-xs text-green-400 mt-1">+5 new orders</p>
                            </div>
                        </div>

                        {/* Analytics Placeholder */}
                        <div className="glass-panel p-6 rounded-2xl h-80 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Sales Overview</h3>
                                <BarChart3 className="text-gray-500" />
                            </div>
                            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/5 rounded-xl bg-white/5">
                                <p className="text-gray-500 text-sm">Chart Visualization Component</p>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="glass-panel p-6 rounded-2xl">
                            <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                            User
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">New order placed</p>
                                            <p className="text-xs text-gray-500">2 minutes ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
