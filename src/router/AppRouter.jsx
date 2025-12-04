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

// Dashboard
import SaDashboard from "../modules/superAdmin/pages/Dashboard";

// Protected
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* Public screens */}
        <Route path="/" element={<Splash />} />
        <Route path="/auth/onboarding" element={<Onboarding />} />

        {/* AUTH FLOW */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
          <Route path="reset-password" element={<ResetPassword />} />
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
