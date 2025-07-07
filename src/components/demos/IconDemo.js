import React from 'react';
import { Card, Space } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  SearchOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const IconDemo = () => (
    <Card>
        <Space size="large" wrap>
            <HomeOutlined style={{fontSize: 24}} />
            <UserOutlined style={{fontSize: 24}} />
            <SettingOutlined style={{fontSize: 24}} />
            <SearchOutlined style={{fontSize: 24}} />
            <CopyOutlined style={{fontSize: 24}} />
            <DeleteOutlined style={{fontSize: 24}} />
        </Space>
    </Card>
);

export default IconDemo;
