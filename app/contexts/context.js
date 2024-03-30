"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useLang from "../hooks/useLang";

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  // const {prefLang} = useLang()
  // const [language, setLanguage] = useState(prefLang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    const getPreferredLanguage = () => {
      if (typeof navigator !== "undefined" && navigator.language) {
        return navigator.language;
      } else {
        return "en";
      }
    };

    let browserLang = getPreferredLanguage();
    setLanguage(browserLang);
  }, []);

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
