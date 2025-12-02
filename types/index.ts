export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    ingredients: string;
    isAvailable: boolean;
}

export interface OrderItem {
    productId: number;
    quantity: number;
}

export interface OrderRequest {
    items: OrderItem[];
}

export interface Order {
    id: number;
    orderDate: string;
    subtotal: number;
    tax: number;
    totalAmount: number;
    status: string;
}
