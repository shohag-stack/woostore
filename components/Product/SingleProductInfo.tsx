"use client"
import {Star,Minus,Plus} from "lucide-react"
import { useState } from "react"
import { useCart } from "@/Context/CartContext"
import Image from "next/image"
import { Product } from "@/lib/types/types"

type productProps = {
    product: Product;
    discount: number;
    id: number;
}

export default function SingleProductInfo({product, discount,id}:productProps) {

    const {cart} = useCart()
    const {addToCart} = useCart()
    const currentProduct = cart.find(item=> item.id ===id)
    const currentProductQuantity = currentProduct ? currentProduct.quantity : 0
    const [input, setInput] = useState(currentProductQuantity || 1)


    const handleDecrement = () => {
    const updated = Math.max(1, input - 1); // avoid going below 1
    setInput(updated);
    };

    const handleIncrement = () => {
    const updated = Math.max(1, input + 1);
    setInput(updated);
    };

    const paymentMethod = [
        "/assets/apple.svg",
        "/assets/master.svg",
        "/assets/masterCard.svg",
        "/assets/paypal.svg",
        "/assets/visa.svg"
    ]

    return (
        <div className="flex flex-col gap-3 py-4">
                <h3 className="font-bold"> {product?.name}</h3>
                    <div dangerouslySetInnerHTML={{__html:product?.short_description}} ></div>
                    <div className="flex space-x-3">
                        {
                            product?.sale_price ? (
                                <>
                                    <h6 className="font-bold">${product?.sale_price} -  </h6> <h6 className=" font-bold line-through">${product?.regular_price}</h6>
                                </>
                            ) : null
                        }  
                        {discount? (<span className="bg-green-50 px-1.5 text-accent"> {discount} % OFF </span>) : null}
                    </div>
                <div className="flex space-x-1.5">
                        {
                        [...Array(product?.average_rating)].map((_,index)=> <Star className="text-accent" fill="currentColor" key={index} size={18}/> )
                        }
                </div>
            

                <div className="grid-row space-y-3 sm:space-y-0 sm:flex py-3 sm:gap-4 ">

                        <div className="flex justify-center items-center py-1 px-3 border rounded-full gap-3" >
                        <button onClick={handleDecrement}> <Minus/> </button> 
                        <span className="font[14px]">{input}</span>
                      <button onClick={handleIncrement} > <Plus/> </button>
                      </div>

                        <button className="btn-primary px-20 w-full sm:w-auto" onClick={()=> addToCart({
                        id: product?.id,
                        title: product?.name,
                        image: product?.images[0]?.src || "/fallback.png",
                        price: product?.sale_price,
                        quantity: input,
                    })}>Add To Cart</button>
                </div>


                <div className="flex gap-2">
                    {paymentMethod.map((method,idx)=>(
                            <Image key={idx} src={method} width={38} height={24} alt="idx" />
                    ))}
                </div>
        </div>
    )
}