import { useQuery } from 'react-query';
import { fetchTransactions } from '../requests/request.api';

export const useTransactionsData = () => {
  return useQuery('transactions', async () => {
    const response = await fetchTransactions();

    return response.data.map((transaction: TransactionAPIResponse) => ({
      id: transaction.transaction_id, // Map `transaction_id` to `id`
      sender_whatsapp: transaction.sender_whatsapp,
      receiver_whatsapp: transaction.receiver_whatsapp,
      amount_sent: transaction.amount_sent,
      amount_received: transaction.amount_received,
      exchange_rate: transaction.exchange_rate,
      fees: transaction.fees,
      currency_sent: transaction.currency_sent,
      currency_received: transaction.currency_received,
      status: transaction.status,
      payment_method: transaction.payment_method,
      date: new Date(transaction.date), // Convert date to `Date` object
    }));
  });
};
