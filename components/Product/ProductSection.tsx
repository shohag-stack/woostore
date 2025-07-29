'use client'
import Card from "./Card";
import { useEffect, useState } from "react";
import {Product} from "../../lib/types/types"


type headingProps = {
    title: string,
    cta: string
}

export default function ProductSection({title,cta}:headingProps){
  

  const [products, setProducts] = useState <Product[]> ([])
  
    useEffect(()=>{
      const fetchProducts = async ()=> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/products`)
        const data = await res.json()
        setProducts(data)
      }
      fetchProducts()
    }, [])

   return (

   <div className="container mx-auto py-10">
      <div className="flex justify-between pb-5 items-end">
              <h4>{title}</h4>
              <a className="underline" href="">{cta}</a>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">

              {
              products.map((product)=> (
                <Card key={product.id} product={product}/>
              ))
            }
      </div>
   </div>
  )
}