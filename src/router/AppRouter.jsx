// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SuperAdminLayout from "../layouts/SuperAdminLayout";

import Splash from "../modules/auth/pages/Splash";
import Onboarding from "../modules/auth/pages/Onboarding";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";
import VerifyOTP from "../modules/auth/pages/VerifyOTP";
import ResetPassword from "../modules/auth/pages/ResetPassword";

import SaDashboard from "../modules/superAdmin/pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* Public */}
        <Route path="/" element={<Splash />} />
        <Route path="/auth/onboarding" element={<Onboarding />} />

        {/* Auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        {/* Dashboard */}
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
