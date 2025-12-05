import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

const DUMMY_ORGS = [
  {
    id: "org-1",
    name: "Innovate Solutions Inc.",
    contactPerson: "Jane Doe",
    properties: 15,
    plan: "Enterprise",
    status: "Active",
    statusTone: "green",
    createdDate: "2023-05-12",
  },
  {
    id: "org-2",
    name: "Apex Global Logistics",
    contactPerson: "John Smith",
    properties: 5,
    plan: "Pro",
    status: "Trial",
    statusTone: "blue",
    createdDate: "2023-08-01",
  },
  {
    id: "org-3",
    name: "Quantum Tech Group",
    contactPerson: "Emily Johnson",
    properties: 42,
    plan: "Enterprise",
    status: "Active",
    statusTone: "green",
    createdDate: "2022-11-20",
  },
  {
    id: "org-4",
    name: "Synergy Enterprises",
    contactPerson: "Michael Brown",
    properties: 8,
    plan: "Basic",
    status: "Suspended",
    statusTone: "red",
    createdDate: "2023-01-15",
  },
  {
    id: "org-5",
    name: "Pinnacle Corp",
    contactPerson: "Sarah Williams",
    properties: 23,
    plan: "Pro",
    status: "Active",
    statusTone: "green",
    createdDate: "2023-03-30",
  },
];

export default function OrganizationsList() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [search, setSearch] = useState("");

  const filteredOrgs = DUMMY_ORGS.filter((org) =>
    org.name.toLowerCase().includes(search.toLowerCase())
  );

  const badgeTone = (tone) => {
    if (tone === "green") return "bg-green-100 text-green-800";
    if (tone === "blue") return "bg-blue-100 text-blue-800";
    if (tone === "red") return "bg-red-100 text-red-800";
    return "bg-slate-100 text-slate-700";
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {dict.organizations || "Organizations"}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
            <span className="hover:underline cursor-pointer">
              {dict.nav_home || "Home"}
            </span>
            <span>/</span>
            <span className="text-slate-700 font-medium">
              {dict.organizations || "Organizations"}
            </span>
          </div>
        </div>

        {/* CREATE BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/super-admin/organizations/create")}
          className="
            inline-flex items-center justify-center gap-2
            h-10 px-5 rounded-xl
            bg-[#F38B14] text-white text-sm font-semibold
            hover:bg-black transition-colors
            shadow-md shadow-orange-300/30
          "
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>{dict.createOrganization || "New Organization"}</span>
        </button>
      </header>

      {/* CONTENT CARD */}
      <section className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow p-6">

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">

          <div className="flex-1 max-w-xl">
            <label className="block text-sm font-medium text-slate-600 mb-1">
              {dict.searchOrganizations || "Search organizations"}
            </label>
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50">
              <span className="px-3 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={dict.searchOrganizationsPlaceholder || "Search organizations..."}
                className="flex-1 h-10 bg-transparent outline-none text-sm px-1 pr-3"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <FilterChip label={dict.status || "Status"} />
            <FilterChip label={dict.subscriptionPlan || "Subscription Plan"} />
            <FilterChip label={dict.dateCreated || "Date Created"} />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <Th>Organization Name</Th>
                <Th>Contact Person</Th>
                <Th centered>Properties</Th>
                <Th>Subscription Plan</Th>
                <Th>Status</Th>
                <Th>Created Date</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {filteredOrgs.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-slate-400">
                    {dict.noOrganizations || "No organizations found."}
                  </td>
                </tr>
              )}

              {filteredOrgs.map((org, idx) => (
                <tr
                  key={org.id}
                  className={`
                    border-t border-slate-100
                    hover:bg-orange-50/60 cursor-pointer
                    ${idx % 2 === 1 ? "bg-slate-50/40" : "bg-white"}
                  `}
                  onClick={() => navigate(`/super-admin/organizations/${org.id}`)}
                >
                  <Td strong>{org.name}</Td>
                  <Td>{org.contactPerson}</Td>
                  <Td centered>{org.properties}</Td>
                  <Td>{org.plan}</Td>
                  <Td>
                    <span
                      className={
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " +
                        badgeTone(org.statusTone)
                      }
                    >
                      {org.status}
                    </span>
                  </Td>
                  <Td>{org.createdDate}</Td>

                  {/* ACTION BUTTONS */}
                  <Td>
                    <div
                      className="flex gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* VIEW */}
                      <button
                        onClick={() =>
                          navigate(`/super-admin/organizations/${org.id}`)
                        }
                        className="text-slate-600 hover:text-slate-900"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          visibility
                        </span>
                      </button>

                      {/* EDIT */}
                      <button
                        onClick={() =>
                          navigate(`/super-admin/organizations/${org.id}/edit`)
                        }
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
                      </button>

                      {/* SUSPEND */}
                      <button
                        onClick={() =>
                          navigate(`/super-admin/organizations/${org.id}/suspend`)
                        }
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          block
                        </span>
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() =>
                          navigate(`/super-admin/organizations/${org.id}/delete`)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
}

/* Reusable Components */
function FilterChip({ label }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:bg-slate-100"
    >
      <span>{label}</span>
      <span className="material-symbols-outlined text-[18px] text-slate-400">
        expand_more
      </span>
    </button>
  );
}

function Th({ children, centered }) {
  return (
    <th
      className={
        "px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide " +
        (centered ? "text-center" : "text-left")
      }
    >
      {children}
    </th>
  );
}

function Td({ children, strong, centered }) {
  return (
    <td
      className={
        "px-4 py-3 text-sm " +
        (strong ? "font-medium text-slate-900" : "text-slate-700") +
        (centered ? " text-center" : "")
      }
    >
      {children}
    </td>
  );
}
