import React from 'react';
import { Collapse, Typography } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Text } = Typography;

const CodeBlock = ({ children }) => (
    <Collapse bordered={false} style={{marginTop: 24}}>
        <Panel 
            header={<Text><CodeOutlined /> Show Code</Text>} 
            key="1" 
            style={{
                background: '#f7f7f7', 
                border: '1px solid #d9d9d9', 
                borderRadius: '2px'
            }}
        >
            <pre style={{ 
                margin: 0, 
                background: '#2d2d2d', 
                color: '#f8f8f2', 
                padding: 16, 
                borderRadius: 4, 
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-all' 
            }}>
                <code>{children}</code>
            </pre>
        </Panel>
    </Collapse>
);

export default CodeBlock;
