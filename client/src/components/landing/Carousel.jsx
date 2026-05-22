import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Premium Visiting Cards",
    desc: "Matte & Glossy finish",
    image: "/Images/home.png",
  },
  {
    title: "Flex & Banner Printing",
    desc: "High resolution outdoor prints",
    image: "/Images/home.png",
  },
  {
    title: "Wedding Cards",
    desc: "Elegant custom designs",
    image: "/Images/home.png",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-[#1f1f1f]">
            Featured Prints
          </h2>
          <p className="mt-1 text-sm text-[#5a5a5a]">
            Popular print products
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f6f1ea]">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full grid md:grid-cols-2 items-center gap-4 px-6 py-4"
              >
                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1f1f1f]">
                    {slide.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5a5a5a]">
                    {slide.desc}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-w-[140px] md:max-w-[170px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2
            w-7 h-7 rounded-full bg-white shadow
            flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronLeft size={14} />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
            w-7 h-7 rounded-full bg-white shadow
            flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronRight size={14} />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full cursor-pointer
                ${index === i ? "bg-black" : "bg-black/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
