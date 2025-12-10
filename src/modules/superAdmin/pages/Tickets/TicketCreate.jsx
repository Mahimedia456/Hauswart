// TicketCreate.jsx — Final UI-Correct Version
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketCreate() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "Corrective",
    category: "",
    requestedBy: "Tenant",
    priority: "Low",
    source: "Mobile App",
    organization: "",
    floor: "",
    property: "",
    unit: "",
    asset: "",
    assignTo: "",
    userPicker: "",
    expectedDate: "",
    notify: true,
    description: "",
    notes: "",
  });

  const update = (key, value) => setForm({ ...form, [key]: value });

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[#1c150d] text-4xl font-black">
            {dict.ticketCreate}
          </h1>
          <p className="text-[#9c7649] mt-1">{dict.ticketCreateDesc}</p>
        </div>

        <button
          onClick={() => navigate("/super-admin/tickets")}
          className="flex items-center gap-2 text-gray-500 hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.backToTickets}
        </button>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-8 rounded-lg shadow-subtle">
        <div className="flex flex-col gap-10">

          {/* ============================ */}
          {/* SECTION: Ticket Information */}
          {/* ============================ */}
          <SectionTitle title={dict.ticketInfo} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label={dict.ticketTitle}
              placeholder="Short summary of the issue"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />

            <Select
              label={dict.ticketType}
              value={form.type}
              onChange={(e) => update("type", e.target.value)}
              options={["Corrective", "Preventive", "Inspection", "Tenant Request", "Emergency"]}
            />

            <Select
              label={dict.category}
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              options={["Electrical", "HVAC", "Plumbing", "Cleaning", "Safety"]}
            />

            <Select
              label={dict.requestedBy}
              value={form.requestedBy}
              onChange={(e) => update("requestedBy", e.target.value)}
              options={["Tenant", "Facility Manager", "Caretaker", "Admin"]}
            />

            <Select
              label={dict.priority}
              value={form.priority}
              onChange={(e) => update("priority", e.target.value)}
              options={["Low", "Medium", "High", "Critical"]}
            />

            <Select
              label={dict.sourceOfRequest}
              value={form.source}
              onChange={(e) => update("source", e.target.value)}
              options={["Mobile App", "Web Panel", "Email", "Auto-generated", "Admin Created"]}
            />
          </div>

          {/* ============================ */}
          {/* SECTION: Location Details */}
          {/* ============================ */}
          <SectionTitle title={dict.locationDetails} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Select
              label={dict.organization}
              value={form.organization}
              onChange={(e) => update("organization", e.target.value)}
              options={["Sunrise Towers LLC", "Metro Properties"]}
            />

            <Select
              label={dict.floor}
              value={form.floor}
              onChange={(e) => update("floor", e.target.value)}
              options={["Ground", "1", "2", "3"]}
            />

            <Select
              label={dict.property}
              placeholder="Select an organization first"
              value={form.property}
              onChange={(e) => update("property", e.target.value)}
              options={["Building A", "Building B", "Downtown Plaza"]}
            />

            <Select
              label={dict.unitRoom}
              value={form.unit}
              onChange={(e) => update("unit", e.target.value)}
              options={["Unit 403", "Unit 201", "Unit 101"]}
            />

            <Select
              label={dict.asset}
              value={form.asset}
              onChange={(e) => update("asset", e.target.value)}
              options={["HVAC AC", "Water Pump", "Fire Alarm"]}
            />

            {/* ADDRESS */}
            <div className="col-span-1 md:col-span-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">{dict.address}</span>
                <input
                  readOnly
                  className="form-field text-gray-500"
                  value="Auto-populated"
                />
              </label>
            </div>
          </div>

          {/* ============================ */}
          {/* SECTION: Assignment */}
          {/* ============================ */}
          <SectionTitle title={dict.assignment} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Select
              label={dict.assignTo}
              value={form.assignTo}
              onChange={(e) => update("assignTo", e.target.value)}
              options={["Facility Manager", "Caretaker", "Technician", "Service Provider"]}
            />

            <Input
              label={dict.userPicker}
              placeholder={dict.searchUser}
              value={form.userPicker}
              onChange={(e) => update("userPicker", e.target.value)}
            />

            <Input
              label={dict.expectedCompletion}
              type="date"
              value={form.expectedDate}
              onChange={(e) => update("expectedDate", e.target.value)}
            />

            <label className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                checked={form.notify}
                onChange={(e) => update("notify", e.target.checked)}
                className="form-checkbox text-brand-orange"
              />
              <span className="text-sm">{dict.notifyUser}</span>
            </label>
          </div>

          {/* ============================ */}
          {/* SECTION: Description */}
          {/* ============================ */}
          <SectionTitle title={dict.descriptionNotes} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextArea
              label={dict.description}
              value={form.description}
              placeholder="Describe the issue in detail..."
              onChange={(e) => update("description", e.target.value)}
            />

            <TextArea
              label={dict.internalNotes}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* STICKY FOOTER */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm mt-6 p-4 -mx-8 border-t flex justify-between items-center">
        <button
          onClick={() => navigate("/super-admin/tickets")}
          className="px-4 h-10 rounded-lg text-sm font-bold bg-gray-100"
        >
          {dict.cancel}
        </button>

        <button
          onClick={() => console.log(form)}
          className="px-6 h-10 rounded-lg text-sm font-bold bg-[#F38B14] bg-brand-orange text-white"
        >
          {dict.createTicketsButton}
        </button>
      </div>
    </div>
  );
}

/* ============ COMPONENTS =============== */

function SectionTitle({ title }) {
  return <h3 className="text-lg font-bold text-[#1c150d]">{title}</h3>;
}

function Input({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[#1c150d]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-field"
      />
    </label>
  );
}

function Select({ label, value, onChange, options, placeholder }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[#1c150d]">{label}</span>
      <select
        value={value}
        onChange={onChange}
        className="form-field"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <label className="flex flex-col gap-2 col-span-1 md:col-span-2">
      <span className="text-sm font-medium text-[#1c150d]">{label}</span>
      <textarea
        value={value}
        rows={5}
        placeholder={placeholder}
        onChange={onChange}
        className="form-field"
      />
    </label>
  );
}
