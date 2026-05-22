import { Link } from "react-router-dom";

const stationeryProducts = [
  {
    name: "Custom Letterheads",
    desc: "Premium letterheads with your logo & branding.",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146f96b1d94?w=600",
    price: 199,
    originalPrice: 349,
    discount: "43% OFF",
  },
  {
    name: "Cash Memo Books",
    desc: "Duplicate & triplicate cash memo printing.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
  },
  {
    name: "Invoice Bill Books",
    desc: "GST-ready invoice & billing books.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600",
    price: 349,
    originalPrice: 599,
    discount: "42% OFF",
  },
  {
    name: "Office Bill Pads",
    desc: "Daily use bill pads for shops & offices.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600",
    price: 249,
    originalPrice: 399,
    discount: "38% OFF",
  },
];

const StationeryProducts = () => {
  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-[#1f1f1f]">
            Letterheads & Bill Books
          </h2>
          <p className="mt-2 text-[#5a5a5a] max-w-2xl">
            Professionally printed office stationery including letterheads,
            cash memos, invoices and bill books — perfect for daily business use.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stationeryProducts.map((item, i) => (
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
                  to="/products?category=stationery"
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

export default StationeryProducts;
