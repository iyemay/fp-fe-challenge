import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'antd';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Row
      style={{ display: 'flex', justifyContent: 'end', marginBottom: '20px' }}
    >
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </Row>
  );
};

export default LanguageSwitcher;
