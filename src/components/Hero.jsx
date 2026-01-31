import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
const Hero = () => {
  return (
    <section className="bg-orange-500 text-center py-10">
      <h1 className="text-white text-4xl font-bold mb-6">
        Order food. Discover best restaurants. Swiggy it!
      </h1>

      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="px-4 py-3 rounded-lg w-64"
        />
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="px-4 py-3 rounded-lg w-96"
        />
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <div className=" rounded-3xl cursor-pointer w-[400px] hover:scale-105 transition">
          <img
            src={card1}
            alt="Food Delivery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" rounded-3xl cursor-pointer w-[400px] hover:scale-105 transition">
          <img
            src={card2}
            alt="Dineout"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
