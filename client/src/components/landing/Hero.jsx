import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full bg-[#fffdf9]">
            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">


                {/* ================= LEFT CONTENT ================= */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6f1ea] text-sm text-[#5a5a5a] mb-6">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Premium Printing Platform</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1f1f1f] leading-tight">
                        Print Anything.
                        <br />
                        <span className="text-[#5a5a5a]">
                            With Perfect Colors & Quality.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-[#5a5a5a] max-w-xl">
                        From visiting cards to banners, posters, wedding cards and bulk
                        printing — Dot Print delivers sharp quality, fast turnaround and
                        reliable service.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/products"
                            className="px-7 py-3 rounded-full bg-[#1f1f1f] text-white text-sm font-semibold hover:opacity-90 transition"
                        >
                            Start Printing
                        </Link>

                        <Link
                            to="/cart"
                            className="px-7 py-3 rounded-full border border-[#d6d0c6] text-[#1f1f1f] text-sm font-semibold hover:bg-[#f6f1ea] transition"
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>

               {/* ================= RIGHT VISUAL ================= */}
<div className="relative flex justify-center md:justify-end">

  {/* Very soft background dots */}
  <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl" />
  <div className="absolute top-16 -right-4 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl" />

  <img
    src="/Images/home.png"
    alt="Dot Print Branding"
    className="
      relative
      w-full
      max-w-[200px]
      md:max-w-[240px]
      lg:max-w-[280px]
      object-contain
    "
  />
</div>


            </div>
        </section>
    );
};

export default Hero;
