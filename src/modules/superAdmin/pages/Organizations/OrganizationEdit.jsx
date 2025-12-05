import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const DUMMY_ORG = {
  name: "Innovate Solutions Inc.",
  contactPerson: "Jane Doe",
  email: "jane@innovate.com",
  phone: "+1 555 123 456",
  createdDate: "2023-05-12",
  properties: 15,
  status: "Active",
};

export default function OrganizationEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(DUMMY_ORG);

  const updateField = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Organization</h1>
      <p className="text-slate-500">Editing: {id}</p>

      <div className="bg-white/80 border rounded-2xl p-6 shadow">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm mb-1">Organization Name</label>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Contact Person</label>
            <input
              name="contactPerson"
              value={form.contactPerson}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
          <button className="px-5 py-2 bg-[#F38B14] text-white rounded-lg">
            Update Organization
          </button>
        </div>

      </div>
    </div>
  );
}
