import React from 'react';
import { Avatar, Card, Space, Badge } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const AvatarDemo = () => (
    <Card>
        <Space size="large" wrap>
            <Space direction="vertical" align="center">
                <Avatar size={64} icon={<UserOutlined />} />
                <Avatar size="large" icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar size="small" icon={<UserOutlined />} />
            </Space>
            <Space direction="vertical" align="center">
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <Avatar shape="square" icon={<UserOutlined />} />
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </Space>
            <Space direction="vertical" align="center">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Space>
            <Space direction="vertical" align="center">
                <Badge count={1}>
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
                <Avatar.Group>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
            </Space>
        </Space>
    </Card>
);

export default AvatarDemo;
