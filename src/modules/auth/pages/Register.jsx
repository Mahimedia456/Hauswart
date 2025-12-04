// src/modules/auth/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

function Input({ label, placeholder }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
      {label}
      <input
        placeholder={placeholder}
        className="
          h-11 px-4 rounded-xl bg-white/80 
          border border-slate-300 outline-none
          placeholder:text-slate-400
          focus:ring-2 focus:ring-[#F38B14]
        "
      />
    </label>
  );
}

function PasswordInput({ label, placeholder, show, toggle }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
      {label}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="
            w-full h-11 pl-4 pr-10 rounded-xl bg-white/80
            border border-slate-300 outline-none 
            placeholder:text-slate-400
            focus:ring-2 focus:ring-[#F38B14]
          "
        />
        <span
          onClick={toggle}
          className="material-symbols-outlined absolute right-3 top-3 cursor-pointer text-slate-500"
        >
          {show ? "visibility" : "visibility_off"}
        </span>
      </div>
    </label>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-[#f5f5f5] font-display">

      <div className="
        w-full max-w-md p-10 rounded-2xl
        bg-white/70 backdrop-blur-xl
        border border-slate-200 
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      ">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-lg shadow-orange-300/30">
            <span className="material-symbols-outlined text-white text-3xl">home</span>
          </div>
          <span className="text-2xl font-bold text-slate-900">{dict.appName}</span>
        </div>

        <h1 className="text-2xl font-bold text-center text-slate-900">
          {dict.register_title}
        </h1>
        <p className="mt-1 mb-8 text-center text-sm text-slate-600">
          {dict.register_subtitle}
        </p>

        {/* FORM */}
        <form className="space-y-4">
          <Input label={dict.auth_fullName} placeholder={dict.auth_fullName_placeholder} />
          <Input label={dict.auth_email} placeholder={dict.auth_email_placeholder} />
          <Input label={dict.auth_phone} placeholder={dict.auth_phone_placeholder} />

          {/* Role Selection */}
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
            {dict.register_role_label}
            <select
              className="
                h-11 px-4 rounded-xl bg-white/80 border border-slate-300
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            >
              <option>{dict.role_facilityManager}</option>
              <option>{dict.role_caretaker}</option>
              <option>{dict.role_serviceProvider}</option>
              <option>{dict.role_tenant}</option>
            </select>
          </label>

          <PasswordInput
            label={dict.auth_password}
            placeholder={dict.auth_password_placeholder}
            show={showPwd}
            toggle={() => setShowPwd(!showPwd)}
          />

          <PasswordInput
            label={dict.auth_confirmPassword}
            placeholder={dict.auth_confirmPassword_placeholder}
            show={showCPwd}
            toggle={() => setShowCPwd(!showCPwd)}
          />

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" className="h-4 w-4" />
            {dict.register_terms_prefix}{" "}
            <span className="text-[#F38B14]">{dict.register_terms_link}</span>.
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="
              h-11 w-full bg-[#F38B14] text-white
              rounded-xl font-medium hover:bg-black transition
              shadow-[0_4px_10px_rgba(243,139,20,0.3)]
            "
          >
            {dict.auth_register}
          </button>

          <p className="text-center text-sm text-slate-600 mt-2">
            {dict.register_haveAccount}{" "}
            <span
              className="text-[#F38B14] underline cursor-pointer"
              onClick={() => navigate("/auth/login")}
            >
              {dict.auth_login}
            </span>
          </p>
        </form>
      </div>

      <p className="absolute bottom-6 text-xs text-slate-600">
        © 2024 {dict.appName}. {dict.footer_allRights}
      </p>
    </div>
  );
}
