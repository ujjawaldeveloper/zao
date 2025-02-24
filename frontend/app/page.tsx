import BannerCarousel from "@/components/BannerCarousel";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import FeaturedCategories from "@/components/FeaturedCategories";
import TopOffers from "@/components/TopOffers";

const Home = () => {
  return (
    <main id="HomePage" className="bg-gray-100 min-h-screen">
      <BannerCarousel />
      <DealsOfTheDay />
      <FeaturedCategories />
      <TopOffers />
    </main>
  );
};
export default Home;
