// src/modules/superAdmin/pages/Users/UserDelete.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function UserDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [confirmed, setConfirmed] = useState(false);
  const [notes, setNotes] = useState("");

  // MOCK USER DATA (replace later with API)
  const user = {
    id: "USR-12345XYZ",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-234-567-8900",
    role: "Facility Manager",
    status: "Active",
    organizations: "Main Corp, Subsidiary Inc.",
    properties: "Building A, Campus B",
    lastActive: "2023-10-26 10:00 AM",
    createdAt: "2022-01-15",
  };

  return (
    <div className="px-6 py-8 md:px-10 space-y-8">

      {/* HEADER */}
      <div className="space-y-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.action_backToUserProfile}
        </button>

        <h1 className="text-4xl font-extrabold text-red-600">
          {dict.user_delete_title}
        </h1>
        <p className="text-gray-500">
          {dict.user_delete_subtitle}
        </p>
      </div>

      {/* WARNING */}
      <div className="flex gap-4 rounded-xl border border-red-200 bg-red-50 p-6">
        <span className="material-symbols-outlined text-red-600 text-2xl">
          warning
        </span>
        <div>
          <p className="font-bold text-red-700">
            {dict.user_delete_warning_title}
          </p>
          <p className="text-sm text-red-600 mt-1">
            {dict.user_delete_warning_desc}
          </p>
        </div>
      </div>

      {/* USER SUMMARY */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow p-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-lg font-bold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>

            <div className="flex gap-2 mt-2">
              <Badge text={user.role} color="blue" />
              <Badge text={user.status} color="green" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1 text-sm">
            <Info label={dict.user_orgs} value={user.organizations} />
            <Info label={dict.user_properties} value={user.properties} />
            <Info label={dict.user_last_active} value={user.lastActive} />
            <Info label={dict.user_created} value={user.createdAt} />
            <Info label={dict.user_id} value={user.id} full />
          </div>
        </div>
      </div>

      {/* IMPACT */}
      <Card title={dict.user_delete_impact_title}>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <li>{dict.user_open_tickets}: <b>5 (2 High)</b></li>
          <li>{dict.user_active_maintenance}: <b>3</b></li>
          <li>{dict.user_recurring_tasks}: <b>2</b></li>
          <li>{dict.user_upcoming_tasks}: <b>8</b></li>
          <li>{dict.user_live_chats}: <b>1</b></li>
        </ul>
        <p className="text-sm text-red-600 font-semibold mt-4">
          {dict.user_reassign_notice}
        </p>
      </Card>

      {/* CONFIRM */}
      <Card>
        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 size-5 rounded text-red-600"
          />
          <span className="font-medium">
            {dict.user_delete_confirm}
          </span>
        </label>
      </Card>

      {/* NOTES */}
      <Card>
        <label className="font-bold">
          {dict.user_delete_notes_title}
        </label>
        <p className="text-sm text-gray-500 mt-1">
          {dict.user_delete_notes_desc}
        </p>
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={dict.user_delete_notes_placeholder}
          className="mt-3 w-full rounded-lg border px-4 py-2 bg-gray-50"
        />
      </Card>

      {/* ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="ml-64 bg-white border-t px-6 md:px-10 py-4 flex justify-between items-center shadow-lg">
          <p className="text-sm font-bold text-red-600">
            {dict.user_delete_irreversible}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              {dict.action_cancel}
            </button>

            <button
              disabled={!confirmed}
              className="px-6 py-2 rounded-lg bg-red-600 text-white font-bold disabled:opacity-40"
            >
              {dict.action_delete_user}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow p-6 space-y-4">
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {children}
    </div>
  );
}

function Badge({ text, color }) {
  const map = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[color]}`}>
      {text}
    </span>
  );
}

function Info({ label, value, full }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
