import { Blogs } from "../types/types"
export async function getBlogBySlug(slug:string): Promise<{blog:Blogs, featuredImage: any}>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?slug=${slug}`, {next: { revalidate: 60 }})
  const posts: Blogs[] = await res.json();
  const blog = posts[0]

  let featuredImage = null
  if (blog.featured_media) {
    const imgRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/media/${blog.featured_media}`)
    featuredImage = await imgRes.json()
  }
  return {blog, featuredImage};
}

// 

export async function getBlogs(){
  try {
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed`).then(res=> res.json())
    return  blogs
  }
  catch(error){
    console.error(error);
  }
}