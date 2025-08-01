
const banner = [
    "/assets/banner-3.png",
    "/assets/banner-4.png"
]

export default function Banner() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 overflow-hidden gap-8 pb-10">
            {banner.map((ban, index) => (
                <div
                key={index}
                className="h-[400px] bg-cover bg-center flex flex-col justify-center items-start p-10 text-white"
                style={{ backgroundImage: `url(${ban})` }}
                >
                <h2 className=" text-white mb-2">The best beauty experience</h2>
                <h5 className="mb-4 text-white">
                    Meet the buzzy products filling baskets for all the right reasons.
                </h5>
                <button className="bg-white btn hover:bg-gray-300 transition">
                    Shop now
                </button>
                </div>
      ))}
        </div>
    )
}