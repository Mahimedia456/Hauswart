// src/modules/auth/pages/ResetPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "../../../i18n/translations";
import { useLanguage } from "../../../context/LanguageContext";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (pwd.length < 6) return setErr(dict.reset_tooShort);
    if (pwd !== confirm) return setErr(dict.reset_mismatch);

    navigate("/auth/login");
  };

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
          <div className="h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-orange-300/30 shadow-lg">
            <span className="material-symbols-outlined text-white text-3xl">lock</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center">{dict.reset_title}</h2>
        <p className="text-sm text-center text-slate-600">{dict.reset_subtitle}</p>

        <form onSubmit={submit} className="mt-6 space-y-4">

          <label className="block text-sm font-medium">
            {dict.reset_newPwd}
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder={dict.reset_newPwd_placeholder}
              className="
                w-full h-11 px-4 mt-1 rounded-xl
                bg-white/80 border border-slate-300
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            />
          </label>

          <label className="block text-sm font-medium">
            {dict.reset_confirmPwd}
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder={dict.reset_confirmPwd_placeholder}
              className="
                w-full h-11 px-4 mt-1 rounded-xl
                bg-white/80 border border-slate-300
                outline-none focus:ring-2 focus:ring-[#F38B14]
              "
            />
          </label>

          {err && <p className="text-red-500 text-sm">{err}</p>}

          <button
            type="submit"
            className="
              w-full h-11 mt-2 rounded-xl bg-[#F38B14] text-white
              hover:bg-black transition shadow-md shadow-orange-300/30
            "
          >
            {dict.reset_cta}
          </button>
        </form>

        <p
          onClick={() => navigate("/auth/login")}
          className="text-center mt-4 underline text-[#F38B14] cursor-pointer"
        >
          {dict.auth_backToLogin}
        </p>
      </div>
    </div>
  );
}
