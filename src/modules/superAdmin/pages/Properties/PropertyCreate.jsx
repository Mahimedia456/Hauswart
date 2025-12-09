import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function PropertyCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "",
    type: "",
    address: "",
    city: "",
    postal: "",
    lat: "",
    lng: "",
    size: "",
    description: "",
    floors: "",
    units: "",
    sections: "",
    utilities: "",
    fm: "",
    caretakers: "",
    serviceProviders: "",
    securityTeam: "",
    notes: "",
    documents: [],
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NEW PROPERTY:", form);
    navigate("/super-admin/properties");
  };

  return (
    <div className="space-y-6 max-w-5xl">

      {/* BACK */}
      <button
        type="button"
        onClick={() => navigate("/super-admin/properties")}
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        {dict.backToProperties}
      </button>

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{dict.createProperty}</h1>
        <p className="text-slate-500 text-sm mt-1">{dict.createPropertySubtitle}</p>
      </div>

      {/* MAIN CARD */}
      <section className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow p-6 md:p-8 space-y-10">

        {/* ---------------------- */}
        {/* SECTION 1: BASIC INFO   */}
        {/* ---------------------- */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{dict.section_propertyInfo}</h2>
          <p className="text-sm text-slate-500 mt-1">{dict.section_propertyInfo_sub}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <Label>{dict.field_propertyName}</Label>
              <Input
                placeholder={dict.placeholder_propertyName}
                value={form.name}
                onChange={handleChange("name")}
              />
            </div>

            <div>
              <Label>{dict.field_propertyType}</Label>
              <Select value={form.type} onChange={handleChange("type")}>
                <option value="">{dict.placeholder_propertyType}</option>
                <option>{dict.type_residential}</option>
                <option>{dict.type_commercial}</option>
                <option>{dict.type_industrial}</option>
                <option>{dict.type_mixed}</option>
              </Select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <Label>{dict.field_address}</Label>
              <Textarea
                rows={2}
                placeholder={dict.placeholder_address}
                value={form.address}
                onChange={handleChange("address")}
              />
            </div>

            <div>
              <Label>{dict.field_city}</Label>
              <Select value={form.city} onChange={handleChange("city")}>
                <option>{dict.placeholder_city}</option>
                <option>New York</option>
                <option>Berlin</option>
                <option>Dubai</option>
              </Select>
            </div>

            <div>
              <Label>{dict.field_postal}</Label>
              <Input
                placeholder={dict.placeholder_postal}
                value={form.postal}
                onChange={handleChange("postal")}
              />
            </div>

            <div>
              <Label>{dict.field_latitude}</Label>
              <Input
                placeholder={dict.placeholder_latitude}
                value={form.lat}
                onChange={handleChange("lat")}
              />
            </div>

            <div>
              <Label>{dict.field_longitude}</Label>
              <Input
                placeholder={dict.placeholder_longitude}
                value={form.lng}
                onChange={handleChange("lng")}
              />
            </div>

            <div className="md:col-span-2">
              <Label>{dict.field_propertySize}</Label>
              <Input
                placeholder={dict.placeholder_propertySize}
                value={form.size}
                onChange={handleChange("size")}
              />
            </div>

            <div className="md:col-span-2">
              <Label>{dict.field_description}</Label>
              <Textarea
                rows={4}
                placeholder={dict.placeholder_description}
                value={form.description}
                onChange={handleChange("description")}
              />
            </div>
          </div>
        </div>

        {/* --------------------------- */}
        {/* SECTION 2: BUILDING STRUCTURE */}
        {/* --------------------------- */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{dict.section_building}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <Label>{dict.field_floors}</Label>
              <Input value={form.floors} onChange={handleChange("floors")} />
            </div>

            <div>
              <Label>{dict.field_units}</Label>
              <Input value={form.units} onChange={handleChange("units")} />
            </div>

            <div>
              <Label>{dict.field_sections}</Label>
              <Input
                placeholder={dict.optional}
                value={form.sections}
                onChange={handleChange("sections")}
              />
            </div>

            <div>
              <Label>{dict.field_utilities}</Label>
              <Input
                placeholder={dict.optional}
                value={form.utilities}
                onChange={handleChange("utilities")}
              />
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-2">
            {dict.building_note}
          </p>
        </div>

        {/* --------------------------- */}
        {/* SECTION 3: PERSONNEL         */}
        {/* --------------------------- */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{dict.section_personnel}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <Label>{dict.field_facilityManager}</Label>
              <Select value={form.fm} onChange={handleChange("fm")}>
                <option value="">{dict.placeholder_selectFM}</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </Select>
            </div>

            <div>
              <Label>{dict.field_caretakers}</Label>
              <Input
                placeholder={dict.placeholder_selectCaretakers}
                value={form.caretakers}
                onChange={handleChange("caretakers")}
              />
            </div>

            <div>
              <Label>{dict.field_serviceProviders}</Label>
              <Input
                placeholder={dict.placeholder_selectProviders}
                value={form.serviceProviders}
                onChange={handleChange("serviceProviders")}
              />
            </div>

            <div>
              <Label>{dict.field_securityTeam}</Label>
              <Select value={form.securityTeam} onChange={handleChange("securityTeam")}>
                <option value="">{dict.placeholder_selectSecurity}</option>
                <option>SecureCorp</option>
              </Select>
            </div>

            <div className="md:col-span-2">
              <Label>{dict.field_notes}</Label>
              <Textarea
                rows={2}
                placeholder={dict.placeholder_notes}
                value={form.notes}
                onChange={handleChange("notes")}
              />
            </div>
          </div>
        </div>

        {/* --------------------------- */}
        {/* SECTION 4: DOCUMENTS         */}
        {/* --------------------------- */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {dict.section_documents}{" "}
            <span className="font-normal text-slate-500">({dict.optional})</span>
          </h2>

          <div className="mt-4 border-2 border-dashed rounded-xl p-6 text-center text-slate-500">
            <span className="material-symbols-outlined text-4xl mb-3">upload_file</span>

            <p className="text-sm">
              <strong className="text-[#F38B14] cursor-pointer">{dict.uploadFile}</strong>{" "}
              {dict.orDragDrop}
            </p>
            <p className="text-xs mt-1">{dict.fileLimit}</p>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={() => navigate("/super-admin/properties")}
          className="text-sm text-slate-500 hover:text-slate-900"
        >
          {dict.cancel}
        </button>

        <button
          type="submit"
          onClick={handleSubmit}
          className="px-6 py-2.5 rounded-lg bg-[#F38B14] text-white text-sm font-medium hover:bg-black"
        >
          {dict.saveProperty}
        </button>
      </div>
    </div>
  );
}

/* SHARED INPUT COMPONENTS */
function Label({ children }) {
  return <label className="block text-sm font-medium text-slate-700 mb-1">{children}</label>;
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full h-11 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/70 outline-none"
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full h-11 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/70 outline-none"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F38B14]/70 outline-none resize-y"
    />
  );
}
