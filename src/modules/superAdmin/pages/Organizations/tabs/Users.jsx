import React, { useState } from "react";

export default function Users() {
  // ------------------ Dummy Data ------------------
  const USERS = [
    {
      name: "Marcus Adler",
      role: "Facility Manager",
      roleColor: "blue",
      email: "marcus.adler@innovatech.de",
      phone: "+49 30 555-0124",
      status: "Active",
      statusTone: "green",
      lastActive: "2 hours ago",
    },
    {
      name: "Lena Schmidt",
      role: "Caretaker",
      roleColor: "green",
      email: "lena.schmidt@innovatech.de",
      phone: "+49 30 555-0125",
      status: "Active",
      statusTone: "green",
      lastActive: "1 day ago",
    },
    {
      name: "Felix Bauer",
      role: "Technician",
      roleColor: "purple",
      email: "felix.bauer@innovatech.de",
      phone: "+49 30 555-0126",
      status: "Inactive",
      statusTone: "gray",
      lastActive: "2 weeks ago",
    },
    {
      name: "Anna Keller",
      role: "Tenant",
      roleColor: "teal",
      email: "anna.keller@tenant.com",
      phone: "+49 176 1234567",
      status: "Active",
      statusTone: "green",
      lastActive: "5 hours ago",
    },
    {
      name: "CleanCo Services",
      role: "Service Provider",
      roleColor: "amber",
      email: "contact@cleanco.de",
      phone: "+49 89 987-6543",
      status: "Active",
      statusTone: "green",
      lastActive: "1 week ago",
    },
  ];

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("Active");

  const filteredUsers = USERS.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole =
      roleFilter === "All Roles" ? true : u.role === roleFilter;
    const matchesStatus =
      statusFilter === "Active"
        ? u.status === "Active"
        : u.status === "Inactive";

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* ------------------ Filters + Add User ------------------ */}
      <div className="flex flex-wrap items-center justify-between gap-6">

        {/* Search + Role + Status */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="search"
              placeholder="Search users..."
              className="w-64 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Role Filter */}
          <select
            className="rounded-lg border border-gray-200 bg-gray-50 py-2 pl-3 pr-8 text-sm focus:border-primary focus:ring-primary"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option>All Roles</option>
            <option>Facility Manager</option>
            <option>Caretaker</option>
            <option>Technician</option>
            <option>Tenant</option>
            <option>Service Provider</option>
          </select>

          {/* Status Filter */}
          <select
            className="rounded-lg border border-gray-200 bg-gray-50 py-2 pl-3 pr-8 text-sm focus:border-primary focus:ring-primary"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Add User Button */}
        <button className="flex h-10 items-center gap-2 rounded-lg bg-[#F38B14] px-5 text-sm font-semibold text-white hover:bg-black transition">
          <span className="material-symbols-outlined text-[20px]">
            person_add
          </span>
          Add User
        </button>
      </div>

      {/* ------------------ USERS TABLE ------------------ */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>User Name</Th>
              <Th>Role</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Status</Th>
              <Th>Last Active</Th>
              <Th></Th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredUsers.map((u, i) => (
              <tr
                key={i}
                className={i % 2 === 1 ? "bg-gray-50" : ""}
              >
                <Td strong>{u.name}</Td>

                {/* Role Badge */}
                <Td>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  
                      ${
                        u.roleColor === "blue"
                          ? "bg-blue-100 text-blue-700"
                          : u.roleColor === "green"
                          ? "bg-green-100 text-green-700"
                          : u.roleColor === "purple"
                          ? "bg-purple-100 text-purple-700"
                          : u.roleColor === "teal"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-amber-100 text-amber-800"
                      }`}
                  >
                    {u.role}
                  </span>
                </Td>

                <Td>{u.email}</Td>
                <Td>{u.phone}</Td>

                {/* Status Badge */}
                <Td>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${
                        u.statusTone === "green"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    {u.status}
                  </span>
                </Td>

                <Td>{u.lastActive}</Td>

                <Td className="text-right">
                  <button className="text-gray-500 hover:text-gray-700">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------ PAGINATION ------------------ */}
      <div className="flex items-center justify-between px-2 py-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select className="rounded-md border-gray-300 py-1 text-sm focus:border-primary focus:ring-primary">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span>1–5 of 12</span>

          <div className="flex items-center gap-1">
            <button className="rounded p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-xl">
                chevron_left
              </span>
            </button>

            <button className="rounded p-1 text-gray-500 hover:bg-gray-100">
              <span className="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Table Helpers ------------------ */

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
