"use client"
import CategorySection from "@/components/Category/CategorySection";
import ProductSection from "@/components/Product/ProductSection"
import Banner from "@/components/About/Banner";
import Hero from "@/components/About/Hero";

export default function Home() {


  return (
    <>
      <Hero/>
      <CategorySection title="Explore Popular Categories" cta="View all"/>
      <Banner/>
      <ProductSection title="Featured Products" cta="View all"/>
      <ProductSection title="Recently Added" cta="View all"/>
    </>
  );
}
