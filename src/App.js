import React from 'react';

import i18n from "./locale";

import { SwitchLanguage } from './components/SwitchLanguage';
import AppFunctional from './components/AppFunctional';
import AppClass from './components/AppClass';
import Examples from './components/Example';

import './App.css'
import AppWithContext from './components/AppWithContext';
import LocalizationProvider from './provider/LocalizationProvider';

const App = () => {

  const handleChangeLang = event => i18n.changeLanguage(event.target.value);

  return <div className="main">
    <SwitchLanguage onChange={handleChangeLang}></SwitchLanguage>
    <hr />
    <AppFunctional />
    <hr />
    <AppClass />
    <hr />
    <Examples />
    <hr />
    <LocalizationProvider>
      <AppWithContext />
    </LocalizationProvider>
  </div>;
}

export default App;