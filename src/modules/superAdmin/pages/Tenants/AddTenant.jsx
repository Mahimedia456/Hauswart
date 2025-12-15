import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useNavigate } from "react-router-dom";

export default function AddTenant() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  return (
    <div className="p-8 w-full space-y-8">

      {/* HEADER */}
      <header className="flex items-center gap-4">
        <button
          onClick={() => navigate("/super-admin/tenants")}
          className="h-10 px-4 rounded-lg bg-slate-200 text-slate-800 font-bold hover:bg-slate-300"
        >
          ← {dict.tenants_list}
        </button>

        <div>
          <h1 className="text-4xl font-black">{dict.add_new_tenant}</h1>
          <p className="text-slate-500">{dict.add_tenant_subtitle}</p>
        </div>
      </header>

      {/* FORM CARD */}
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-10">

        {/* PERSONAL INFORMATION */}
        <section>
          <h2 className="text-[22px] font-bold mb-6">
            {dict.personal_information}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label={dict.full_name} placeholder={dict.enter_full_name} />
            <Input label={dict.email_address} placeholder={dict.enter_email} />
            <Input type="date" label={dict.date_of_birth} />
            <Input label={dict.phone_number} placeholder={dict.enter_phone} />

            <Select
              label={dict.gender}
              options={[dict.male, dict.female, dict.other]}
            />

            <Input
              label={dict.secondary_phone_optional}
              placeholder={dict.enter_secondary_phone}
            />

            <Input
              label={dict.national_id}
              placeholder={dict.enter_national_id}
            />

            <Input
              label={dict.emergency_contact_name}
              placeholder={dict.enter_contact_name}
            />

            <div className="md:col-start-2">
              <Input
                label={dict.emergency_contact_phone}
                placeholder={dict.enter_contact_phone}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* TENANCY DETAILS */}
        <section>
          <h2 className="text-[22px] font-bold mb-6">
            {dict.tenancy_details}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label={dict.tenant_type}
              options={[dict.primary, dict.co_tenant, dict.family_member]}
            />

            <Input type="date" label={dict.lease_start_date} />

            <Select
              label={dict.account_status}
              options={[dict.active, dict.pending, dict.suspended]}
            />

            <Input type="date" label={dict.lease_end_date} />

            <Input type="date" label={dict.move_in_date} />

            <Input
              label={dict.rent_amount_optional}
              placeholder={dict.enter_amount}
            />

            <Input type="date" label={dict.move_out_date_optional} />

            <Input
              label={dict.deposit_amount_optional}
              placeholder={dict.enter_amount}
            />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            {dict.lease_helper_text}
          </p>
        </section>

        <Divider />

        {/* PROPERTY ASSIGNMENT */}
        <section>
          <h2 className="text-[22px] font-bold mb-6">
            {dict.property_assignment}
            <span className="text-base font-normal text-slate-500">
              {" "}({dict.optional})
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Select label={dict.select_organization} options={["Org A", "Org B"]} />
            <Select label={dict.select_property} options={["Property 1", "Property 2"]} />
            <Select label={dict.select_unit} options={["Unit 101", "Unit 102"]} />
          </div>

          <div className="bg-slate-50 p-4 rounded-lg flex flex-wrap gap-6 text-sm">
            <Info label={dict.floor} value="1" />
            <Info label={dict.building} value="A" />
            <Info label={dict.block} value={dict.north} />
            <Info label={dict.unit_type} value="2BHK" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input type="checkbox" className="h-5 w-5 rounded text-primary" />
            <p className="text-sm">{dict.assign_primary_responsible}</p>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            {dict.assign_later_note}
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="sticky bottom-0 bg-white p-4 border-t flex justify-between">
        <button
          onClick={() => navigate("/super-admin/tenants")}
          className="font-bold text-slate-600"
        >
          {dict.cancel}
        </button>

        <button className="bg-[#F38B14] text-white font-bold px-6 py-2 rounded-lg hover:bg-black">
          {dict.create_tenant}
        </button>
      </footer>
    </div>
  );
}

/* ------------------ UI HELPERS ------------------ */

function Input({ label, placeholder, type = "text" }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 px-4 rounded-lg bg-slate-100 border focus:ring-2 focus:ring-primary/50"
      />
    </label>
  );
}

function Select({ label, options }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <select className="h-12 px-4 rounded-lg bg-slate-100 border focus:ring-2 focus:ring-primary/50">
        {options.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Divider() {
  return <hr className="border-t border-slate-200" />;
}

function Info({ label, value }) {
  return (
    <span>
      <strong>{label}:</strong> {value}
    </span>
  );
}
