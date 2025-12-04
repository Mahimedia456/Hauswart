// src/layouts/SuperAdminLayout.jsx
import SaSidebar from "../modules/superAdmin/components/SaSidebar";
import SaTopbar from "../modules/superAdmin/components/SaTopbar";
import { Outlet } from "react-router-dom";

export default function SuperAdminLayout() {
  return (
    <div className="flex h-screen bg-background-light">

      {/* FIXED SIDEBAR */}
      <SaSidebar />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 ml-[260px]">

        {/* TOP BAR */}
        <SaTopbar />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
