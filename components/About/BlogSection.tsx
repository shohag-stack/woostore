"use client"
import React from "react"
import BlogCard from "./BlogCard"
import { Blogs } from "@/lib/types/types"
type headingProps = {
    title:string;
    cta: string;
    blogs:Blogs[]
}

export default function CategorySection({blogs,title,cta}: headingProps){

    return (
        <div className="container mx-auto py-15 px-4 md:px-0">
        <div className="flex justify-between pb-5 items-end">
            <h4>{title}</h4>
            <a className="underline" href="/blog">{cta}</a>
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