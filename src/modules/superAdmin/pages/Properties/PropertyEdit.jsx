// src/modules/superAdmin/pages/Properties/PropertyEdit.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function PropertyEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "Sunset Residency Tower A",
    floors: 25,
    units: 150,
  });

  const updateField = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{dict.action_edit} Property</h1>

      <div className="bg-white/80 border rounded-2xl p-6 shadow">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{dict.label_floors}</label>
            <input
              name="floors"
              value={form.floors}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">{dict.label_units}</label>
            <input
              name="units"
              value={form.units}
              onChange={updateField}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border"
          >
            {dict.action_cancel}
          </button>

          <button className="px-5 py-2 bg-[#F38B14] text-white rounded-lg">
            {dict.action_edit}
          </button>
        </div>

      </div>
    </div>
  );
}
