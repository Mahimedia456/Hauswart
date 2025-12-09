import { useState } from "react";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function AssignMaintenanceModal({ open, onClose, asset }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  // Dummy technicians
  const technicians = [
    { id: 1, name: "Jane Doe", role: "HVAC Specialist" },
    { id: 2, name: "John Smith", role: "Facility Manager" },
    { id: 3, name: "Alex Carter", role: "Maintenance Worker" },
  ];

  const [form, setForm] = useState({
    technicians: [],
    priority: "medium",
    scheduleDate: "",
    frequency: "",
    notes: "",
  });

  function toggleTechnician(id) {
    setForm((prev) => ({
      ...prev,
      technicians: prev.technicians.includes(id)
        ? prev.technicians.filter((t) => t !== id)
        : [...prev.technicians, id],
    }));
  }

  function handleSubmit() {
    console.log("Submit maintenance:", form);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{dict.prop_assign_title}</h2>
          <button onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          {dict.prop_assign_subtitle}
        </p>

        {/* FORM */}
        <div className="space-y-6">

          {/* Technicians */}
          <div>
            <p className="font-medium mb-2">{dict.prop_assign_technicians}</p>
            <div className="space-y-2">
              {technicians.map((t) => (
                <label key={t.id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.technicians.includes(t.id)}
                    onChange={() => toggleTechnician(t.id)}
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Priority */}
          <div>
            <p className="font-medium mb-2">{dict.prop_assign_priority}</p>

            <div className="grid grid-cols-2 gap-3">
              {["low", "medium", "high", "urgent"].map((p) => (
                <button
                  key={p}
                  onClick={() => setForm((f) => ({ ...f, priority: p }))}
                  className={`p-3 rounded-lg border font-medium 
                    ${form.priority === p ? "bg-primary text-white border-primary" : "hover:bg-gray-100"}
                  `}
                >
                  {dict[`prop_assign_priority_${p}`]}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="font-medium block mb-2">
              {dict.prop_assign_scheduleDate}
            </label>
            <input
              type="date"
              value={form.scheduleDate}
              onChange={(e) => setForm({ ...form, scheduleDate: e.target.value })}
              className="border rounded-lg p-2 w-full"
            />
          </div>

          {/* Frequency */}
          <div>
            <label className="font-medium block mb-2">
              {dict.prop_assign_frequency}
            </label>
            <select
              value={form.frequency}
              onChange={(e) => setForm({ ...form, frequency: e.target.value })}
              className="border rounded-lg p-2 w-full"
            >
              <option value="">{dict.prop_assign_select}</option>
              <option value="one_time">{dict.prop_assign_freq_oneTime}</option>
              <option value="weekly">{dict.prop_assign_freq_weekly}</option>
              <option value="monthly">{dict.prop_assign_freq_monthly}</option>
              <option value="quarterly">{dict.prop_assign_freq_quarterly}</option>
              <option value="yearly">{dict.prop_assign_freq_yearly}</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="font-medium block mb-2">
              {dict.prop_assign_notes}
            </label>
            <textarea
              rows={4}
              className="border rounded-lg w-full p-2"
              placeholder={dict.prop_assign_notes_placeholder}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          {/* Context (Unit + Floor + Property) */}
          <div className="bg-gray-50 rounded-lg p-4 text-sm">
            <p className="font-medium mb-2">{dict.prop_assign_context}</p>
            <p>{dict.prop_assign_unit}: {asset.unit}</p>
            <p>{dict.prop_assign_floor}: {asset.floor}</p>
            <p>{dict.prop_assign_property}: {asset.property}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            {dict.common_cancel}
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-primary text-white font-bold hover:bg-black"
          >
            {dict.prop_assign_submit}
          </button>
        </div>
      </div>
    </div>
  );
}
