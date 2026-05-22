import { Link, useNavigate } from "react-router-dom";
import {
  IdCard,
  Image,
  FileText,
  Heart,
  Camera,
  Layers,
} from "lucide-react";

const categories = [
  {
    title: "Visiting Cards",
    desc: "Premium business cards",
    color: "bg-pink-100",
    icon: IdCard,
    iconColor: "text-pink-500",
    category: "visiting-cards",
  },
  {
    title: "Flex & Banners",
    desc: "Large format printing",
    color: "bg-yellow-100",
    icon: Image,
    iconColor: "text-yellow-500",
    category: "flex-banner",
  },
  {
    title: "Posters & Flyers",
    desc: "Marketing materials",
    color: "bg-blue-100",
    icon: FileText,
    iconColor: "text-blue-500",
    category: "posters-flyers",
  },
  {
    title: "Wedding Cards",
    desc: "Elegant invitations",
    color: "bg-purple-100",
    icon: Heart,
    iconColor: "text-purple-500",
    category: "wedding-cards",
  },
  {
    title: "Photo Printing",
    desc: "High quality photo prints",
    color: "bg-green-100",
    icon: Camera,
    iconColor: "text-green-500",
    category: "photo-print",
  },
  {
    title: "Bulk Printing",
    desc: "Office & business needs",
    color: "bg-orange-100",
    icon: Layers,
    iconColor: "text-orange-500",
    category: "bulk-print",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-[#1f1f1f]">
            Popular Categories
          </h2>
          <p className="mt-2 text-[#5a5a5a]">
            Choose what you want to print — fast, easy & professional.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const url = `/productscategory=${cat.category}`;

            return (
              <Link
                key={i}
                to={url}
                onClick={(e) => {
                  e.preventDefault();      // safety
                  navigate(url);           // force route
                }}
                className="group block"
              >
                <div
                  className={`h-full rounded-2xl ${cat.color} p-5
                  hover:shadow-md hover:-translate-y-0.5 transition`}
                >
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <Icon size={24} className={cat.iconColor} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#1f1f1f]">
                    {cat.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#5a5a5a]">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;
