import FoodCategories from "../components/FoodCategories";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import DineoutSection from "../components/DineoutSection";

const Home = () => {
  return (
    <>
      <div className="bg-orange-500 pb-10">
        <Navbar />
        <Hero />

        <div className="flex justify-center gap-10 -mt-10">
          <ServiceCard />
        </div>
      </div>

      <FoodCategories />
      <DineoutSection/>
    </>
  );
};

export default Home;
