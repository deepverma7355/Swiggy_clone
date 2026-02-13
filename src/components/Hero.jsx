import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="bg-orange-500 text-center py-10 px-4">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
        Order food. Discover best restaurants. Swiggy it!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="px-4 py-3 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="px-4 py-3 rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        <div className="rounded-3xl cursor-pointer hover:scale-105 transition">
          <Link to="/food">
          <img
            src={card1}
            alt="Food Delivery"
            className="w-full h-full object-cover rounded-3xl"
          />
          </Link>
        </div>

        <div className="rounded-3xl cursor-pointer hover:scale-105 transition">
            <img
              src={card2}
              alt="Dineout"
              className="w-full h-full object-cover rounded-3xl"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
