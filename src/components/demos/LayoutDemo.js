import { Layout, Menu, Card, Divider } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const LayoutDemo = () => (
    <Card>
        <Divider orientation="left">Header-Content-Footer</Divider>
        <Layout style={{border: '1px solid #f0f0f0'}}>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', minHeight: 100 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 80 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>

        <Divider orientation="left">Header-Sider-Content-Footer</Divider>
        <Layout style={{border: '1px solid #f0f0f0'}}>
            <Header>
                <div style={{ float: 'left', width: 120, height: 31, margin: '16px 24px 16px 0', background: 'rgba(255, 255, 255, 0.3)' }} />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>Option 1</Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>Option 2</Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined />}>Option 3</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 200 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </Card>
);

export default LayoutDemo;
