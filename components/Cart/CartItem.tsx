"use client"
import {Plus,Minus  } from "lucide-react"
import { CartItems } from "@/lib/types/types"
import Image from "next/image"
import { useCart } from "@/Context/CartContext"
import { useState } from "react"

 type cartProps = {
    item: CartItems
 }


export default function CartItem({item}: cartProps){

    const {updateQuantity, setQuantity, removeFromCart} = useCart()
    const [input, setInput] = useState(item.quantity.toString())

    return (
            <div className="flex py-4 px-4 text-left gap-3 w-full overflow-hidden justify-between outline-secondary" >

                  <div className="shrink-0 p-2 pl-0">
                    <Image width={70} height={70} alt={item.title} src={item.image}/>
                  </div>

                  <div className=" grow-0 flex flex-col gap-2">
                    <h6>{item.title}</h6>
                    <h6>{`$${item.price}`}</h6>
                    <div className="flex gap-4">
                      <div className=" flex justify-between py-3 px-3 outline-1" >
                        <button
                      onClick={()=> updateQuantity(item.id, -1)}
                      >
                        <Minus/>
                      </button>
                        <input className=" w-12 text-center" type="number" value={item.quantity} onChange={(e)=>{
                            const newInput = e.target.value
                            setInput(newInput)
                            const parse = parseInt(newInput, 10)
                            if (!isNaN(parse))
                                setQuantity(item.id, parse)
                        }} />
                      <button
                      onClick={()=> updateQuantity(item.id, 1)}
                      >
                        <Plus/>
                      </button>
                      </div>
                      <button onClick={()=> removeFromCart(item.id)}> Remove</button>
                    </div>
                  </div>

                  <div className="flex[1] w-[80px] text-right">
                      <h6>${item.quantity * item.price}</h6>
                  </div>
                </div>
    )
}