import FilterSidebarWithSuspense from "./FilterSidebar";
import { getHomePageData } from "@/lib/api/getHomePageData";

export default async function FilterSidebarWrap () {
    const homeData = await getHomePageData()
    return (
        <FilterSidebarWithSuspense categories={homeData?.categories}/>
    )
}