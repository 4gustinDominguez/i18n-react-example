import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../assets/translate/es.json";
import en from "../assets/translate/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es
    },
    en: {
      translation: en
    }
  },
  lng: "es",
  fallbackLng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
