import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../assets/translate/es.json";
import en from "../assets/translate/en.json";


//TODO try charge external resources
const VERSION_POEDITOR = 1;

//Check local version with cloud version

//end TODO


const resources = {
  es: {
    translation: es
  },
  en: {
    translation: en
  }
}


i18n.use(initReactI18next).init({
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  resources,
  lng: "es",
  fallbackLng: "es",
  transEmptyNodeValue: 'i18n.empty.',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
