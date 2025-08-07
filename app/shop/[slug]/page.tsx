import { getProductsBySlug } from "@/lib/api/products"
import Image from "next/image"
import SingleProductInfo from "@/components/Product/SingleProductInfo"
import ReviewSection from "@/components/Product/Review/ReviewSection"
import Feedback from "@/components/Product/Review/Feedback"

export default async function Page({params}: {params : Promise<{slug:string}>}) {
    const resolvedParams = await params
    const product = await getProductsBySlug(resolvedParams.slug)
    const discount = Math.round  (100 - ( product.sale_price / (product.regular_price / 100)))

    return (
        <div className="container mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:gap-16 gap-0">
                <Image className="w-full" src={product.images[0].src} alt={product.name} width={652} height={652}/>
                <SingleProductInfo id={product.id} discount={discount} product={product}/>
            </div>
            <ReviewSection/>
            <Feedback/>
        </div>
    )
}