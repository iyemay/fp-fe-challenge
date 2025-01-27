import React from 'react';
import {Trans, useTranslation} from "react-i18next";

import './App.css';

import './i18n/config';
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
  const { t } = useTranslation();
  const count = 3;
  
  return (
    <div className="App">
      
      <LanguageSwitcher />
      
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
