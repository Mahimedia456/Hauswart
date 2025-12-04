// src/modules/auth/pages/Splash.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function Splash() {
  const navigate = useNavigate();
  const [canSkip, setCanSkip] = useState(false);
  const { lang } = useLanguage();
  const dict = t[lang];

  useEffect(() => {
    setTimeout(() => setCanSkip(true), 1000);
    setTimeout(() => navigate("/auth/onboarding", { replace: true }), 5000);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-[#f5f5f5] font-display">
      <div className="
        w-full max-w-sm p-10 rounded-2xl
        bg-white/70 backdrop-blur-xl border border-slate-200
        shadow-[0_8px_25px_rgba(0,0,0,0.1)]
        flex flex-col items-center
      ">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-xl shadow-orange-300/40">
            <span className="material-symbols-outlined text-white text-4xl">home</span>
          </div>
        </div>

        <span className="text-2xl font-bold text-slate-900">{dict.appName}</span>

        {/* Loader */}
        <div className="w-full mt-6 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#F38B14] animate-[loading-bar_5s_linear_forwards]" />
        </div>

        <button
          disabled={!canSkip}
          onClick={() => navigate("/auth/onboarding")}
          className={`
            mt-6 text-sm font-medium transition
            ${canSkip ? "text-[#F38B14] hover:text-black" : "text-slate-400 cursor-not-allowed"}
          `}
        >
          {canSkip ? dict.splash_skip : dict.splash_wait}
        </button>
      </div>
    </div>
  );
}
