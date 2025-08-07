"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ShoppingCart,X } from "lucide-react"
import CartItem from "./CartItem";
import { useCart } from "@/Context/CartContext";
import Link from "next/link";
import { useState } from "react";


export default function Cart() {

  const {cart} = useCart()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const [open,setOpen] = useState(false)

    return (
        <Drawer open={open} direction="right">
        <DrawerTrigger>
            <div className="relative" onClick={()=>setOpen(true)} >
              <ShoppingCart className="relative"/>
                {
                 cart.length > 0 && <div className="absolute top-[-4] right-[-13] bg-red-500 rounded-full text-white z-10 w-5 h-5 text-[12px] font-medium">{cart.length}</div>
                }
            </div> 
        </DrawerTrigger>
        <DrawerContent className="backdrop-blur-lg bg-white/90">
        
          {
            cart.length == 0 ? (
              <div className="px-4 w-full h-full flex flex-col justify-center text-center">
              <div className="flex flex-col justify-center items-center text-center">
                <ShoppingCart size={40}/>
                <h3>Your cart is empty</h3>   
              </div>               
              </div>
            ) : (
              <div className="flex h-3/4 flex-col">
                <DrawerTitle className="px-4" asChild>
                  <h5 className="py-3">Your Cart</h5>
                </DrawerTitle>
                <div>
                    <div className="px-4">
                      <div className="flex justify-between">
                          <h6>Products</h6>
                          <p>Total</p>
                      </div>
                    </div>
                </div>
                  <div className="overflow-auto flex-grow">
                          {
                          cart.map((item, idx)=>
                            <div key={idx} className="border-t">
                              <CartItem item={item}/>
                            </div>
                          )
                      }
                  </div>
              </div>
              
            )
            }
            <DrawerFooter className="border-t">
              <div>
                  <div className="flex justify-between border-b-1 py-2">
                      <div>
                      <h6>Sub Total</h6>
                      <p> {cart.length} items</p>
                    </div>
                    <h6>${total}</h6>
                  </div>

                  <div className="flex justify-between border-b-1 py-2">
                    <div>
                      <h6>Shipping</h6>
                    </div>
                    <h6>Calculated at checkout</h6>
                  </div>

                  <div className="py-5">
                    <Link onClick={()=>setOpen(false)} href='/checkout' className="btn-primary block text-center">Checkout</Link>
                  </div>
                </div>
                <DrawerClose onClick={()=>setOpen(false)} asChild>
            <button   className="absolute font-regular top-3 right-5 rounded-[7px] px-4 py-2 shadow"><X size={24}/></button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    )
}