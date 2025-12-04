// src/modules/auth/pages/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { lang } = useLanguage();
  const dict = t[lang];

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(dict.forgot_invalidEmail);
      return;
    }
    setError("");
    navigate("/auth/verify-otp");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-[#f5f5f5] font-display">

      {/* CARD */}
      <div className="w-full max-w-md p-10 rounded-2xl
        bg-white/70 backdrop-blur-xl
        border border-slate-200 
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      ">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-lg shadow-orange-300/30">
            <span className="material-symbols-outlined text-white text-3xl">home</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-slate-900">
          {dict.forgot_title}
        </h2>
        <p className="text-center text-sm text-slate-600 mt-2">
          {dict.forgot_subtitle}
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-800">
              {dict.auth_email}
            </label>
            <input
              placeholder={dict.auth_email_placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full h-11 px-4 rounded-xl
                bg-white/80 border border-slate-300
                text-slate-900 placeholder:text-slate-400
                focus:ring-2 focus:ring-[#F38B14] outline-none
              "
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full h-11 bg-[#F38B14] text-white font-medium 
              rounded-xl hover:bg-black transition
              shadow-[0_4px_10px_rgba(243,139,20,0.3)]
            "
          >
            {dict.forgot_cta}
          </button>
        </form>

        {/* Back */}
        <p
          onClick={() => navigate("/auth/login")}
          className="text-center mt-4 text-[#F38B14] underline cursor-pointer"
        >
          {dict.auth_backToLogin}
        </p>
      </div>
    </div>
  );
}
