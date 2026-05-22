import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn, getUser } from "../utils/token";

function ProtectedRoute({ children }) {
  const location = useLocation();

  // ❌ Not logged in → redirect to login
  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ❌ Token hai but invalid (corrupt / expired)
  const user = getUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Allowed
  return children;
}

export default ProtectedRoute;