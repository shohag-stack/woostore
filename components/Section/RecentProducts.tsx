import ProductSection from "../Product/ProductSection";
// import { getHomePageData } from "@/lib/api/getHomePageData";
import recentProducts from "../../lib/data/product.json"

export default async function RecentProducts(){
    return (
        <ProductSection products={recentProducts} title="Recent Products" cta="View all"/>
    )
}
