"use client"
import {Plus,Minus,X  } from "lucide-react"
import { CartItems } from "@/lib/types/types"
import Image from "next/image"
import { useCart } from "@/Context/CartContext"

 type cartProps = {
    item: CartItems
 }

export default function CartItem({item}: cartProps){

    const {updateQuantity, removeFromCart} = useCart()

    return (
            <div className="relative flex flex-row py-4 px-4 text-left gap-3 w-full overflow-hidden justify-between outline-secondary" >
                
                <div className="absolute z-10 -ml-1 mt-0">
                  <button className="bg-gray-500 w-[24] h-[24] rounded-full text-white flex justify-center items-center cursor-pointer" onClick={()=> removeFromCart(item.id)}> <X size={16}/> </button>
                </div>
                  <div className="flex flex-row">
                    <div className=" relative w-24 h-24 overflow-hidden">
                      <Image className="w-full h-full object-cover" width={64} height={64} alt={item.title} src={item?.image || '/fallback.png' }/>
                    </div>

                    <div className="flex flex-row ml-1.5">
                      <a className="flex flex-col flex-1" href="">
                        <h6 className="font-medium">{item.title}</h6>
                        <h6 className="text-secondary">{`$${item.price}`}</h6>
                      </a>
                    </div>
                  </div>

                  <div className=" flex flex-row text-right">
                      <div className="flex flex-col justify-between">
                        <h6>${item.quantity * item.price}</h6>
                        <div className="flex gap-4">
                              <div className=" flex justify-between py-1 px-3 border-b-neutral-200 border rounded-full gap-3" >
                                  <button onClick={()=> updateQuantity(item.id, -1)}><Minus size={14}/> </button>
                                  <span className="font[14px]">{item.quantity}</span>
                                  <button onClick={()=> updateQuantity(item.id, 1)}> <Plus size={14}/> </button>
                              </div>
                        </div>
                      </div>
                      
                  </div>
                </div>
    )
}