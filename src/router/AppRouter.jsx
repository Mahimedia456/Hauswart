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

// SUPER ADMIN DASHBOARD
import SaDashboard from "../modules/superAdmin/pages/Dashboard";

// ORGANIZATION MODULE
import OrganizationsList from "../modules/superAdmin/pages/Organizations/OrganizationsList";
import OrganizationCreate from "../modules/superAdmin/pages/Organizations/OrganizationCreate";
import OrganizationDetails from "../modules/superAdmin/pages/Organizations/OrganizationDetails";

import OrgOverview from "../modules/superAdmin/pages/Organizations/tabs/Overview";
import OrgDetails from "../modules/superAdmin/pages/Organizations/tabs/Details";
import OrgBilling from "../modules/superAdmin/pages/Organizations/tabs/Billing";
import OrgUsers from "../modules/superAdmin/pages/Organizations/tabs/Users";
import OrgProperties from "../modules/superAdmin/pages/Organizations/tabs/Properties";
import OrgTickets from "../modules/superAdmin/pages/Organizations/tabs/Tickets";
import OrgMaintenance from "../modules/superAdmin/pages/Organizations/tabs/Maintenance";
import OrgActivityLogs from "../modules/superAdmin/pages/Organizations/tabs/ActivityLogs";

import OrganizationEdit from "../modules/superAdmin/pages/Organizations/OrganizationEdit";
import OrganizationDelete from "../modules/superAdmin/pages/Organizations/OrganizationDelete";

// PROPERTY MODULE
import PropertiesList from "../modules/superAdmin/pages/Properties/PropertiesList";
import PropertyCreate from "../modules/superAdmin/pages/Properties/PropertyCreate";
import PropertyDetails from "../modules/superAdmin/pages/Properties/PropertyDetails";
import PropertyEdit from "../modules/superAdmin/pages/Properties/PropertyEdit";
import PropertyDelete from "../modules/superAdmin/pages/Properties/PropertyDelete";

// PROPERTY TABS
import PropertyOverview from "../modules/superAdmin/pages/Properties/tabs/Overview";
import PropertyDetailsTab from "../modules/superAdmin/pages/Properties/tabs/Details";
import PropertyStructure from "../modules/superAdmin/pages/Properties/tabs/Structure";
import PropertyAssets from "../modules/superAdmin/pages/Properties/tabs/Assets";
import PropertyMaintenance from "../modules/superAdmin/pages/Properties/tabs/Maintenance";
import PropertyTickets from "../modules/superAdmin/pages/Properties/tabs/Tickets";
import PropertyStaff from "../modules/superAdmin/pages/Properties/tabs/Staff";
import PropertyGPSLogs from "../modules/superAdmin/pages/Properties/tabs/GPS";
import PropertyActivity from "../modules/superAdmin/pages/Properties/tabs/Activity";

// ASSET DETAILS
import AssetDetails from "../modules/superAdmin/pages/Properties/assetDetails/AssetDetails.jsx";

// -----------------------------------------
// TICKETS MODULE — FULL SYSTEM
// -----------------------------------------
import TicketsDashboard from "../modules/superAdmin/pages/Tickets/TicketsDashboard";
import TicketsList from "../modules/superAdmin/pages/Tickets/TicketsList";
import TicketCreate from "../modules/superAdmin/pages/Tickets/TicketCreate";
import TicketDetail from "../modules/superAdmin/pages/Tickets/TicketDetail";
import EditTicket from "../modules/superAdmin/pages/Tickets/EditTicket";

// Ticket Tabs
import TicketOverview from "../modules/superAdmin/pages/Tickets/tabs/Overview";
import TicketDetailTab from "../modules/superAdmin/pages/Tickets/tabs/Detail";
import TicketAttachments from "../modules/superAdmin/pages/Tickets/tabs/Attachments";
import TicketChatHub from "../modules/superAdmin/pages/Tickets/tabs/ChatHub";
import TicketHistoryLog from "../modules/superAdmin/pages/Tickets/tabs/HistoryLog";
import TicketAssessment from "../modules/superAdmin/pages/Tickets/tabs/Assessment";

