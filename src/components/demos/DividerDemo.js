import React from 'react';
import { Card, Divider, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const DividerDemo = () => (
    <Card>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </Paragraph>
        <Divider />
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </Paragraph>
        <Divider>With Text</Divider>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </Paragraph>
        <Divider orientation="left">Left Text</Divider>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </Paragraph>
        <Divider orientation="right">Right Text</Divider>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </Paragraph>
        <Divider dashed />
        <Text>Text</Text>
        <Divider type="vertical" />
        <Text>Text</Text>
        <Divider type="vertical" />
        <Text>Text</Text>
    </Card>
);

export default DividerDemo;
