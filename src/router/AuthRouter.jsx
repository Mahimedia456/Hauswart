import { Routes, Route, Navigate } from "react-router-dom";

import Splash from "../modules/auth/pages/Splash";
import Onboarding from "../modules/auth/pages/Onboarding";

import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";
import VerifyOTP from "../modules/auth/pages/VerifyOTP";
import ResetPassword from "../modules/auth/pages/ResetPassword";

import AuthLayout from "../modules/auth/components/AuthLayout";

export default function AuthRouter() {
  return (
    <Routes>
      {/* Splash */}
      <Route path="splash" element={<Splash />} />

      {/* Onboarding */}
      <Route path="onboarding" element={<Onboarding />} />

      {/* AUTH ROUTES (FIXED) */}
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* Redirect anything invalid */}
      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}
