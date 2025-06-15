import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Content } = Layout;

const contentStyle = {
  margin: '24px',
  background: '#fff',
  marginLeft: 264, // width of the sidebar
  transition: 'margin-left 0.3s',
};

const MainLayout = () => (
  <>
    <Sidebar />
    <Layout>
      <Content style={contentStyle} className="main-content">
        <Outlet />
      </Content>
    </Layout>
    <style>
      {`
        @media (max-width: 991px) {
          .main-content {
            margin-left: 0 !important;
          }
        }
      `}
    </style>
  </>
);

export default MainLayout;