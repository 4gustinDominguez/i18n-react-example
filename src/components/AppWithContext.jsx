import React from 'react';
import LocalizationContext from '../context/LocalizationContext';

const AppWithContext = () => {

  const { t } = React.useContext(LocalizationContext);

  return (
    <div className="hook_div">
      {t('appWithContext')}
    </div >)

}

export default AppWithContext;
