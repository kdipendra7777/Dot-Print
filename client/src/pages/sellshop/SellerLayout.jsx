import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../utils/token";
import {
  LayoutDashboard,
  FileText,
  ShoppingCart,
  Package,
  Wallet,
  Image,
  User,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Overview", path: "overview", icon: LayoutDashboard },
  { name: "Applications", path: "application", icon: FileText },
  { name: "Orders", path: "orders", icon: ShoppingCart },
  { name: "Products", path: "products", icon: Package },
  { name: "Earnings", path: "earnings", icon: Wallet },
  { name: "Design", path: "design", icon: Image },
  { name: "Profile", path: "profile", icon: User },
  { name: "Settings", path: "settings", icon: Settings },
];

const SellerLayout = () => {
  const { pathname } = useLocation();
  const user = getUser();

  // 🔥 scroll reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">
          Seller Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          {user?.email || "Seller"}
        </p>
      </div>

      {/* NAV CARDS */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">

          {menu.map((item) => {
            const fullPath = `/seller/${item.path}`;
            const Icon = item.icon;

            const isActive =
              pathname === fullPath ||
              pathname.startsWith(fullPath + "/");

            return (
              <Link
                key={item.path}
                to={fullPath}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition text-sm ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "bg-white hover:shadow hover:bg-gray-50 text-gray-700"
                }`}
              >
                <Icon size={22} />
                <span className="mt-2 text-xs font-medium text-center">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default SellerLayout;