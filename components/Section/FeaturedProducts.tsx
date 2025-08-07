import ProductSection from "../Product/ProductSection";
import { getFeaturedProducts } from "@/lib/api/getHomePageData";

export default async function FeaturedProducts(){
    const homeData = await getFeaturedProducts()
    return (
        <ProductSection products={homeData} title="Featured Products" cta="View all"/>
    )
}