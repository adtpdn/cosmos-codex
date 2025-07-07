import React, { useState } from 'react';
import { Card, Space, Typography, Slider, Switch } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const TypographyDemo = () => {
    const [ellipsis, setEllipsis] = useState(true);

    return (
        <Card>
            <Title>Introduction</Title>
            <Paragraph>
                In the process of internal desktop applications, a list of applications visualized under the Ant Design design system is presented.
            </Paragraph>
            <Paragraph>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>
            <Title level={2}>Title</Title>
            <Space direction="vertical">
                <Title level={1}>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. Ant Design</Title>
                <Title level={4}>h4. Ant Design</Title>
                <Title level={5}>h5. Ant Design</Title>
            </Space>
            <Title level={2}>Text & Link</Title>
            <Space direction="vertical">
                <Text>Ant Design (default)</Text>
                <Text type="secondary">Ant Design (secondary)</Text>
                <Text type="success">Ant Design (success)</Text>
                <Text type="warning">Ant Design (warning)</Text>
                <Text type="danger">Ant Design (danger)</Text>
                <Text disabled>Ant Design (disabled)</Text>
                <Text mark>Ant Design (mark)</Text>
                <Text code>Ant Design (code)</Text>
                <Text keyboard>Ant Design (keyboard)</Text>
                <Text underline>Ant Design (underline)</Text>
                <Text delete>Ant Design (delete)</Text>
                <Text strong>Ant Design (strong)</Text>
                <Text italic>Ant Design (italic)</Text>
                <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
                </Link>
            </Space>
            <Title level={2}>Ellipsis</Title>
            <Switch checked={ellipsis} onChange={() => setEllipsis(!ellipsis)} />
            <Paragraph ellipsis={ellipsis}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>
        </Card>
    );
};

export default TypographyDemo;
