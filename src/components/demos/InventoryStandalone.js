import React from 'react';
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Space,
  Tabs,
  Input,
  Select,
  DatePicker,
  Table,
  Tag,
  Row,
  Col,
  Button,
  Badge,
} from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  UserOutlined,
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  FilterOutlined,
  CalendarOutlined,
  MoreOutlined,
  WarningFilled,
  LeftOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  FundProjectionScreenOutlined,
  InteractionOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  TeamOutlined,
  ExperimentOutlined,
  ToolOutlined,
  FileDoneOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const PriorityTag = ({ priority, t }) => {
  let color;
  let text;
  switch (priority) {
    case 'urgent': color = 'volcano'; text = t.urgent; break;
    case 'high': color = 'red'; text = t.high; break;
    case 'low': color = 'geekblue'; text = t.low; break;
    default: color = 'default'; text = t.normal;
  }
  return <Tag color={color}>{text}</Tag>;
};

const StatusTag = ({ status, t }) => {
    let color;
    let text;
    switch(status) {
        case 'not dispatched': color = 'orange'; text = t.notDispatched; break;
        case 'collected': color = 'green'; text = t.collected; break;
        case 'pending': color = 'gold'; text = t.pending; break;
        case 'dispatched': color = 'blue'; text = t.dispatched; break;
        case 'completed': color = 'cyan'; text = t.completed; break;
        case 'canceled': color = 'default'; text = t.canceled; break;
        default: color = 'default'; text = status;
    }
    return <Tag color={color}>{text.toUpperCase()}</Tag>;
}

const inventoryData = [
  { key: '1', orderNumber: 'SO2503170002', customer: '666-555', plannedDelivery: '2025-03-04', route: '1111', weight: '63 kg', priority: 'normal', status: 'not dispatched', urgent: false, },
  { key: '2', orderNumber: 'SO2503170001', customer: 'This is a test - Go to Taste', plannedDelivery: '2025-03-04', route: '', weight: '1 kg', priority: 'high', status: 'not dispatched', urgent: true, },
  { key: '3', orderNumber: 'SO2501130001', customer: 'This is a test - Go to Taste', plannedDelivery: '2025-03-13', route: '1111', weight: '355 kg', priority: 'urgent', status: 'not dispatched', urgent: true, },
  { key: '4', orderNumber: 'SO2501120003', customer: 'This is a test - Go to Taste', plannedDelivery: '2025-03-05', route: '1111', weight: '12 kg', priority: 'normal', status: 'collected', urgent: false, },
  { key: '5', orderNumber: 'SO2501120002', customer: 'test - C02', plannedDelivery: '2025-03-19', route: '#Sales', weight: '-', priority: 'normal', status: 'collected', urgent: false, },
  { key: '6', orderNumber: 'SO2501120001', customer: 'This is a test - Go to Taste', plannedDelivery: '2025-03-12', route: '#222', weight: '122 kg', priority: 'normal', status: 'collected', urgent: false, },
  { key: '7', orderNumber: 'SO2501050002', customer: 'This is a test - Go to Taste', plannedDelivery: '2025-03-05', route: '#222', weight: '2 kg', priority: 'low', status: 'collected', urgent: false, },
];

