import { getProductsBySlug } from "@/lib/api/products"
import { SoloProduct } from "@/lib/types/types"

export default async function page({params}: {params : {slug:string}}) {
    console.log(params.slug)
    const res = await getProductsBySlug(params.slug)
    console.log(res)

    return (
        <h1>
                {res.name}
                <p>hello from product page</p>
        </h1>
    )
}