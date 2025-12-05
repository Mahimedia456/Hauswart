// src/modules/superAdmin/pages/Organizations/OrganizationDetails.jsx
import { NavLink, Outlet, useParams } from "react-router-dom";
import OrganizationHeader from "./OrganizationHeader";

const ORGS = {
  "org-1": {
    id: "org-1",
    name: "Innovate Solutions Inc.",
    contactPerson: "Jane Doe",
    email: "jane@innovate.com",
    phone: "+1 555 123 456",
    createdDate: "2023-05-12",
    properties: 15,
    status: "Active",
  },
};

export default function OrganizationDetails() {
  const { id } = useParams();
  const org = ORGS[id];

  const tabs = [
    { id: "overview", label: "Overview", icon: "home" },
    { id: "details", label: "Details", icon: "info" },
    { id: "billing", label: "Billing", icon: "credit_card" },
    { id: "users", label: "Users", icon: "group" },
    { id: "properties", label: "Properties", icon: "domain" },
    { id: "tickets", label: "Tickets", icon: "confirmation_number" },
    { id: "maintenance", label: "Maintenance", icon: "build" },
    { id: "documents", label: "Documents", icon: "description" },
    { id: "activity", label: "Activity Logs", icon: "history" },
  ];

  return (
    <div className="space-y-6">
      <OrganizationHeader org={org} />

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.id}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition
              ${
                isActive
                  ? "bg-[#F38B14] text-white shadow"
                  : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-100"
              }
            `
            }
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            {tab.label}
          </NavLink>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow">
        <Outlet />
      </div>
    </div>
  );
}
