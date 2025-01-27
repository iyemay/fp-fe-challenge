export const transactionListColumns = [
  {
    title: 'Transaction ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: "Sender's WhatsApp number",
    dataIndex: 'sender_whatsapp',
    key: 'sender_whatsapp',
  },
  {
    title: "Receiver's WhatsApp number",
    dataIndex: 'receiver_whatsapp',
    key: 'receiver_whatsapp',
  },
  {
    title: 'Amount Sent',
    dataIndex: 'amount_sent',
    key: 'amount_sent',
    render: (text: number, record: Transaction) => {
      return `${record.currency_sent.symbol}${text.toFixed(2)} ${record.currency_sent.code}`;
    },
  },
  {
    title: 'Amount received',
    dataIndex: 'amount_received',
    key: 'amount_received',
    render: (text: number, record: Transaction) => {
      return `$${text.toFixed(2)} ${record.currency_received.code}`;
    },
  },
  {
    title: 'Exchange rate applied',
    dataIndex: 'exchange_rate',
    key: 'exchange_rate',
  },
  {
    title: 'Transaction status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date and time of transfer',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Payment method',
    dataIndex: 'payment_method',
    key: 'payment_method',
  },
];
