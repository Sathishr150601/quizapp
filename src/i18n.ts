import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lib/locales/lng/en.json";
import fr from "./lib/locales/lng/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;