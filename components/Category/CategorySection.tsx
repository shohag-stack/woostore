import React from "react"
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
    categories: Category[];
}

export default function CategorySection({title,cta, categories}: headingProps){


    return (
        <div className="container mx-auto py-15 px-4 md:px-0">
            <div className="flex justify-between pb-5 items-end">
                <h4>{title}</h4>
                <a className="underline" href="">{cta}</a>
            </div>
        {
            categories.length <= 6 ? (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-7">
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
                                <CarouselItem className="sm:basis-1/3 md:basis-2/7 lg:basis-1/6 basis-1/" key={category.id}>
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