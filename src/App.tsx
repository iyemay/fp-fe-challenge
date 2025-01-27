import React from 'react';
import {Trans, useTranslation} from "react-i18next";

import './App.css';

import './i18n/config';

function App() {
  const { t, i18n } = useTranslation();
  const count = 3;
  
  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="App">
      
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Español</button>
      
      <p>{t('title', {name: 'John'})}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{count}} unread message.
      </Trans>
    </div>
  );
}

export default App;
