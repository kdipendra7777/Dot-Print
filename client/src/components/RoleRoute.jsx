import { Navigate, useLocation } from "react-router-dom";
import { getUser, isLoggedIn, removeToken } from "../utils/token";

const RoleRoute = ({ children, role }) => {
  const location = useLocation();
  const user = getUser();

  // ❌ Not logged in
  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ❌ Invalid token
  if (!user) {
    removeToken(); // 🔥 safety
    return <Navigate to="/login" replace />;
  }

  // ❌ Role mismatch (IMPORTANT FIX)
  if (user.role !== role) {
    removeToken(); // 🔥 FORCE LOGOUT
    return <Navigate to="/login" replace />;
  }

  // ✅ Allowed
  return children;
};

export default RoleRoute;