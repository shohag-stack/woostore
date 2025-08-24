import { getProductsBySlug } from "@/lib/api/products"
import Image from "next/image"
import SingleProductInfo from "@/components/Product/SingleProductInfo"
import ReviewSection from "@/components/Product/Review/ReviewSection"
import Feedback from "@/components/Product/Review/Feedback"


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const resolvedParams = await params
  const product = await getProductsBySlug(resolvedParams.slug)

  // handle case where product is not found
  if (!product) {
    return <div className="container mx-auto px-4">Product not found</div>
  }

  // safely convert to numbers
  const regularPrice = Number(product.regular_price) || 0
  const salePrice = Number(product.sale_price) || 0

  // discount only if both numbers are > 0
  const discount =
    regularPrice > 0 && salePrice > 0
      ? Math.round(100 - (salePrice / (regularPrice / 100)))
      : 0


  return (
    <div className="container mx-auto px-4 md:px-0 sm:px-10">
      <div className="flex sm:gap-16 gap-0">
        {product?.images?.[0]?.src ? (
          <div className=" w-[300] h-[200] sm:w-[200] sm:h-[50] md:w-[652] md:h-[350] lg:w-[652] lg:h-[450] xl:w-[500] xl:h-[400] overflow-hidden relative object-cover">
            <Image
            src={product?.images[0]?.src}
            alt={product?.name}
            fill
            objectFit="cover"
          />
          </div>
        ) : (
          <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-sm text-gray-500">
            No image available
          </div>
        )}
        <SingleProductInfo id={product?.id} discount={discount} product={product} />
      </div>
      <ReviewSection />
      <Feedback />
    </div>
  )
}