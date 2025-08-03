import Banner from "@/components/About/Banner"
import FilterSidebarWrap from '../../components/ui/FilterSidebarWrap'
import { Suspense } from "react"
import ProductListWrap from "@/components/Product/ProductListWrap"
import { SidebarSekeleton } from "@/components/ui/SidebarSkeleton"
import ShopPageSekeleton from "@/components/Product/ShopPageSekeleton"


export default async function Page({searchParams}:{searchParams:{category? : string}}){
    const categoryId = searchParams.category
    return (
        <>
        <Banner/>
        <div className="shop-container container mx-auto flex">
            <aside className="left-filter w-1/4">
            <Suspense fallback={<SidebarSekeleton/>}>
                <FilterSidebarWrap />
            </Suspense> 
            </aside>
            <Suspense fallback={<ShopPageSekeleton/>}>
                <ProductListWrap categoryId={categoryId}/>
            </Suspense>
        </div>
        </>
    )
}