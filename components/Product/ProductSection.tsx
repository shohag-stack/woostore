import Card from "./Card";
import {Product} from "../../lib/types/types"
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
    products: Product[]
}

export default function ProductSection({title,cta, products}:headingProps){

  console.log(products)
  
   return (

   <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="flex justify-between pb-5 items-end">
              <h4>{title}</h4>
              <a className="underline" href="">{cta}</a>
          </div>


        { Array.isArray(products) && products.length <= 4 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-7">
                  {
                    products.map((product)=> (
                  <Card key={product.id} product={product}/>
                      ))
                  }
                  
                  </div>
              
          ) : (
            <Carousel>
                    <CarouselContent>
                        {
                Array.isArray(products) && products.map((product)=> (
                  <CarouselItem className="sm:basis-1/3 md:basis-2/7 lg:basis-1/4 " key={product.id}>
                      <Card key={product.id} product={product}/>
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