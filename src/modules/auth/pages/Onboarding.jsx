// src/modules/auth/pages/Onboarding.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function Onboarding() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: dict.onb_slide1_title,
      body: dict.onb_slide1_body,
      bullets: [dict.onb_slide1_b1, dict.onb_slide1_b2],
    },
    {
      title: dict.onb_slide2_title,
      body: dict.onb_slide2_body,
      bullets: [dict.onb_slide2_b1, dict.onb_slide2_b2],
    },
    {
      title: dict.onb_slide3_title,
      body: dict.onb_slide3_body,
      bullets: [dict.onb_slide3_b1, dict.onb_slide3_b2],
    },
  ];

  const next = () => setStep((s) => (s < slides.length - 1 ? s + 1 : navigate("/auth/login")));
  const skip = () => navigate("/auth/login");
  const slide = slides[step];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-[#f5f5f5] font-display">

      <div className="
        w-full max-w-xl p-10 rounded-2xl
        bg-white/70 backdrop-blur-xl
        border border-slate-200 
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      ">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-md shadow-orange-300/30">
              <span className="material-symbols-outlined text-white text-3xl">home</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">{dict.appName}</span>
          </div>

          <button onClick={skip} className="text-sm text-slate-600 hover:text-black">
            {dict.onb_skip}
          </button>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F38B14] mb-2">
            {dict.onb_tagline}
          </p>

          <h1 className="text-2xl font-bold text-slate-900 mb-3">
            {slide.title}
          </h1>

          <p className="text-sm text-slate-600 mb-6">{slide.body}</p>

          <ul className="space-y-2 text-sm text-slate-600">
            {slide.bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === step ? "w-5 bg-[#F38B14]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="
              h-11 px-6 rounded-xl bg-[#F38B14]
              text-white font-medium hover:bg-black transition
              shadow-[0_4px_10px_rgba(243,139,20,0.3)]
            "
          >
            {step === slides.length - 1 ? dict.onb_getStarted : dict.onb_next}
          </button>
        </div>

      </div>
    </div>
  );
}
