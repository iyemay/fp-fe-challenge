import React from 'react';

import './App.css';

import './i18n/config';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import TransactionList from './components/Transactions/TransactionList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App" style={{ margin: '16px 16px 0 16px' }}>
      <QueryClientProvider client={queryClient}>
        <LanguageSwitcher />
        <TransactionList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
