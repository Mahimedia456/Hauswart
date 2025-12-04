// src/modules/auth/pages/Register.jsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";
import { useState } from "react";

export default function Register() {
  const { lang } = useLanguage();
  const dict = t[lang];
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);

  return (
    <div className="
      min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100
    ">
      <div className="
        w-full max-w-md p-10 rounded-2xl
        bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl
      ">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 bg-[#F38B14] rounded-xl flex items-center justify-center shadow-orange-300/30 shadow-lg">
            <span className="material-symbols-outlined text-white text-3xl">person_add</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center">{dict.register_title}</h1>
        <p className="text-sm text-slate-600 text-center mt-2">{dict.register_subtitle}</p>

        <form className="mt-6 space-y-4">

          {/* FULL NAME */}
          <label className="text-sm font-medium block">
            {dict.auth_fullName}
            <input
              placeholder={dict.auth_fullName_placeholder}
              className="
                w-full h-11 px-4 rounded-xl mt-1
                bg-white/80 border border-slate-300 
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            />
          </label>

          {/* EMAIL */}
          <label className="text-sm font-medium block">
            {dict.auth_email}
            <input
              placeholder={dict.auth_email_placeholder}
              className="
                w-full h-11 px-4 rounded-xl mt-1
                bg-white/80 border border-slate-300 
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            />
          </label>

          {/* PHONE */}
          <label className="text-sm font-medium block">
            {dict.auth_phone}
            <input
              placeholder={dict.auth_phone_placeholder}
              className="
                w-full h-11 px-4 rounded-xl mt-1
                bg-white/80 border border-slate-300 
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            />
          </label>

          {/* ROLE */}
          <label className="text-sm font-medium block">
            {dict.register_role_label}
            <select
              className="
                w-full h-11 mt-1 px-4 rounded-xl
                bg-white/80 border border-slate-300 outline-none
                focus:ring-2 focus:ring-[#F38B14]
              "
            >
              <option>{dict.role_facilityManager}</option>
              <option>{dict.role_caretaker}</option>
              <option>{dict.role_serviceProvider}</option>
              <option>{dict.role_tenant}</option>
            </select>
          </label>

          {/* PASSWORD */}
          <label className="text-sm font-medium block">
            {dict.auth_password}
            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                placeholder={dict.auth_password_placeholder}
                className="
                  w-full h-11 pl-4 pr-12 rounded-xl mt-1
                  bg-white/80 border border-slate-300 outline-none
                  focus:ring-2 focus:ring-[#F38B14]
                "
              />
              <span
                className="material-symbols-outlined absolute right-3 top-3 cursor-pointer text-slate-500"
                onClick={() => setShowPwd(!showPwd)}
              >
                {showPwd ? "visibility" : "visibility_off"}
              </span>
            </div>
          </label>

          {/* CONFIRM PASSWORD */}
          <label className="text-sm font-medium block">
            {dict.auth_confirmPassword}
            <div className="relative">
              <input
                type={showCPwd ? "text" : "password"}
                placeholder={dict.auth_confirmPassword_placeholder}
                className="
                  w-full h-11 pl-4 pr-12 rounded-xl mt-1
                  bg-white/80 border border-slate-300 outline-none
                  focus:ring-2 focus:ring-[#F38B14]
                "
              />
              <span
                className="material-symbols-outlined absolute right-3 top-3 cursor-pointer text-slate-500"
                onClick={() => setShowCPwd(!showCPwd)}
              >
                {showCPwd ? "visibility" : "visibility_off"}
              </span>
            </div>
          </label>

          {/* TERMS */}
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" className="h-4 w-4" />
            {dict.register_terms_prefix}{" "}
            <span className="text-[#F38B14]">{dict.register_terms_link}</span>
          </label>

          {/* BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="
              w-full h-11 mt-2 rounded-xl bg-[#F38B14] 
              text-white font-medium hover:bg-black transition
              shadow-md shadow-orange-300/30
            "
          >
            {dict.auth_register}
          </button>
        </form>

        <p
          className="text-center mt-4 underline text-[#F38B14] cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          {dict.register_haveAccount}
        </p>
      </div>
    </div>
  );
}
