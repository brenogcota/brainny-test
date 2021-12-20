import React, { createContext, useReducer, useContext, useState } from "react";
import loc from '../../shared/locales'

// reducer
import { reducer } from "../reducer/locales";

const locales = {
    [0]: loc.ptBR,
    [1]: loc.en
}

console.log(locales)

const LocaleContext = createContext(locales);

export const LocaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, locales);
  const [locale, setLocale] = useState(locales[1])

  const handleLocale = (localeIndex) => {
    setLocale(locales[localeIndex])
  }

  return (
    <LocaleContext.Provider value={{ locales: state, locale, handleLocale, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useStateLocale = () => useContext(LocaleContext);