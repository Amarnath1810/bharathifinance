import React from 'react';
import { Button, Typography, Card } from 'antd';
import { Outlet } from 'react-router-dom';
import logo  from  '../../images/kiddy.png'

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 48px)',
        background: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
      }}
    >
      <Card
        style={{
          maxWidth: 700,
          width: '100%',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginTop: 48,
        }}
      >
        <img
          src={logo}
          alt="Kitty Bank"
          style={{ width: 180, marginBottom: 24 }}
        />
        <Title level={1} style={{ color: '#ff8008', marginBottom: 16 }}>
          Bharathi Gold Loan
        </Title>
        <Paragraph style={{ fontSize: 18, color: '#333', marginBottom: 32 }}>
          Unlock the value of your gold with <b>Bharathi Gold Loan</b>! Get
          instant loans at attractive interest rates, minimal paperwork, and
          maximum security for your gold assets. Trusted by thousands, we make
          your financial needs easy and hassle-free.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          style={{
            background: 'linear-gradient(90deg, #ff8008 0%, #ffc837 100%)',
            border: 'none',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
          href="/contact"
        >
          Get in Touch
        </Button>
      </Card>
      <Outlet />
    </div>
  );
}

export default Home;