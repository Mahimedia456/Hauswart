// src/modules/auth/pages/VerifyOTP.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "../../../i18n/translations";
import { useLanguage } from "../../../context/LanguageContext";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const handle = (v, i) => {
    if (!/^\d?$/.test(v)) return;
    const copy = [...otp];
    copy[i] = v;
    setOtp(copy);
  };

  const submit = () => {
    if (otp.join("").length !== 6) {
      alert(dict.otp_invalid);
      return;
    }
    navigate("/auth/reset-password");
  };

  return (
    <div className="
      min-h-screen flex items-center justify-center
      bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 px-4
    ">
      <div className="
        w-full max-w-md p-10 rounded-2xl
        bg-white/60 border border-white/40
        backdrop-blur-xl shadow-xl
      ">
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 bg-[#F38B14] rounded-xl flex items-center justify-center shadow-lg shadow-orange-300/30">
            <span className="material-symbols-outlined text-white text-3xl">shield</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center">{dict.otp_title}</h2>
        <p className="text-sm text-center text-slate-600 mt-2">{dict.otp_subtitle}</p>

        <div className="flex justify-center gap-3 mt-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              maxLength={1}
              value={digit}
              onChange={(e) => handle(e.target.value, i)}
              className="
                w-12 h-14 text-center text-lg border border-slate-300 
                rounded-xl bg-white/80 outline-none
                focus:ring-2 focus:ring-[#F38B14]
              "
            />
          ))}
        </div>

        <button
          onClick={submit}
          className="
            w-full h-11 mt-8 rounded-xl bg-[#F38B14] text-white font-medium
            hover:bg-black transition shadow-md shadow-orange-300/30
          "
        >
          {dict.otp_cta}
        </button>

        <p
          className="text-center mt-4 text-[#F38B14] underline cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          {dict.auth_backToLogin}
        </p>
      </div>
    </div>
  );
}
