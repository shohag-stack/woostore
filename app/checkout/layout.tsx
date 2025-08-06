'use client'
import CheckoutCart from "@/components/Product/CheckoutCart";
import { useCart } from "@/Context/CartContext";

export default function layout({children}: Readonly<{children: React.ReactNode; }>){

    const {cart} = useCart()
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-10 pt-10">
                <div>
                {cart.length == 0 ? "No product Found"  : 
                
                <CheckoutCart/>

                }
            </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )

}