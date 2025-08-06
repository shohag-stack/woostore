import React from "react"
import BlogCard from "./BlogCard"
import { Blogs } from "@/lib/types/types";
import { getBlogs } from "@/lib/api/blogs";


export default async function BlogSection(){

    const data = await getBlogs()
    const blogs = data.slice(0,10)

    return (
        <div className="container mx-auto py-15 px-4 md:px-0">
        <div className="flex justify-between pb-5 items-end">
            <h4>Explore</h4>
            <a className="underline" href="/blog">View all</a>
        </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-7">
            {
                blogs.map((blog:Blogs)=>(

                    <div key={blog.id}>
                        <BlogCard blog={blog}/>
                    </div>
                ))
            }
                </div>
        </div>
    )
}