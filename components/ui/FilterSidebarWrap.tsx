import FilterSidebarWithSuspense from "./FilterSidebar";
import { getCategories } from "@/lib/api/getHomePageData";

export default async function FilterSidebarWrap () {
    const data = await getCategories()
    return (
        <FilterSidebarWithSuspense categories={data}/>
    )
}