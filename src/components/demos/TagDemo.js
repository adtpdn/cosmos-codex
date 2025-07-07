import React from 'react';
import { Card, Space, Tag } from 'antd';

const PriorityTag = ({ priority }) => {
  const color = { urgent: 'volcano', high: 'red', low: 'geekblue' }[priority] || 'default';
  return <Tag color={color}>{priority.toUpperCase()}</Tag>;
};

const StatusTag = ({ status }) => {
  const color = { 'not dispatched': 'orange', collected: 'green' }[status] || 'default';
  return <Tag color={color}>{status.toUpperCase()}</Tag>;
};

const TagDemo = () => (
    <Card>
        <Space>
            <PriorityTag priority="urgent" />
            <StatusTag status="collected" />
        </Space>
    </Card>
);

export default TagDemo;
