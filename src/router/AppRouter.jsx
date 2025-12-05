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

import ProtectedRoute from "./ProtectedRoute";

// SUPER ADMIN PAGES
import SaDashboard from "../modules/superAdmin/pages/Dashboard";

// ORGANIZATION MODULE
import OrganizationsList from "../modules/superAdmin/pages/Organizations/OrganizationsList";
import OrganizationCreate from "../modules/superAdmin/pages/Organizations/OrganizationCreate";
import OrganizationDetails from "../modules/superAdmin/pages/Organizations/OrganizationDetails";

// TAB PAGES
import Overview from "../modules/superAdmin/pages/Organizations/tabs/Overview";
import Details from "../modules/superAdmin/pages/Organizations/tabs/Details";
import Billing from "../modules/superAdmin/pages/Organizations/tabs/Billing";
import Users from "../modules/superAdmin/pages/Organizations/tabs/Users";
import Properties from "../modules/superAdmin/pages/Organizations/tabs/Properties";
import Tickets from "../modules/superAdmin/pages/Organizations/tabs/Tickets";
import Maintenance from "../modules/superAdmin/pages/Organizations/tabs/Maintenance";
import Documents from "../modules/superAdmin/pages/Organizations/tabs/Documents";
import ActivityLogs from "../modules/superAdmin/pages/Organizations/tabs/ActivityLogs";

// ⬇️ NEW IMPORTS (this was missing!)
import OrganizationEdit from "../modules/superAdmin/pages/Organizations/OrganizationEdit";
import OrganizationDelete from "../modules/superAdmin/pages/Organizations/OrganizationDelete";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* PUBLIC */}
        <Route path="/" element={<Splash />} />
        <Route path="/auth/onboarding" element={<Onboarding />} />

        {/* AUTH SCREENS */}
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

          {/* DEFAULT DASHBOARD */}
          <Route index element={<SaDashboard />} />

          {/* ORGANIZATIONS LIST + CREATE */}
          <Route path="organizations" element={<OrganizationsList />} />
          <Route path="organizations/create" element={<OrganizationCreate />} />

          {/* ORGANIZATION DETAILS + TABS */}
          <Route path="organizations/:id" element={<OrganizationDetails />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="details" element={<Details />} />
            <Route path="billing" element={<Billing />} />
            <Route path="users" element={<Users />} />
            <Route path="properties" element={<Properties />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="documents" element={<Documents />} />
            <Route path="activity" element={<ActivityLogs />} />

            {/* NEW ROUTES */}
            <Route path="edit" element={<OrganizationEdit />} />
            <Route path="delete" element={<OrganizationDelete />} />
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}
