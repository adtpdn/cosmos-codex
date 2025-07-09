import { Segmented, Card, Space } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

const SegmentedDemo = () => (
    <Card>
        <Space direction="vertical">
            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
            <Segmented
                options={[
                    {
                    label: 'List',
                    value: 'List',
                    icon: <BarsOutlined />,
                    },
                    {
                    label: 'Kanban',
                    value: 'Kanban',
                    icon: <AppstoreOutlined />,
                    },
                ]}
            />
        </Space>
    </Card>
);

export default SegmentedDemo;
