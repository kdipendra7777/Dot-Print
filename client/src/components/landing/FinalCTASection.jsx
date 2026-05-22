import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Printer, Smile } from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "Premium Print Quality",
    desc: "Sharp colors, premium paper & professional finishing in every print.",
  },
  {
    icon: Truck,
    title: "Fast Turnaround",
    desc: "Quick production & reliable delivery for urgent orders.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Businesses",
    desc: "Serving shops, offices & brands with consistent quality.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    desc: "Thousands of happy customers across print categories.",
  },
];

const FinalCTASection = () => {
  return (
    <section className="w-full bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP CONTENT */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-tight">
            Why Businesses Trust Dot Print
          </h2>
          <p className="mt-4 text-gray-300">
            From wedding cards to business stationery and custom gifts —
            Dot Print is your one-stop printing partner for quality,
            reliability and great pricing.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="px-8 py-3 rounded-full
            bg-white text-black
            text-sm font-semibold
            hover:bg-gray-200 transition"
          >
            Start Printing
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full
            border border-white/30
            text-white text-sm font-semibold
            hover:bg-white/10 transition"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
