import React, { useState, useEffect } from 'react';
import { Card, Table, Input, DatePicker, Button, Tag, Row, Col, Statistic, Collapse } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ProductionManagementDashboard = ({ t = {} }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Log warning if t is undefined or missing expected keys
  if (!t.orderNumber) {
    console.warn('Translation prop (t) is missing or incomplete:', t);
  }

  // Sample order data
  const orders = [
    { key: '1', orderNumber: 'ORD001', customer: 'Farm A', status: 'pending', priority: 'high', weight: '500kg', route: 'Route 1' },
    { key: '2', orderNumber: 'ORD002', customer: 'Farm B', status: 'completed', priority: 'normal', weight: '300kg', route: 'Route 2' },
    { key: '3', orderNumber: 'ORD003', customer: 'Farm C', status: 'cancelled', priority: 'low', weight: '200kg', route: 'Route 3' },
  ];

  // Sample inventory data
  const inventory = [
    { key: '1', product: 'Seeds', quantity: 1000, warehouse: 'WH1' },
    { key: '2', product: 'Fertilizer', quantity: 500, warehouse: 'WH2' },
  ];

  // Order table columns with fallback translations
  const orderColumns = [
    { title: t.orderNumber || 'Order Number', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: t.customer || 'Customer', dataIndex: 'customer', key: 'customer' },
    {
      title: t.status || 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'pending' ? 'orange' : status === 'completed' ? 'green' : 'red'}>
          {t[status] || status}
        </Tag>
      ),
    },
    {
      title: t.priority || 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: priority => t[priority] || priority,
    },
    { title: t.weight || 'Weight', dataIndex: 'weight', key: 'weight' },
    { title: t.route || 'Route', dataIndex: 'route', key: 'route' },
    {
      title: t.action || 'Action',
      key: 'action',
      render: () => <Button type="link" size={isMobile ? 'large' : 'middle'}>{t.detail || 'View Details'}</Button>,
    },
  ];

  // Inventory table columns with fallback translations
  const inventoryColumns = [
    { title: t.agriculturalProduct || 'Product', dataIndex: 'product', key: 'product' },
    { title: t.plannedQuantity || 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: t.warehouse || 'Warehouse', dataIndex: 'warehouse', key: 'warehouse' },
  ];

  // Filter orders by search text
  const filteredOrders = orders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchText.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchText.toLowerCase())
  );

  // Mobile-friendly order card layout
  const renderOrderCards = () => (
    <div>
      {filteredOrders.map(order => (
        <Card
          key={order.key}
          style={{ marginBottom: 16, borderRadius: 8 }}
          bodyStyle={{ padding: isMobile ? 12 : 24 }}
        >
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <strong>{t.orderNumber || 'Order Number'}:</strong> {order.orderNumber}
            </Col>
            <Col span={24}>
              <strong>{t.customer || 'Customer'}:</strong> {order.customer}
            </Col>
            <Col span={24}>
              <strong>{t.status || 'Status'}:</strong>{' '}
              <Tag color={order.status === 'pending' ? 'orange' : order.status === 'completed' ? 'green' : 'red'}>
                {t[order.status] || order.status}
              </Tag>
            </Col>
            <Col span={24}>
              <strong>{t.priority || 'Priority'}:</strong> {t[order.priority] || order.priority}
            </Col>
            <Col span={24}>
              <strong>{t.weight || 'Weight'}:</strong> {order.weight}
            </Col>
            <Col span={24}>
              <strong>{t.route || 'Route'}:</strong> {order.route}
            </Col>
            <Col span={24}>
              <Button type="link" size="large">{t.detail || 'View Details'}</Button>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );

  return (
    <div style={{ padding: isMobile ? 8 : 24 }}>
      <Card
        title={t.orderManagement || 'Order Management'}
        style={{ marginBottom: 24, borderRadius: 8 }}
        bodyStyle={{ padding: isMobile ? 12 : 24 }}
      >
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col xs={24} sm={12}>
            <Input
              prefix={<SearchOutlined />}
              placeholder={t.search || 'Search Orders'}
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              size={isMobile ? 'large' : 'middle'}
            />
          </Col>
          <Col xs={24} sm={12}>
            <DatePicker
              placeholder={t.selectDate || 'Select Date'}
              onChange={date => setSelectedDate(date)}
              style={{ width: '100%' }}
              size={isMobile ? 'large' : 'middle'}
            />
          </Col>
        </Row>
        {isMobile ? (
          renderOrderCards()
        ) : (
          <Table
            columns={orderColumns}
            dataSource={filteredOrders}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 'max-content' }}
          />
        )}
      </Card>

      <Collapse
        defaultActiveKey={isMobile ? [] : ['inventory', 'logistics']}
        style={{ marginBottom: 24 }}
      >
        <Collapse.Panel
          header={t.inventoryManagement || 'Inventory Management'}
          key="inventory"
        >
          <Table
            columns={inventoryColumns}
            dataSource={inventory}
            pagination={false}
            scroll={isMobile ? { x: 'max-content' } : undefined}
          />
        </Collapse.Panel>
        <Collapse.Panel
          header={t.logisticsTracking || 'Logistics Tracking'}
          key="logistics"
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Statistic title={t.total || 'Total'} value={orders.length} />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title={t.pending || 'Pending'}
                value={orders.filter(o => o.status === 'pending').length}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title={t.completed || 'Completed'}
                value={orders.filter(o => o.status === 'completed').length}
              />
            </Col>
            <Col xs={24}>
              <Button
                type="primary"
                size={isMobile ? 'large' : 'middle'}
                style={{ width: isMobile ? '100%' : 'auto' }}
              >
                {t.createOrder || 'Create Order'}
              </Button>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default ProductionManagementDashboard;