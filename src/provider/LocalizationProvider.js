import React from 'react';
import { useTranslation } from 'react-i18next';
import LocalizationContext from "../context/LocalizationContext";

const LocalizationProvider = (props) => {

  const { t, i18n } = useTranslation();
  const { children } = props;

  return (
    <LocalizationContext.Provider value={{ t, i18n }}>
      {children}
    </LocalizationContext.Provider>
  )

}

export default LocalizationProvider;

/**
 * Check this https://react.i18next.com/latest/i18nextprovider
 *
 * When to use?
 * You will only need to use the provider in scenarios for SSR (ServerSideRendering) or
 * if you need to support multiple i18next instances - eg. if you provide a component library.
 */
