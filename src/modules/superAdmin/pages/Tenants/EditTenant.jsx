import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTenant() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();
  const { id } = useParams();

  // 🔹 Dummy existing tenant data (for edit mode)
  const tenant = {
    fullName: "Olivia Rhye",
    email: "olivia@hauswart.com",
    dob: "1994-06-12",
    phone: "(219) 555-0114",
    secondaryPhone: "(219) 555-0199",
    gender: "Female",
    nationalId: "35202-1234567-8",
    emergencyName: "John Rhye",
    emergencyPhone: "(219) 555-0222",

    tenantType: "Primary",
    accountStatus: "Active",
    leaseStart: "2023-08-15",
    leaseEnd: "2024-08-14",
    moveIn: "2023-08-15",
    moveOut: "",
    rent: "850",
    deposit: "850",

    organization: "Org A",
    property: "Property 1",
    unit: "Unit 101",
  };

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
          <h1 className="text-4xl font-black">
            {dict.edit_tenant}
          </h1>
          <p className="text-slate-500">
            {dict.edit_tenant_subtitle} #{id}
          </p>
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
            <Input label={dict.full_name} defaultValue={tenant.fullName} />
            <Input label={dict.email_address} defaultValue={tenant.email} />
            <Input type="date" label={dict.date_of_birth} defaultValue={tenant.dob} />
            <Input label={dict.phone_number} defaultValue={tenant.phone} />

            <Select
              label={dict.gender}
              value={tenant.gender}
              options={[dict.male, dict.female, dict.other]}
            />

            <Input
              label={dict.secondary_phone_optional}
              defaultValue={tenant.secondaryPhone}
            />

            <Input
              label={dict.national_id}
              defaultValue={tenant.nationalId}
            />

            <Input
              label={dict.emergency_contact_name}
              defaultValue={tenant.emergencyName}
            />

            <div className="md:col-start-2">
              <Input
                label={dict.emergency_contact_phone}
                defaultValue={tenant.emergencyPhone}
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
              value={tenant.tenantType}
              options={[dict.primary, dict.co_tenant, dict.family_member]}
            />

            <Input type="date" label={dict.lease_start_date} defaultValue={tenant.leaseStart} />

            <Select
              label={dict.account_status}
              value={tenant.accountStatus}
              options={[dict.active, dict.pending, dict.suspended]}
            />

            <Input type="date" label={dict.lease_end_date} defaultValue={tenant.leaseEnd} />

            <Input type="date" label={dict.move_in_date} defaultValue={tenant.moveIn} />

            <Input
              label={dict.rent_amount_optional}
              defaultValue={tenant.rent}
            />

            <Input type="date" label={dict.move_out_date_optional} defaultValue={tenant.moveOut} />

            <Input
              label={dict.deposit_amount_optional}
              defaultValue={tenant.deposit}
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
            <Select label={dict.select_organization} value={tenant.organization} options={["Org A", "Org B"]} />
            <Select label={dict.select_property} value={tenant.property} options={["Property 1", "Property 2"]} />
            <Select label={dict.select_unit} value={tenant.unit} options={["Unit 101", "Unit 102"]} />
          </div>

          <div className="bg-slate-50 p-4 rounded-lg flex flex-wrap gap-6 text-sm">
            <Info label={dict.floor} value="1" />
            <Info label={dict.building} value="A" />
            <Info label={dict.block} value={dict.north} />
            <Info label={dict.unit_type} value="2BHK" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-primary" />
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
          {dict.update_tenant}
        </button>
      </footer>
    </div>
  );
}

/* ------------------ UI HELPERS ------------------ */

function Input({ label, defaultValue, type = "text" }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="h-12 px-4 rounded-lg bg-slate-100 border focus:ring-2 focus:ring-primary/50"
      />
    </label>
  );
}

function Select({ label, options, value }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium pb-2">{label}</span>
      <select
        defaultValue={value}
        className="h-12 px-4 rounded-lg bg-slate-100 border focus:ring-2 focus:ring-primary/50"
      >
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
