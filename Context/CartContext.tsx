"use client"
import { createContext,useContext, useEffect, useState } from "react";
import { CartItems } from "@/lib/types/types";

type CartContextType = {
  cart: CartItems[]
  addToCart: (item: CartItems) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, amount: number) => void
  setQuantity: (id:number, amount:number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({children} : { children: React.ReactNode})=> {

    const [cart, setCart] = useState<CartItems[]>([])

    useEffect(()=>{
        const storedCart = localStorage.getItem('cart')
        if (storedCart) setCart(JSON.parse(storedCart))
    },[])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const addToCart = (items: CartItems)=>{
        setCart(prev => {
            const existingItems = prev.find(p => p.id === items.id)
            if (existingItems) {
                return prev.map(p => p.id === items.id ? { ...p, quantity: p.quantity + items.quantity } : p)
            }
            else {
                return [ ...prev, items ]
            }
        })
    }

    // update quantity

    const updateQuantity = (id: number, amount: number)=> {
        setCart(prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity + amount} : item).filter(item => item.quantity > 0))
    }

    // set Quantity
    const setQuantity = (id: number, amount: number)=> {
        setCart(prev => prev.map(item => item.id === id ? {...item, quantity: amount} : item).filter(item => item.quantity > 0))
    }

    // remove from cart

    const removeFromCart = (id:number)=>{
        setCart(prev => prev.filter(item=> item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart,updateQuantity, setQuantity,removeFromCart }} >
                {children}
        </CartContext.Provider>
    )


}


export const useCart = ()=> {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within CartProvider")
    return context
}