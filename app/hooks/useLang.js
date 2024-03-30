"use client"
import { it } from "@/public/strings/it/string";
import { en } from "@/public/strings/en/string";

const useLang = (selectedLanguage) => {
  let lang;
  let prefLang;

  if (selectedLanguage === "it-IT") {
    lang = it;
    prefLang = "it-IT";
  } else if (selectedLanguage === "en-EN" || selectedLanguage === "en" || selectedLanguage === "en-US") {
    lang = en;
    prefLang = "en-EN";
  } else{
    lang = it;
    prefLang = "it-IT";
  }

  return { lang, prefLang };
};

export default useLang;
