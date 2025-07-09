import { Card, Space, Divider, Typography } from 'antd';
import {
  HomeOutlined,
  SettingFilled,
  SmileTwoTone,
  SyncOutlined,
  LoadingOutlined,
  HeartTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons';

const { Text } = Typography;

const IconDemo = () => (
    <Card>
        <Divider orientation="left">Themes</Divider>
        <Space size="large" wrap>
            <HomeOutlined style={{ fontSize: 24 }} />
            <SettingFilled style={{ fontSize: 24 }} />
            <SmileTwoTone style={{ fontSize: 24 }} />
        </Space>
        
        <Divider orientation="left">Spinning Icons</Divider>
        <Space size="large" wrap>
            <SyncOutlined spin style={{ fontSize: 24 }} />
            <LoadingOutlined style={{ fontSize: 24 }} />
            <Text>Loading...</Text>
        </Space>

        <Divider orientation="left">Two-tone Color</Divider>
        <Space size="large" wrap>
            <SmileTwoTone twoToneColor="#eb2f96" style={{ fontSize: 24 }} />
            <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: 24 }} />
            <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 24 }} />
        </Space>

        <Divider orientation="left">Custom Style</Divider>
        <Space size="large" wrap>
            <HomeOutlined style={{ fontSize: 32, color: '#1677ff' }} />
            <SettingFilled style={{ fontSize: 32, color: '#52c41a' }} />
        </Space>
    </Card>
);

export default IconDemo;
