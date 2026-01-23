import discountImg from "../assets/discount.jpg";
import dineout from "../assets/dineout.jpg";

const services = [
  {
    title: "FOOD DELIVERY",
    subtitle: "FROM RESTAURANTS",
    offer: "UPTO 60% OFF",
    image: discountImg,
  },
  {
    title: "DINEOUT",
    subtitle: "EAT OUT & SAVE MORE",
    offer: "UPTO 50% OFF",
    image: dineout,
  },
];

const ServiceCard = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-center w-[500px]"
        >
          <div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-gray-500">{service.subtitle}</p>
            <span className="text-orange-500 font-semibold">
              {service.offer}
            </span>

            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full">
              Explore →
            </button>
          </div>

          <img src={service.image} alt="" className="w-40" />
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
