import { Link } from "react-router-dom";

const giftProducts = [
  {
    name: "Custom Printed T-Shirt",
    desc: "Personalized t-shirts with your design & logo.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    price: 499,
    originalPrice: 799,
    discount: "38% OFF",
  },
  {
    name: "Photo Printed Mug",
    desc: "High quality ceramic mugs with photo prints.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
  },
  {
    name: "Custom Photo Frame",
    desc: "Memorable photo frames with premium finish.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600",
    price: 399,
    originalPrice: 649,
    discount: "38% OFF",
  },
  {
    name: "Printed Gift Cushion",
    desc: "Soft cushions with personalized prints.",
    image:
      "https://images.unsplash.com/photo-1616627984015-4d08c8c0e40c?w=600",
    price: 349,
    originalPrice: 599,
    discount: "42% OFF",
  },
];

const CustomGiftsProducts = () => {
  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl font-semibold text-[#1f1f1f] leading-tight">
            Personalized Gifts & Custom Prints
          </h2>
          <p className="mt-3 text-[#5a5a5a]">
            Express emotions with customized t-shirts, mugs, cushions and
            photo gifts — designed to make moments unforgettable.
          </p>
        </div>

        {/* PRODUCTS – NEW LAYOUT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {giftProducts.map((item, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                rounded-[28px]
                border border-[#ece6dc]
                overflow-hidden
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* IMAGE AREA */}
              <div className="relative h-64 overflow-hidden bg-[#f6f1ea]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition duration-500
                  "
                />

                {/* DISCOUNT PILL */}
                <span
                  className="
                    absolute top-4 left-4
                    bg-black text-white
                    text-xs font-semibold
                    px-4 py-1.5 rounded-full
                  "
                >
                  {item.discount}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1f1f1f]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-[#5a5a5a] leading-relaxed">
                  {item.desc}
                </p>

                {/* PRICE */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xl font-semibold text-[#1f1f1f]">
                    ₹{item.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{item.originalPrice}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  to="/products?category=custom-gifts"
                  className="
                    block mt-6 text-center
                    px-5 py-3 rounded-full
                    bg-[#1f1f1f] text-white
                    text-sm font-semibold
                    hover:bg-black transition
                  "
                >
                  Customize Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomGiftsProducts;
