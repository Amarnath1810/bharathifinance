import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import Logo from '../../images/logo.jpg';

const { Title } = Typography;

function Contact() {

    const onFinish = (values) => {
        const { name, contact, loan } = values;
        const message = `Name: ${name}%0AContact: ${contact}%0ALoan Required: ${loan}`;
        window.open(`https://wa.me/917207420906?text=${message}`, '_blank'   )
      };
   
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
          maxWidth: 400,
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
          <span style={{ color: '#222' }}>Get in </span>
          <span style={{ color: '#d4af37' }}>Touch</span>
        </Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: 24, textAlign: 'left' }}
        >
          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Name</span>}
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input size="large" placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Contact</span>}
            name="contact"
            rules={[{ required: true, message: 'Please enter your contact number' }]}
          >
            <Input size="large" placeholder="Contact Number" />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>How much loan required?</span>}
            name="loan"
            rules={[{ required: true, message: 'Please enter loan amount' }]}
          >
            <Input size="large" placeholder="Loan Amount" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #ff8008 0%, #d4af37 100%)',
                border: 'none',
                fontWeight: 'bold',
                letterSpacing: 1,
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <style>
          {`
            .ant-form-item-explain-error {
              text-align: left !important;
            }
          `}
        </style>
      </Card>
    </div>
  );
}

export default Contact;