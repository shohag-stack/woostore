"use client"
import {Plus,Minus  } from "lucide-react"
import { CartItems } from "@/lib/types/types"
import Image from "next/image"
import { useCart } from "@/Context/CartContext"

 type cartProps = {
    item: CartItems
 }


export default function CartItem({item}: cartProps){

    const {updateQuantity} = useCart()

    return (
            <div className="flex py-4 text-left gap-3" >

                  <div className="flex[0] p-4">
                    <Image width={80} height={80} alt={item.title} src={item.image}/>
                  </div>

                  <div className=" flex-[4] flex flex-col gap-2">
                    <h6>{item.title}</h6>
                    <h6>{item.price}</h6>
                    <div className=" flex justify-between py-3 px-3 outline-1">
                      <button
                      onClick={()=> updateQuantity(item.id, -1)}
                      >
                        <Minus/>
                      </button>
                        <p>{item.quantity}</p>
                      <button
                      onClick={()=> updateQuantity(item.id, 1)}
                      >
                        <Plus/>
                      </button>
                    </div>
                  </div>

                  <div className="flex[0]">
                      <h6>${item.quantity * item.price}</h6>
                  </div>
                </div>
    )
}