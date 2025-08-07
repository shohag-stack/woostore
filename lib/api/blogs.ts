import { Blogs } from "../types/types"

// fetch blog post //
export async function getBlogBySlug(slug:string): Promise<{blog:Blogs, featuredImage: string}>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?slug=${slug}`, {next: { revalidate: 3600 }})
  const posts: Blogs[] = await res.json();
  const blog = posts[0]

  let featuredImage = null
  if (blog.featured_media) {
    const imgRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/media/${blog.featured_media}`)
    featuredImage = await imgRes.json()
  }
  return {blog, featuredImage};
}


// // fetch all blog posts //
export async function getBlogs(){
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed`,{next:{revalidate:60 * 60}}).then(res=> res.json())
    return  blogs

}