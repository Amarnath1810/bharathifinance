import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import Logo from '../../images/logo.jpg';

const { Title, Paragraph } = Typography;

function AddressDetails() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #fdfcfb 0%, #d4af37 100%)',
        padding: 24,
      }}
    >
      <Card
        style={{
          maxWidth: 420,
          width: '100%',
          borderRadius: 18,
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: 70, marginBottom: 16, borderRadius: 8 }}
        />
        <Title level={2} style={{ fontWeight: 'bold', marginBottom: 8 }}>
          <span style={{ color: '#222' }}>Our </span>
          <span style={{ color: '#d4af37' }}>Address</span>
        </Title>
        <Row justify="center" align="middle" style={{ marginBottom: 16 }}>
          <Col>
            <EnvironmentFilled style={{ fontSize: 36, color: '#d4af37', background: '#fffbe6', borderRadius: '50%', padding: 8, marginRight: 8 }} />
          </Col>
        </Row>
        <Paragraph style={{ fontSize: 16, color: '#333', fontWeight: 'bold', marginBottom: 16 }}>
          Bharathi Gold Loan<br />
          Tellamvari Gudem,<br />
          Near City Center,<br />
          Your City, State - 123456
        </Paragraph>
        <Row justify="center" align="middle" style={{ marginBottom: 0 }}>
          <Col>
            <PhoneFilled style={{ fontSize: 28, color: '#25D366', background: '#fffbe6', borderRadius: '50%', padding: 6, marginRight: 8 }} />
          </Col>
          <Col>
            <a
              href="https://wa.me/917207420906"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 18,
                color: '#25D366',
                fontWeight: 'bold',
                marginBottom: 0,
                marginTop: 0,
                textDecoration: 'none',
              }}
            >
              7207420906
            </a>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AddressDetails;