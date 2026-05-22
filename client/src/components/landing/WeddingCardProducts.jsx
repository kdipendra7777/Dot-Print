import { Link } from "react-router-dom";

const weddingProducts = [
  {
    name: "Royal Gold Wedding Card",
    desc: "Premium textured paper with gold foiling finish.",
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600",
    price: 45,
    originalPrice: 70,
    discount: "35% OFF",
  },
  {
    name: "Classic Floral Invitation",
    desc: "Elegant floral design with soft pastel colors.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
    price: 30,
    originalPrice: 50,
    discount: "40% OFF",
  },
  {
    name: "Modern Minimal Wedding Card",
    desc: "Clean typography with modern minimal layout.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    price: 25,
    originalPrice: 40,
    discount: "38% OFF",
  },
  {
    name: "Traditional Indian Wedding Card",
    desc: "Rich colors inspired by traditional Indian weddings.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600",
    price: 55,
    originalPrice: 85,
    discount: "35% OFF",
  },
];

const WeddingCardProducts = () => {
  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-[#1f1f1f]">
            Wedding Card Designs
          </h2>
          <p className="mt-2 text-[#5a5a5a] max-w-2xl">
            Choose from our beautiful collection of wedding invitation cards,
            crafted with premium materials and elegant designs.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {weddingProducts.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-3xl
                border border-[#e6e0d8]
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                {/* DISCOUNT BADGE */}
                <span className="absolute top-3 left-3
                  bg-green-600 text-white text-xs font-semibold
                  px-3 py-1 rounded-full">
                  {item.discount}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1f1f1f]">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-[#5a5a5a]">
                  {item.desc}
                </p>

                {/* PRICE */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-lg font-semibold text-[#1f1f1f]">
                    ₹{item.price}
                  </span>

                  <span className="text-sm line-through text-gray-400">
                    ₹{item.originalPrice}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  to="/products?category=wedding-cards"
                  className="inline-block mt-4 w-full text-center
                  px-4 py-2 rounded-full
                  bg-[#1f1f1f] text-white text-sm font-semibold
                  hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCardProducts;
