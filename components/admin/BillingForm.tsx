"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { Plus, Trash2, Printer, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

interface BillingFormProps {
    products: Product[];
}

interface FormValues {
    items: {
        productId: string;
        quantity: number;
    }[];
}

export function BillingForm({ products }: BillingFormProps) {
    const { register, control, handleSubmit, watch, reset } = useForm<FormValues>({
        defaultValues: {
            items: [{ productId: "", quantity: 1 }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const [totals, setTotals] = useState({ subtotal: 0, tax: 0, total: 0 });
    const watchedItems = watch("items");

    useEffect(() => {
        let sub = 0;
        watchedItems.forEach(item => {
            const product = products.find(p => p.id.toString() === item.productId);
            if (product) {
                sub += product.price * item.quantity;
            }
        });
        const tax = sub * 0.0825;
        setTotals({ subtotal: sub, tax, total: sub + tax });
    }, [watchedItems, products]);

    const onSubmit = async (data: FormValues) => {
        // Mock submission
        alert("Order placed successfully! (Mock)");
        reset();
    };

    return (
        <div className="glass-panel p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <div className="p-3 rounded-full bg-amber-500/20 text-amber-500">
                    <Receipt size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-serif font-bold">New Order</h2>
                    <p className="text-sm text-gray-400">Point of Sale System</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 mb-8">
                    {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-12 gap-4 items-end animate-fade-in-up">
                            <div className="col-span-7">
                                <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Product</label>
                                <select
                                    {...register(`items.${index}.productId` as const, { required: true })}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                                >
                                    <option value="" className="bg-slate-900">Select Item</option>
                                    {products.map(p => (
                                        <option key={p.id} value={p.id} className="bg-slate-900">
                                            {p.name} - ${p.price.toFixed(2)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-3">
                                <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Qty</label>
                                <input
                                    type="number"
                                    min="1"
                                    {...register(`items.${index}.quantity` as const, { required: true, min: 1 })}
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-center"
                                />
                            </div>
                            <div className="col-span-2">
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="w-full p-3 text-red-400 hover:bg-red-500/20 hover:text-red-200 rounded-lg transition-colors flex justify-center"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => append({ productId: "", quantity: 1 })}
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-400 mb-8 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                    <Plus size={18} /> Add Another Item
                </button>

                <div className="bg-white/5 rounded-xl p-6 space-y-3 mb-8 border border-white/5">
                    <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <span>Tax (8.25%)</span>
                        <span>${totals.tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span className="text-amber-500">${totals.total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="flex-1 bg-amber-500 text-black py-4 rounded-xl font-bold hover:bg-amber-400 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-amber-500/20"
                    >
                        Place Order
                    </button>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="p-4 border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    >
                        <Printer size={24} />
                    </button>
                </div>
            </form>
        </div>
    );
}
