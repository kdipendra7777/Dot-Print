import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";
import { isLoggedIn, getUser, removeToken } from "../../utils/token";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const user = getUser();

  const handleLogout = () => {
    removeToken();
    navigate("/"); // better than reload
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20 gap-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/Images/dot-print-logo.png"
              alt="Dot Print Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search visiting cards..."
                className="w-full pl-12 pr-5 py-3 rounded-full border focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-5">

            <Link to="/cart" className="p-3 rounded-full hover:bg-black/5">
              <ShoppingCart />
            </Link>

            {!loggedIn ? (
              <Link
                to="/login"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white"
              >
                <User size={18} />
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-3">

                <div className="p-3 rounded-full bg-gray-100">
                  <User size={20} />
                </div>

                {/* 🔥 ROLE BASED DASHBOARD */}
                {user?.role === "admin" && (
                  <Link to="/dashboard" className="text-blue-600 text-sm">
                    Dashboard
                  </Link>
                )}

                {user?.role === "seller" && (
                  <Link to="/seller-dashboard" className="text-green-600 text-sm">
                    Seller Panel
                  </Link>
                )}

                {/* LOGOUT */}
                <button onClick={handleLogout} className="text-red-500 text-sm">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* MOBILE */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden py-6 space-y-4 border-t">

            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-full"
            />

            {!loggedIn ? (
              <Link to="/login" className="block bg-black text-white py-3 text-center rounded-full">
                Login
              </Link>
            ) : (
              <>
                {user?.role === "admin" && (
                  <Link to="/dashboard" className="block bg-blue-600 text-white py-3 text-center rounded-full">
                    Dashboard
                  </Link>
                )}

                {user?.role === "seller" && (
                  <Link to="/seller-dashboard" className="block bg-green-600 text-white py-3 text-center rounded-full">
                    Seller Panel
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-3 rounded-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;