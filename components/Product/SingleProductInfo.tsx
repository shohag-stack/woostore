"use client"
import {Star,Minus,Plus} from "lucide-react"
import { useState } from "react"
import { useCart } from "@/Context/CartContext"
export default function SingleProductInfo({product, discount,id}:any) {

    const {cart} = useCart()
    const {updateQuantity, setQuantity,addToCart} = useCart()
    const currentProduct = cart.find(item=> item.id ===id)
    const currentProductQuantity = currentProduct ? currentProduct.quantity : 0
    const [input, setInput] = useState(currentProductQuantity || 1)


    const handleDecrement = () => {
    const updated = Math.max(1, input - 1); // avoid going below 1
    setInput(updated);
    updateQuantity(product.id, updated);
    };

    const handleIncrement = () => {
    const updated = Math.max(1, input + 1);
    setInput(updated);
    updateQuantity(product.id, updated);
    };

    return (
        <div className="flex flex-col gap-3 py-4">
                <h1 className="font-bold"> {product.name}</h1>
                    <div dangerouslySetInnerHTML={{__html:product.short_description}} ></div>
                    <div className="flex space-x-3">
                        <h6 className="font-bold">${product.sale_price} - ${product.regular_price}</h6> <span className="bg-green-50 px-1.5 text-accent"> {discount} % OFF </span>
                    </div>
                <div className="flex space-x-1.5">
                        {
                        [...Array(product.average_rating)].map((_,index)=> <Star className="text-accent" fill="currentColor" key={index} size={18}/> )
                        }
                </div>
                <div className=" flex justify-between py-3 px-3 outline-1" >
                        <button onClick={handleDecrement}> <Minus/> </button> 
                        <input className=" w-12 text-center" type="number" value={String(currentProduct?.quantity ?? (Number.isNaN(input) ? 1 : input))} onChange={(e)=>{
                            const newInput = e.target.value
                            const parse = parseInt(newInput, 10)
                            setInput(parse)
                            if (!isNaN(parse))
                            setQuantity(product.id, parse)}} />
                      <button onClick={handleIncrement} > <Plus/> </button>
                </div>

                <div className="py-3">
                        <button className="btn w-full bg-accent text-white" onClick={()=> addToCart({
                        id: product.id,
                        title: product.name,
                        image: product.images?.[0]?.src || "/fallback.png",
                        price: product.sale_price,
                        quantity: input,
                    })}>Add To Cart</button>
                </div>
        </div>
    )
}