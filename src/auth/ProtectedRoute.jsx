import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, roles }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(user.perfil)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
