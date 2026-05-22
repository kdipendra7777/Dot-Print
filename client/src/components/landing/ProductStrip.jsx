import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    title: "Visiting Cards",
    subtitle: "Premium Matte & Glossy",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146f96b1d94?w=500",
  },
  {
    title: "Flex & Banners",
    subtitle: "Large Format Printing",
    image:
      "https://images.unsplash.com/photo-1604882737321-e6937c5d0c2b?w=500",
  },
  {
    title: "Posters & Flyers",
    subtitle: "Marketing Prints",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
  },
  {
    title: "Wedding Cards",
    subtitle: "Elegant Invitations",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500",
  },
  {
    title: "Photo Printing",
    subtitle: "HD Photo Prints",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
  },
  {
    title: "Bulk Printing",
    subtitle: "Office & Business Needs",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c1b6d46a44b?w=500",
  },
];

const ProductStrip = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-10 relative">

        {/* STRIP CARD */}
        <div className="relative rounded-3xl border border-[#e6e0d8] bg-white px-14 py-8">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
            flex items-center justify-center hover:bg-gray-50 transition z-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* PRODUCTS */}
          <div
            ref={scrollRef}
            className="
              flex gap-10 overflow-x-auto scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[260px]
                  bg-[#fffdf9]
                  rounded-2xl
                  px-6 py-6
                  flex flex-col items-center text-center
                  hover:shadow-xl hover:-translate-y-1
                  transition cursor-pointer
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-44 h-44 object-cover rounded-xl mb-4
                  "
                />

                <h4 className="text-base font-semibold text-[#1f1f1f]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-[#5a5a5a]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
            flex items-center justify-center hover:bg-gray-50 transition z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductStrip;
