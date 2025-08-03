import ProductSection from "../Product/ProductSection";
import { getHomePageData } from "@/lib/api/getHomePageData";

export default async function FeaturedProducts(){
    const homeData = await getHomePageData()
    return (
        <ProductSection products={homeData.featuredProducts} title="Featured Products" cta="View all"/>
    )
}