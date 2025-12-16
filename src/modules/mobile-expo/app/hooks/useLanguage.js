import { useState } from "react";
import en from "../constants/i18n/en";
import de from "../constants/i18n/de";

const translations = { en, de };

export default function useLanguage() {
  const [lang, setLang] = useState("en");

  return {
    lang,
    setLang,
    t: translations[lang],
  };
}
