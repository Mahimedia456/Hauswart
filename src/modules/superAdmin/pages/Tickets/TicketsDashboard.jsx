// src/modules/superAdmin/pages/Tickets/TicketsDashboard.jsx

import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketsDashboard() {
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="text-3xl font-bold">{dict.tkt_dash_title}</p>
          <p className="text-gray-500">{dict.tkt_dash_subtitle}</p>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3">
          <FilterButton label={dict.tkt_filter_org} />
          <FilterButton label={dict.tkt_filter_property} />
          <FilterButton label={dict.tkt_filter_range} icon="calendar_today" />

          <button className="flex size-10 items-center justify-center rounded border shadow-sm hover:bg-gray-100">
            <span className="material-symbols-outlined text-xl">refresh</span>
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <KPICard
          title={dict.tkt_kpi_total}
          value="12,432"
          footer="+2.5% • All orgs"
          statusTone="green"
        />

        <KPICard
          title={dict.tkt_kpi_open}
          value="8,129"
          badge="Open"
          badgeTone="blue"
          spark
        />

        <KPICard
          title={dict.tkt_kpi_overdue}
          value="345"
          footer={`${dict.tkt_kpi_overdue_breached}: 212`}
          statusTone="red"
        />

        <KPICard
          title={dict.tkt_kpi_resolvedToday}
          value="512"
          footer={dict.tkt_last_24h}
        />
      </div>

      {/* CHARTS ROW */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card title={dict.tkt_vol_trend} subtitle={dict.tkt_vol_trend_sub}>
          <img
            className="w-full h-48 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0N96CrSRRmopyonFbW..."
          />
        </Card>

        <Card title={dict.tkt_by_category} subtitle={dict.tkt_by_category_sub}>
          <img
            className="w-full h-48 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV8JwXeXqubxCUxUB..."
          />
        </Card>
      </div>

      {/* SLA + OVERDUE BREAKDOWN */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card title={dict.tkt_sla_perf} subtitle={dict.tkt_sla_perf_sub}>
          <p className="text-4xl font-bold text-green-600 mt-4">82%</p>
          <p className="text-sm text-gray-500 mb-4">{dict.tkt_sla_rate}</p>
          <img className="h-32" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABsvQSYBXDRTpg0..." />
        </Card>

        <Card title={dict.tkt_overdue_breakdown} subtitle={dict.tkt_overdue_breakdown_sub}>
          <img className="h-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLScouPIDtKy6f..." />
        </Card>
      </div>

      {/* ORG + PROPERTY DISTRIBUTION */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* ORGS */}
        <Card title={dict.tkt_top_orgs}>
          <OrgTable />
        </Card>

        {/* PROPERTY LIST */}
        <Card title={dict.tkt_by_property}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm">{dict.tkt_high_priority_only}</p>
            <Toggle />
          </div>
          <PropertyList />
        </Card>
      </div>

      {/* HEATMAP */}
      <div>
        <Card title={dict.tkt_heatmap}>
          <img
            className="w-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfid1HSpHIfqvPT..."
          />
        </Card>
      </div>
    </div>
  );
}

/* -------------------------------------- */
/* COMPONENTS */
/* -------------------------------------- */

function FilterButton({ label, icon = "keyboard_arrow_down" }) {
  return (
    <button className="flex h-10 items-center justify-center gap-2 rounded border px-4 shadow-sm">
      <p className="text-sm font-medium">{label}</p>
      <span className="material-symbols-outlined text-xl text-gray-500">{icon}</span>
    </button>
  );
}

function KPICard({ title, value, footer, badge, badgeTone, spark, statusTone }) {
  return (
    <div className="rounded border p-6 shadow-sm bg-white flex flex-col gap-2">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className={`text-3xl font-bold ${statusTone === "red" && "text-red-500"}`}>
        {value}
      </p>

      {badge && (
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${badgeTone}-100 text-${badgeTone}-700`}
        >
          {badge}
        </span>
      )}

      {spark && (
        <img
          className="h-6 opacity-50 ml-auto"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0N96CrSRRmopyonFbW..."
        />
      )}

      {footer && <p className="text-xs text-gray-500">{footer}</p>}
    </div>
  );
}

function Card({ title, subtitle, children }) {
  return (
    <div className="rounded border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}

/* ORG TABLE */
function OrgTable() {
  const rows = [
    { org: "Starlight Corp.", open: 1204, progress: 345, overdue: 88 },
    { org: "Nexus Properties", open: 987, progress: 210, overdue: 45 },
    { org: "Innovate Group", open: 850, progress: 180, overdue: 32 },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 text-xs uppercase text-gray-400 font-semibold">
        <div>Organization</div>
        <div className="text-center">Open</div>
        <div className="text-center">In Progress</div>
        <div className="text-center">Overdue</div>
      </div>

      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-4 p-2 rounded hover:bg-gray-50">
          <div>{r.org}</div>
          <div className="text-center">{r.open}</div>
          <div className="text-center">{r.progress}</div>
          <div className="text-center text-red-500 font-semibold">{r.overdue}</div>
        </div>
      ))}

      <button className="text-primary font-semibold text-sm hover:underline">
        View All
      </button>
    </div>
  );
}

function PropertyList() {
  const items = [
    { name: "Grand Central Tower", issues: "12 Open Issues - Assigned: J. Doe" },
    { name: "Riverfront Mall", issues: "9 Open Issues - Assigned: A. Smith" },
    { name: "Skyline Business Park", issues: "7 Open Issues - Assigned: M. Jones" },
    { name: "Oceanview Residences", issues: "5 Open Issues - Unassigned" },
  ];

  return (
    <div className="flex flex-col gap-3 max-h-48 overflow-y-auto">
      {items.map((i, idx) => (
        <div key={idx} className="p-2 rounded hover:bg-gray-50">
          <p className="font-semibold text-sm">{i.name}</p>
          <p className="text-xs text-gray-500">{i.issues}</p>
        </div>
      ))}
    </div>
  );
}

function Toggle() {
  return (
    <label className="relative inline-block w-10 cursor-pointer">
      <input type="checkbox" className="toggle-checkbox absolute w-6 h-6 rounded-full bg-white border-4 cursor-pointer"/>
      <span className="toggle-label block h-6 rounded-full bg-gray-300"></span>
    </label>
  );
}
