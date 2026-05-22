import { Link } from "react-router-dom";

const businessCardProducts = [
  {
    name: "Premium Matte Business Card",
    desc: "Smooth matte finish with sharp text & colors.",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146f96b1d94?w=600",
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
  },
  {
    name: "Glossy Visiting Card",
    desc: "High shine glossy cards for a bold impression.",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600",
    price: 249,
    originalPrice: 399,
    discount: "38% OFF",
  },
  {
    name: "Textured Premium Card",
    desc: "Luxury textured paper for premium branding.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    price: 399,
    originalPrice: 650,
    discount: "39% OFF",
  },
  {
    name: "Minimal White Business Card",
    desc: "Clean, modern & professional design.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600",
    price: 199,
    originalPrice: 349,
    discount: "43% OFF",
  },
];

const BusinessCardProducts = () => {
  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-[#1f1f1f]">
            Business & Visiting Cards
          </h2>
          <p className="mt-2 text-[#5a5a5a] max-w-2xl">
            Professionally printed business and visiting cards designed to
            make a lasting first impression.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {businessCardProducts.map((item, i) => (
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
                <span
                  className="absolute top-3 left-3
                  bg-green-600 text-white text-xs font-semibold
                  px-3 py-1 rounded-full"
                >
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
                  to="/products?category=visiting-cards"
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

export default BusinessCardProducts;
