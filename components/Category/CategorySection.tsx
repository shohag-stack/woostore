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

type headingProps = {
    title: string,
    cta: string
}

export default function CategorySection({title,cta}: headingProps){

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
        <div className="container mx-auto py-15">
        <div className="flex justify-between pb-5 items-end">
            <h4>{title}</h4>
            <a className="underline" href="">{cta}</a>
        </div>
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
                                <CarouselItem className="md:basis-1/6 sm:basis-3/6" key={category.id}>
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