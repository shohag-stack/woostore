import FilterSidebar from "./FilterSidebar";
import { getHomePageData } from "@/lib/api/getHomePageData";

export default async function () {
    const data = await getHomePageData()
    return (
        <FilterSidebar categories={data.categories}/>
    )
}