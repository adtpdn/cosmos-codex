import React from 'react';
import { Button, Card, Space } from 'antd';

const SpaceDemo = () => (
    <Card>
        <Space direction="vertical">
            <Space><Button>A</Button><Button>B</Button><Button>C</Button></Space>
            <Space direction="horizontal" size="large"><Button>A</Button><Button>B</Button><Button>C</Button></Space>
        </Space>
    </Card>
);

export default SpaceDemo;
