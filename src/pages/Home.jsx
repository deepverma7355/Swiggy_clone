import FoodCategories from "../components/FoodCategories";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DineoutSection from "../components/DineoutSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodCategories />
      <DineoutSection />
      <Footer />
    </>
  );
};

export default Home;
