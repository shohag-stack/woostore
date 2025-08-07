import { getProductsBySlug } from "@/lib/api/getHomePageData"
import Image from "next/image"
import SingleProductInfo from "@/components/Product/SingleProductInfo"
import ReviewSection from "@/components/Product/Review/ReviewSection"
import Feedback from "@/components/Product/Review/Feedback"

export default async function Page({params}: {params : Promise<{slug:string}>}) {
    const resolvedParams = await params
    const product = await getProductsBySlug(resolvedParams.slug)
    const regular = Number(product?.regular_price)
const sale = Number(product?.sale_price)

const discount =
  regular > 0 && sale > 0
    ? Math.round(100 - (sale * 100) / regular)
    : null

    return (
        <div className="container mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:gap-16 gap-0">
                {product?.images?.[0]?.src ? (
                <Image
                    className="w-full"
                    src={product.images[0].src}
                    alt={product.name || "Product Image"}
                    width={652}
                    height={652}
                />
                ) : (
                <div className="w-full h-[652px] bg-gray-100 flex items-center justify-center text-gray-500">
                    No image available
                </div>
                )}
                <SingleProductInfo id={product?.id} discount={discount} product={product}/>
            </div>
            <ReviewSection/>
            <Feedback/>
        </div>
    )
}