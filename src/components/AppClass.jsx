import React from "react";
import { withTranslation } from 'react-i18next';

class AppClass extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <div className="hoc_div">
        {t('app.classcomponent')}
      </div>
    )
  }

}

export default withTranslation()(AppClass);