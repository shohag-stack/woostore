import ProductSection from "../Product/ProductSection";
import { getHomePageData } from "@/lib/api/getHomePageData";

export default async function RecentProducts(){
    const homeData = await getHomePageData()
    return (
        <ProductSection products={homeData.recentProducts} title="Recent Products" cta="View all"/>
    )
}
