import Banner from "@/components/About/Banner"
import Card from "@/components/Product/Card"
import FilterSidebar from "@/components/ui/FilterSidebar"
import { getProducts, getProductsCategory } from "@/lib/api/products"


export default async function Page({searchParams}:{searchParams:{category? : string}}){
    const categoryId = searchParams.category
    const products = categoryId ? await getProducts(categoryId) || [] : []
    const categories = await getProductsCategory()

    return (
        <>
        <Banner/>
        <div className="shop-container container mx-auto flex">
            <aside className="left-filter w-1/4">
                <FilterSidebar categories={categories} />
            </aside>
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
        </div>
        </>
    )
}