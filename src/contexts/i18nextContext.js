import React, { createContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const i18nContext = createContext();

export default function I18nContextFunction(props) {
  const {t, i18n} = useTranslation();

  return (
    <i18nContext.Provider value={{t: t, lngDetect: i18n, Trans: Trans}}>
      {props.children}
    </i18nContext.Provider>
  )
}