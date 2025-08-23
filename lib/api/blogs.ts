import { Blogs } from "../types/types"
import post from "../data/blogs.json"

// fetch blog post //
export async function getBlogBySlug(slug:string) {
  const blog = post.find((b)=> b.slug === slug)
  let featuredImage = blog?.featured_media
  return {blog, featuredImage};
}


// // fetch all blog posts //
export async function getBlogs(){
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed`,{next:{revalidate:60 * 60}}).then(res=> res.json())
    return  blogs

}