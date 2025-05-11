import React, { useState } from 'react'

import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  ReconciliationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import "./style.scss";
import { getItem } from '../../utils/admin-utils';
import AdminPet from './AdminPet/AdminPet';
import AdminUser from './AdminUser/AdminUser';

const { Sider, Content } = Layout;

function Admin () {
    const items = [
    getItem('Người dùng', 'user', <UserOutlined />),
    getItem('Thú cưng', 'pet', <ReconciliationOutlined />),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const [keySelected, setKeySelected] = useState('pet');

  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return <AdminUser />;
      case 'pet':
        return <AdminPet/>;
      default:
        return null;
    }
  };

  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };

  return (
    <>
      {/* Chia bố cục cho Sider và Content */}
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={collapsed}
          trigger={null} // Ẩn trigger mặc định
          collapsible
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            background: '#fff',
            boxShadow: '0px 0 5px rgba(0,0,0,0.1)',
            zIndex: 1000,
            position: 'relative',
          }}
        >
          {/* Nút toggle custom nằm ở trên */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              position: 'absolute',
              top: 1,
              left: 1,
              zIndex: 1001,
              fontSize: 18,
              backgroundColor: 'black',
            }}
          />
          <div
            style={{
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 40, // Đẩy logo xuống để nhường chỗ cho nút toggle
            }}
          >
            {collapsed ? 'A' : 'Admin'}
          </div>

          {/* Menu điều hướng được hiển thị bên trái */}
          <Menu
            mode="inline"
            selectedKeys={[keySelected]}
            onClick={handleOnClick}
            items={items}
            style={{ borderRight: 0 }}
          />
        </Sider>

        {/* Nội dung chính được hiển thị bên phải */}
        <Layout>
          <Content
            style={{

              padding: '24px',
              background: '#fff',

              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            {renderPage(keySelected)}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Admin
