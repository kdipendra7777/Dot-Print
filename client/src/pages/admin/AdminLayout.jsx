import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  UserCheck,
  BarChart3,
  Package,
  Layers,
  Image,
  Factory,
  Truck,
  Archive,
  Bell,
  Star,
  FileText,
  UserCog,
  CreditCard,
  ClipboardList,
  Settings
} from "lucide-react";

const menu = [
  { name: "Overview", path: "overview", icon: LayoutDashboard },

  { name: "All Orders", path: "orders", icon: ShoppingCart },
  { name: "Pending Orders", path: "orders/pending", icon: Clock },
  { name: "Processing Orders", path: "orders/processing", icon: ClipboardList },
  { name: "Completed Orders", path: "orders/completed", icon: CheckCircle },
  { name: "Returns / Issues", path: "orders/issues", icon: AlertCircle },

  
  { name: "Sellers Dops", path: "sellers/approved", icon: UserCheck },
  

  { name: "Products", path: "products", icon: Package },
  { name: "Categories", path: "products/categories", icon: Layers },
  { name: "Templates", path: "products/templates", icon: Image },

  { name: "Workshops", path: "workshops", icon: Factory },
  { name: "Assign Orders", path: "workshops/assign", icon: ClipboardList },
  { name: "Work Status", path: "workshops/status", icon: BarChart3 },

  { name: "Staff", path: "staff", icon: Users },
  { name: "Roles", path: "staff/roles", icon: UserCog },

  { name: "Payments", path: "payments", icon: CreditCard },
  { name: "Transactions", path: "payments/transactions", icon: FileText },

  { name: "Users", path: "users", icon: Users },

  { name: "Delivery", path: "delivery", icon: Truck },
  { name: "Tracking", path: "delivery/tracking", icon: Truck },

  { name: "Inventory", path: "inventory", icon: Archive },

  { name: "Analytics", path: "analytics", icon: BarChart3 },

  { name: "Enquiries", path: "enquiries", icon: FileText },

  { name: "Design Requests", path: "design", icon: Image },

  { name: "Reviews", path: "reviews", icon: Star },

  { name: "Notifications", path: "notifications", icon: Bell },

  { name: "Settings", path: "settings", icon: Settings },

  { name: "Admin Control", path: "admin-control", icon: UserCog },
];

const AdminLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-72 bg-black text-white p-6 overflow-y-auto">

        {/* LOGO */}
        <h1 className="text-xl font-bold mb-6 tracking-wide">
          Dot Print Admin
        </h1>

        {/* MENU */}
        <div className="space-y-1">
          {menu.map((item, i) => {
            const fullPath = `/admin/${item.path}`;
            const Icon = item.icon;

            return (
              <Link
                key={i}
                to={fullPath}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  pathname === fullPath
                    ? "bg-white text-black font-semibold"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;