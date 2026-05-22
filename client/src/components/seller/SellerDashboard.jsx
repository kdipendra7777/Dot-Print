import { Navigate } from "react-router-dom";
import { getUser } from "../../utils/token";

const SellerDashboard = () => {
  const user = getUser();

  // 🔥 SECURITY: only seller allowed
  if (!user || user.role !== "seller") {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Seller Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome, {user.email}
        </p>
      </div>

      {/* MAIN CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Orders</h2>
          <p className="text-gray-500 text-sm mt-2">
            Manage your print orders
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Products</h2>
          <p className="text-gray-500 text-sm mt-2">
            Add & manage your products
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Profile</h2>
          <p className="text-gray-500 text-sm mt-2">
            Update your business details
          </p>
        </div>

      </div>

      {/* EMPTY STATE / INFO */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow text-center">
        <p className="text-gray-600">
          🎉 Your franchise is approved. Start managing your business now!
        </p>
      </div>

    </div>
  );
};

export default SellerDashboard;