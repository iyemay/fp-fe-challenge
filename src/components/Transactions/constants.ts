import TransactionModal from '../Modal/Modal';
import React from 'react';

import { TFunction } from 'i18next';

export const transactionListColumns = (t: TFunction) => [
  {
    title: t('transaction.table.id'),
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: t('transaction.table.sender'),
    dataIndex: 'sender_whatsapp',
    key: 'sender_whatsapp',
  },
  {
    title: t('transaction.table.receiver'),
    dataIndex: 'receiver_whatsapp',
    key: 'receiver_whatsapp',
  },
  {
    title: t('transaction.table.amount_send'),
    dataIndex: 'amount_sent',
    key: 'amount_sent',
    render: (text: number, record: Transaction) => {
      return `${record.currency_sent.symbol}${text.toFixed(2)} ${record.currency_sent.code}`;
    },
  },
  {
    title: t('transaction.table.amount_received'),
    dataIndex: 'amount_received',
    key: 'amount_received',
    render: (text: number, record: Transaction) => {
      return `$${text.toFixed(2)} ${record.currency_received.code}`;
    },
  },
  {
    title: t('transaction.table.exchange_rate'),
    dataIndex: 'exchange_rate',
    key: 'exchange_rate',
  },
  {
    title: t('transaction.table.transaction_status'),
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: t('transaction.table.date'),
    dataIndex: 'date',
    key: 'date',
    render: (text: number, record: Transaction) => {
      return record.date.toISOString();
    },
  },
  {
    title: t('transaction.table.payment_method'),
    dataIndex: 'payment_method',
    key: 'payment_method',
  },
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
    render: (_: string, record: Transaction) => {
      return React.createElement(TransactionModal, { transaction: record });
    },
  },
];
