// src/modules/superAdmin/pages/Tickets/EditTicket.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function EditTicket() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [ticket, setTicket] = useState({
    title: "Leaky faucet in Apt 301 bathroom",
    type: "Corrective",
    category: "Plumbing",
    requestedBy: "Tenant",
    priority: "High",
    source: "Mobile App",

    organization: "Sunrise Towers LLC",
    floor: "3",
    property: "Building B",
    unit: "Unit 301",
    address: "Auto-populated",

    assignTo: "Technician",
    userPicker: "John Smith",
    expectedDate: "2025-12-15",
    notify: true,

    description: "The faucet is leaking constantly and getting worse.",
    notes: "",
  });

  const update = (key, value) =>
    setTicket((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[#1c150d] text-4xl font-black">
            {dict.ticketEdit} #{id}
          </h1>
          <p className="text-[#9c7649] mt-1">{dict.ticketEditDesc}</p>
        </div>

        <button
          onClick={() => navigate(`/super-admin/tickets/${id}`)}
          className="flex items-center gap-2 text-gray-500 hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {dict.backToTicket}
        </button>
      </div>

      {/* FORM CARD */}
      <div className="bg-white p-8 rounded-lg shadow-subtle">
        <div className="flex flex-col gap-10">

          {/* SECTION: Ticket Info */}
          <SectionTitle title={dict.ticketInfo} />

          <Grid>
            <Input label={dict.ticketTitle} value={ticket.title} onChange={(e) => update("title", e.target.value)} />
            <Select label={dict.ticketType} value={ticket.type} onChange={(e) => update("type", e.target.value)} options={["Corrective","Preventive","Inspection","Tenant Request","Emergency"]} />

            <Select label={dict.category} value={ticket.category} onChange={(e) => update("category", e.target.value)} options={["Electrical","HVAC","Plumbing","Cleaning","Safety"]} />
            <Select label={dict.requestedBy} value={ticket.requestedBy} onChange={(e) => update("requestedBy", e.target.value)} options={["Tenant","Facility Manager","Caretaker","Admin"]} />

            <Select label={dict.priority} value={ticket.priority} onChange={(e) => update("priority", e.target.value)} options={["Low","Medium","High","Critical"]} />
            <Input label={dict.sourceOfRequest} value={ticket.source} disabled />
          </Grid>

          {/* SECTION: Location */}
          <SectionTitle title={dict.locationDetails} />

          <Grid>
            <Select label={dict.organization} value={ticket.organization} onChange={(e) => update("organization", e.target.value)} options={["Sunrise Towers LLC","Metro Properties"]} />
            <Select label={dict.floor} value={ticket.floor} onChange={(e) => update("floor", e.target.value)} options={["Ground","1","2","3","4","5"]} />

            <Select label={dict.property} value={ticket.property} onChange={(e) => update("property", e.target.value)} options={["Building A","Building B","Downtown Plaza"]} />
            <Select label={dict.unitRoom} value={ticket.unit} onChange={(e) => update("unit", e.target.value)} options={["Unit 101","Unit 201","Unit 301","Unit 403"]} />

            <FullWidth>
              <Input label={dict.address} value={ticket.address} disabled />
            </FullWidth>
          </Grid>

          {/* SECTION: Assignment */}
          <SectionTitle title={dict.assignment} />

          <Grid>
            <Select label={dict.assignTo} value={ticket.assignTo} onChange={(e) => update("assignTo", e.target.value)} options={["Facility Manager","Caretaker","Technician","Service Provider"]} />

            <Input label={dict.userPicker} placeholder={dict.searchUser} value={ticket.userPicker} onChange={(e) => update("userPicker", e.target.value)} />

            <Input type="date" label={dict.expectedCompletion} value={ticket.expectedDate} onChange={(e) => update("expectedDate", e.target.value)} />

            <label className="flex items-center gap-2 pt-6">
              <input type="checkbox" checked={ticket.notify} onChange={(e) => update("notify", e.target.checked)} className="rounded text-brand-orange" />
              <span className="text-sm">{dict.notifyUser}</span>
            </label>
          </Grid>

          {/* SECTION: Description & Notes */}
          <SectionTitle title={dict.descriptionNotes} />

          <Grid>
            <TextArea label={dict.description} value={ticket.description} onChange={(e) => update("description", e.target.value)} />
            <TextArea label={dict.internalNotes} value={ticket.notes} onChange={(e) => update("notes", e.target.value)} />
          </Grid>
        </div>
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm mt-6 p-4 -mx-8 border-t flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="px-4 h-10 rounded-lg text-sm font-bold bg-gray-100">
          {dict.cancelChanges}
        </button>

        <div className="flex items-center gap-3">
          <button className="px-4 h-10 rounded-lg text-sm font-bold border border-red-300 text-red-600 hover:bg-red-50">
            {dict.closeTicket}
          </button>

          <button className="px-6 h-10 rounded-lg text-sm font-bold bg-[#F38B14] text-white">
            {dict.saveChanges}
          </button>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */
function SectionTitle({ title }) {
  return <h3 className="text-lg font-bold text-[#1c150d]">{title}</h3>;
}

function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

function FullWidth({ children }) {
  return <div className="col-span-1 md:col-span-2">{children}</div>;
}

function Input({ label, value, onChange, placeholder, disabled, type = "text" }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-field ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <select value={value} onChange={onChange} className="form-field">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="flex flex-col gap-2 col-span-1 md:col-span-2">
      <span className="text-sm font-medium">{label}</span>
      <textarea rows={5} value={value} onChange={onChange} className="form-field" />
    </label>
  );
}
