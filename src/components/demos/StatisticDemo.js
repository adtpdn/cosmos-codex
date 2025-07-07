import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const StatisticDemo = () => (
  <Card>
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </Col>
      <Col span={12}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Col>
    </Row>
  </Card>
);

export default StatisticDemo;
