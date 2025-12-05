// src/modules/superAdmin/pages/Organizations/tabs/Overview.jsx
import React from "react";
import Chart from "react-apexcharts";

export default function Overview() {
  // ---- DUMMY STATS ----
  const stats = [
    { label: "Total Properties", value: 84, icon: "apartment" },
    { label: "Assigned Users", value: 127, icon: "group" },
    { label: "Open Tickets", value: 32, icon: "confirmation_number" },
    { label: "Active Maintenance Tasks", value: 15, icon: "construction" },
  ];

  // ---- TICKET TREND CHART ----
  const ticketTrendOptions = {
    chart: { type: "line", toolbar: { show: false } },
    colors: ["#2563eb"],
    stroke: { width: 3, curve: "smooth" },
    markers: { size: 4, colors: ["#2563eb"], strokeColors: "#fff", strokeWidth: 2 },
    grid: { borderColor: "#e5e7eb" },
    xaxis: {
      categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
      labels: { style: { colors: "#6b7280" } },
    },
    yaxis: { labels: { style: { colors: "#6b7280" } } },
  };

  const ticketTrendSeries = [
    { name: "Tickets", data: [5, 9, 7, 14, 18, 12, 20] },
  ];

  // ---- MAINTENANCE DONUT CHART ----
  const maintenanceOptions = {
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#22c55e", "#3b82f6", "#f97316"],
    legend: { position: "bottom" },
    stroke: { width: 0 },
  };

  const maintenanceSeries = [45, 32, 12];

  // ---- DUMMY RECENT TICKETS ----
  const recentTickets = [
    {
      id: "#TKT-5823",
      category: "Plumbing",
      property: "Quantum Towers A",
      assigned: "Leo Maxwell",
      status: "In Progress",
      statusTone: "blue",
      date: "Jul 22, 2024",
    },
    {
      id: "#TKT-5822",
      category: "Electrical",
      property: "Apex Plaza",
      assigned: "Nora Fields",
      status: "Open",
      statusTone: "red",
      date: "Jul 21, 2024",
    },
    {
      id: "#TKT-5820",
      category: "HVAC",
      property: "Starlight Business Center",
      assigned: "N/A",
      status: "Completed",
      statusTone: "green",
      date: "Jul 20, 2024",
    },
  ];

  // ---- DUMMY ACTIVITY ----
  const activity = [
    { icon: "edit", color: "blue", text: "John updated ticket #243", time: "10m ago" },
    { icon: "add", color: "green", text: "New user 'Sarah Jenkins' added.", time: "2h ago" },
    { icon: "inventory_2", color: "yellow", text: "Maintenance for 'HVAC' completed.", time: "1d ago" },
  ];

  // ---- COMPLIANCE ----
  const compliance = [
    {
      title: "Fire Safety Certificate",
      property: "Quantum Towers A",
      date: "Aug 15, 2024",
      tag: "Expires in 22 days",
      tagColor: "yellow",
    },
    {
      title: "Elevator Inspection Permit",
      property: "Apex Plaza",
      date: "Jul 1, 2024",
      tag: "Overdue",
      tagColor: "red",
    },
    {
      title: "Boiler Service Agreement",
      property: "Starlight Business Center",
      date: "Sep 1, 2024",
      tag: "Expires in 40 days",
      tagColor: "yellow",
    },
  ];

  const badgeClass = (tone) => {
    if (tone === "blue") return "bg-blue-100 text-blue-800";
    if (tone === "red") return "bg-red-100 text-red-800";
    if (tone === "green") return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-700";
  };

  const tagColor = {
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
  };

  return (
    <div className="space-y-6">

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 flex justify-between items-start"
          >
            <div>
              <p className="text-4xl font-bold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>

            <span className="material-symbols-outlined text-gray-300 text-[36px]">
              {s.icon}
            </span>
          </div>
        ))}
      </div>

      {/* TICKET TREND + MAINTENANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Ticket Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Ticket Trend (30 Days)</h3>

            <button className="flex items-center gap-2 rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              <span>Last 30 Days</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>

          <div className="mt-4">
            <Chart
              options={ticketTrendOptions}
              series={ticketTrendSeries}
              type="line"
              height={260}
            />
          </div>
        </div>

        {/* Maintenance Status */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Maintenance Status</h3>

          <div className="mt-4 flex items-center justify-center">
            <Chart
              options={maintenanceOptions}
              series={maintenanceSeries}
              type="donut"
              width={330}
            />
          </div>
        </div>

      </div>

      {/* RECENT TICKETS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Tickets</h3>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>Ticket ID</Th>
              <Th>Category</Th>
              <Th>Property</Th>
              <Th>Assigned To</Th>
              <Th>Status</Th>
              <Th>Created Date</Th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {recentTickets.map((t, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <Td strong>{t.id}</Td>
                <Td>{t.category}</Td>
                <Td>{t.property}</Td>
                <Td>{t.assigned}</Td>
                <Td>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass(
                      t.statusTone
                    )}`}
                  >
                    {t.status}
                  </span>
                </Td>
                <Td>{t.date}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTIVITY & COMPLIANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>

          <ul className="space-y-6">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white ${
                    a.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : a.color === "green"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{a.icon}</span>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-700">{a.text}</p>
                  <p className="text-xs text-gray-400">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Compliance Expirations
          </h3>

          <div className="space-y-5">
            {compliance.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className={`material-symbols-outlined mt-1 ${
                    c.tagColor === "yellow" ? "text-yellow-500" : "text-red-500"
                  }`}
                >
                  warning
                </span>

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{c.title}</p>
                  <p className="text-sm text-gray-500">Property: {c.property}</p>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500">Expires: {c.date}</p>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tagColor[c.tagColor]
                      }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* Helpers for table */
function Th({ children }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
      {children}
    </th>
  );
}

function Td({ children, strong }) {
  return (
    <td
      className={
        "px-6 py-4 text-sm " +
        (strong ? "font-semibold text-gray-900" : "text-gray-600")
      }
    >
      {children}
    </td>
  );
}
