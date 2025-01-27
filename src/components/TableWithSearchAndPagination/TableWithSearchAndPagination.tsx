import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { useDebounce } from '../../hooks/useDebounce';

import { ColumnsType } from 'antd/es/table';

interface TableWithSearchAndPaginationProps<T> {
  data: T[];
  columns: ColumnsType<T>; // Use Ant Design's ColumnsType
  searchableColumns: (keyof T)[]; // The columns to include in the search
  pageSize?: number;
  searchPlaceholder?: string;
}

const TableWithSearchAndPagination = <T extends { id: string | number }>({
  data,
  columns,
  searchableColumns,
  pageSize = 10,
  searchPlaceholder = 'Search...',
}: TableWithSearchAndPaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredData = data.filter((item) =>
    searchableColumns.some((column) => {
      const value = item[column];
      return (
        value && value.toString().toLowerCase().includes(debouncedSearchQuery)
      );
    })
  );

  return (
    <div>
      <Input
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: 16, width: 300 }}
      />

      <Table<T>
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current: currentPage,
          pageSize,
          total: filteredData.length,
          onChange: handlePageChange,
        }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default TableWithSearchAndPagination;
