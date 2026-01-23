import FoodCategories from "../components/FoodCategories";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import discountImg from "../assets/discount.jpg"
import dineout from "../assets/dineout.jpg"

const Home = () => {
  return (
    <>
      <div className="bg-orange-500 pb-10">
        <Navbar />
        <Hero />

        <div className="flex justify-center gap-10 -mt-10">
          <ServiceCard
            title="FOOD DELIVERY"
            subtitle="FROM RESTAURANTS"
            offer="UPTO 60% OFF"
            image={discountImg}
          />
          <ServiceCard
            title="DINEOUT"
            subtitle="EAT OUT & SAVE MORE"
            offer="UPTO 50% OFF"
            image={dineout}
          />
        </div>

      </div>
      <FoodCategories />
    </>
  )
}

export default Home
