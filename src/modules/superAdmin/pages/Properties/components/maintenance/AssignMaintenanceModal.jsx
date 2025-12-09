import { useLanguage } from "../../../../../../context/LanguageContext";
import { t } from "../../../../../../i18n/translations";

export default function AssignMaintenanceModal({ open, onClose, assetName }) {
  const { lang } = useLanguage();
  const dict = t[lang];

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl">

        <h2 className="text-xl font-bold mb-4">{dict.maint_assign_title}</h2>

        {/* ASSET */}
        <p className="text-sm text-gray-500 mb-1">{dict.maint_assign_asset}</p>
        <p className="font-medium mb-4">{assetName}</p>

        {/* SELECT TASK */}
        <label className="block text-sm font-medium">{dict.maint_assign_task}</label>
        <select className="w-full border p-2 rounded-lg mt-1">
          <option>Quarterly HVAC Service</option>
          <option>Smoke Detector Check</option>
          <option>Water Pump Inspection</option>
        </select>

        {/* DATE */}
        <label className="block text-sm font-medium mt-4">{dict.maint_field_nextDue}</label>
        <input type="date" className="w-full border p-2 rounded-lg mt-1" />

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={onClose}>
            {dict.action_cancel}
          </button>
          <button className="px-5 py-2 bg-[#F38B14] text-white rounded-lg font-semibold">
            {dict.maint_assign_button}
          </button>
        </div>
      </div>
    </div>
  );
}
