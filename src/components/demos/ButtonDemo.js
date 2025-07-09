import { useState } from 'react';
import { Button, Card, Space, Divider, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ButtonDemo = () => {
    const [size, setSize] = useState('middle');
    const [loading, setLoading] = useState(false);

    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulate a network request
    };

    return (
        <Card>
            <Divider orientation="left">Button Types</Divider>
            <Space wrap>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="text">Text</Button>
                <Button type="link">Link</Button>
            </Space>

            <Divider orientation="left">Button with Icon</Divider>
            <Space wrap>
                <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                <Button shape="circle" icon={<SearchOutlined />} />
                <Button icon={<SearchOutlined />}>Search</Button>
            </Space>

            <Divider orientation="left">Button Sizes</Divider>
            <Space direction="vertical">
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="middle">Middle</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <Space wrap>
                    <Button type="primary" size={size}>Primary</Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                </Space>
            </Space>
            
            <Divider orientation="left">Loading State</Divider>
             <Space wrap>
                <Button type="primary" loading>Loading</Button>
                <Button type="primary" loading={loading} onClick={enterLoading}>Click me!</Button>
            </Space>

            <Divider orientation="left">Disabled State</Divider>
            <Space wrap>
                <Button type="primary" disabled>Primary(disabled)</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type="dashed" disabled>Dashed(disabled)</Button>
                <Button type="text" disabled>Text(disabled)</Button>
                <Button type="link" disabled>Link(disabled)</Button>
            </Space>

            <Divider orientation="left">Danger Buttons</Divider>
             <Space wrap>
                <Button type="primary" danger>Primary Danger</Button>
                <Button danger>Default Danger</Button>
                <Button type="dashed" danger>Dashed Danger</Button>
                <Button type="text" danger>Text Danger</Button>
                <Button type="link" danger>Link Danger</Button>
            </Space>

            <Divider orientation="left">Ghost Button</Divider>
            <div style={{ backgroundColor: 'rgb(190, 200, 200)', padding: '20px' }}>
                <Space wrap>
                    <Button type="primary" ghost>Primary Ghost</Button>
                    <Button ghost>Default Ghost</Button>
                    <Button type="dashed" ghost>Dashed Ghost</Button>
                </Space>
            </div>
            
            <Divider orientation="left">Block Button</Divider>
            <Button type="primary" block>Primary Block Button</Button>
        </Card>
    );
};

export default ButtonDemo;
