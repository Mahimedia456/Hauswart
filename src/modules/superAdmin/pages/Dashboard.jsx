// src/modules/superAdmin/pages/Dashboard.jsx
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

// CHART.JS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const { lang } = useLanguage();
  const dict = t[lang];

  // ---------- LINE CHART ----------
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Tickets per day",
        data: [40, 55, 35, 80, 60, 95, 70],
        borderColor: "#F38B14",
        backgroundColor: "rgba(243,139,20,0.25)",
        tension: 0.4,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  // ---------- DOUGHNUT ----------
  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [92, 8],
        backgroundColor: ["#F38B14", "#FFE3C2"],
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{dict.dash_title}</h1>
        <p className="text-slate-500 text-sm">{dict.dash_breadcrumb_current}</p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title={dict.dash_card_orgs} value="1,204" icon="corporate_fare" />
        <KpiCard title={dict.dash_card_properties} value="8,345" icon="apartment" />
        <KpiCard title={dict.dash_card_openTickets} value="789" icon="confirmation_number" />
        <KpiCard
          title={dict.dash_card_activeUsers}
          subtitle={dict.dash_card_activeUsers_sub}
          value="15,678"
          icon="group"
        />
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title={dict.dash_ticketTrend}>
          <Line data={lineData} height={130} />
        </Card>

        <Card title={dict.dash_maintenanceRate}>
          <div className="w-[260px] mx-auto mt-6">
            <Doughnut data={doughnutData} />
            <p className="text-center mt-3 text-lg font-semibold">92% Completion</p>
          </div>
        </Card>
      </div>

      {/* ALERTS + ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-6">
        
        {/* ALERTS */}
        <Card title={dict.dash_systemAlerts}>
          <Alert type="warning" text={dict.dash_alert_subRenew_desc} />
          <Alert type="error" text={dict.dash_alert_failedPay_desc} />
          <Alert type="info" text={dict.dash_alert_apiSpike_desc} />
        </Card>

        {/* ACTIVITY */}
        <Card title={dict.section_recent_activity}>
          <div className="space-y-3">
            <Activity icon="edit" text={dict.activity_ticket_updated} time={dict.activity_just_now} />
            <Activity icon="person_add" text={dict.activity_org_created} time={dict.activity_15min} />
            <Activity icon="sync" text={dict.activity_sync_done} time={dict.activity_1h} />
          </div>
        </Card>

      </div>

      {/* MINI TABLES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent tickets */}
        <MiniTable
          title="Recent Tickets"
          headers={["Ticket", "User", "Property", "Date"]}
          rows={[
            ["#TKT-78921", "John Doe", "Innovate Inc.", "2025-10-26"],
            ["#TKT-78920", "Jane Smith", "Tech Solutions", "2025-10-24"],
            ["#TKT-78919", "Peter Jones", "Global Corp", "2025-10-22"],
          ]}
        />

        {/* Recent orgs */}
        <MiniTable
          title="Recent Organizations"
          headers={["Name", "Contact", "Email", "Created"]}
          rows={[
            ["Innovate Inc.", "Jane Doe", "jane@innovate.com", "2025-10-26"],
            ["Tech Solutions", "Steve Jones", "s.jones@tech.io", "2025-10-24"],
            ["Global Corp", "Mark Davis", "m.davis@global.co", "2025-10-22"],
          ]}
        />

      </div>

    </div>
  );
}

/* ---------------------------- */
/* SUB COMPONENTS               */
/* ---------------------------- */

function KpiCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-6">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
        <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F38B14]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function Alert({ type, text }) {
  const colors = {
    warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
    error: "bg-red-50 border-red-200 text-red-700",
    info: "bg-blue-50 border-blue-200 text-blue-700",
  };

  const icons = {
    warning: "warning",
    error: "error",
    info: "info",
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${colors[type]}`}>
      <span className="material-symbols-outlined text-xl">{icons[type]}</span>
      <p className="text-sm">{text}</p>
    </div>
  );
}

function Activity({ icon, text, time }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        <span className="material-symbols-outlined text-[#F38B14]">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-900">{text}</p>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
  );
}

/* ---------- MINI TABLE ---------- */
function MiniTable({ title, headers = [], rows = [] }) {
  const safeHeaders = Array.isArray(headers) ? headers : [];
  const safeRows = (Array.isArray(rows) ? rows : []).map((row) => {
    if (!Array.isArray(row)) return [];
    if (row.length < safeHeaders.length) {
      return [...row, ...Array(safeHeaders.length - row.length).fill("")];
    }
    return row;
  });

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">{title}</h3>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              {safeHeaders.map((head, index) => (
                <th key={index} className="px-4 py-2 text-left text-slate-600 font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {safeRows.length === 0 && (
              <tr>
                <td colSpan={safeHeaders.length || 1} className="px-4 py-3 text-center text-slate-400">
                  No data available
                </td>
              </tr>
            )}

            {safeRows.map((row, rindex) => (
              <tr key={rindex} className="border-t border-slate-200">
                {row.map((col, cindex) => (
                  <td key={cindex} className="px-4 py-2 text-slate-700">
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
