import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { onlyUnique } from "../static/functions";
import { enVocabulary, uaVocabulary } from "./vocabulary";

export enum Language {
  Default = "en",
  English = "en",
  Ukrainian = "ua"
}

const languageList = Object.values(Language).filter(onlyUnique)

export { languageList as languageValues }


const resources = {
  en: {
    translation: enVocabulary
  },
  ua: {
    translation: uaVocabulary
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: Language.Default,
    interpolation: {
      escapeValue: false,
    },
  })

export const isUA = (): boolean => {
  return i18next.language === Language.Ukrainian
}
export const isENG = (): boolean => i18next.language === Language.English

export const changeLanguageOnUA = () => i18next.changeLanguage(Language.Ukrainian)
export const changeLanguageOnENG = () => i18next.changeLanguage(Language.English)
export const changeLanguageOn = (lang: Language) => i18next.changeLanguage(lang)

export default i18next