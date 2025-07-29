"use client"
import React, { useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { Category } from "@/lib/types/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CategorySection(){

    const [categories, setCategories] = useState<Category[]>([])

    useEffect( ()=>{
        const fetchCategory = async()=> {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/categories`)
            const data =  await response.json()
            setCategories(data)

        }
        fetchCategory()
    }, [])

    return (
        <div className="w-full">
        {
            categories.length <= 6 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-7">
            {
                categories.map((category)=>(
                    <CategoryCard key={category.id} category={category}/>
                ))
            }
                </div>
            ) : (

                    <Carousel>
                    <CarouselContent>
                        {
                            categories.map((category)=> (
                                <CarouselItem className="md:basis-1/6" key={category.id}>
                                    <CategoryCard category={category}/>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
            )
        }
        </div>
    )
}