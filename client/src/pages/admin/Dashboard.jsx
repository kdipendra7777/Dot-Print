import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

function Dashboard() {
  const [data, setData] = useState([]);

  // 🔥 FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/franchise/all");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ APPROVE
  const approve = async (id) => {
    await axios.put(`http://localhost:5000/api/franchise/approve/${id}`);
    fetchData();
  };

  // ❌ REJECT
  const reject = async (id) => {
    await axios.put(`http://localhost:5000/api/franchise/reject/${id}`);
    fetchData();
  };

  // 🗑 DELETE
  const deleteItem = async (id) => {
    const confirmDelete = window.confirm("Delete this application?");
    if (!confirmDelete) return;

    await axios.delete(`http://localhost:5000/api/franchise/delete/${id}`);
    fetchData();
  };

  // 📄 DOWNLOAD PDF
  const downloadPDF = (item) => {
    const doc = new jsPDF();

    let y = 10;

    doc.setFontSize(16);
    doc.text("Dot Print Franchise Application", 10, y);
    y += 10;

    doc.setFontSize(10);

    Object.entries(item).forEach(([key, value]) => {
      if (["_id", "__v"].includes(key)) return;

      const text = `${key}: ${value || "-"}`;
      doc.text(text, 10, y);
      y += 7;

      // page break
      if (y > 280) {
        doc.addPage();
        y = 10;
      }
    });

    doc.save(`${item.name || "application"}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Franchise Applications
        </h1>
        <span className="text-sm text-gray-500">
          Total: {data.length}
        </span>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >

            {/* NAME */}
            <h2 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h2>

            {/* INFO */}
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p>📧 {item.email}</p>
              <p>📞 {item.phone}</p>
              <p>📍 {item.city}</p>
              <p>💰 {item.investment}</p>
            </div>

            {/* STATUS */}
            <div className="mt-4">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  item.status === "approved"
                    ? "bg-green-100 text-green-700"
                    : item.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status || "pending"}
              </span>
            </div>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-wrap gap-2">

              <button
                onClick={() => approve(item._id)}
                className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
              >
                Approve
              </button>

              <button
                onClick={() => reject(item._id)}
                className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                Reject
              </button>

              <button
                onClick={() => deleteItem(item._id)}
                className="w-full px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
              >
                Delete
              </button>

              {/* 🔥 DOWNLOAD BUTTON */}
              <button
                onClick={() => downloadPDF(item)}
                className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                Download PDF
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* EMPTY */}
      {data.length === 0 && (
        <div className="text-center mt-10 text-gray-500">
          No applications found
        </div>
      )}

    </div>
  );
}

export default Dashboard;