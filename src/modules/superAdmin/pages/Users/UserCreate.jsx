// src/modules/superAdmin/pages/Users/UserCreate.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function UserCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Facility Manager",
    organization: "",
    properties: [],
    status: "Active",
    sendActivationEmail: true,
  });

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

        <h1 className="text-3xl font-extrabold">{dict.user_create_title}</h1>
        <p className="text-gray-500">{dict.user_create_subtitle}</p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-10">

        {/* USER INFO */}
        <Section
          title={dict.user_info_title}
          desc={dict.user_info_desc}
        >
          <Grid>
            <Input label={dict.user_full_name} name="fullName" value={form.fullName} onChange={updateField} placeholder="e.g. John Doe" />
            <Input label={dict.user_email} name="email" value={form.email} onChange={updateField} placeholder="e.g. j.doe@example.com" />
            <Input label={dict.user_phone} name="phone" value={form.phone} onChange={updateField} placeholder="+1 234 567 890" />
            <ProfilePhotoUpload label={dict.user_photo} />
            <Input label={dict.user_password} type="password" name="password" value={form.password} onChange={updateField} />
            <Input label={dict.user_confirm_password} type="password" name="confirmPassword" value={form.confirmPassword} onChange={updateField} />
          </Grid>
        </Section>

        <Divider />

        {/* ROLE */}
        <Section
          title={dict.user_role_title}
          desc={dict.user_role_desc}
        >
          <Grid>
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

            <div className="flex items-end">
              <button className="text-sm font-bold text-[#F38B14] hover:underline">
                {dict.user_customize_permissions}
              </button>
            </div>

            <div className="md:col-span-2 bg-gray-50 rounded-lg p-4 text-sm">
              <p className="font-semibold mb-1">
                {dict.user_permissions_for} {form.role}
              </p>
              <p className="text-gray-600">
                {dict.user_permissions_desc}
              </p>
            </div>
          </Grid>
        </Section>

        <Divider />

        {/* ACCESS */}
        <Section
          title={dict.user_access_title}
          desc={dict.user_access_desc}
        >
          <Grid>
            <Select
              label={dict.user_assign_org}
              name="organization"
              value={form.organization}
              onChange={updateField}
              options={[
                "Global Real Estate Inc.",
                "Metro Property Group",
                "City Towers Management",
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
          </Grid>
        </Section>

        <Divider />

        {/* STATUS */}
        <Section title={dict.user_status_title}>
          <Grid>
            <Select
              label={dict.user_status}
              name="status"
              value={form.status}
              onChange={updateField}
              options={["Active", "Inactive", "Suspended"]}
            />

            <label className="flex items-center gap-3 mt-6">
              <input
                type="checkbox"
                name="sendActivationEmail"
                checked={form.sendActivationEmail}
                onChange={updateField}
                className="rounded text-[#F38B14]"
              />
              <span className="text-sm">
                {dict.user_send_activation}
              </span>
            </label>
          </Grid>
        </Section>
      </div>

      {/* ACTION BAR */}
      <div className="sticky bottom-0 bg-white border-t px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-yellow-600 text-sm font-medium">
          <span className="material-symbols-outlined">warning</span>
          {dict.unsaved_changes}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg hover:bg-gray-100 font-semibold"
          >
            {dict.action_cancel}
          </button>
          <button className="px-5 py-2 rounded-lg bg-[#F38B14] text-white font-bold hover:bg-black">
            {dict.action_create_user}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------- SHARED UI ----------------- */

function Section({ title, desc, children }) {
  return (
    <section>
      <h2 className="text-xl font-bold">{title}</h2>
      {desc && <p className="text-gray-500 mt-1">{desc}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

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
