"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ShoppingCart } from "lucide-react"
import CartItem from "./CartItem";
import { useCart } from "@/Context/CartContext";


export default function Cart() {

  const {cart} = useCart()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  console.log(total)


    return (
        <Drawer modal={false} direction="right">
        <DrawerTrigger>
          <ShoppingCart/>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose asChild>
            <button className="absolute font-regular top-3 right-5 rounded-full bg-amber-50 w-[30px] h=[30px] shadow">X</button>
            </DrawerClose>
        
          {
            cart.length == 0 ? (
              <div className="px-4">
              <h3>Your cart is empty</h3>
              <div className="flex justify-between">
                    <h6>Products</h6>
                    <p>Total</p>
                </div>
                
              </div>
            ) : (
              <div>
                <div>
                    <div className="px-4">
                      <h5 className="py-3">Your Cart</h5>
                      <div className="flex justify-between">
                          <h6>Products</h6>
                          <p>Total</p>
                      </div>
                    </div>
                </div>
                  <div className="overflow-scroll">
                          {
                          cart.map((item)=>
                            <div className="border-t">
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
                  <div className="flex justify-between">
                      <div>
                      <h6>Sub Total</h6>
                      <p> {cart.length} items</p>
                    </div>
                    <h6>${total}</h6>
                  </div>
                  <div className="py-3">
                    <button className="btn w-full">Checkout</button>
                  </div>
                </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    )
}