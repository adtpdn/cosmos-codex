import { Card, Space, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const TypographyDemo = () => {
    // const [ellipsis, setEllipsis] = useState(true);

    return (
        <Card>
            <Title>Introduction</Title>
            <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Paragraph>
            <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Paragraph>
            <Title level={2}>Title</Title>
            <Space direction="vertical">
                <Title level={1}>h1. 38px</Title>
                <Title level={2}>h2. 30px</Title>
                <Title level={3}>h3. 24px</Title>
                <Title level={4}>h4. 20px</Title>
                <Title level={5}>h5. 16px</Title>
            </Space>
            <Title level={2}>Text & Link</Title>
            <Space direction="vertical">
                <Text>Lorem Ipsum (default)</Text>
                <Text type="secondary">Lorem Ipsum (secondary)</Text>
                <Text type="success">Lorem Ipsum (success)</Text>
                <Text type="warning">Lorem Ipsum (warning)</Text>
                <Text type="danger">Lorem Ipsum (danger)</Text>
                <Text disabled>Lorem Ipsum (disabled)</Text>
                <Text mark>Lorem Ipsum (mark)</Text>
                <Text code>Lorem Ipsum (code)</Text>
                <Text keyboard>Lorem Ipsum (keyboard)</Text>
                <Text underline>Lorem Ipsum (underline)</Text>
                <Text delete>Lorem Ipsum (delete)</Text>
                <Text strong>Lorem Ipsum (strong)</Text>
                <Text italic>Lorem Ipsum (italic)</Text>
                <Link href="https://ant.design" target="_blank">
                Lorem Ipsum (Link)
                </Link>
            </Space>
            {/* <Title level={2}>Ellipsis</Title>
            <Switch checked={ellipsis} onChange={() => setEllipsis(!ellipsis)} />
            <Paragraph ellipsis={ellipsis}>
                Lorem Ipsum, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph> */}
        </Card>
    );
};

export default TypographyDemo;
