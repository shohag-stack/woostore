import Banner from "@/components/About/Banner"
import FilterSidebarWrap from '../../components/ui/FilterSidebarWrap'
import { Suspense } from "react"
import ProductListWrap from "@/components/Product/ProductListWrap"
import { SidebarSekeleton } from "@/components/ui/SidebarSkeleton"
import ShopPageSekeleton from "@/components/Product/ShopPageSekeleton"


export default async function Page({searchParams}:{searchParams:{search? : string, category: string}}){
    const productSlug = await searchParams.search
    const categoryId = await searchParams.category
    return (
        <>
        <Banner/>
        <div className="shop-container container mx-auto flex">
            <aside className="left-filter w-1/4">
            <Suspense fallback={<SidebarSekeleton/>}>
                <FilterSidebarWrap />
            </Suspense> 
            </aside>
            <Suspense key={productSlug} fallback={<ShopPageSekeleton/>}>
                <ProductListWrap productSlug={productSlug} categoryId={!productSlug ? categoryId : undefined}/>
            </Suspense>
        </div>
        </>
    )
}