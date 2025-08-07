import FilterSidebarWithSuspense from "./FilterSidebar";
import { getHomePageData } from "@/lib/api/getHomePageData";

export default async function FilterSidebarWrap () {
    const data = await getHomePageData()
    return (
        <FilterSidebarWithSuspense categories={data.categories}/>
    )
}