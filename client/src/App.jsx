import { Routes, Route } from "react-router-dom";

import LandingHome from "./pages/landing/Landinghome";
import Login from "./pages/auth/Login";
// import Dashboard from "./pages/admin/Dashboard";
import SellerDashboard from "./components/seller/SellerDashboard";
import Home from "./pages/franch/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import SellerLayout from "./pages/sellshop/SellerLayout";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join-dot-print" element={<Home />} />

      {/* ADMIN */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <AdminLayout />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* SELLER role */}
      <Route
        path="/seller-dashboard"
        element={
          <ProtectedRoute>
            <RoleRoute role="seller">
              <SellerDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* Sellers  */}
      <Route
        path="/admin/sellers/approved"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <SellerLayout />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/* seller Application */}
      <Route
        path="/seller/application"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Dashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      ></Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
}

export default App;