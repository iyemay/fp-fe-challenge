import React from 'react';
import { Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Space } from 'antd';

interface TransactionModalProps {
  transaction: Transaction;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Space onClick={() => showLoading()}>
        <EyeOutlined />
        <p>View Details</p>
      </Space>
      <Modal
        title={<h2>Transaction details</h2>}
        footer={
          <Button type="primary" onClick={() => setOpen(false)}>
            OK
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        <h3>Transaction ID: {transaction.id}</h3>
        <h3>Sender and receiver details</h3>
        <p>Sender Number: {transaction.sender_whatsapp}</p>
        <p>Receiver Number: {transaction.receiver_whatsapp}</p>
        <h3>Breakdown of the transfer</h3>

        <p>Amount Sent ${transaction.amount_sent.toFixed(2)} USD</p>
        <p>Fees ${transaction.fees.toFixed(2)} USD</p>
        <p>Exchange rate {transaction.exchange_rate.toFixed(6)} </p>
        <p>Amount Received ${transaction.amount_received.toFixed(2)} USD</p>

        <h3>Status tracking {transaction.status}</h3>
      </Modal>
    </>
  );
};

export default TransactionModal;
