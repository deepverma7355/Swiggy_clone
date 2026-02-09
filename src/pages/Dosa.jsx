import Dosa1 from "../assets/dosa1.avif";
import Dosa2 from "../assets/dosa2.avif"
import Dosa3 from "../assets/dosa3.avif"
import Dosa4 from "../assets/dosa4.avif"
const restaurants = [
  {
    id: 1,
    name: "Tasty Treat",
    rating: "4.5",
    time: "20-25 mins",
    categories: "Dosa, Indian, South Indian",
    area: "RAM HALL BIRHANA ROAD",
    offer: "50% OFF",
    image: Dosa1,
  },
  {
    id: 2,
    name: "Madras Dosa Hub",
    rating: "4.1",
    time: "45-55 mins",
    categories: "Dosa, Indian, South Indian",
    area: "Civil Lines",
    offer: "ITEMS AT ₹59",
    image: Dosa2,
  },
  {
    id: 3,
    name: "Dosa Delight",
    rating: "4.3",
    time: "30-40 mins",
    categories: "Dosa, Indian, South Indian",
    area: "Harsh Nagar",
    offer: "ITEMS AT ₹89",
    image: Dosa3,
  },
  {
    id: 4,
    name: "Dosa Corner",
    rating: "4.2",
    time: "30-35 mins",
    categories: "Dosa, Indian, South Indian",
    area: "Naveen Market",
    offer: "50% OFF UPTO ₹100",
    image: Dosa4,
  },
];

const Dosa = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-4xl font-bold mb-2">Dosa</h1>
      <p className="text-gray-600 mb-6 font-bold">
        Taste these delectable classics, delectable dosa to make your day.
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
  );
};

export default Dosa;