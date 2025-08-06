import Banner from "@/components/About/Banner";
import InfoSection from "@/components/About/InfoSection";
import FeaturedProducts from "@/components/Section/FeaturedProducts";
import RecentProducts from "@/components/Section/RecentProducts";
import CategorySection from "@/components/Category/CategorySection";
import BlogSection from "@/components/About/BlogSection"
import HeroSection from "@/components/Section/HeroSection";
import ProductCardSkeleton from '../components/Product/ProductCardSkeleton'

export default async function page() {
  

  return (
    <>
      <HeroSection/>
      <CategorySection/>
      <Banner/>
      <FeaturedProducts/>
      <RecentProducts/>
      <BlogSection/>
      <InfoSection/>
    </>
  );
}
