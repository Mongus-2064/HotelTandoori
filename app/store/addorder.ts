import {create} from "zustand";

interface OrderItem{
    id:string,
    name:string,
    quantity:number,
    price:string,
    pic:string,
}

interface Order{
    orders: OrderItem[];
    addtoorder:(item: OrderItem) => void;
    removefromorder: (id: string)=> void;
    increaseqty: (id: string)=>void;
    decreaseqty: (id: string)=> void;
    clearorder: (id: string)=>void;
}

export const useorderstore = create<Order>((set)=>({
    orders: [],

    addtoorder: (item)=> set((state)=>{
        const exists = state.orders.
    })

    



}))