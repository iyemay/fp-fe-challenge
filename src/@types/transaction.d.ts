enum TransactionStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  FAILED = 'Failed',
}

enum TransactionPaymentMethod {
  BANK_DEPOSIT = 'Bank deposit',
  CASH_PICKUP = 'Cash pickup',
  MOBILE_WALLET = 'Mobile wallet',
}

interface TransactionAPIResponse {
  transaction_id: string;
  sender_whatsapp: string;
  receiver_whatsapp: string;
  amount_sent: number;
  amount_received: number;
  exchange_rate: number;
  fees: number;
  currency_sent: Currency;
  currency_received: Currency;
  status: TransactionStatus;
  payment_method: TransactionPaymentMethod;
  date: Date;
  openModal: () => void;
}

interface Transaction extends TransactionAPIResponse {
  id: string;
}
