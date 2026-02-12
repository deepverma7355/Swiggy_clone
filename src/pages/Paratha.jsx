import Paratha1 from "../assets/paratha1.avif";
import Paratha2 from "../assets/paratha2.avif";
import Paratha3 from "../assets/paratha3.avif";
import Paratha4 from "../assets/paratha4.avif";
import Footer from "../components/Footer";
const restaurants = [
  {
    id: 1,
    name: "Zyka Paratha",
    rating: "4.5",
    time: "20-25 mins",
    categories: "Paratha, North Indian, Continental",
    area: "RAM HALL BIRHANA ROAD",
    offer: "50% OFF",
    image: Paratha1,
  },
  {
    id: 2,
    name: "The Paratha House",
    rating: "4.1",
    time: "45-55 mins",
    categories: "Paratha, North Indian, Continental",
    area: "Civil Lines",
    offer: "ITEMS AT ₹59",
    image: Paratha2,
  },
  {
    id: 3,
    name: "Paratha Palace",
    rating: "4.3",
    time: "30-40 mins",
    categories: "Paratha, North Indian, Continental",
    area: "Harsh Nagar",
    offer: "ITEMS AT ₹89",
    image: Paratha3,
  },
  {
    id: 4,
    name: "Paratha Corner",
    rating: "4.2",
    time: "30-35 mins",
    categories: "Paratha, North Indian, Continental",
    area: "Naveen Market",
    offer: "50% OFF UPTO ₹100",
    image: Paratha4,
  },
];

const Paratha = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-4xl font-bold mb-2">Paratha</h1>
      <p className="text-gray-600 mb-6 font-bold">
        Taste these delectable classics, delectable parathas to make your day.
      </p>

      <h2 className="text-2xl font-bold mb-6">
        {restaurants.length} Restaurants to explore
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
          
            <div className="relative">
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-44 object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                {res.offer}
              </span>
            </div>

           
            <div className="p-4">
              <h3 className="font-bold text-lg">{res.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span className="text-green-600 font-semibold">★ {res.rating}</span>
                <span>•</span>
                <span>{res.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1 truncate">
                {res.categories}
              </p>
              <p className="text-sm text-gray-500">{res.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
     </>
  );
};

export default Paratha;