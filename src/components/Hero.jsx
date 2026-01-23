const Hero = () => {
  return (
    <section className="bg-orange-500 text-center py-20">
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
    </section>
  )
}

export default Hero
