import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext({ changeLanguage: (lng: string) => {} });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
 
export const useLanguage = () => useContext(LanguageContext);
