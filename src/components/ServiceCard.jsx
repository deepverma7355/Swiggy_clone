const ServiceCard = ({ title, subtitle, offer, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-center w-[500px]">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
        <span className="text-orange-500 font-semibold">{offer}</span>

        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full">
          Explore →
        </button>
      </div>

      <img src={image} alt="" className="w-40" />
    </div>
  )
}

export default ServiceCard
