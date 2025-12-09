import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketsList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  // ------------------------------
  // Dummy Tickets Data
  // ------------------------------
  const dummyTickets = [
    {
      id: 4830,
      title: "Air conditioning not cooling",
      summary: "Tenant-issued | Unit 403",
      priority: "Critical",
      category: "HVAC",
      org: "Sunrise Towers LLC",
      property: "Building A — Unit 403",
      assignedTo: "John Mills",
      assignedAvatar:
        "https://randomuser.me/api/portraits/men/40.jpg",
      status: "Open",
      created: "12 Nov 2025 — 3:45 PM",
      sla: "Overdue by 1d 3h",
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
      assignedAvatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
      status: "Awaiting Approval",
      created: "12 Nov 2025 — 1:15 PM",
      sla: "2 hrs left",
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
      assignedAvatar:
        "https://randomuser.me/api/portraits/men/12.jpg",
      status: "In Progress",
      created: "11 Nov 2025 — 9:00 AM",
      sla: "6 hrs left",
    },
  ];

  const [tickets, setTickets] = useState(dummyTickets);
  const [filters, setFilters] = useState({
    org: "",
    property: "",
    priority: "",
    category: "",
    status: "",
    assigned: "",
    created: "",
    sla: "",
  });

  // ------------------------------
  // FILTER HANDLING
  // ------------------------------
  const handleFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredTickets = tickets.filter((t) => {
    return (
      (!filters.org || t.org === filters.org) &&
      (!filters.property || t.property === filters.property) &&
      (!filters.priority || t.priority === filters.priority) &&
      (!filters.category || t.category === filters.category) &&
      (!filters.status || t.status === filters.status) &&
      (!filters.assigned || t.assignedTo === filters.assigned)
    );
  });

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{dict.tickets_all}</h1>
          <p className="text-gray-500">{dict.tickets_manageDesc}</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-10 px-4 rounded bg-white border">{dict.exportCSV}</button>

          <button className="h-10 px-4 rounded bg-white border flex items-center">
            {dict.more} <span className="material-symbols-outlined ml-1">expand_more</span>
          </button>

          <button
            onClick={() => navigate("/super-admin/tickets/create")}
            className="h-10 px-4 rounded bg-primary text-white"
          >
            {dict.createTicket}
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded border shadow-sm mb-6">
        <div className="flex flex-wrap gap-3">
          <FilterButton label="Organization" onClick={() => handleFilter("org", "Sunrise Towers LLC")} />
          <FilterButton label="Property" onClick={() => handleFilter("property", "Building A — Unit 403")} />
          <FilterButton label="Priority" onClick={() => handleFilter("priority", "Critical")} />
          <FilterButton label="Category" onClick={() => handleFilter("category", "HVAC")} />
          <FilterButton label="Status" onClick={() => handleFilter("status", "Open")} />
          <FilterButton label="Assigned To" onClick={() => handleFilter("assigned", "John Mills")} />
          <FilterButton label="Created Date" />
          <FilterButton label="SLA Status" />

          <button className="ml-auto text-primary text-sm font-medium"
            onClick={() => setFilters({
              org: "", property: "", priority: "",
              category: "", status: "", assigned: ""
            })}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <Th>#</Th>
              <Th>{dict.ticketID}</Th>
              <Th>{dict.titleSummary}</Th>
              <Th>{dict.priority}</Th>
              <Th>{dict.category}</Th>
              <Th>{dict.organization}</Th>
              <Th>{dict.property}</Th>
              <Th>{dict.assignedTo}</Th>
              <Th>{dict.status}</Th>
              <Th>{dict.createdDate}</Th>
              <Th>{dict.slaDue}</Th>
              <Th></Th>
            </tr>
          </thead>

          <tbody>
            {filteredTickets.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-4"><input type="checkbox" /></td>
                <td className="p-4 text-primary font-bold hover:underline cursor-pointer">#{t.id}</td>

                <td className="p-4">
                  <div className="font-bold">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.summary}</div>
                </td>

                <td className="p-4">{t.priority}</td>
                <td className="p-4">{t.category}</td>
                <td className="p-4">{t.org}</td>

                <td className="p-4">
                  <span className="text-primary hover:underline cursor-pointer">{t.property}</span>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <img src={t.assignedAvatar} className="h-6 w-6 rounded-full" />
                    {t.assignedTo}
                  </div>
                </td>

                <td className="p-4">{t.status}</td>
                <td className="p-4">{t.created}</td>
                <td className="p-4 text-center">{t.sla}</td>

                <td className="p-4">
                  <button className="text-gray-500 hover:text-black">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="p-4 text-sm text-gray-500 flex justify-between">
          <span>Showing {filteredTickets.length} of {tickets.length} tickets</span>

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

function FilterButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 h-8 px-3 bg-gray-100 rounded text-sm"
    >
      {label}
      <span className="material-symbols-outlined text-base">expand_more</span>
    </button>
  );
}

function Th({ children }) {
  return (
    <th className="p-4 text-left font-bold text-gray-600 uppercase text-xs">
      {children}
    </th>
  );
}

function PageBtn({ children, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`h-8 w-8 rounded flex items-center justify-center ${
        active ? "bg-primary/20 text-primary font-bold" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
