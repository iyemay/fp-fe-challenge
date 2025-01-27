import React from 'react';
import { useTransactionsData } from '../../hooks/useTransactionsData';
import TableWithSearchAndPagination from '../TableWithSearchAndPagination/TableWithSearchAndPagination';
import { transactionListColumns } from './constants';

const TransactionList = () => {
  const { data, isLoading, isError } = useTransactionsData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <TableWithSearchAndPagination<Transaction>
      data={data}
      columns={transactionListColumns}
      searchableColumns={['id', 'sender_whatsapp', 'receiver_whatsapp']}
    />
  );
};

export default TransactionList;
