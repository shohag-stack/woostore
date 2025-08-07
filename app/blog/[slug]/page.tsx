import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import { getBlogBySlug } from "@/lib/api/blogs"
import { Blogs } from "@/lib/types/types"


export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts`)
    const posts = await res.json()
    return posts.map((post: Blogs) => ({
        slug: post.slug
    }))
}

export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
    const resolvedParams = await params
    const {blog} = await getBlogBySlug(resolvedParams.slug)
    return {
        title: blog.title.rendered,
        description: blog.excerpt.rendered,
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const {blog, featuredImage} = await getBlogBySlug(resolvedParams.slug)
    console.log(featuredImage)
    if (!blog) notFound()
    return(
        <div className="container mx-auto">
            <h1>
                {blog.title.rendered}
            </h1>       
            <Image width={652} height={384} src={featuredImage?.source_url || "/fallback.jpg"} alt={featuredImage?.alt_text || blog.title.rendered} />
        </div>
    )
}