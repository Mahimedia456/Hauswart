// src/modules/superAdmin/pages/Tickets/EditTicket.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function EditTicket() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  // Dummy initial ticket — replace later with API
  const [ticket, setTicket] = useState({
    id,
    title: "Leaky faucet in Apt 301 bathroom",
    type: "Maintenance Request",
    category: "Plumbing",
    requestedBy: "Jane Doe (Tenant)",
    priority: "High",
    source: "Tenant Portal",

    organization: "Starlight Properties Inc.",
    property: "The Grand Central Apartments",
    floor: "3rd Floor",
    unit: "Apt 301",
    address: "123 Main Street, Metropolis, NY 10001",

    assignedRole: "Technician",
    assignedUser: "John Smith",
    assignedUserAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSNeWKMrorxrV-6lFFnOk4OQeNDo9v-j5SlUVahpklUZQwoCFMUKy1WRPxzAOFPbU0QTD8mTivxHSV19tYZHj-1WZ5tzBdH_zZVoHc9kO1uDmd7gHMIMMAbOpZ5XLLm-U2eBfzHqH2yriKByQ3M490bdxA2WsXAiZOjTIUVYorEb9cytsQBoFhVdFNM-I9akPdFgwV2dVrYbl03P_CStCrB6_G10jymqEpTb6qLOc1IF4IKAaZ_OZI2w_fWtkvhlvT6xLqMIYWwIY",
    expectedCompletion: "2024-08-15",

    description:
      "The faucet in the main bathroom of apartment 301 has been dripping constantly for the past two days. Tenant reports it's getting worse.",
    internalNotes: "",
  });

  const updateField = (key, value) => {
    setTicket((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("UPDATED TICKET:", ticket);
  };

  const handleCloseTicket = () => {
    console.log("CLOSE TICKET:", ticket.id);
  };

  return (
    <div className="p-6 lg:p-8 w-full">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-3xl font-bold">Edit Ticket #{id}</p>
          <p className="text-gray-500">Update ticket information and assignment.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/super-admin/tickets/${id}`)}
            className="flex items-center gap-2 px-4 h-10 rounded-lg bg-gray-200/50 text-sm hover:bg-gray-200"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Ticket
          </button>

          <button className="flex h-10 items-center gap-2 rounded-lg bg-blue-100 px-4 text-blue-800">
            Open <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        {/* SECTION 1 — TICKET INFO */}
        <Section title="Ticket Information" id={id}>
          <TwoCol>
            <Field label="Ticket Title*" value={ticket.title} onChange={(v) => updateField("title", v)} />

            <Field label="Ticket Type" value={ticket.type} onChange={(v) => updateField("type", v)} />

            <Field label="Category*" value={ticket.category} onChange={(v) => updateField("category", v)} />

            <Field label="Requested By" value={ticket.requestedBy} onChange={(v) => updateField("requestedBy", v)} />

            <Field label="Priority*" value={ticket.priority} onChange={(v) => updateField("priority", v)} />

            <Field
              label="Source of Request"
              value={ticket.source}
              disabled
            />
          </TwoCol>
        </Section>

        {/* SECTION 2 — LOCATION */}
        <Section title="Location Details">
          <TwoCol>
            <Field label="Organization" value={ticket.organization} disabled />
            <Field label="Floor" value={ticket.floor} onChange={(v) => updateField("floor", v)} />

            <Field label="Property" value={ticket.property} disabled />
            <Field label="Unit / Room" value={ticket.unit} onChange={(v) => updateField("unit", v)} />

            <div className="md:col-span-2">
              <Field label="Address" value={ticket.address} disabled />
            </div>
          </TwoCol>
        </Section>

        {/* SECTION 3 — ASSIGNMENT */}
        <Section title="Assignment">
          <TwoCol>
            <Field
              label="Assign To"
              value={ticket.assignedRole}
              onChange={(v) => updateField("assignedRole", v)}
            />

            <UserPicker ticket={ticket} updateField={updateField} />

            <Field
              label="Expected Completion Date"
              type="date"
              value={ticket.expectedCompletion}
              onChange={(v) => updateField("expectedCompletion", v)}
            />

            <Checkbox
              label="Notify User"
              checked={true}
            />
          </TwoCol>
        </Section>

        {/* SECTION 4 — DESCRIPTION */}
        <Section title="Description & Internal Notes">
          <TwoCol>
            <Textarea
              label="Description*"
              value={ticket.description}
              onChange={(v) => updateField("description", v)}
            />

            <Textarea
              label="Internal Notes"
              value={ticket.internalNotes}
              onChange={(v) => updateField("internalNotes", v)}
              placeholder="Add internal notes..."
            />
          </TwoCol>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-black px-4 py-2"
          >
            Cancel Changes
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCloseTicket}
              className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
            >
              Close Ticket
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-black"
            >
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------------------------------- */
/* COMPONENT HELPERS */
/* ----------------------------------------- */

function Section({ title, id, children }) {
  return (
    <div className="border-b border-gray-200 pb-8 mb-8">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {id && <span className="text-gray-400 text-sm">ID: #{id}</span>}
      </div>
      {children}
    </div>
  );
}

function TwoCol({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

function Field({ label, value, onChange, disabled, type = "text" }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={`h-11 rounded-lg text-sm px-3 border ${
          disabled
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-50 border-gray-300 focus:ring-2 focus:ring-primary/50"
        }`}
      />
    </label>
  );
}

function Textarea({ label, value, onChange, placeholder }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <textarea
        rows={5}
        className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:ring-2 focus:ring-primary/50"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  );
}

function Checkbox({ label, checked }) {
  return (
    <div className="flex items-center gap-2 mt-6">
      <input type="checkbox" defaultChecked={checked} className="rounded text-primary" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function UserPicker({ ticket, updateField }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">User Picker</span>
      <div className="h-11 px-3 flex items-center gap-2 rounded-lg border bg-gray-50 border-gray-300">
        <img src={ticket.assignedUserAvatar} className="size-6 rounded-full" />
        <span>{ticket.assignedUser}</span>
      </div>
    </label>
  );
}
