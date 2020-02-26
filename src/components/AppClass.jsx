import React from "react";
import { withTranslation } from 'react-i18next';

class AppClass extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <div style={{ border: '1px solid red', padding: '3em' }}>
        {t('app.classcomponent')}
      </div>
    )
  }

}

export default withTranslation()(AppClass);