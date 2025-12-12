// src/modules/superAdmin/pages/Users/UserEdit.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function UserEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    properties: [],
    status: "",
  });

  useEffect(() => {
    const user = {
      fullName: "Alex Johnson",
      email: "alex.j@hauswart.com",
      phone: "+1 234 567 890",
      role: "Facility Manager",
      organization: "Hauswart Global",
      properties: [
        "Downtown Plaza - 123 Main St",
        "Uptown Corporate Center - 456 Oak Ave",
      ],
      status: "Active",
    };

    setForm(user);
  }, [id]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleProperty = (property) => {
    setForm((prev) => ({
      ...prev,
      properties: prev.properties.includes(property)
        ? prev.properties.filter((p) => p !== property)
        : [...prev.properties, property],
    }));
  };

  return (
    <div className="px-6 py-8 md:px-10 space-y-8">

      {/* HEADER */}
      <div className="space-y-2">
        <button
          onClick={() => navigate("/super-admin/users")}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.back_to_users}
        </button>

        <h1 className="text-3xl font-extrabold">{dict.user_edit_title}</h1>
        <p className="text-gray-500">{dict.user_edit_subtitle}</p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-10">

        <section>
          <h2 className="text-xl font-bold">{dict.user_info_title}</h2>
          <p className="text-gray-500 mt-1">{dict.user_info_desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Input label={dict.user_full_name} name="fullName" value={form.fullName} onChange={updateField} />
            <Input label={dict.user_email} name="email" value={form.email} disabled />
            <Input label={dict.user_phone} name="phone" value={form.phone} onChange={updateField} />
            <ProfilePhotoUpload label={dict.user_photo} />
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-xl font-bold">{dict.user_role_title}</h2>
          <p className="text-gray-500 mt-1">{dict.user_role_desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Select
              label={dict.user_role}
              name="role"
              value={form.role}
              onChange={updateField}
              options={[
                "Facility Manager",
                "Caretaker",
                "Technician",
                "Tenant",
                "Service Provider",
                "Organization Admin",
              ]}
            />
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-xl font-bold">{dict.user_access_title}</h2>
          <p className="text-gray-500 mt-1">{dict.user_access_desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Select
              label={dict.user_assign_org}
              name="organization"
              value={form.organization}
              onChange={updateField}
              options={[
                "Hauswart Global",
                "Facility Masters",
                "Metro Property Group",
              ]}
            />

            <div className="md:col-span-2">
              <p className="text-sm font-medium mb-2">
                {dict.user_assign_properties}
              </p>

              <div className="border rounded-lg p-4 space-y-3 max-h-48 overflow-y-auto">
                {[
                  "Downtown Plaza - 123 Main St",
                  "Uptown Corporate Center - 456 Oak Ave",
                  "Eastside Lofts - 789 Pine Ln",
                  "Westgate Industrial Park - 101 Industrial Way",
                ].map((p) => (
                  <label key={p} className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={form.properties.includes(p)}
                      onChange={() => toggleProperty(p)}
                      className="rounded text-[#F38B14]"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ACTION BAR */}
      <div className="sticky bottom-0 bg-white border-t px-6 md:px-10 py-4 flex justify-end gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg hover:bg-gray-100 font-semibold"
        >
          {dict.action_cancel}
        </button>
        <button className="px-5 py-2 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black">
          {dict.action_save_changes}
        </button>
      </div>
    </div>
  );
}

/* ---------- SHARED ---------- */

function Input({ label, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      {label}
      <input {...props} className="h-12 rounded-lg border px-4 bg-gray-50" />
    </label>
  );
}

function Select({ label, options, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium">
      {label}
      <select {...props} className="h-12 rounded-lg border px-4 bg-gray-50">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function ProfilePhotoUpload({ label }) {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium">
      {label}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="material-symbols-outlined text-gray-400">person</span>
        </div>
        <button className="h-10 px-4 rounded-lg bg-gray-100 font-semibold">
          Upload Photo
        </button>
      </div>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-200" />;
}
