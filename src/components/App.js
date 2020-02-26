import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../locale";
import { SwitchLanguage } from './SwitchLanguage';
import AppClass from './AppClass';

const App = () => {

  const handleChangeLang = event => i18n.changeLanguage(event.target.value);
  const { t } = useTranslation()

  return <div>
    <SwitchLanguage onChange={handleChangeLang}></SwitchLanguage>
    <hr />
    <div style={{ border: '1px solid green', padding: '3em' }}>
      {t('app.component')}
    </div>
    <hr />
    <AppClass />
  </div>;
}

export default App;
