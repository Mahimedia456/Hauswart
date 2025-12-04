// src/modules/auth/pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { t } from "../../../i18n/translations";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [email, setEmail] = useState("admin@mahimediasolutions.com");
  const [password, setPassword] = useState("123123123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@mahimediasolutions.com" && password === "123123123") {
      login("dummy-token", "SUPER_ADMIN");
      navigate("/super-admin", { replace: true });
      return;
    }

    alert(dict.login_invalid);
  };

  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center justify-center px-4 
        bg-[#f5f5f5] font-display
      "
    >
      {/* LOGO */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-[#F38B14] flex items-center justify-center shadow-lg shadow-orange-300/30">
          <span className="material-symbols-outlined text-white text-3xl">home</span>
        </div>

        <span className="text-2xl font-bold tracking-tight text-slate-900">
          {dict.appName}
        </span>
      </div>

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md p-10 rounded-2xl
          bg-white/70 backdrop-blur-xl
          border border-slate-200 
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        "
      >
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">{dict.login_title}</h1>
          <p className="mt-1 text-sm text-slate-600">{dict.login_subtitle}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-slate-800 mb-2 block">
            {dict.auth_email}
          </label>
          <input
            type="email"
            value={email}
            placeholder={dict.auth_email_placeholder}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full h-11 px-4 rounded-xl
              bg-white/80 border border-slate-300
              text-slate-900 placeholder:text-slate-400
              focus:ring-2 focus:ring-[#F38B14] outline-none
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-800 mb-2 block">
            {dict.auth_password}
          </label>

          <div className="flex items-center rounded-xl bg-white/80 border border-slate-300">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder={dict.auth_password_placeholder}
              onChange={(e) => setPassword(e.target.value)}
              className="
                flex-1 h-11 px-4 bg-transparent 
                text-slate-900 placeholder:text-slate-400
                outline-none
              "
            />

            <span
              className="px-3 text-slate-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full h-11 rounded-xl
            bg-[#F38B14] text-white font-medium 
            hover:bg-black transition-colors
            shadow-md shadow-orange-300/30
          "
        >
          {dict.auth_login}
        </button>

        <div className="mt-4 text-center">
          <button
            className="text-sm text-slate-600 underline"
            onClick={() => navigate("/auth/forgot-password")}
          >
            {dict.auth_forgotPassword}
          </button>
        </div>

        <div className="mt-3 text-center">
          <button
            className="text-sm text-[#F38B14] underline"
            onClick={() => navigate("/auth/register")}
          >
            {dict.auth_noAccount}
          </button>
        </div>
      </form>

      <p className="absolute bottom-6 text-xs text-slate-600">
        © 2024 {dict.appName}. {dict.footer_allRights}
      </p>
    </div>
  );
}
