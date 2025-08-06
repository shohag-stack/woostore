import { getProductsBycatId, getProductsBySearch } from "@/lib/api/products"
import Card from "./Card"




export default async function ProductListWrap({categoryId, productSlug} : {categoryId?: string, productSlug?: string}) {

    const products = productSlug ?  await getProductsBySearch(productSlug) :await getProductsBycatId(categoryId)
    return (
        <div className="sm:w-3/4 px-3.5 sm:px-0">
            
            {productSlug && (
                <p className="mb-4 text-sm text-gray-600">
                    {products.length} Product{products.length !== 1 && 's'} Found
                </p>
            )}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {products?.length ? (
                            
                            products.map((product:any) => (
                                <Card key={product.id} product={product} />
                            ))
                            ) : (
                             <p> No Products Found</p>
                            )}
                        </div>
        </div>
    )
}