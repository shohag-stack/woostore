import CategorySection from "@/components/Category/CategorySection";
import ProductSection from "@/components/Product/ProductSection"
import Banner from "@/components/About/Banner";
import Hero from "@/components/About/Hero";
import BlogSection from "../components/About/BlogSection"
import InfoSection from "@/components/About/InfoSection";
import { getProductsBySlug, getProductsCategory } from "@/lib/api/products";
import { getBlogs } from "@/lib/api/blogs";


export async function getHeroContent() {
  const res = await fetch('http://woostore.local/wp-json/woostore/v1/section')
  const data = await res.json()
  return data
}



export default async function Home() {

  const res = await getHeroContent()


  const featureProducts = await getProductsBySlug('featured')
  const recentProducts = await getProductsBySlug('recent')
  const categories = await getProductsCategory()
  const blogs = await getBlogs()

  return (
    <>
      {/* <Hero hero={res.hero}/> */}
      <CategorySection categories={categories} title="Explore Popular Categories" cta="View all"/>
      <Banner/>
      <ProductSection products={featureProducts} title="Featured Products" cta="View all"/>
      <ProductSection products={recentProducts} title="Recently Added" cta="View all"/>
      <BlogSection blogs={blogs} title="Explore" cta="View all"/>
      <InfoSection/>
    </>
  );
}
