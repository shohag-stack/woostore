import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import { getBlogBySlug } from "@/lib/api/blogs"

type Props = {
   params: {
    slug: string;
   } 
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts`)
    const posts = await res.json()
    return posts.map((post:any)=> 
    ({
        slug: post.slug
    })
    )
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
const {blog} = await getBlogBySlug(params.slug)
return {
    title: blog.title.rendered,
    description: blog.excerpt.rendered,
}

}

export default async function Page({params} : Props) {
const {blog, featuredImage} = await getBlogBySlug(params.slug)
console.log(featuredImage)
if (!blog) notFound()
return(
    <div className="container mx-auto">
        <h1>
            {blog.title.rendered}
        </h1>       
        {

        <Image width={652} height={384} src={featuredImage.source_url} alt={featuredImage.alt_text || blog.title.rendered} />

        } 
    </div>
)
}