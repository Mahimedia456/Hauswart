import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function PropertyEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  // Pre-fill with sample data (will later come from API)
  const [form, setForm] = useState({
    propertyName: "Sunset Residency Tower A",
    propertyType: "Residential",
    street: "125 Sunset Blvd",
    city: "New York",
    zip: "10001",
    lat: "40.7128",
    long: "-74.0060",
    size: "155,000",
    description: "Premium tower near central park.",
    floors: 25,
    units: 150,
    buildingSections: "A, B",
    utilityAreas: "Basement, Mechanical Rooms",
    manager: "John Doe",
    caretakers: ["Alex Ray", "Mila Jensen"],
    serviceProviders: "",
    securityTeam: "",
    personnelNotes: "",
    documents: [],
  });

  const updateField = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  return (
    <div className="p-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        ← {dict.prop_backToList}
      </button>

      {/* HEADER */}
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-semibold">{dict.prop_edit_title}</h1>
        <p className="text-gray-500">{dict.prop_edit_subtitle}</p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-12">

        {/* --------------------------- */}
        {/* SECTION 1: PROPERTY INFO     */}
        {/* --------------------------- */}
        <section>
          <h2 className="text-lg font-semibold">{dict.prop_info}</h2>
          <p className="text-sm text-gray-500 mt-1">{dict.prop_info_sub}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Property Name */}
            <div>
              <label className="block text-sm font-medium">{dict.prop_name}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.propertyName}
                onChange={(e) => updateField("propertyName", e.target.value)}
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium">{dict.prop_type}</label>
              <select
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.propertyType}
                onChange={(e) => updateField("propertyType", e.target.value)}
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Mixed Use</option>
              </select>
            </div>

            {/* Street */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">{dict.prop_street}</label>
              <textarea
                rows={2}
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.street}
                onChange={(e) => updateField("street", e.target.value)}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium">{dict.prop_city}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
            </div>

            {/* ZIP */}
            <div>
              <label className="block text-sm font-medium">{dict.prop_zip}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.zip}
                onChange={(e) => updateField("zip", e.target.value)}
              />
            </div>

            {/* LAT / LONG */}
            <div>
              <label className="block text-sm font-medium">{dict.prop_lat}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.lat}
                onChange={(e) => updateField("lat", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{dict.prop_long}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.long}
                onChange={(e) => updateField("long", e.target.value)}
              />
            </div>

            {/* SIZE */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">{dict.prop_size}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.size}
                onChange={(e) => updateField("size", e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">{dict.prop_desc}</label>
              <textarea
                rows={4}
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* --------------------------- */}
        {/* SECTION 2: BUILDING STRUCTURE */}
        {/* --------------------------- */}
        <section>
          <h2 className="text-lg font-semibold">{dict.prop_structure}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block text-sm font-medium">{dict.prop_floors}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.floors}
                onChange={(e) => updateField("floors", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{dict.prop_units}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.units}
                onChange={(e) => updateField("units", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                {dict.prop_sections}
              </label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.buildingSections}
                onChange={(e) => updateField("buildingSections", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                {dict.prop_utilities}
              </label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.utilityAreas}
                onChange={(e) => updateField("utilityAreas", e.target.value)}
              />
            </div>

          </div>
        </section>

        {/* --------------------------- */}
        {/* SECTION 3: PERSONNEL        */}
        {/* --------------------------- */}
        <section>
          <h2 className="text-lg font-semibold">{dict.prop_personnel}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block text-sm font-medium">{dict.prop_manager}</label>
              <select
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.manager}
                onChange={(e) => updateField("manager", e.target.value)}
              >
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">{dict.prop_caretakers}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.caretakers.join(", ")}
                onChange={(e) =>
                  updateField("caretakers", e.target.value.split(","))
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{dict.prop_providers}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.serviceProviders}
                onChange={(e) => updateField("serviceProviders", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{dict.prop_security}</label>
              <input
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.securityTeam}
                onChange={(e) => updateField("securityTeam", e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">{dict.prop_notes}</label>
              <textarea
                rows={2}
                className="mt-1 w-full bg-gray-100 rounded-lg p-4 text-sm"
                value={form.personnelNotes}
                onChange={(e) => updateField("personnelNotes", e.target.value)}
              />
            </div>

          </div>
        </section>

        {/* ACTION BAR */}
        <div className="pt-6 border-t flex justify-end gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            {dict.action_cancel}
          </button>

          <button className="px-6 py-3 text-sm font-semibold rounded-lg bg-[#F38B14] text-white">
            {dict.prop_save_changes}
          </button>
        </div>
      </div>
    </div>
  );
}
