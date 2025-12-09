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
    type: "",
    category: "",
    requestedBy: "",
    priority: "",
    source: "",
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

  const handleSubmit = () => {
    console.log("CREATE TICKET FORM DATA:", form);
    alert("Ticket logged in console!");
  };

  return (
    <div className="p-8">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-4xl font-black">{dict.createTicket}</h1>
          <p className="text-gray-500">{dict.ticketCreateDesc}</p>
        </div>

        <button
          className="flex items-center gap-2 text-gray-500 hover:underline"
          onClick={() => navigate("/super-admin/tickets")}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.backToTickets}
        </button>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-8 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Ticket Information */}
          <SectionTitle title={dict.ticketInfo} />

          <Input label={dict.ticketTitle} value={form.title} onChange={(e) => update("title", e.target.value)} />

          <Select label={dict.ticketType} options={["Corrective","Preventive","Inspection","Tenant Request","Emergency"]}
            value={form.type} onChange={(e) => update("type", e.target.value)} />

          <Select label={dict.category} options={["Electrical","HVAC","Plumbing","Cleaning","Safety"]}
            value={form.category} onChange={(e) => update("category", e.target.value)} />

          <Select label={dict.requestedBy} options={["Tenant","Facility Manager","Caretaker","Admin"]}
            value={form.requestedBy} onChange={(e) => update("requestedBy", e.target.value)} />

          <Select label={dict.priority} options={["Low","Medium","High","Critical"]}
            value={form.priority} onChange={(e) => update("priority", e.target.value)} />

          <Select label={dict.sourceOfRequest} options={["Mobile App","Web Panel","Email","Auto-Generated"]}
            value={form.source} onChange={(e) => update("source", e.target.value)} />

          {/* Location */}
          <SectionTitle title={dict.locationDetails} />

          <Select label={dict.organization} options={["Sunrise Towers LLC","Metro Properties"]}
            value={form.organization} onChange={(e) => update("organization", e.target.value)} />

          <Select label={dict.floor} options={["Ground","1","2","3"]} value={form.floor} onChange={(e) => update("floor", e.target.value)} />

          <Select label={dict.property} options={["Building A","Building B","Downtown Plaza"]} value={form.property} onChange={(e) => update("property", e.target.value)} />

          <Select label={dict.unitRoom} options={["Unit 403","Unit 201","Unit 101"]} value={form.unit} onChange={(e) => update("unit", e.target.value)} />

          <Select label={dict.asset} options={["HVAC AC","Water Pump","Fire Alarm"]} value={form.asset} onChange={(e) => update("asset", e.target.value)} />

          {/* Assignment */}
          <SectionTitle title={dict.assignment} />

          <Select label={dict.assignTo} options={["Facility Manager","Caretaker","Technician","Service Provider"]}
            value={form.assignTo} onChange={(e) => update("assignTo", e.target.value)} />

          <Input label={dict.userPicker} placeholder={dict.searchUser}
            value={form.userPicker} onChange={(e) => update("userPicker", e.target.value)} />

          {/* Dates */}
          <Input label={dict.expectedCompletion} type="date"
            value={form.expectedDate} onChange={(e) => update("expectedDate", e.target.value)} />

          <label className="flex items-center gap-2 mt-6">
            <input type="checkbox" checked={form.notify} onChange={(e) => update("notify", e.target.checked)} />
            <span className="text-sm">{dict.notifyUser}</span>
          </label>

          {/* Description */}
          <SectionTitle title={dict.descriptionNotes} />

          <TextArea label={dict.description} value={form.description} onChange={(e) => update("description", e.target.value)} />

          <TextArea label={dict.internalNotes} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex justify-between mt-6">
        <button onClick={() => navigate("/super-admin/tickets")} className="px-4 py-2 bg-gray-200 rounded">
          {dict.cancel}
        </button>
        <button onClick={handleSubmit} className="px-6 py-2 bg-primary text-white rounded">
          {dict.createTicket}
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="col-span-2 text-lg font-bold mt-4 mb-2">{title}</h3>
  );
}

function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <input type={type} value={value} placeholder={placeholder}
        onChange={onChange}
        className="p-2 bg-gray-100 rounded border"
      />
    </label>
  );
}

function Select({ label, options, value, onChange }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <select value={value} onChange={onChange} className="p-2 bg-gray-100 rounded border">
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="flex flex-col gap-1 col-span-2">
      <span className="text-sm font-medium">{label}</span>
      <textarea rows="4" value={value} onChange={onChange}
        className="p-2 bg-gray-100 rounded border"
      />
    </label>
  );
}
