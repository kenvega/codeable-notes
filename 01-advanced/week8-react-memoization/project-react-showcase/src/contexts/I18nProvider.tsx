import { ReactNode, createContext, useState } from "react";

import locales from "../locales/locales";

export const I18nContext = createContext({
  language: "en",
  handleLanguageChange: (langCode) => {},
  t: (key: string) => key,
});

type I18nProviderProps = {
  children: ReactNode;
};

const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
  };

  // return the translation related to that key or if no translation exists return the key itself
  const t = (key) => {
    return locales[language][key] || key;
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        handleLanguageChange,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
