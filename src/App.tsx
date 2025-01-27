import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import './App.css';

import './i18n/config';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import TransactionList from './components/Transactions/TransactionList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();
  const count = 3;

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LanguageSwitcher />

        <TransactionList />

        <p>{t('title', { name: 'John' })}</p>
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
        <Trans i18nKey="userMessagesUnread" count={count}>
          You have {{ count }} unread message.
        </Trans>
      </QueryClientProvider>
    </div>
  );
}

export default App;
