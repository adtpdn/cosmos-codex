import React from 'react';
import { Button, Card, Space, Divider } from 'antd';

const SpaceDemo = () => (
    <Card>
        <Divider orientation="left">Horizontal Space</Divider>
        <Space>
            Space
            <Button type="primary">Button</Button>
            <Button>Button</Button>
        </Space>

        <Divider orientation="left">Vertical Space</Divider>
        <Space direction="vertical">
            <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>

        <Divider orientation="left">Space Size</Divider>
        <Space size="large">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
        </Space>

        <Divider orientation="left">Wrap</Divider>
        <Space size={[8, 16]} wrap>
            {Array.from({ length: 20 }).map((_, i) => (
                <Button key={i}>Button</Button>
            ))}
        </Space>
    </Card>
);

export default SpaceDemo;
