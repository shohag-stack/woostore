import React from "react"
import BlogCard from "./BlogCard"
import { Blogs } from "@/lib/types/types";
import { getBlogs } from "@/lib/api/blogs";
import data from "../../lib/data/blogs.json"
import Link from "next/link";


export default async function BlogSection(){

    const blogs = data.slice(0,10)

    return (
        <div className="container mx-auto py-15 px-4 md:px-0">
        <div className="flex justify-between pb-5 items-end">
            <h4>Explore</h4>
            <Link className="underline" href="/blog">View all</Link>
        </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-7">
            {
                blogs.map((blog)=>(

                    <div key={blog.id}>
                        <BlogCard blog={blog}/>
                    </div>
                ))
            }
                </div>
        </div>
    )
}