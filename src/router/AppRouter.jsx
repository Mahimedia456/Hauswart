import { Routes, Route } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SuperAdminLayout from "../layouts/SuperAdminLayout";

// Auth pages
import Splash from "../modules/auth/pages/Splash";
import Onboarding from "../modules/auth/pages/Onboarding";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";
import VerifyOTP from "../modules/auth/pages/VerifyOTP";
import ResetPassword from "../modules/auth/pages/ResetPassword";

// Dashboards
import SaDashboard from "../modules/superAdmin/pages/Dashboard";

// Protected route
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* Splash */}
        <Route path="/" element={<Splash />} />

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="auth/onboarding" element={<Onboarding />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
          <Route path="auth/verify-otp" element={<VerifyOTP />} />
          <Route path="auth/reset-password" element={<ResetPassword />} />
        </Route>

        {/* SUPER ADMIN */}
        <Route
          path="super-admin/*"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
              <SuperAdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SaDashboard />} />
        </Route>

      </Route>
    </Routes>
  );
}
