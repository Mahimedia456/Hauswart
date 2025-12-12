import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import ApplyRolePermissionModal from "@/components/modals/ApplyRolePermissionModal";

export default function UsersList() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [roleUser, setRoleUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@hauswart.com",
      role: "Facility Manager",
      roleColor: "bg-orange-100 text-orange-700",
      org: "Hauswart Global",
      properties: 12,
      phone: "+1 234 567 890",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      lastActivity: "2023-10-27 10:00 AM",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@facilitym.com",
      role: "Caretaker",
      roleColor: "bg-indigo-100 text-indigo-700",
      org: "Facility Masters",
      properties: 5,
      phone: "+44 20 7946 0958",
      status: "Inactive",
      statusColor: "bg-gray-200 text-gray-700",
      lastActivity: "2023-09-15 03:30 PM",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black">{dict.users}</h1>
          <p className="text-gray-500">{dict.users_sub}</p>
        </div>

        <div className="flex gap-3">
          <button className="h-11 px-4 rounded-lg border hover:bg-gray-100">
            {dict.users_export}
          </button>
          <button
            onClick={() => navigate("/super-admin/users/create")}
            className="h-11 px-4 bg-[#F38B14] text-white font-bold rounded-lg hover:bg-black"
          >
            {dict.users_add}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4">{dict.users_user}</th>
              <th className="px-6 py-4">{dict.users_role}</th>
              <th className="px-6 py-4">{dict.users_org}</th>
              <th className="px-6 py-4">{dict.users_properties}</th>
              <th className="px-6 py-4">{dict.users_phone}</th>
              <th className="px-6 py-4">{dict.users_status}</th>
              <th className="px-6 py-4">{dict.users_last_activity}</th>
              <th className="px-6 py-4 text-center">{dict.users_actions}</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={u.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">{u.name}</p>
                      <p className="text-gray-500 text-sm">{u.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${u.roleColor}`}>
                    {u.role}
                  </span>
                </td>

                <td className="px-6 py-4">{u.org}</td>
                <td className="px-6 py-4">{u.properties}</td>
                <td className="px-6 py-4">{u.phone}</td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${u.statusColor}`}>
                    {u.status}
                  </span>
                </td>

                <td className="px-6 py-4">{u.lastActivity}</td>

                {/* ACTION ICONS */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <ActionIcon icon="visibility" onClick={() => navigate(`/super-admin/users/${u.id}`)} />
                    <ActionIcon icon="edit" onClick={() => navigate(`/super-admin/users/${u.id}/edit`)} />
                    <ActionIcon icon="security" onClick={() => setRoleUser(u)} />
                    <ActionIcon icon="delete" danger onClick={() => navigate(`/super-admin/users/${u.id}/delete`)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ROLE MODAL */}
      {roleUser && (
        <ApplyRolePermissionModal
          open
          user={roleUser}
          onClose={() => setRoleUser(null)}
          onConfirm={() => setRoleUser(null)}
        />
      )}
    </div>
  );
}

function ActionIcon({ icon, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 flex items-center justify-center rounded-lg
        ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-500 hover:bg-gray-100 hover:text-black"}`}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </button>
  );
}
