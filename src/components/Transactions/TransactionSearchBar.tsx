import React from 'react';
import { Input, Select, DatePicker, Row, Col } from 'antd';
import { useDebounce } from '../../hooks/useDebounce';
import './TransactionList.css';
import { useTranslation } from 'react-i18next';

const { RangePicker } = DatePicker;

interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onDebouncedSearchChange: (value: string) => void; // Callback for debounced value
  statusFilter: string | undefined;
  onStatusFilterChange: (value: string | undefined) => void;
  dateRange: [string | null, string | null];
  onDateRangeChange: (dates: [string | null, string | null]) => void;
  searchPlaceholder?: string;
  statusOptions: { value: string; label: string }[];
}

const TransactionSearchBar: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
  onDebouncedSearchChange,
  statusFilter,
  onStatusFilterChange,
  onDateRangeChange,
  statusOptions,
}) => {
  const { t } = useTranslation();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Propagate the debounced value to the parent
  React.useEffect(() => {
    onDebouncedSearchChange(debouncedSearchQuery);
  }, [debouncedSearchQuery, onDebouncedSearchChange]);

  return (
    <Row
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      <Col xs={24} md={8}>
        <Input
          placeholder={t('searchBar.search')}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Col>
      <Col xs={24} md={7}>
        <Select
          placeholder={t('searchBar.statusFilter')}
          value={statusFilter}
          onChange={(value) => onStatusFilterChange(value)}
          allowClear
          options={statusOptions}
        />
      </Col>
      <Col xs={24} md={8}>
        <RangePicker
          placeholder={[t('searchBar.startDate'), t('searchBar.endDate')]}
          onChange={(dates, dateStrings) =>
            onDateRangeChange([dateStrings[0], dateStrings[1]])
          }
        />
      </Col>
    </Row>
  );
};

export default TransactionSearchBar;
