// src/modules/superAdmin/pages/Organizations/OrganizationHeader.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrganizationHeader({ org }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [showSuspend, setShowSuspend] = useState(false);

  return (
    <>
      {/* HEADER CARD */}
      <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md flex justify-between items-start">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-xl font-bold text-slate-900">{org.name}</h2>
          <p className="text-sm text-slate-600">Org ID: {org.id}</p>
          <p className="text-sm text-slate-500">
            Created: {org.createdDate} · {org.properties} Properties
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right space-y-3">

          {/* Primary Contact */}
          <div>
            <p className="text-sm font-semibold text-slate-700">Primary Contact</p>
            <p className="text-sm text-slate-600">{org.contactPerson}</p>
            <p className="text-sm text-slate-600">{org.email}</p>
            <p className="text-sm text-slate-600">{org.phone}</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 justify-end">

            {/* EDIT */}
            <button
              onClick={() => navigate(`/super-admin/organizations/${id}/edit`)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-[#F38B14]/10 text-[#F38B14] border border-[#F38B14]/30
                hover:bg-[#F38B14]/20 transition
              "
            >
              Edit
            </button>

            {/* SUSPEND */}
            <button
              onClick={() => setShowSuspend(true)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-yellow-50 text-yellow-700 border border-yellow-200
                hover:bg-yellow-100 transition
              "
            >
              Suspend
            </button>

            {/* DELETE */}
            <button
              onClick={() => navigate(`/super-admin/organizations/${id}/delete`)}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-red-50 text-red-600 border border-red-200
                hover:bg-red-100 transition
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SUSPEND POPUP MODAL */}
      {/* ================================================= */}
      {showSuspend && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">

            {/* ICON + TITLE */}
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-yellow-600 text-3xl">
                  warning
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Suspend Organization?
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                  Suspending this organization will immediately block all users
                  from accessing their dashboards, mobile apps, and assigned properties.
                </p>
              </div>
            </div>

            {/* BULLET POINTS */}
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• All active sessions will be logged out.</li>
              <li>• Tickets, maintenance tasks, and user assignments will remain intact.</li>
              <li>• You can reactivate this organization anytime.</li>
            </ul>

            {/* SWITCH OPTIONS */}
            <div className="flex mt-6 bg-slate-100 rounded-full p-1">
              <button className="flex-1 py-2 rounded-full bg-white text-slate-900 font-medium shadow">
                Suspend only
              </button>
              <button className="flex-1 py-2 rounded-full text-slate-600 hover:bg-slate-200">
                Archive permanently
              </button>
            </div>

            {/* FOOTER BUTTONS */}
            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 text-slate-600 hover:text-slate-900"
                onClick={() => setShowSuspend(false)}
              >
                Cancel
              </button>

              <button
                className="
                  px-6 py-2 rounded-xl bg-red-600 text-white font-medium
                  hover:bg-red-700 transition
                "
              >
                Suspend Organization
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
