import { getUser } from "../../utils/token";

const SellerOverview = () => {
  const user = getUser();

  // 🔥 Dummy data (baad me API se replace kar dena)
  const stats = [
    { title: "Total Orders", value: 124 },
    { title: "Pending Orders", value: 18 },
    { title: "Completed Orders", value: 96 },
    { title: "Total Earnings", value: "₹45,200" },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.email}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your print business from here
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-xl font-bold mt-2 text-gray-800">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
            📦 View Orders
          </div>

          <div className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
            🖨️ Add Product
          </div>

          <div className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer">
            💰 Check Earnings
          </div>

        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>✅ Order #1234 completed</li>
          <li>🕒 Order #1235 pending</li>
          <li>💰 Payment received ₹1200</li>
        </ul>
      </div>

    </div>
  );
};

export default SellerOverview;