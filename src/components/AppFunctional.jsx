import React from 'react';
import { useTranslation } from "react-i18next";

const AppFunctional = () => {

  const { t } = useTranslation()

  return (
    < div className="hook_div" >
      {t('app.component')}
    </div >)

}

export default AppFunctional;
