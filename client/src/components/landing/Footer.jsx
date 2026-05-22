import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { isLoggedIn, getUser } from "../../utils/token";

const Footer = () => {

  const loggedIn = isLoggedIn();
  const user = getUser();

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-white/10">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center rounded-md">
              DP
            </div>
            <span className="text-sm font-semibold text-white tracking-wide">
              DOT PRINT
            </span>
          </div>

          {/* 🔥 DYNAMIC BUTTON */}
          {!loggedIn ? (
            <Link
              to="/join-dot-print"
              className="flex items-center gap-2 px-4 py-2 rounded-md
              bg-purple-600 hover:bg-purple-700
              text-white text-sm font-semibold"
            >
              <UserPlus size={16} />
              Join as Seller
            </Link>
          ) : user?.role === "seller" ? (
            <Link
              to="/seller-dashboard"
              className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-semibold"
            >
              Seller Panel
            </Link>
          ) : user?.role === "admin" ? (
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold"
            >
              Admin Dashboard
            </Link>
          ) : (
            <Link
              to="/join-dot-print"
              className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm"
            >
              Become Seller
            </Link>
          )}

        </div>

        {/* MAIN FOOTER */}
        <div className="grid lg:grid-cols-[4fr_2fr] gap-12 py-16">

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">

            <FooterCol title="Services" items={[
              "Visiting Cards",
              "Flex & Banner Printing",
              "Wedding Cards",
              "Photo Printing",
              "Bill Books",
              "Posters & Flyers",
            ]} />

            <FooterCol title="Printing" items={[
              "Digital Printing",
              "Offset Printing",
              "Lamination",
              "Binding",
              "Bulk Orders",
            ]} />

            <FooterCol title="Support" items={[
              "Design Assistance",
              "Price Enquiry",
              "Order Status",
              "Delivery Info",
              "FAQs",
            ]} />

            <FooterCol title="Company" items={[
              "About Dot Print",
              "Our Work",
              "Customer Reviews",
              "Privacy Policy",
              "Terms & Conditions",
            ]} />
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center border-l border-white/10">
            <img
              src="/Images/home.png"
              alt="Dot Print"
              className="w-60 h-60 object-contain opacity-90"
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 text-sm">

          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <span>© {new Date().getFullYear()} Dot Print</span>
            <span className="hidden sm:inline">•</span>
            <span>Run by Shailendra Press</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

const FooterCol = ({ title, items }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
      {title}
    </h4>
    <ul className="space-y-3 text-sm">
      {items.map((item, i) => (
        <li key={i} className="hover:text-white cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;