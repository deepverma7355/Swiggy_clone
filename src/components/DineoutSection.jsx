import dine1 from "../assets/dine1.webp"
import dine2 from "../assets/dine2.webp"
import dine3 from "../assets/dine3.webp"
import dine4 from "../assets/dine4.webp"
const DineoutSection = () => {
  const data = [
    {
      image: dine1,
      name: "The Food Chariot Company",
      rating: "4.2",
      cuisine: "Chinese • Italian",
      location: "Saket Nagar, Kanpur",
      price: "₹1000 for two",
      distance: "5.6 km",
      offer: "Flat 10% off on pre-booking",
    },
    {
      image: dine2,
      name: "Nothing Before Coffee",
      rating: "4.7",
      cuisine: "Fast Food • Beverages",
      location: "Swaroop Nagar, Kanpur",
      price: "₹500 for two",
      distance: "4 km",
      offer: "Flat 20% off on pre-booking",
    },
    {
      image: dine3,
      name: "Chaska Restaurant",
      rating: "4.0",
      cuisine: "Chinese • North Indian",
      location: "Mirpur, Kanpur",
      price: "₹700 for two",
      distance: "1.1 km",
      offer: "Flat 10% off on pre-booking",
    },
    {
      image: dine4,
      name: "Chaska Restaurant",
      rating: "4.0",
      cuisine: "Chinese • North Indian",
      location: "Mirpur, Kanpur",
      price: "₹700 for two",
      distance: "1.1 km",
      offer: "Flat 10% off on pre-booking",
    },
  ]

  return (
    <section className="px-16 py-12 bg-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Discover best restaurants on Dineout
        </h2>

        
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
                  ⭐ {item.rating}
                </span>
              </div>

              <p className="text-sm text-gray-600">{item.cuisine}</p>
              <p className="text-sm text-gray-500">{item.location}</p>

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{item.price}</span>
                <span>{item.distance}</span>
              </div>

              <div className="mt-3 bg-green-100 text-green-700 text-sm px-3 py-2 rounded-lg font-medium">
                {item.offer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DineoutSection
