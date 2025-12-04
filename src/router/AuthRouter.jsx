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

      {/* Splash Screen */}
      <Route path="/splash" element={<Splash />} />

      {/* Onboarding */}
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Auth routes wrapped in layout */}
      <Route element={<AuthLayout />}>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/verify-otp" element={<VerifyOTP />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />

      </Route>

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}
