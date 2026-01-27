import FoodCategories from "../components/FoodCategories";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import DineoutSection from "../components/DineoutSection";
import Footer from "../components/Footer";

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
      <Footer/>
    </>
  );
};

export default Home;
