"use client"
import CartItem from "../Cart/CartItem";
import { useCart } from "@/Context/CartContext";


export default function CheckoutCart() {

  const {cart} = useCart()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div>
        
          {
            cart.length == 0 ? (
              <div className="px-4 w-full h-full flex flex-col justify-center text-center">
              <div className="flex flex-col justify-center items-center text-center">
                <h3>Your cart is empty</h3>   
              </div>               
              </div>
            ) : (
              <div className="flex h-3/4 flex-col">
                <div>
                    <div className="px-4">
                      <div className="flex justify-between">
                          <h6> {cart.length} Products</h6>
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
                    <h6>Free</h6>
                  </div>

                  <div className="py-5">
                  </div>
                </div>

</div>
            
    )
}