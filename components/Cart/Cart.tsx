"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ShoppingCart } from "lucide-react"
import Image from "next/image";
import CartItem from "./CartItem";
import { useCart } from "@/Context/CartContext";


export default function Cart() {

  const {cart} = useCart()

    return (
        <Drawer modal={false} direction="right">
        <DrawerTrigger>
          <ShoppingCart/>
        </DrawerTrigger>
        <DrawerContent className=" py-4 px-8">
        
          {
            cart.length == 0 ? (
              <>
              <h3>Your cart is empty</h3>
              <div className="flex justify-between border-b">
                    <h6>Products</h6>
                    <p>Total</p>
                </div>
                
              </>
            ) : (

              <>
                <h3>Your Cart</h3>
                <div className="flex justify-between border-b">
                    <h6>Products</h6>
                    <p>Total</p>
                </div>
                {
                  cart.map((item)=>
                    <CartItem item={item}/>
                  )
                }
              </>
              
            )
            }
            
            <DrawerClose asChild>
            <button className="absolute top-5 left-[-15] rounded-full bg-amber-50 w-[30px] h=[30px] shadow">X</button>
          </DrawerClose>
        </DrawerContent>
        </Drawer>
    )
}