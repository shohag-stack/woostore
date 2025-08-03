'use client'
import React from 'react'
import Image from "next/image";
import { Star } from "lucide-react";
import {Product} from "../../lib/types/types"
import { useCart } from "@/Context/CartContext";
import Link from 'next/link';


 type CardProps = {
    product: Product;
  };


export default function Card({product} : CardProps) {


  const totalStars = product.average_rating
  const discount = Math.round(((product.regular_price - product.price) / product.regular_price) * 100);
  const {addToCart} = useCart()


  return (

      <div className="flex-col pb-2 pl-1">
        <Link href={`/shop/${product.slug}`}>
        <Image width={310} height={310} alt="product" src={product.images[0].src} className=" bg-accent object-cover w-[310px] h-[310px]"/>
        <div className="flex flex-col gap-3 py-4">
            <h6 className="font-bold"> {product.name}</h6>
            <div dangerouslySetInnerHTML={{__html:product.short_description}} ></div>
            <div className="flex space-x-3">
                <h6 className="font-bold">${product.price} - ${product.regular_price}</h6> <span className="bg-green-50 px-1.5 text-accent"> {discount}% OFF </span>
            </div>
            <div className="flex space-x-1.5">
                {
                [...Array(totalStars)].map((_,index)=> <Star className="text-accent" fill="currentColor" key={index} size={18}/> )
                }
            </div>
        </div>
        </Link>
        <button
          className="btn"
          onClick={()=> 
            addToCart({
            id: product.id,
            title: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0].src
          })
          }
        > 
          Add To Cart
          </button>
    </div>
  )
}
