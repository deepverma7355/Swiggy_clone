import biryani from "../assets/Biryani.png";
import pizza from "../assets/Pizza.png";
import burger from "../assets/Burger.png";
import cake from "../assets/Cake.png";
import rolls from "../assets/Rolls.png";
import noodles from "../assets/Noodles.png";
import kebab from "../assets/Kebab.png";
import tea from "../assets/Tea.png";
import poori from "../assets/Poori.png";
import doosa from "../assets/Dosa.png";
import pasta from "../assets/Pasta.png";
import paratha from "../assets/Paratha.png";

const categories = [
  { name: "Biryani", img: biryani },
  { name: "Pizza", img: pizza },
  { name: "Burger", img: burger },
  { name: "Cake", img: cake },
  { name: "Rolls", img: rolls },
  { name: "Noodles", img: noodles },
  { name: "Kebab", img: kebab },
  { name: "Tea", img: tea },
  { name: "Poori", img: poori },
  { name: "Dosa", img: doosa },
  { name: "Pasta", img: pasta },
  { name: "Paratha", img: paratha },
];

const FoodCategories = () => {
  return (
    <section className="bg-white px-16 py-12">
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Order our best food options
        </h2>
      </div>

      <div className="grid grid-cols-6 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 object-contain hover:scale-105 transition"
            />
            <p className="mt-3 text-sm font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FoodCategories;
