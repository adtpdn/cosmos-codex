import React from 'react';
import { Badge, Card, Space, Avatar, Button } from 'antd';
import { ClockCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

const BadgeDemo = () => (
    <Card>
        <Space size="large" direction="vertical">
            <Space size="large">
                <Badge count={5}>
                    <Avatar shape="square" size="large" />
                </Badge>
                <Badge count={0} showZero>
                    <Avatar shape="square" size="large" />
                </Badge>
                <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                    <Avatar shape="square" size="large" />
                </Badge>
            </Space>
            <Space size="large">
                <Badge count={25} />
                <Badge count={4} style={{ backgroundColor: '#52c41a' }} />
                <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
            </Space>
             <Space size="large">
                <Badge status="success" text="Success" />
                <Badge status="error" text="Error" />
                <Badge status="default" text="Default" />
                <Badge status="processing" text="Processing" />
                <Badge status="warning" text="Warning" />
            </Space>
        </Space>
    </Card>
);

export default BadgeDemo;
