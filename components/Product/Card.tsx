'use client'
import React from 'react'
import Image from "next/image";
import { Star,Loader,Check } from "lucide-react";
import {Product} from "../../lib/types/types"
import { useCart } from "@/Context/CartContext";
import Link from 'next/link';
import { useState } from 'react';


 type CardProps = {
    product: Product;
  };


export default function Card({product} : CardProps) {

  const [isLoading, setIsLoading] = useState(false)
  const [added, setAdded] = useState(false)
  const totalStars = Math.round(Number(product.average_rating)) || 1;
  const regularPrice = Number(product.regular_price) || 0;
  const salePrice = Number(product.sale_price) || 0;
  const discount = regularPrice > 0 ? Math.round(((regularPrice - salePrice) / regularPrice) * 100) : 0;  
  const {addToCart} = useCart()

  const handleAddtoCart = async ()=> {
    setIsLoading(true);
    setAdded(false)
    try {
    console.log(isLoading)
    setAdded(false)
    addToCart({
            id: product?.id,
            title: product?.name,
            price: parseInt(product?.sale_price),
            quantity: 1,
            image: product?.images[0]?.src
          })
    }
    
    finally{
      setIsLoading(false)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000);

    }

  }


  return (

      <div className="flex-col pb-2 pl-1 group ">
        <Link href={`/shop/${product.slug}`}>
        {product?.images?.length > 0 ? (
      <Image
        width={310}
        height={310}
        alt={product.name}
        src={product.images[0].src}
        className="bg-accent object-cover w-[310px] h-[310px] transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ) : (
    <div className="w-[310px] h-[310px] bg-gray-100 flex items-center justify-center text-sm text-gray-500">
      No image available
    </div>
  )}
        <div className="flex flex-col gap-3 py-4">
            <h6 className="font-bold"> {product.name}</h6>
            <div dangerouslySetInnerHTML={{__html:product.short_description}} ></div>
            <div className="flex space-x-3">
                <h6 className="font-bold">${product.sale_price} - ${product.regular_price}</h6> <span className="bg-green-50 px-1.5 text-accent"> {discount}% OFF </span>
            </div>
            <div className="flex space-x-1.5">
                {
                [...Array(totalStars)].map((_,index)=> <Star className="text-accent" fill="currentColor" key={index} size={18}/> )
                }
            </div>
        </div>
        </Link>
        <button
          className="btn flex"
          onClick={handleAddtoCart}
          disabled={isLoading}
        > 
          {isLoading ? (
            <>
          <Loader className="mr-3 size-5 animate-spin"/>
          Processing ...
          </>
        ) : added ? (
          <>
            <Check/> Added
          </>
        ) : (
          "Add to Cart"
        )}
          </button>
    </div>
  )
}
