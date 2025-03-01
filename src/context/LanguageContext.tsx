import React, { createContext, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { trackLanguageChange } from "@/lib/analytics";

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: { code: string; name: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    trackLanguageChange(lang);

    // Set RTL direction for Arabic
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.classList.remove("rtl");
    }
  };

  // Initialize language from localStorage or browser settings
  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (
      storedLang &&
      availableLanguages.some((lang) => lang.code === storedLang)
    ) {
      i18n.changeLanguage(storedLang);

      // Set initial RTL direction for Arabic
      if (storedLang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.classList.add("rtl");
      } else {
        document.documentElement.dir = "ltr";
        document.documentElement.classList.remove("rtl");
      }
    }
  }, [i18n]);

  return (
    <LanguageContext.Provider
      value={{
        language: i18n.language,
        changeLanguage,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
