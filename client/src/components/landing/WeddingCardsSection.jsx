import { Link } from "react-router-dom";

const WeddingCardsSection = () => {
  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-[#1f1f1f]">
            Wedding Cards Collection
          </h2>
          <p className="mt-2 text-[#5a5a5a] max-w-2xl">
            Beautifully crafted wedding invitations with premium paper,
            elegant designs and perfect print quality for your special day.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* BIG FEATURE CARD */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group">

            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200"
              alt="Wedding Cards"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <h3 className="text-2xl font-semibold">
                Elegant Wedding Invitations
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Traditional, modern & custom designs printed with love and
                precision.
              </p>

              <Link
                to="/products?category=wedding-cards"
                className="inline-block mt-5 px-6 py-3 rounded-full
                bg-white text-black text-sm font-semibold
                hover:bg-gray-100 transition"
              >
                Explore Wedding Cards
              </Link>
            </div>
          </div>

          {/* SIDE CARDS */}
          <div className="grid gap-8">

            {/* CARD 1 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800"
                alt="Royal Wedding Cards"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">
                  Royal & Premium Cards
                </h4>
                <p className="text-xs text-white/90">
                  Gold foiling & luxury finish
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800"
                alt="Modern Wedding Cards"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">
                  Modern Minimal Designs
                </h4>
                <p className="text-xs text-white/90">
                  Clean layouts & soft colors
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCardsSection;
