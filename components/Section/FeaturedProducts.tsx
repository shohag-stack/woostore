import ProductSection from "../Product/ProductSection";
import { getHomePageData } from "@/lib/api/getHomePageData";
import featuredProducts from "../../lib/data/product.json"


export default async function FeaturedProducts(){

     if (!featuredProducts || !featuredProducts) {
        return <p>No featured products found.</p>
    }


    return (
        <ProductSection products={featuredProducts} title="Featured Products" cta="View all"/>
    )
}