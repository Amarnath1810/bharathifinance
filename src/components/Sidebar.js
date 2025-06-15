import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Drawer, Button } from 'antd';
import {
  HomeOutlined,
  DollarOutlined,
  PhoneOutlined,
  MenuOutlined,
  EnvironmentFilled
} from '@ant-design/icons';
import Logo from '../images/logo.jpg';

const { Sider } = Layout;

const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined  style={{ color: '#d4af37' }}/>,
    label: <Link to="/">Home</Link>,
    path: '/',
  },
//   {
//     key: 'price-cards',
//     icon: <DollarOutlined  style={{ color: '#d4af37' }}/>,
//     label: <Link to="/prices">Prices</Link>,
//     path: '/prices',
//   },
  {
    key: 'contact us',
    icon: <PhoneOutlined  style={{ color: '#d4af37' }} />,
    label: <Link to="/contact">Contact</Link>,
    path: '/contact',
  },
  {
    key: 'address',
    icon: <EnvironmentFilled style={{ color: '#d4af37' }} />,
    label: <Link to="/address">Address Details</Link>,
    path: '/address',
  },
];

// Map path to key for accurate selection
const pathKeyMap = {
  '/': 'home',
  '/prices': 'price-cards',
  '/contact': 'contact us',
  '/address': 'address',
};

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const selectedKey = pathKeyMap[location.pathname] || 'home';

  return (
    <>
      {/* Desktop Sidebar */}
      <Sider
        width={260}
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(145deg, #fdfcfb, #e2d1c3, #d4af37)',
          borderRight: '1px solid #d6d6d6',
          boxShadow: '2px 0 6px rgba(0, 0, 0, 0.05)',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 100,
          transition: 'all 0.3s',
          display: 'block',
        }}
        className="custom-sider"
      >
        <div
          style={{
            height: 70,
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            background: 'rgba(255, 255, 255, 0.35)',
            borderBottom: '1px solid #ccc',
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 10, borderRadius: 6 }} />
          <span style={{ fontSize: 22, fontWeight: 'bold', fontFamily: 'Urbanist, sans-serif' }}>
            <span style={{ color: '#C5A113' }}>Bharathi</span>{' '}
            <span style={{ color: '#444' }}>Gold Finance</span>
          </span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{
            background: 'transparent',
            fontFamily: 'Urbanist, sans-serif',
            color: '#333',
          }}
          items={menuItems}
        />
      </Sider>

      {/* Mobile Hamburger Button */}
      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: 28, color: '#C5A113' }} />}
        onClick={() => setVisible(true)}
        style={{
          position: 'fixed',
          top: 18,
          left: 18,
          zIndex: 201,
          background: 'rgba(255,255,255,0.7)',
          display: 'none',
        }}
        className="sidebar-mobile-btn"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: 36, marginRight: 10, borderRadius: 6 }} />
            <span style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Urbanist, sans-serif' }}>
              <span style={{ color: '#C5A113' }}>Bharathi</span>{' '}
              <span style={{ color: '#444' }}>Gold Loan</span>
            </span>
          </div>
        }
        placement="left"
        closable={true}
        onClose={() => setVisible(false)}
        open={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{
            background: 'transparent',
            fontFamily: 'Urbanist, sans-serif',
            color: '#333',
            border: 'none',
          }}
          items={menuItems}
          onClick={() => setVisible(false)}
        />
      </Drawer>

      {/* Responsive & Active CSS */}
      <style>
        {`
          @media (max-width: 991px) {
            .custom-sider {
              display: none !important;
            }
            .sidebar-mobile-btn {
              display: block !important;
            }
          }
          .ant-menu-item-selected {
            background: linear-gradient(90deg, #ffecb3 0%, #d4af37 100%) !important;
            color: #222 !important;
            font-weight: bold;
            border-radius: 8px;
          }
          .ant-menu-item-selected a {
            color: #222 !important;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
