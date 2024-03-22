import { it } from "@/public/strings/it/string";
import { en } from "@/public/strings/en/string";

const useLang = (selectedLanguage) => {
  let lang;
  const getPreferredLanguage = () => {
    if (typeof navigator !== "undefined" && navigator.language) {
      return navigator.language;
    } else {
      return "it-IT";
    }
  };

  const prefLang = getPreferredLanguage();
  if (selectedLanguage === "it") {
    lang = it;
  } else if (selectedLanguage === "en") {
    lang = en;
  } else if (prefLang === "it-IT") {
    lang = it;
  } else {
    lang = en;
  }

  return { lang };
};

export default useLang;