// NEW — Dedicated full conversation page
import TicketConversation from "../modules/superAdmin/pages/Tickets/TicketConversation";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* PUBLIC */}
        <Route path="/" element={<Splash />} />
        <Route path="auth/onboarding" element={<Onboarding />} />

        {/* AUTH */}
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

          {/* DASHBOARD */}
          <Route index element={<SaDashboard />} />

          {/* ORGANIZATIONS */}
          <Route path="organizations" element={<OrganizationsList />} />
          <Route path="organizations/create" element={<OrganizationCreate />} />

          <Route path="organizations/:id" element={<OrganizationDetails />}>
            <Route index element={<OrgOverview />} />
            <Route path="overview" element={<OrgOverview />} />
            <Route path="details" element={<OrgDetails />} />
            <Route path="billing" element={<OrgBilling />} />
            <Route path="users" element={<OrgUsers />} />
            <Route path="properties" element={<OrgProperties />} />
            <Route path="tickets" element={<OrgTickets />} />
            <Route path="maintenance" element={<OrgMaintenance />} />
            <Route path="activity" element={<OrgActivityLogs />} />
          </Route>

          <Route path="organizations/:id/edit" element={<OrganizationEdit />} />
          <Route path="organizations/:id/delete" element={<OrganizationDelete />} />

          {/* PROPERTIES */}
          <Route path="properties" element={<PropertiesList />} />
          <Route path="properties/create" element={<PropertyCreate />} />

          <Route path="properties/:id" element={<PropertyDetails />}>
            <Route index element={<PropertyOverview />} />
            <Route path="overview" element={<PropertyOverview />} />
            <Route path="details" element={<PropertyDetailsTab />} />
            <Route path="structure" element={<PropertyStructure />} />
            <Route path="assets" element={<PropertyAssets />} />
            <Route path="maintenance" element={<PropertyMaintenance />} />
            <Route path="tickets" element={<PropertyTickets />} />
            <Route path="staff" element={<PropertyStaff />} />
            <Route path="gps" element={<PropertyGPSLogs />} />
            <Route path="activity" element={<PropertyActivity />} />
          </Route>

          <Route path="properties/:id/edit" element={<PropertyEdit />} />
          <Route path="properties/:id/delete" element={<PropertyDelete />} />

          {/* ASSET DETAILS */}
          <Route path="properties/assets/:assetId" element={<AssetDetails />} />

          {/* ============================= */}
          {/*       TICKET SYSTEM          */}
          {/* ============================= */}

          {/* DASHBOARD */}
          <Route path="tickets" element={<TicketsDashboard />} />

          {/* ALL LIST */}
          <Route path="tickets/all" element={<TicketsList />} />

          {/* CREATE */}
          <Route path="tickets/create" element={<TicketCreate />} />

          {/* EDIT */}
          <Route path="tickets/:id/edit" element={<EditTicket />} />

          {/* DETAIL + NESTED TABS */}
          <Route path="tickets/:id" element={<TicketDetail />}>
            <Route index element={<TicketOverview />} />
            <Route path="overview" element={<TicketOverview />} />
            <Route path="detail" element={<TicketDetailTab />} />
            <Route path="attachments" element={<TicketAttachments />} />
            <Route path="chat" element={<TicketChatHub />} />
            <Route path="history" element={<TicketHistoryLog />} />
            <Route path="assessment" element={<TicketAssessment />} />
          </Route>

          {/* NEW — FULL CONVERSATION PAGE (Correct route) */}
          <Route
            path="tickets/:id/conversation"
            element={<TicketConversation />}
          />

        </Route>
      </Route>
    </Routes>
  );
}
