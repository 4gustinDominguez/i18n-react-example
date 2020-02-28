import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { useTranslation, Trans } from "react-i18next";

//TODO test component translate
const B = (props) => {
  return <b>{props.children}</b>;
}

const Examples = () => {

  const { t } = useTranslation()
  const name = "pedro"
  const count = 2

  return <div className="example_div">
    <h3>{t('example')}</h3>
    <Router>
      <B>b component</B>
      <p>
        <Trans i18nKey="form.termsAndConditions">
          He leído y acepto los <strong>strong tag, key 1</strong> <b>b tag, key 2</b> <Link to="/example">Términos y condiciones</Link> correspondientes y que legal nos ha indicado
      </Trans>
      </p>
      <p>
        <Trans i18nKey="userMessagesUnread" count={count}>
          Hello <strong title={t('nameTitle')}>{{ name }}</strong>, you have {{ count }} unread message. {{ count }} <Link to="/msgs">Go to messages</Link>.
          </Trans>
      </p>
    </Router>
  </div >;
}

export default Examples;
