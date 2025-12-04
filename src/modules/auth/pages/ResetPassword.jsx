// src/modules/auth/pages/VerifyOTP.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { lang } = useLanguage();
  const dict = t[lang];

  const handleChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const copy = [...otp];
    copy[idx] = val;
    setOtp(copy);
  };

  const submit = () => {
    if (otp.join("").length !== 6) return alert(dict.otp_invalid);
    navigate("/auth/reset-password");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-[#f5f5f5] font-display">
      <div className="
        w-full max-w-md p-10 rounded-2xl
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

        <h2 className="text-2xl font-bold text-center text-slate-900">{dict.otp_title}</h2>
        <p className="text-center text-sm text-slate-600 mt-2">{dict.otp_subtitle}</p>

        {/* OTP inputs */}
        <div className="flex justify-center gap-3 mt-6">
          {otp.map((d, i) => (
            <input
              key={i}
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(e.target.value, i)}
              className="
                w-12 h-14 text-center text-lg font-semibold rounded-xl
                bg-white/80 border border-slate-300 
                focus:ring-2 focus:ring-[#F38B14] outline-none
              "
            />
          ))}
        </div>

        {/* Submit */}
        <button
          onClick={submit}
          className="
            w-full h-11 mt-8 bg-[#F38B14] text-white 
            rounded-xl font-medium hover:bg-black transition
            shadow-[0_4px_10px_rgba(243,139,20,0.3)]
          "
        >
          {dict.otp_cta}
        </button>

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
