import Poori1 from "../assets/poori1.avif";
import Poori2 from "../assets/poori2.avif";
import Poori3 from "../assets/poori3.avif";
import Poori4 from "../assets/poori4.avif";
import Footer from "../components/Footer";
const restaurants = [
  {
    id: 1,
    name: "Zyka Poori",
    rating: "4.5",
    time: "20-25 mins",
    categories: "Poori, Indian, North Indian",
    area: "RAM HALL BIRHANA ROAD",
    offer: "50% OFF",
    image: Poori1,
  },
  {
    id: 2,
    name: "The Poori House",
    rating: "4.1",
    time: "45-55 mins",
    categories: "Poori, Indian, North Indian",
    area: "Civil Lines",
    offer: "ITEMS AT ₹59",
    image: Poori2,
  },
  {
    id: 3,
    name: "Poori Palace",
    rating: "4.3",
    time: "30-40 mins",
    categories: "Poori, Indian, North Indian",
    area: "Harsh Nagar",
    offer: "ITEMS AT ₹89",
    image: Poori3,
  },
  {
    id: 4,
    name: "Poori Corner",
    rating: "4.2",
    time: "30-35 mins",
    categories: "Poori, Indian, North Indian",
    area: "Naveen Market",
    offer: "50% OFF UPTO ₹100",
    image: Poori4,
  },
];

const Poori = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-4xl font-bold mb-2">Poori</h1>
      <p className="text-gray-600 mb-6 font-bold">
        Taste these delectable classics, delectable pooris to make your day.
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

export default Poori;
