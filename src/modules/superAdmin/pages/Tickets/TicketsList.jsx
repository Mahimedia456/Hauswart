import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketsList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  // ---------------------------------------
  // Dummy Tickets Data
  // ---------------------------------------
  const ticketsData = [
    {
      id: 4830,
      title: "Air conditioning not cooling",
      summary: "Tenant-issued | Unit 403",
      priority: "Critical",
      category: "HVAC",
      org: "Sunrise Towers LLC",
      property: "Building A — Unit 403",
      assignedTo: "John Mills",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
      status: "Open",
      created: "12 Nov 2025 — 3:45 PM",
      sla: "Overdue by 1d 3h",
      slaColor: "text-red-600",
    },
    {
      id: 4829,
      title: "Lobby door lock broken",
      summary: "Staff-issued | Main Entrance",
      priority: "High",
      category: "Safety",
      org: "Metro Properties",
      property: "Downtown Plaza",
      assignedTo: "Sarah Jenkins",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "Awaiting Approval",
      created: "12 Nov 2025 — 1:15 PM",
      sla: "2 hrs left",
      slaColor: "text-orange-600",
    },
    {
      id: 4828,
      title: "Leaky faucet in breakroom",
      summary: "Staff-issued | Floor 3",
      priority: "Medium",
      category: "Plumbing",
      org: "Sunrise Towers LLC",
      property: "Building B — Floor 3",
      assignedTo: "Mike Ross",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      status: "In Progress",
      created: "11 Nov 2025 — 9:00 AM",
      sla: "6 hrs left",
      slaColor: "text-green-600",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">All Tickets</h1>
          <p className="text-gray-500">
            Manage tickets across all organizations, properties, and user roles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 rounded bg-white border text-sm font-medium">
            Export CSV
          </button>

          <button className="h-10 px-4 rounded bg-white border flex items-center text-sm font-medium">
            More <span className="material-symbols-outlined ml-1">expand_more</span>
          </button>

          <button
            onClick={() => navigate("/super-admin/tickets/create")}
            className="h-10 px-4 rounded bg-[#F38B14] text-white font-semibold hover:bg-black transition"
          >
            Create Ticket
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded border shadow-sm mb-6">
        <div className="flex flex-wrap gap-3">
          {[
            "Organization",
            "Property",
            "Priority",
            "Category",
            "Status",
            "Assigned To",
            "Created Date",
            "SLA Status",
          ].map((f) => (
            <FilterButton key={f} label={f} />
          ))}

          <button className="ml-auto text-[#F38B14] text-sm font-medium hover:underline">
            Clear All
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <Th />
              <Th>TICKET ID</Th>
              <Th>TITLE / SUMMARY</Th>
              <Th>PRIORITY</Th>
              <Th>CATEGORY</Th>
              <Th>ORGANIZATION</Th>
              <Th>PROPERTY</Th>
              <Th>ASSIGNED TO</Th>
              <Th>STATUS</Th>
              <Th>CREATED DATE</Th>
              <Th>SLA DUE</Th>
              <Th />
            </tr>
          </thead>

          <tbody>
            {ticketsData.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                {/* SELECT CHECKBOX */}
                <td className="p-4">
                  <input type="checkbox" className="h-4 w-4" />
                </td>

                {/* ID */}
                <td
                  className="p-4 text-[#F38B14] font-semibold hover:underline cursor-pointer"
                  onClick={() => navigate(`/super-admin/tickets/${t.id}`)}
                >
                  #{t.id}
                </td>

                {/* TITLE & SUMMARY */}
                <td className="p-4">
                  <div className="font-bold">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.summary}</div>
                </td>

                {/* PRIORITY */}
                <td className="p-4">
                  <PriorityBadge level={t.priority} />
                </td>

                {/* CATEGORY */}
                <td className="p-4">
                  <span className="px-2 py-0.5 bg-gray-200 rounded text-xs font-medium">
                    {t.category}
                  </span>
                </td>

                {/* ORGANIZATION */}
                <td className="p-4">{t.org}</td>

                {/* PROPERTY */}
                <td
                  className="p-4 text-[#F38B14] hover:underline cursor-pointer"
                  onClick={() => navigate(`/super-admin/tickets/${t.id}`)}
                >
                  {t.property}
                </td>

                {/* ASSIGNED TO */}
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <img src={t.avatar} className="h-6 w-6 rounded-full" />
                    <span>{t.assignedTo}</span>
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <StatusBadge status={t.status} />
                </td>

                {/* CREATED DATE */}
                <td className="p-4 whitespace-nowrap">{t.created}</td>

                {/* SLA */}
                <td className={`p-4 text-center font-semibold ${t.slaColor}`}>
                  {t.sla}
                </td>

                {/* ACTION DROPDOWN */}
                <td className="relative p-4">
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === t.id ? null : t.id)
                    }
                    className="text-gray-500 hover:text-black 
                               focus:outline-none focus:ring-0 active:bg-transparent"
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>

                  {dropdownOpen === t.id && (
                    <MenuActionDropdown
                      onView={() => navigate(`/super-admin/tickets/${t.id}`)}
                      onEdit={() =>
                        navigate(`/super-admin/tickets/${t.id}/edit`)
                      }
                      onDelete={() => alert("Delete clicked")}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="p-4 text-sm text-gray-500 flex justify-between">
          <span>
            Showing {ticketsData.length} of {ticketsData.length} tickets
          </span>

          <div className="flex gap-1">
            <PageBtn disabled>&lt;</PageBtn>
            <PageBtn active>1</PageBtn>
            <PageBtn>2</PageBtn>
            <PageBtn>3</PageBtn>
            <PageBtn>&gt;</PageBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- */
/* FILTER BUTTON */
/* ---------------------- */

function FilterButton({ label }) {
  return (
    <button className="flex items-center gap-2 h-8 px-3 bg-gray-100 rounded text-sm">
      {label}
      <span className="material-symbols-outlined text-base">expand_more</span>
    </button>
  );
}

function Th({ children }) {
  return (
    <th className="p-4 text-left font-bold text-gray-600 uppercase text-xs tracking-wider">
      {children}
    </th>
  );
}

/* ---------------------- */
/* PAGE BUTTON */
/* ---------------------- */

function PageBtn({ children, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`h-8 w-8 rounded flex items-center justify-center ${
        active
          ? "bg-[#F38B14]/20 text-[#F38B14] font-bold"
          : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

/* ---------------------- */
/* PRIORITY BADGE */
/* ---------------------- */

function PriorityBadge({ level }) {
  const styles = {
    Critical: "bg-red-100 text-red-800",
    High: "bg-orange-100 text-orange-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${styles[level]}`}>
      {level}
    </span>
  );
}

/* ---------------------- */
/* STATUS BADGE */
/* ---------------------- */

function StatusBadge({ status }) {
  const styles = {
    Open: "bg-blue-100 text-blue-800",
    "Awaiting Approval": "bg-purple-100 text-purple-800",
    "In Progress": "bg-[#F38B14]/20 text-[#F38B14] font-bold",
    Completed: "bg-green-100 text-green-800",
    Closed: "bg-gray-200 text-gray-800",
  };

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
        styles[status] || "bg-gray-200 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
}

/* ---------------------- */
/* DROPDOWN */
/* ---------------------- */

function MenuActionDropdown({ onView, onEdit, onDelete }) {
  return (
    <div className="absolute right-0 top-10 w-32 bg-white border border-gray-200 shadow-lg rounded z-50">

      <button
        className="block w-full text-left px-3 py-2 hover:bg-gray-100
                   focus:outline-none focus:ring-0 focus-visible:outline-none active:bg-transparent"
        onClick={onView}
      >
        View
      </button>

      <button
        className="block w-full text-left px-3 py-2 hover:bg-gray-100
                   focus:outline-none focus:ring-0 focus-visible:outline-none active:bg-transparent"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        className="block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50
                   focus:outline-none focus:ring-0 focus-visible:outline-none active:bg-transparent"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}
