import { Card, Table, Tag } from 'antd';

const PriorityTag = ({ priority }) => {
  const color = { urgent: 'volcano', high: 'red', low: 'geekblue' }[priority] || 'default';
  return <Tag color={color}>{priority.toUpperCase()}</Tag>;
};

const StatusTag = ({ status }) => {
  const color = { 'not dispatched': 'orange', collected: 'green' }[status] || 'default';
  return <Tag color={color}>{status.toUpperCase()}</Tag>;
};

const inventoryData = [
    { key: '1', orderNumber: 'SO2503170002', customer: '666-555', plannedDelivery: '2025-03-04', priority: 'normal', status: 'not dispatched' },
    { key: '2', orderNumber: 'SO2503170001', customer: 'This is a test', plannedDelivery: '2025-03-04', priority: 'high', status: 'not dispatched' },
    { key: '3', orderNumber: 'SO2501130001', customer: 'This is a test', plannedDelivery: '2025-03-13', priority: 'urgent', status: 'not dispatched' },
];

const columns = [ 
    { title: 'ORDER NUMBER', dataIndex: 'orderNumber' }, 
    { title: 'CUSTOMER', dataIndex: 'customer' }, 
    { title: 'PLANNED DELIVERY', dataIndex: 'plannedDelivery' }, 
    { title: 'PRIORITY', dataIndex: 'priority', render: (p) => <PriorityTag priority={p} /> }, 
    { title: 'STATUS', dataIndex: 'status', render: (s) => <StatusTag status={s} /> }, 
];

const TableDemo = () => (
    <Card>
        <Table 
            columns={columns} 
            dataSource={inventoryData} 
            pagination={{ pageSize: 5 }} 
        />
    </Card>
);

export default TableDemo;
