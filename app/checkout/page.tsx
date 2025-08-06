'use client'
import { Information } from "@/components/Product/Information"
import ShippingInfo from "@/components/Product/ShippingInfo"
import { useState } from "react"


export default function Page(){
    const [step, setStep] = useState(1)
    const checkoutStep = ()=> {
        switch(step) {
            case 1 : return ( <Information onNext={()=>setStep(2)} />)
        }
        switch(step) {
            case 2 : return ( <ShippingInfo onBack={()=>setStep(1)} />)
        }
    }
    return (

                <div>
                    {checkoutStep()}
                </div>
    )
}