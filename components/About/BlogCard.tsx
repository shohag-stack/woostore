import React from 'react'
import Image from "next/image";
import {Blogs} from "../../lib/types/types"
import Link from 'next/link';


 type CardProps = {
    blog: Blogs;
  };


export default function Card({ blog } : CardProps) {

  const imageUrl = blog._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/placeholder.jpg";
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const plainText = blog.content?.rendered.replace(/<[^>]*>/g, '');
  const wordCount = plainText?.split(/\s+/).length || 0;
  const readTime = Math.ceil(wordCount / 200);

  const meta = `${formattedDate} | ${readTime} minute${readTime > 1 ? 's' : ''} read`;

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex-col space-y-4">
        <Image width={424} height={250} alt="product" src={imageUrl} className=" bg-accent object-cover w-[424] h-[250]"/>
        <div className="flex flex-col space-y-2">
            <h6 className="font-bold"> {blog.title.rendered}</h6>
            <div> {meta} </div>
        </div>
    </div>
    </Link>
  )
}
