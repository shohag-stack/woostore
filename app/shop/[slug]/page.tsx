import { getProductsBySlug } from "@/lib/api/products"
import Image from "next/image"
import SingleProductInfo from "@/components/Product/SingleProductInfo"

export default async function page({params}: {params : {slug:string}}) {
    console.log(params.slug)
    const product = await getProductsBySlug(params.slug)
    const discount = Math.round  (100 - ( product.sale_price / (product.regular_price / 100)))

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16">

                <div className="title">
                    <Image src={product.images[0].src} alt={product.name} width={652} height={652}/>
                </div>

                <SingleProductInfo id={product.id} discount={discount} product={product}/>

            </div>
        </div>
    )
}