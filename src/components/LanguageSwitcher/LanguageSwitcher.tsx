import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Button } from 'antd';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Row
      style={{ display: 'flex', justifyContent: 'end', marginBottom: '20px' }}
    >
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('es')}>Español</Button>
    </Row>
  );
};

export default LanguageSwitcher;
