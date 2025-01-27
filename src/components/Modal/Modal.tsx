import React from 'react';
import { Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useTranslation } from 'react-i18next';

interface TransactionModalProps {
  transaction: Transaction;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [, setLoading] = React.useState<boolean>(true);

  const { t } = useTranslation();

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
        <p>{t('transaction.modal.details')}</p>
      </Space>
      <Modal
        title={<h2>{t('transaction.modal.title')}</h2>}
        footer={
          <Button type="primary" onClick={() => setOpen(false)}>
            OK
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        <h3>
          {t('transaction.modal.id')}: {transaction.id}
        </h3>
        <h3>{t('transaction.modal.sender_and_receiver')}</h3>
        <p>
          {t('transaction.modal.sender')}: {transaction.sender_whatsapp}
        </p>
        <p>
          {t('transaction.modal.receiver')}: {transaction.receiver_whatsapp}
        </p>
        <h3>{t('transaction.modal.transfer_breakdown')}</h3>

        <p>
          {t('transaction.modal.amount_send')}: $
          {transaction.amount_sent.toFixed(2)} USD
        </p>
        <p>
          {t('transaction.modal.fees')}: ${transaction.fees.toFixed(2)} USD
        </p>
        <p>
          {t('transaction.modal.exchange_rate')}:{' '}
          {transaction.exchange_rate.toFixed(6)}{' '}
        </p>
        <p>
          {t('transaction.modal.amount_received')}: $
          {transaction.amount_received.toFixed(2)} USD
        </p>

        <h3>
          {t('transaction.modal.transaction_status')}: {transaction.status}
        </h3>
      </Modal>
    </>
  );
};

export default TransactionModal;
