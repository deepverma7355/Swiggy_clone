import dine1 from "../assets/dine1.webp"
import dine2 from "../assets/dine2.webp"
import dine3 from "../assets/dine3.webp"
import dine4 from "../assets/dine4.webp"
import DineoutCard from "../assets/dineCard.avif"
import Footer from "../components/Footer"

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
            name: "Maya In Hotel & Restaurant",
            rating: "4.0",
            cuisine: "Chinese • North Indian",
            location: "Civil lines, Kanpur",
            price: "₹600 for two",
            distance: "1.1 km",
            offer: "Flat 10% off on pre-booking",
        },
        {
            image: dine4,
            name: "Maya In Hotel & Restaurant",
            rating: "4.0",
            cuisine: "Chinese • North Indian",
            location: "Civil lines, Kanpur",
            price: "₹600 for two",
            distance: "1.1 km",
            offer: "Flat 10% off on pre-booking",
        },
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
            name: "Maya In Hotel & Restaurant",
            rating: "4.0",
            cuisine: "Chinese • North Indian",
            location: "Civil lines, Kanpur",
            price: "₹600 for two",
            distance: "1.1 km",
            offer: "Flat 10% off on pre-booking",
        },
        {
            image: dine4,
            name: "Maya In Hotel & Restaurant",
            rating: "4.0",
            cuisine: "Chinese • North Indian",
            location: "Civil lines, Kanpur",
            price: "₹600 for two",
            distance: "1.1 km",
            offer: "Flat 10% off on pre-booking",
        },
    ]

    return (
        <>
        <section className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 ml-8">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Discover best restaurants on Dineout
                </h2>
            </div>

            <div className="relative w-full mb-6">
                <img
                    src={DineoutCard}
                    alt="Dineout banner"
                    className="w-full h-40 sm:h-56 md:h-72 lg:h-96 object-cover rounded-xl"
            
            />

                {/* Bottom text overlay */}
                <div className="absolute bottom-6 left-2 right-0  text-white p-4 rounded-b-xl">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold">
                        Explore Top Dining Out 
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold">
                        Restaurants in Kanpur
                    </h2>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-36 sm:h-40 md:h-44 w-full object-cover rounded-t-2xl "
                        />

                        <div className="p-3 sm:p-4">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                                <span className="bg-green-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
                                    ⭐ {item.rating}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600">{item.cuisine}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{item.location}</p>

                            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
                                <span>{item.price}</span>
                                <span>{item.distance}</span>
                            </div>

                            <div className="mt-3 bg-green-100 text-green-700 text-xs sm:text-sm px-3 py-2 rounded-lg font-medium">
                                {item.offer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default DineoutSection
