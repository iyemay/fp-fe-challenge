import React, { useState } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Props<T> {
  data: T[];
  columns: ColumnsType<T>;
  pageSize?: number;
}

const TableWithPagination = <T extends { id: string | number }>({
  data,
  columns,
  pageSize = 10,
}: Props<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Table<T>
      rowKey={(record) => record.id}
      columns={columns}
      dataSource={data}
      pagination={{
        current: currentPage,
        pageSize,
        total: data.length,
        onChange: handlePageChange,
      }}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default TableWithPagination;
