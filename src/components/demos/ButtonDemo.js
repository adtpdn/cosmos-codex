import React from 'react';
import { Button, Card, Space, Divider, Typography, Tag, Badge } from 'antd';
import { 
    PlusOutlined, 
    EnvironmentOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

const { Text } = Typography;

const ButtonDemo = () => {
    return (
        <Card>
            <Divider orientation="left">Action Buttons</Divider>
            <Space wrap align="center">
                <Button 
                    type="primary" 
                    style={{ 
                        backgroundColor: '#3B82F6', 
                        borderColor: '#3B82F6',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Dispatch
                    <Badge count={2} style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginLeft: 8 }} />
                </Button>
                <Button 
                    type="primary" 
                    icon={<PlusOutlined />}
                >
                    Create Order
                </Button>
                <Button 
                    style={{ 
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Dispatch
                    <Badge count={2} style={{ backgroundColor: '#e5e7eb', color: '#4b5563', marginLeft: 8 }} />
                </Button>
            </Space>

            <Divider orientation="left">Filter Buttons</Divider>
            <Space wrap align="center">
                 <Button 
                    type="primary" 
                    style={{ 
                        backgroundColor: '#4285F4', 
                        borderColor: '#4285F4',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    All
                    <Badge count={247} style={{ backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 8 }} />
                </Button>
                <Space>
                    <Text>Pending</Text>
                    <Badge count={247} style={{ backgroundColor: '#f0f0f0', color: '#000' }} />
                </Space>
            </Space>

            <Divider orientation="left">Status Tags</Divider>
            <Space wrap>
                <Tag icon={<EnvironmentOutlined />} style={{ borderRadius: 12, padding: '4px 8px', margin: 2 }}>555</Tag>
                <Tag color="#FFF7E6" style={{ color: '#D46B08', borderRadius: 12, padding: '4px 8px', margin: 2 }}>高</Tag>
                <Tag color="#FFF1F0" style={{ color: '#CF1322', borderRadius: 12, padding: '4px 8px', margin: 2 }}>紧急</Tag>
                <Tag color="#F5F5F5" style={{ color: '#595959', borderRadius: 12, padding: '4px 8px', margin: 2 }}>正常</Tag>
                <Tag color="#F0F5FF" style={{ color: '#2F54EB', borderRadius: 12, padding: '4px 8px', margin: 2 }}>低</Tag>
                <Tag icon={<CheckCircleOutlined />} color="#F6FFED" style={{ color: '#52C41A', borderRadius: 12, padding: '4px 8px', margin: 2 }}>已收货</Tag>
            </Space>
        </Card>
    );
};

export default ButtonDemo;
