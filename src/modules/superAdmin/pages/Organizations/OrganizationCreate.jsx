// src/modules/superAdmin/pages/OrganizationCreate.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function OrganizationCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "",
    industry: "",
    address: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    subscriptionPlan: "",
    status: "Active",
    notes: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log + go back to list
    console.log("New organization payload:", form);
    navigate("/super-admin/organizations");
  };

  const title = dict.createOrganization || "Create New Organization";

  return (
    <div className="space-y-6 max-w-5xl">

      {/* Back link */}
      <button
        type="button"
        onClick={() => navigate("/super-admin/organizations")}
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800"
      >
        <span className="material-symbols-outlined text-[18px]">
          arrow_back
        </span>
        <span>{dict.backToOrganizations || "Back to Organizations"}</span>
      </button>

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-500 text-sm mt-1">
          {dict.createOrganizationSubtitle ||
            "Add a new organization to the Hauswart system."}
        </p>
      </div>

      {/* Card */}
      <section
        className="
          bg-white/80 backdrop-blur-xl
          border border-slate-200 rounded-2xl
          shadow-[0_8px_25px_rgba(0,0,0,0.04)]
          p-6 md:p-8
        "
      >
        <header className="mb-6">
          <h2 className="text-lg font-semibold text-slate-900">
            {dict.newOrganizationSetup || "New Organization Setup"}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {dict.newOrganizationSetupSubtitle ||
              "Enter organization information below."}
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
        >
          {/* Row 1 */}
          <div>
            <Label>Organization Name</Label>
            <Input
              placeholder="Enter organization name"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>

          <div>
            <Label>Industry Type</Label>
            <Select
              value={form.industry}
              onChange={handleChange("industry")}
            >
              <option value="">Select industry</option>
              <option>Real Estate</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Hospitality</option>
            </Select>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-2">
            <Label>Address</Label>
            <Textarea
              rows={3}
              placeholder="Enter full address"
              value={form.address}
              onChange={handleChange("address")}
            />
          </div>

          {/* Row 3 */}
          <div>
            <Label>Contact Person Name</Label>
            <Input
              placeholder="e.g., Jane Doe"
              value={form.contactName}
              onChange={handleChange("contactName")}
            />
          </div>
          <div>
            <Label>Contact Email</Label>
            <Input
              type="email"
              placeholder="e.g., jane.doe@example.com"
              value={form.contactEmail}
              onChange={handleChange("contactEmail")}
            />
          </div>

          {/* Row 4 */}
          <div>
            <Label>Contact Phone</Label>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={form.contactPhone}
              onChange={handleChange("contactPhone")}
            />
          </div>
          <div>
            <Label>Subscription Plan</Label>
            <Select
              value={form.subscriptionPlan}
              onChange={handleChange("subscriptionPlan")}
            >
              <option value="">Select plan</option>
              <option>Basic</option>
              <option>Professional</option>
              <option>Enterprise</option>
            </Select>
          </div>

          {/* Row 5 */}
          <div>
            <Label>Status</Label>
            <Select value={form.status} onChange={handleChange("status")}>
              <option>Active</option>
              <option>Trial</option>
              <option>Suspended</option>
            </Select>
          </div>
          <div>
            <Label>Notes (Optional)</Label>
            <Input
              placeholder="Add any relevant notes"
              value={form.notes}
              onChange={handleChange("notes")}
            />
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end items-center gap-4 pt-6 mt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={() => navigate("/super-admin/organizations")}
              className="
                text-sm font-medium text-slate-500 
                hover:text-slate-800 px-4 py-2 rounded-lg
              "
            >
              {dict.cancel || "Cancel"}
            </button>
            <button
              type="submit"
              className="
                bg-[#F38B14] text-white text-sm font-medium
                px-5 py-2.5 rounded-lg shadow-sm
                hover:bg-black transition-colors
              "
            >
              {dict.saveOrganization || "Save Organization"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* Reusable inputs */

function Label({ children }) {
  return (
    <label className="block text-sm font-medium text-slate-700 mb-1.5">
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={`
        w-full h-11 px-3 rounded-lg
        bg-slate-50 border border-slate-200
        text-slate-900 placeholder:text-slate-400
        focus:ring-2 focus:ring-[#F38B14]/70 focus:border-[#F38B14]
        outline-none
        ${props.className || ""}
      `}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className={`
        w-full h-11 px-3 rounded-lg
        bg-slate-50 border border-slate-200
        text-slate-900
        focus:ring-2 focus:ring-[#F38B14]/70 focus:border-[#F38B14]
        outline-none
        ${props.className || ""}
      `}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`
        w-full px-3 py-2 rounded-lg
        bg-slate-50 border border-slate-200
        text-slate-900 placeholder:text-slate-400
        focus:ring-2 focus:ring-[#F38B14]/70 focus:border-[#F38B14]
        outline-none
        resize-y
        ${props.className || ""}
      `}
    />
  );
}
