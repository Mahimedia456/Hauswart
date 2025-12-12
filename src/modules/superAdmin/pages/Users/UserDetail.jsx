// src/modules/superAdmin/pages/Users/UserDetail.jsx

import { NavLink, Outlet, useParams } from "react-router-dom";
import UserDetailHeader from "./UserDetailHeader";
import { t } from "../../../../i18n/translations";
import { useLanguage } from "../../../../context/LanguageContext";

// BASE DUMMY USER (used for all IDs)
const BASE_USER = {
  name: "Jordan Smith",
  email: "jordan.smith@hauswart.com",
  phone: "+1 234 567 8900",
  role: "Technician",
  status: "Active",
  organization: "Global Facilities Inc.",
  properties: ["Downtown Tower", "Westside Complex"],
  joined: "Oct 15, 2021",
};

export default function UserDetail() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const { id } = useParams();

  // ✅ ALWAYS RETURN A USER (DEV SAFE)
  const user = {
    id,
    ...BASE_USER,
  };

  const tabs = [
    { id: "overview", icon: "account_circle", label: dict.user_tab_overview },
    { id: "performance", icon: "analytics", label: dict.user_tab_performance },
    { id: "attendance", icon: "calendar_today", label: dict.user_tab_attendance },
    { id: "daily-attendance", icon: "schedule", label: dict.user_tab_dailyAttendance },
    { id: "offboarding", icon: "lock", label: dict.user_tab_offboarding },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <UserDetailHeader user={user} />

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={tab.id}
            end
            className={({ isActive }) =>
              isActive
                ? "bg-[#F38B14] text-white px-4 py-2 rounded-xl text-sm shadow flex items-center gap-2"
                : "bg-white/70 border border-slate-200 px-4 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            }
          >
            <span className="material-symbols-outlined text-[18px]">
              {tab.icon}
            </span>
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
