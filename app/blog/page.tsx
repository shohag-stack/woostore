import BlogSection from "../../components/About/BlogSection"
import {getBlogs} from "../../lib/api/blogs"

export default async function page(){
    const data = await getBlogs()
    const blogs = data.slice(0,10)
    return (
        <>
        <BlogSection title="Featured News" cta="" blogs={blogs}/>
        <BlogSection title="Recently Added" cta="" blogs={blogs}/>
        </>
    )
}