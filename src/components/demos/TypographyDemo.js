import React from 'react';
import { Card, Space, Typography } from 'antd';

const { Title, Text } = Typography;

const TypographyDemo = () => (
    <Card>
        <Space direction="vertical" size="large">
            <Title level={1}>H1. Ant Design (38/46)</Title>
            <Title level={2}>H2. Ant Design (30/38)</Title>
            <Title level={3}>H3. Ant Design (24/32)</Title>
            <Title level={4}>H4. Ant Design (20/28)</Title>
            <Title level={5}>H5. Ant Design (16/24)</Title>
            <div>
                <Text>Base Normal (14/22)</Text><br/>
                <Text strong>Base Strong (14/22)</Text><br/>
                <Text underline>Base Underline (14/22)</Text><br/>
                <Text italic>Base Italic (14/22)</Text>
            </div>
        </Space>
    </Card>
);

export default TypographyDemo;
