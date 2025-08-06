import Banner from "@/components/About/Banner";
import InfoSection from "@/components/About/InfoSection";
import FeaturedProducts from "@/components/Section/FeaturedProducts";
import RecentProducts from "@/components/Section/RecentProducts";
import CategorySection from "@/components/Category/CategorySection";
import BlogSection from "@/components/About/BlogSection"
import HeroSection from "@/components/Section/HeroSection";

export default async function Page() {
  

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
