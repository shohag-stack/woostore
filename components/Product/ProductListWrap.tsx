import { getProductsBycatId } from "@/lib/api/products"
import Card from "./Card"
export default async function ProductListWrap({categoryId} : {categoryId?: string}) {
     const products = await getProductsBycatId(categoryId)
    return (
        <div className="w-3/4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {products?.length ? (
                            products.map((product:any) => (
                                <Card key={product.id} product={product} />
                            ))
                            ) : (
                            <p>No products found.</p>
                            )}
                        </div>
        </div>
    )
}