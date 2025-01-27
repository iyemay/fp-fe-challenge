import React, { useState } from 'react';
import { useTransactionsData } from '../../hooks/useTransactionsData';
import TableWithSearchAndPagination from '../TableWithPagination/TableWithPagination';
import TransactionSearchBar from './TransactionSearchBar';
import { transactionListColumns } from './constants';
import { useDebounce } from '../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';

const TransactionList = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useTransactionsData();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const [dateRange, setDateRange] = useState<[string | null, string | null]>([
    null,
    null,
  ]);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const debouncedSearch = useDebounce(searchQuery, 500);

  // Synchronize the debounced value with a local state
  React.useEffect(() => {
    setDebouncedSearchQuery(debouncedSearch);
  }, [debouncedSearch]);

  const statusOptions = [
    { value: 'Completed', label: 'Completed' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Failed', label: 'Failed' },
    { value: 'In Progress', label: 'In Progress' },
  ];

  const filteredData = (data || []).filter((item: Transaction) => {
    const matchesSearchQuery =
      !debouncedSearchQuery ||
      ['id', 'sender_whatsapp', 'receiver_whatsapp'].some((key) =>
        item[key as keyof Transaction]
          ?.toString()
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase())
      );

    const matchesStatusFilter = !statusFilter || item.status === statusFilter;

    const matchesDateRange =
      (!dateRange[0] && !dateRange[1]) ||
      (dateRange[0] &&
        dateRange[1] &&
        new Date(item.date) >= new Date(dateRange[0]) &&
        new Date(item.date) <= new Date(dateRange[1]));

    return matchesSearchQuery && matchesStatusFilter && matchesDateRange;
  });

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <TransactionSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onDebouncedSearchChange={setDebouncedSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        statusOptions={statusOptions}
      />

      <TableWithSearchAndPagination<Transaction>
        data={filteredData}
        columns={transactionListColumns(t)}
      />
    </div>
  );
};

export default TransactionList;
