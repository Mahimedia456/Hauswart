import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RootLayout() {
  const { token } = useAuth();
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");

  // Allow ALL auth pages without redirect
  if (isAuthPage) {
    return <Outlet />;
  }

  // If user is NOT logged in → redirect to login
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // If user IS logged in → allow normal layouts
  return <Outlet />;
}
