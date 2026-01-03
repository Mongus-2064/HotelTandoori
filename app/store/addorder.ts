import { moveItem } from "framer-motion";
import { Stalemate } from "next/font/google";
import { create } from "zustand";

interface OrderItem {
    id: string,
    name: string,
    quantity: number,
    category:string,
    price: number,
    pic: string,
}

interface Order {
    orders: OrderItem[];
    addtoorder: (item: OrderItem) => void;
    removefromorder: (id: string) => void;
    increaseqty: (id: string) => void;
    decreaseqty: (id: string) => void;
    clearorder: (id: string) => void;
}

export const useorderstore = create<Order>((set) => ({

    orders: [],

    addtoorder: (item) => set((state) => {
        const exists = state.orders.find((order) => order.id === item.id);
        if (exists) {
            return {
                orders: state.orders.map((order) => order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order)
            }   
        }
        return {
            orders: [...state.orders, { ...item, quantity: 1 }]
        }
    }

    ),

    removefromorder: (id)=> set((state)=>({
        orders:state.orders.filter((order)=> order.id != id)
    })),

    increaseqty: (id) => set((state) => ({
        orders: state.orders.map((order) => order.id === id ? { ...order, quantity: order.quantity + 1 } : order)
    })),

    decreaseqty: (id) => set((state) => ({
        orders: state.orders.map((order) => order.id === id ? { ...order, quantity: order.quantity - 1 } : order).filter((order) => order.quantity > 0)


    })),

clearorder:()=> set({orders:[]}),

}));