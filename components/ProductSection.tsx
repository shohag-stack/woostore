'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import {Product} from "../lib/types/types"

export default function ProductSection(){

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
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {
            products.map((product)=> (
              <Card key={product.id} product={product}/>
            ))
          }
        </div>
  )
}