const InventoryStandalone = ({ t, onClose }) => {
    const columns = [
        { title: '', dataIndex: 'urgent', key: 'urgent', render: (urgent) => urgent ? <WarningFilled style={{ color: '#f5222d' }} /> : null, width: 40, },
        { title: t.orderNumber, dataIndex: 'orderNumber', key: 'orderNumber', sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber), },
        { title: t.customer, dataIndex: 'customer', key: 'customer', },
        { title: t.plannedDelivery, dataIndex: 'plannedDelivery', key: 'plannedDelivery', sorter: (a, b) => new Date(a.plannedDelivery) - new Date(b.plannedDelivery), },
        { title: t.route, dataIndex: 'route', key: 'route', },
        { title: t.weight, dataIndex: 'weight', key: 'weight', },
        { title: t.priority, dataIndex: 'priority', key: 'priority', render: (priority) => <PriorityTag priority={priority} t={t} />, },
        { title: t.status, dataIndex: 'status', key: 'status', render: (status) => <StatusTag status={status} t={t} />, },
        { title: t.actions, key: 'actions', render: () => <Space size="middle"><Link>{t.details}</Link><MoreOutlined /></Space>, },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={240} style={{ background: '#27ae60', color: '#fff' }}>
                <div style={{ padding: '16px', cursor: 'pointer' }} onClick={onClose}>
                    <Title level={3} style={{ color: '#fff', margin: 0 }}><LeftOutlined /> COSMOS Smart Future</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.8)' }}>{t.agriInfoSystem}</Text>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['inventoryManagement']} style={{ background: '#27ae60' }}>
                    <Menu.Item key="basicInfo" icon={<DatabaseOutlined />}>{t.basicInfo}</Menu.Item>
                    <Menu.Item key="seedManagement" icon={<ToolOutlined />}>{t.seedManagement}</Menu.Item>
                    <Menu.Item key="envMonitoring" icon={<ExperimentOutlined />}>{t.envMonitoring}</Menu.Item>
                    <Menu.Item key="cropProtection" icon={<InteractionOutlined />}>{t.cropProtection}</Menu.Item>
                    <Menu.Item key="fieldOps" icon={<FundProjectionScreenOutlined />}>{t.fieldOps}</Menu.Item>
                    <Menu.Item key="payroll" icon={<TeamOutlined />}>{t.payroll}</Menu.Item>
                    <Menu.Item key="yieldForecasting" icon={<BarChartOutlined />}>{t.yieldForecasting}</Menu.Item>
                    <Menu.Item key="realtimeDashboard" icon={<AppstoreOutlined />}>{t.realtimeDashboard}</Menu.Item>
                    <Menu.Item key="inventoryManagement" icon={<ContainerOutlined />}>{t.inventoryManagement}</Menu.Item>
                    <Menu.Item key="packaging" icon={<FileDoneOutlined />}>{t.packaging}</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: '0 24px', background: '#fff', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Title level={4} style={{ margin: 0 }}>{t.prodMgmtSystem}<br/><Text type="secondary" style={{fontSize: '14px'}}>{t.inventoryManagement} / {t.orderInfo}</Text></Title>
                    <Space size="large">
                        <Badge dot color="red"><Text strong>{t.bayerBase}</Text></Badge>
                        <Space>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            <Text>BP</Text>
                            <Text strong>{t.bayerProduct}</Text>
                            <DownOutlined style={{ cursor: 'pointer' }} />
                        </Space>
                    </Space>
                </Header>
                <Content style={{ padding: '24px', background: '#fff' }}>
                    <div style={{ marginBottom: 24 }}>
                        <Row justify="space-between" align="middle">
                            <Col><Title level={2} style={{ margin: 0 }}>{t.orderInfo}</Title><Text type="secondary">{t.totalOrders(247)} <Badge status="processing" /> {t.updated(2)} <Badge color="red" count={`${t.urgent}(2)`} /></Text></Col>
                            <Col><Space><Link>{t.scheduledReports}</Link><Link>{t.customerInfo}</Link><Button type="primary" icon={<PlusOutlined />}>{t.createOrder}</Button></Space></Col>
                        </Row>
                    </div>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<Badge count={247} offset={[10, -2]} size="small"><Text>{t.all}</Text></Badge>} key="1" />
                        <TabPane tab={<Badge count={7} offset={[10, -2]} size="small"><Text>{t.pending}</Text></Badge>} key="2" />
                        <TabPane tab={<Badge count={9} offset={[10, -2]} size="small"><Text>{t.dispatched}</Text></Badge>} key="3" />
                        <TabPane tab={<Badge count={199} offset={[10, -2]} size="small"><Text>{t.completed}</Text></Badge>} key="4" />
                        <TabPane tab={<Badge count={18} offset={[10, -2]} size="small"><Text>{t.canceled}</Text></Badge>} key="5" />
                    </Tabs>
                    <div style={{ margin: '16px 0' }}>
                        <Space wrap size="middle">
                            <Input placeholder={t.searchPlaceholder} prefix={<SearchOutlined />} style={{ width: 300 }} />
                            <Select defaultValue="status" style={{ width: 150 }}><Option value="status">{t.returnStatus} <Tag>3</Tag></Option></Select>
                            <Select defaultValue="collection" style={{ width: 150 }}><Option value="collection">{t.collectionStatus} <Tag>2</Tag></Option></Select>
                            <Button>{t.dispatch} <Tag>3</Tag></Button>
                            <Select defaultValue="any_customer" style={{ width: 150 }}><Option value="any_customer">{t.anyCustomer}</Option></Select>
                            <DatePicker placeholder={t.dates} suffixIcon={<CalendarOutlined />} />
                            <Select defaultValue="any_route" style={{ width: 150 }}><Option value="any_route">{t.anyRoute}</Option></Select>
                            <Button icon={<FilterOutlined />} />
                        </Space>
                        <div style={{marginTop: '16px'}}><Text type="secondary">{t.activeFilters}: </Text><Tag closable color="blue">{t.dispatched}</Tag><Tag closable color="blue">{t.notDispatched}</Tag><Link>{t.clearAll}</Link></div>
                    </div>
                    <Table columns={columns} dataSource={inventoryData} rowSelection={{}} pagination={{ pageSize: 10 }} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default InventoryStandalone;
