import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Button,
  Typography,
  Avatar,
  Space,
  Table,
  Tag,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Card,
  Divider,
  ConfigProvider,
  Anchor,
  Collapse,
  Modal,
  Alert,
  Dropdown,
  Checkbox,
} from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  PlusOutlined,
  GlobalOutlined,
  CopyOutlined,
  ImportOutlined,
  DeleteOutlined,
  CaretDownOutlined,
  CodeOutlined,
  EditOutlined,
  CloseOutlined,
  SaveOutlined,
  DownOutlined,
  SearchOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
// Use npm packages for Markdown support
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';


const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;
const { Option } = Select;
const { Panel } = Collapse;
const { Link: AnchorLink } = Anchor;
const { TextArea } = Input;

// --- MOCK DATA & SHARED COMPONENTS ---
const inventoryData = [
    { key: '1', orderNumber: 'SO2503170002', customer: '666-555', plannedDelivery: '2025-03-04', priority: 'normal', status: 'not dispatched' },
    { key: '2', orderNumber: 'SO2503170001', customer: 'This is a test', plannedDelivery: '2025-03-04', priority: 'high', status: 'not dispatched' },
    { key: '3', orderNumber: 'SO2501130001', customer: 'This is a test', plannedDelivery: '2025-03-13', priority: 'urgent', status: 'not dispatched' },
];

const PriorityTag = ({ priority }) => {
  const color = { urgent: 'volcano', high: 'red', low: 'geekblue' }[priority] || 'default';
  return <Tag color={color}>{priority.toUpperCase()}</Tag>;
};

const StatusTag = ({ status }) => {
  const color = { 'not dispatched': 'orange', collected: 'green' }[status] || 'default';
  return <Tag color={color}>{status.toUpperCase()}</Tag>;
};

// --- MULTI-LANGUAGE & EDITABLE CONTENT ---
const initialContent = {
    en: {
        appTitle: 'Cosmos Codex',
        overview: 'Overview',
        general: 'General',
        layout: 'Layout',
        dataDisplay: 'Data Display',
        dataEntry: 'Data Entry',
        // Components
        typography: 'Typography',
        button: 'Button',
        icon: 'Icon',
        grid: 'Grid',
        space: 'Space',
        dropdown: 'Dropdown',
        checkbox: 'Checkbox',
        table: 'Table',
        tag: 'Tag',
        form: 'Form',
        // Descriptions with Markdown
        overviewDescription: `
# COSMOS Agricultural Design System

This is our first step in developing this design system for COSMOS, based on screenshots and specific feedback about interface problems. While this gave us valuable insights into the current issues - it also means we're working with limited information.

To do our best work, we really need to use the actual platform. We need to click through workflows, test different user scenarios, and see how the system behaves under real conditions. Screenshots can show us layout problems, but they can't reveal how data loads, how errors are handled, or how the system performs during peak usage.

This proposal addresses the specific issues we can see and anticipate, but it's just the starting point. Once we can interact with the live platform, we'll discover additional opportunities for improvement that aren't visible in static images.

The agricultural industry has unique demands - seasonal workflows, compliance requirements, weather dependencies, and field operations. These complexities require hands-on testing to truly understand how the interface should adapt and respond.

What we're presenting here fixes the obvious problems and establishes a solid foundation. But the real design system work begins when we can observe actual users completing real tasks on the live platform.

## What We Changed

- **Made Text Readable and International-Friendly:** We standardized a font size that would make the layout friendly for different languages without losing readability. This helps everyone read better, especially when text gets longer in other languages. We also made input fields flexible, so they don't break when translating to languages that need more space.
- **Replaced Tables with Smart Cards:** The biggest change was switching from rigid tables to flexible cards. Tables forced users to scroll sideways, which is frustrating on any device but impossible on phones. Cards flow naturally and show the most important info first, with details available when you need them.
- **Added Show/Hide for Complex Information:** Not every user needs every detail every time. Essential info like product name and quantity stay visible. Pricing, specs, and compliance details expand when you click. This keeps the screen clean but gives power users access to everything.
- **Smart Filtering for Limited Choices:** For fields with just 2-3 options (like Seasonal/Non-seasonal), we added simple toggle filters instead of dropdown menus. This reduces clicks and makes common choices instantly accessible and intuitive.
- **Visual Cues:** Colors now have specific meanings: green for good/complete, red for urgent/weather-critical, orange for attention needed, blue for informational. This creates a consistent visual language throughout the platform.
- **Smart Priority System:** The interface changes based on what's important. Critical orders get red backgrounds and stay at the top. Normal orders look standard. Completed items fade back, so you focus on what needs attention. Frontend standarization This means consistent spacing, typography, and component behavior whether users are in orders, inventory, or reporting sections.
- **Standardized Loading and Feedback:** We established consistent patterns for how the system communicates with users. Loading states, success confirmations, and error messages now follow the same visual language throughout the platform.
- **Batch Operations for Efficiency:** Large farms need to handle multiple items quickly. We added bulk editing, template creation, and multi-select operations for common workflows.
- **Contrast and Formatting Rules:** We solved contrast issues by establishing clear formatting rules. Text now meets accessibility standards, backgrounds provide proper separation, and important information stands out clearly even in challenging viewing conditions.
- **Standardized Modal Framework:** All pop-up windows now follow consistent rules for size, positioning, and behavior. Headers stay fixed, content scrolls smoothly, and buttons appear in predictable locations. This eliminates confusion and creates muscle memory across different functions.

## What's Next

- **Platform Access and Real User Testing:** Our first priority is getting hands-on access to the live platform. We need to test actual workflows, observe how data loads, and understand the full user journey. Screenshots only show us part of the story. We also need to watch real users' complete real tasks. This means testing with users to simulate usage during different seasons, handling rush orders, and managing compliance deadlines. Next, we will look at what we can and should further improve.
- **Technical Deep Dive:** With platform access, we can assess performance bottlenecks, integration points, and data flow issues that aren't visible in static designs. We'll evaluate how our card system performs with large datasets and identify optimization opportunities.
- **Missing Interface Patterns:** Screenshots revealed modal and form issues, but we haven't seen dashboards, reporting interfaces, or administrative screens. Each interface type needs consistent design patterns and may reveal additional standardization and optimization opportunities.
- **Mobile and Offline Strategy:** We need to test mobile performance and design offline workflows. Agricultural users often have spotty internet, so understanding current offline capabilities and limitations is crucial.
- **Integration and Workflow Analysis:** Agricultural orders involve multiple systems - weather apps, inventory software, compliance platforms, financial systems. Users currently jump between these, re-entering data and losing time during critical seasons. We need to map these workflows and design seamless connections, so information flows automatically between systems instead of requiring manual data entry across multiple platforms.
- **Accessibility and Field Testing:** Real field testing will reveal accessibility needs we can't anticipate from screenshots - things like glare resistance, gloved operation, and voice control requirements.
- **Advanced Features and Automation:** Once we understand the current system capabilities, we can design smart features like predictive ordering, weather integration, and automated compliance tracking.
- **Better Navigation and Filtering:** We should add smart filters that understand farming. Seasonal products get tagged automatically. Emergency orders stand out visually. Users can find what they need without scrolling through huge lists.
- **Improved Data Entry and Validation:** Form validation happens in real-time with clear, helpful messages. Required fields are obvious. Auto-save prevents data loss. Smart defaults speed up common tasks. We included a CSV auto-save icon, but this is a very raw implementation, to load and export common orders to speed up processes.
- **Better Search and Discovery:** A better breakdown of products by category, supplier, or season. Recent searches and favorites make repeat orders faster.
- **Platform-Wide Template System:** We created a reusable layout template that works across all platform pages, but we need to get a better full picture of the platform to create a better standardization, particularly for unique cases of internationalization.

This roadmap starts with understanding what we're really working with, then builds toward a comprehensive agricultural platform that serves users in all conditions and contexts. We are very excited to advance in the next step of this project.
`,
        typographyDescription: 'A showcase of all text styles used in the application. \n\n## Headings\nThere are five levels of headings available. \n\n## Body Text\nIncludes normal, strong, italic, and underline styles.',
        buttonDescription: 'Buttons allow users to take actions and make choices with a single tap. Here are the various types of buttons used in the system.',
        iconDescription: 'Icons are used to visually represent actions, objects, or concepts. We use the Ant Design Icons library.',
        gridDescription: 'The grid system uses a 24-column layout to provide a responsive and flexible structure for arranging content.',
        spaceDescription: 'Space is used to control the spacing between components, both horizontally and vertically.',
        dropdownDescription: 'A dropdown menu displays a list of choices when a user clicks on a button or trigger.',
        checkboxDescription: 'Checkboxes allow the user to select one or more items from a set.',
        tableDescription: 'A table displays rows of data. This example shows the order information list.',
        tagDescription: 'Tags are used for marking and categorization, such as order priority and status.',
        formDescription: 'The Form component provides data collection, validation, and submission functionality in a modal.',
        // Shared
        liveDemo: 'Live Demo',
        launchForm: 'Launch Order Creation Form',
        editHint: 'You can use Markdown for formatting. For images, use `![alt](url)`.',
        // Form Content
        createOrderTitle: 'Create New Agriculture Order',
        createOrderSubtitle: 'Crop supplies, equipment & logistics management',
        orderNumber: 'Order Number',
        customer: 'Customer',
        plannedDelivery: 'Planned Delivery Date',
        deliveryPurpose: 'Delivery Purpose',
        orderRemarks: 'Order Remarks',
        priorityLevel: 'Priority Level',
        farmLocation: 'Farm Location',
        autoGenerated: 'Auto-generated on save',
        pleaseSelect: 'Please select',
        selectDate: 'mm/dd/yy',
        selectPurpose: 'Please select delivery purpose',
        selectFarm: 'Select farm location...',
        expandInstructions: 'Click the expand button on each item to access pricing and remarks',
        expandAll: 'Expand All',
        collapseAll: 'Collapse All',
        agriculturalProduct: 'Agricultural Product',
        plannedQuantity: 'Planned Quantity',
        items: 'Items',
        completed: 'Completed',
        priority: 'Priority',
        total: 'Total',
        copyTemplate: 'Copy Template',
        importCSV: 'Import CSV',
        cancel: 'Cancel',
        createOrder: 'Create Order',
        complete: 'Complete',
        seasonal: 'Seasonal',
    },
    zh: {
        appTitle: 'Cosmos Codex',
        overview: '概述',
        general: '通用',
        layout: '布局',
        dataDisplay: '数据展示',
        dataEntry: '数据录入',
        // Components
        typography: '排版',
        button: '按钮',
        icon: '图标',
        grid: '栅格',
        space: '间距',
        dropdown: '下拉菜单',
        checkbox: '复选框',
        table: '表格',
        tag: '标签',
        form: '表单',
        // Descriptions with Markdown
        overviewDescription: `
# COSMOS 农业设计系统

这是我们为 COSMOS 开发此设计系统的第一步，基于截图和关于界面问题的具体反馈。虽然这为我们提供了对当前问题的宝贵见解，但这也意味着我们的信息有限。

为了做到最好，我们真的需要使用实际的平台。我们需要点击工作流程，测试不同的用户场景，并观察系统在真实条件下的行为。截图可以向我们展示布局问题，但它们无法揭示数据如何加载、错误如何处理，或系统在高峰使用期间的性能。

本提案解决了我们能看到和预见到的具体问题，但这仅仅是一个起点。一旦我们能够与实时平台互动，我们就会发现静态图像中看不到的其他改进机会。

农业有其独特的需求——季节性工作流程、合规性要求、天气依赖性和田间作业。这些复杂性需要动手测试，才能真正了解界面应如何适应和响应。

我们在这里展示的内容修复了明显的问题，并建立了一个坚实的基础。但真正的设计系统工作始于我们能够观察到真实用户在实时平台上完成真实任务。

## 我们改变了什么

- **使文本可读且对国际友好：** 我们标准化了字体大小，使布局对不同语言友好，同时不失可读性。这有助于每个人更好地阅读，特别是当文本在其他语言中变长时。我们还使输入字段变得灵活，这样在翻译成需要更多空间的语言时它们不会中断。
- **用智能卡片替换表格：** 最大的变化是从刚性表格转换到灵活的卡片。表格迫使用户横向滚动，这在任何设备上都是令人沮丧的，但在手机上是不可能的。卡片自然流动，并首先显示最重要的信息，需要时可提供详细信息。
- **为复杂信息添加显示/隐藏功能：** 并非每个用户每次都需要每个细节。产品名称和数量等基本信息保持可见。定价、规格和合规性详细信息在您点击时展开。这使屏幕保持清洁，但让高级用户可以访问所有内容。
- **为有限选择提供智能过滤：** 对于只有2-3个选项的字段（如季节性/非季节性），我们添加了简单的切换过滤器而不是下拉菜单。这减少了点击次数，使常见选择即时可访问且直观。
- **视觉提示：** 颜色现在具有特定含义：绿色表示良好/完成，红色表示紧急/天气关键，橙色表示需要注意，蓝色表示信息性。这在整个平台中创建了一致的视觉语言。
- **智能优先级系统：** 界面根据重要性进行更改。关键订单获得红色背景并保持在顶部。正常订单看起来很标准。已完成的项目会淡出，因此您会专注于需要注意的事项。前端标准化 这意味着无论用户在订单、库存还是报告部分，间距、排版和组件行为都保持一致。
- **标准化的加载和反馈：** 我们为系统如何与用户通信建立了统一的模式。加载状态、成功确认和错误消息现在在整个平台中遵循相同的视觉语言。
- **批量操作以提高效率：** 大型农场需要快速处理多个项目。我们为常见工作流程添加了批量编辑、模板创建和多选操作。
- **对比度和格式规则：** 我们通过建立清晰的格式规则解决了对比度问题。文本现在符合可访问性标准，背景提供适当的分离，即使在具有挑战性的观看条件下，重要信息也能清晰突出。
- **标准化的模态框架：** 所有弹出窗口现在都遵循一致的大小、定位和行为规则。页眉保持固定，内容平滑滚动，按钮出现在可预测的位置。这消除了混淆，并在不同功能之间创建了肌肉记忆。

## 下一步是什么

- **平台访问和真实用户测试：** 我们的首要任务是亲身体验实时平台。我们需要测试实际的工作流程，观察数据如何加载，并了解完整的用户旅程。截图只向我们展示了故事的一部分。我们还需要观察真实用户完成真实任务。这意味着与用户一起测试，以模拟不同季节的使用情况，处理紧急订单和管理合规性截止日期。接下来，我们将研究我们可以并且应该进一步改进的地方。
- **技术深入探讨：** 通过平台访问，我们可以评估静态设计中不可见的性能瓶颈、集成点和数据流问题。我们将评估我们的卡片系统在大型数据集下的性能，并确定优化机会。
- **缺失的界面模式：** 截图揭示了模态和表单问题，但我们还没有看到仪表板、报告界面或管理屏幕。每种界面类型都需要一致的设计模式，并可能揭示额外的标准化和优化机会。
- **移动和离线策略：** 我们需要测试移动性能并设计离线工作流程。农业用户经常遇到不稳定的互联网，因此了解当前的离线功能和限制至关重要。
- **集成和工作流程分析：** 农业订单涉及多个系统——天气应用、库存软件、合规平台、金融系统。用户目前在这些系统之间跳转，重新输入数据，在关键季节浪费时间。我们需要映射这些工作流程并设计无缝连接，以便信息在系统之间自动流动，而不需要在多个平台上进行手动数据输入。
- **可访问性和现场测试：** 真实的现场测试将揭示我们无法从截图中预见到的可访问性需求——例如抗眩光性、戴手套操作和语音控制要求。
- **高级功能和自动化：** 一旦我们了解了当前系统的功能，我们就可以设计智能功能，如预测性订购、天气集成和自动化合规性跟踪。
- **更好的导航和过滤：** 我们应该添加能够理解农业的智能过滤器。季节性产品会自动标记。紧急订单在视觉上脱颖而出。用户无需滚动浏览庞大的列表即可找到所需内容。
- **改进的数据输入和验证：** 表单验证实时进行，并提供清晰、有用的消息。必填字段很明显。自动保存可防止数据丢失。智能默认值可加快常见任务的速度。我们包含了一个CSV自动保存图标，但这只是一个非常原始的实现，用于加载和导出常见订单以加快流程。
- **更好的搜索和发现：** 按类别、供应商或季节更好地细分产品。最近的搜索和收藏夹使重复订单更快。
- **平台范围的模板系统：** 我们创建了一个可重用的布局模板，可在所有平台页面上使用，但我们需要更好地了解平台的整体情况，以创建更好的标准化，特别是对于国际化的独特案例。

这个路线图从了解我们真正的工作内容开始，然后逐步构建一个在所有条件和环境下为用户服务的综合性农业平台。我们非常期待进入这个项目的下一步。
`,
        typographyDescription: '展示应用程序中使用的所有文本样式。\n\n## 标题\n共有五个级别的标题可用。\n\n## 正文\n包括普通、粗体、斜体和下划线样式。',
        buttonDescription: '按钮允许用户通过单击来执行操作和做出选择。这是系统中使用的各种类型的按钮。',
        iconDescription: '图标用于直观地表示操作、对象或概念。我们使用 Ant Design 图标库。',
        gridDescription: '栅格系统采用24列布局，为内容排列提供了响应式和灵活的结构。',
        spaceDescription: '间距用于控制组件之间的水平和垂直间距。',
        dropdownDescription: '当用户单击按钮或触发器时，下拉菜单会显示一个选项列表。',
        checkboxDescription: '复选框允许用户从一个集合中选择一个或多个项目。',
        tableDescription: '表格用于展示多行数据。此示例展示了订单信息列表。',
        tagDescription: '标签用于标记和分类，例如订单优先级和状态。',
        formDescription: '表单组件在模态框中提供数据收集、验证和提交功能。',
        // Shared
        liveDemo: '现场演示',
        launchForm: '启动订单创建表单',
        editHint: '您可以使用 Markdown 进行格式化。对于图片，请使用 `![alt](url)`。',
        // Form Content
        createOrderTitle: '创建新农业订单',
        createOrderSubtitle: '作物供应、设备和物流管理',
        orderNumber: '订单号',
        customer: '客户',
        plannedDelivery: '计划交货日期',
        deliveryPurpose: '交货目的',
        orderRemarks: '订单备注',
        priorityLevel: '优先级',
        farmLocation: '农场位置',
        autoGenerated: '保存时自动生成',
        pleaseSelect: '请选择',
        selectDate: '月/日/年',
        selectPurpose: '请选择交货目的',
        selectFarm: '选择农场位置...',
        expandInstructions: '点击每个项目上的展开按钮以访问定价和备注',
        expandAll: '全部展开',
        collapseAll: '全部折叠',
        agriculturalProduct: '农产品',
        plannedQuantity: '计划数量',
        items: '项目',
        completed: '已完成',
        priority: '优先',
        total: '总计',
        copyTemplate: '复制模板',
        importCSV: '导入CSV',
        cancel: '取消',
        createOrder: '创建订单',
        complete: '完成',
        seasonal: '季节性',
    }
};

// --- DOCUMENTATION COMPONENTS ---

const CodeBlock = ({ children }) => (
    <Collapse bordered={false} style={{marginTop: 24}}>
        <Panel header={<Text><CodeOutlined /> Show Code</Text>} key="1" style={{background: '#f7f7f7', border: '1px solid #d9d9d9', borderRadius: '2px'}}>
            <pre style={{ margin: 0, background: '#2d2d2d', color: '#f8f8f2', padding: 16, borderRadius: 4, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                <code>{children}</code>
            </pre>
        </Panel>
    </Collapse>
);

const FormDocumentation = ({ t, language, content, setContent }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);
    const onFinish = (values) => {
        console.log('Form Values:', values);
        setIsModalVisible(false);
        Modal.success({ title: 'Order Created!', content: 'The new agriculture order has been successfully submitted.' });
    };
    const handleCreate = () => form.submit();

    return (
        <>
            <Button type="primary" onClick={showModal}>{t.launchForm}</Button>
            <Modal open={isModalVisible} onCancel={handleCancel} width={960} closable={false} title={null} footer={null} styles={{ body: { padding: 0, backgroundColor: '#f0f2f5' } }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #e8e8e8', backgroundColor: '#fff' }}>
                    <Row justify="space-between" align="middle">
                        <Col><Space align="center" size="middle"><Avatar shape="square" size={48} style={{ backgroundColor: '#27ae60' }} icon={<ContainerOutlined />} /><div><Title level={4} style={{ margin: 0 }}>{t.createOrderTitle}</Title><Text type="secondary">{t.createOrderSubtitle}</Text></div></Space></Col>
                        <Col><Space><Select value={language} onChange={(lang) => setContent({ ...content, currentLang: lang })} suffixIcon={<GlobalOutlined />}><Option value="en">English</Option><Option value="zh">中文</Option></Select><Button type="text" icon={<CloseOutlined />} onClick={handleCancel} /></Space></Col>
                    </Row>
                </div>
                <div style={{ padding: '24px', maxHeight: '65vh', overflowY: 'auto' }}>
                    <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ items: [{ product: 'Soybeans - Premium Grade', quantity: 1000 }] }}>
                        <Row gutter={24}>
                            <Col span={8}><Form.Item label={t.orderNumber}><Input value={t.autoGenerated} disabled /></Form.Item></Col>
                            <Col span={8}><Form.Item name="customer" label={t.customer} rules={[{ required: true }]}><Select placeholder={t.pleaseSelect}><Option value="cust1">Customer A</Option></Select></Form.Item></Col>
                            <Col span={8}><Form.Item name="plannedDeliveryDate" label={t.plannedDelivery} rules={[{ required: true }]}><DatePicker style={{ width: '100%' }} placeholder={t.selectDate} /></Form.Item></Col>
                            <Col span={8}><Form.Item name="deliveryPurpose" label={t.deliveryPurpose} rules={[{ required: true }]}><Select placeholder={t.selectPurpose}><Option value="comm">Commercial</Option></Select></Form.Item></Col>
                            <Col span={5}><Form.Item name="orderRemarks" label={t.orderRemarks}><Select placeholder={t.pleaseSelect} suffixIcon={<EditOutlined />}><Option value="1">Remark 1</Option></Select></Form.Item></Col>
                            <Col span={5}><Form.Item name="priorityLevel" label={t.priorityLevel}><Select defaultValue="normal"><Option value="normal">Normal Priority</Option></Select></Form.Item></Col>
                            <Col span={6}><Form.Item name="farmLocation" label={t.farmLocation} rules={[{ required: true }]}><Select placeholder={t.selectFarm}><Option value="loc1">Farm Location 1</Option></Select></Form.Item></Col>
                        </Row>
                        <Alert type="info" message={<Row justify="space-between"><Col>{t.expandInstructions}</Col><Col><Link style={{marginRight: 8}}>{t.expandAll}</Link><Link>{t.collapseAll}</Link></Col></Row>} style={{marginBottom: 16}} />
                        <Collapse bordered={false} defaultActiveKey={['1']} style={{ background: 'transparent' }}>
                            <Panel 
                                key="1" 
                                showArrow={false} 
                                style={{ background: '#fff', border: '1px solid #d9d9d9', borderRadius: 4, marginBottom: 16 }} 
                                header={
                                    <Row justify="space-between" align="middle" style={{width: '100%'}}>
                                        <Col>
                                            <Space align="center">
                                                <Avatar size={24} style={{ backgroundColor: '#27ae60', color: '#fff' }}>2</Avatar>
                                                <Tag style={{background: '#fff', border: '1px solid #d9d9d9'}}>{t.complete}</Tag>
                                                <Tag color="blue" icon={<CalendarOutlined />} style={{border: '1px solid #91d5ff'}}>{t.seasonal}</Tag>
                                            </Space>
                                        </Col>
                                        <Col>
                                            <Space>
                                                <Text strong>$2500.00</Text>
                                                <Button type="text" danger icon={<DeleteOutlined />} />
                                                <CaretDownOutlined />
                                            </Space>
                                        </Col>
                                    </Row>
                                }
                            >
                                <Divider style={{margin: '0 0 16px 0'}}/>
                                <Form.List name="items">{(fields) => (<>{fields.map(({ key, name, ...restField }) => (<div key={key}><Form.Item {...restField} name={[name, 'product']} label={t.agriculturalProduct} rules={[{ required: true }]}><Select placeholder={t.pleaseSelect}><Option value="Soybeans - Premium Grade">Soybeans - Premium Grade</Option></Select></Form.Item><Form.Item {...restField} name={[name, 'quantity']} label={t.plannedQuantity} rules={[{ required: true }]}><InputNumber placeholder="1000" style={{ width: '100%' }} addonAfter="Kg" /></Form.Item></div>))}</>)}</Form.List>
                            </Panel>
                        </Collapse>
                    </Form>
                </div>
                <div style={{ padding: '16px 24px', borderTop: '1px solid #e8e8e8', backgroundColor: '#fff' }}>
                    <Row justify="space-between" align="middle">
                        <Col><Space><Text>{t.items}: 3</Text><Text>{t.completed}: 3</Text><Text>{t.priority}: Normal</Text><Text strong>{t.total}: $25000.00</Text></Space></Col>
                        <Col><Space><Button icon={<CopyOutlined />}>{t.copyTemplate}</Button><Button icon={<ImportOutlined />}>{t.importCSV}</Button><Button onClick={handleCancel}>{t.cancel}</Button><Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>{t.createOrder}</Button></Space></Col>
                    </Row>
                </div>
            </Modal>
        </>
    );
};

const componentDocs = {
    overview: { demo: null, code: null },
    typography: { demo: <Card><Space direction="vertical" size="large"><Title level={1}>H1. Ant Design (38/46)</Title><Title level={2}>H2. Ant Design (30/38)</Title><Title level={3}>H3. Ant Design (24/32)</Title><Title level={4}>H4. Ant Design (20/28)</Title><Title level={5}>H5. Ant Design (16/24)</Title><div><Text>Base Normal (14/22)</Text><br/><Text strong>Base Strong (14/22)</Text><br/><Text underline>Base Underline (14/22)</Text><br/><Text italic>Base Italic (14/22)</Text></div></Space></Card>, code: `// Set in ConfigProvider theme\n<Title level={1}>H1. Title</Title>\n<Text>Base Text</Text>` },
    button: { demo: <Card><Space wrap><Button type="primary">Primary</Button><Button>Default</Button><Button type="dashed">Dashed</Button><Button type="text">Text</Button><Button type="link">Link</Button></Space></Card>, code: `<Button type="primary">Primary</Button>` },
    icon: { demo: <Card><Space size="large" wrap><HomeOutlined style={{fontSize: 24}} /><UserOutlined style={{fontSize: 24}} /><SettingOutlined style={{fontSize: 24}} /><SearchOutlined style={{fontSize: 24}} /><CopyOutlined style={{fontSize: 24}} /><DeleteOutlined style={{fontSize: 24}} /></Space></Card>, code: `import { HomeOutlined } from '@ant-design/icons';\n<HomeOutlined />` },
    grid: { demo: <Card><Row gutter={[16, 16]}><Col span={12}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-12</div></Col><Col span={12}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-12</div></Col><Col span={6}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-6</div></Col><Col span={6}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-6</div></Col><Col span={6}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-6</div></Col><Col span={6}><div style={{background: '#27ae6033', padding: '8px', borderRadius: 4}}>col-6</div></Col></Row></Card>, code: `<Row gutter={16}>\n  <Col span={12}>...</Col>\n  <Col span={12}>...</Col>\n</Row>` },
    space: { demo: <Card><Space direction="vertical"><Space><Button>A</Button><Button>B</Button><Button>C</Button></Space><Space direction="horizontal" size="large"><Button>A</Button><Button>B</Button><Button>C</Button></Space></Space></Card>, code: `<Space size="large">...</Space>` },
    dropdown: { demo: <Card><Dropdown overlay={<Menu><Menu.Item key="1">Item 1</Menu.Item><Menu.Item key="2">Item 2</Menu.Item></Menu>}><Button>Hover me <DownOutlined /></Button></Dropdown></Card>, code: `<Dropdown overlay={menu}>...</Dropdown>` },
    checkbox: { demo: <Card><Space direction="vertical"><Checkbox>Single Checkbox</Checkbox><Checkbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} /></Space></Card>, code: `<Checkbox>Label</Checkbox>\n<Checkbox.Group options={...} />` },
    table: { demo: <Card><Table columns={[ { title: 'ORDER NUMBER', dataIndex: 'orderNumber' }, { title: 'CUSTOMER', dataIndex: 'customer' }, { title: 'PLANNED DELIVERY', dataIndex: 'plannedDelivery' }, { title: 'PRIORITY', dataIndex: 'priority', render: (p) => <PriorityTag priority={p} /> }, { title: 'STATUS', dataIndex: 'status', render: (s) => <StatusTag status={s} /> }, ]} dataSource={inventoryData} pagination={{ pageSize: 5 }} /></Card>, code: `<Table columns={...} dataSource={...} />` },
    tag: { demo: <Card><Space><PriorityTag priority="urgent" /><StatusTag status="collected" /></Space></Card>, code: `<Tag color="volcano">Urgent</Tag>` },
    form: { demo: FormDocumentation, code: `<Modal><Form>...</Form></Modal>` },
};

// --- MAIN APP ---
const App = () => {
  const [selectedKey, setSelectedKey] = useState('overview');
  const [content, setContent] = useState({ ...initialContent, currentLang: 'en' });
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(null);
  const [toc, setToc] = useState([]);

  const t = content[content.currentLang];
  const descriptionKey = `${selectedKey}Description`;
  
  // Effect to parse markdown and generate Table of Contents
  useEffect(() => {
    const currentDescription = t[descriptionKey] || '';
    const headingRegex = /^(#{1,6})\s+(.*)/gm; // Look for H1-H6
    
    const newToc = [];
    let match;
    while ((match = headingRegex.exec(currentDescription)) !== null) {
        const title = match[2].trim();
        // rehype-slug creates IDs like this:
        const href = '#' + title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
        newToc.push({ level: match[1].length, title, href });
    }
    
    if (componentDocs[selectedKey]?.demo) {
        newToc.push({ level: 2, title: t.liveDemo, href: '#demo' });
    }

    setToc(newToc);
  }, [selectedKey, content, t, descriptionKey]);

  const handleEdit = () => {
      setTempContent(content);
      setIsEditing(true);
  };
  
  const handleSave = () => {
      setContent(tempContent);
      setIsEditing(false);
      setTempContent(null);
  };

  const handleCancelEdit = () => {
      setIsEditing(false);
      setTempContent(null);
  };

  const handleContentChange = (key, value) => {
      setTempContent(prev => ({
          ...prev,
          [content.currentLang]: {
              ...prev[content.currentLang],
              [key]: value,
          }
      }));
  };

  const selectedDoc = componentDocs[selectedKey];
  const DemoComponent = selectedDoc?.demo;

  const getFontFamily = () => {
      return content.currentLang === 'zh' ? "'Source Han Sans CN', sans-serif" : "'Quicksand', sans-serif";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Source+Han+Sans+CN:wght@400;700&display=swap');
        body { font-family: ${getFontFamily()}; }
        .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
            font-family: ${getFontFamily()};
        }
        .markdown-body img { max-width: 100%; }
      `}</style>
      <ConfigProvider 
        theme={{ 
          token: { 
            colorPrimary: '#27ae60', 
            colorLink: '#27ae60',
            fontFamily: getFontFamily(),
          },
          components: {
            Typography: {
              fontSizeHeading1: 38, lineHeightHeading1: 46/38,
              fontSizeHeading2: 30, lineHeightHeading2: 38/30,
              fontSizeHeading3: 24, lineHeightHeading3: 32/24,
              fontSizeHeading4: 20, lineHeightHeading4: 28/20,
              fontSizeHeading5: 16, lineHeightHeading5: 24/16,
            }
          }
        }}
      >
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 24px' }}>
              <Title level={3} style={{ color: '#27ae60', margin: 0 }}><AppstoreOutlined style={{marginRight: 8}}/>{t.appTitle}</Title>
              <Select value={content.currentLang} onChange={(lang) => setContent({ ...content, currentLang: lang })}>
                  <Option value="en">English</Option>
                  <Option value="zh">中文</Option>
              </Select>
          </Header>
          <Layout>
            <Sider width={240} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
              <Menu mode="inline" selectedKeys={[selectedKey]} style={{ height: '100%', borderRight: 0 }} onClick={({key}) => setSelectedKey(key)}>
                <Menu.Item key="overview">{t.overview}</Menu.Item>
                <Menu.ItemGroup key="g1" title={t.general}><Menu.Item key="button">{t.button}</Menu.Item><Menu.Item key="icon">{t.icon}</Menu.Item><Menu.Item key="typography">{t.typography}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title={t.layout}><Menu.Item key="grid">{t.grid}</Menu.Item><Menu.Item key="space">{t.space}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g3" title={t.dataDisplay}><Menu.Item key="table">{t.table}</Menu.Item><Menu.Item key="tag">{t.tag}</Menu.Item><Menu.Item key="dropdown">{t.dropdown}</Menu.Item></Menu.ItemGroup>
                <Menu.ItemGroup key="g4" title={t.dataEntry}><Menu.Item key="form">{t.form}</Menu.Item><Menu.Item key="checkbox">{t.checkbox}</Menu.Item></Menu.ItemGroup>
              </Menu>
            </Sider>
            <Content style={{ padding: '24px', background: '#fff', display: 'flex' }}>
               <div style={{ flex: 1, minWidth: 0, paddingRight: '24px' }}>
                    <Space style={{marginBottom: 16}}>
                        {isEditing ? (
                            <Input value={tempContent[content.currentLang][selectedKey]} onChange={(e) => handleContentChange(selectedKey, e.target.value)} style={{width: 300}} />
                        ) : (
                            <Title id="overview" style={{margin: 0}}>{t[selectedKey]}</Title>
                        )}
                        {isEditing ? (
                            <Space>
                                <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>Save</Button>
                                <Button icon={<CloseOutlined />} onClick={handleCancelEdit}>Cancel</Button>
                            </Space>
                        ) : (
                            <Button type="text" icon={<EditOutlined />} onClick={handleEdit} />
                        )}
                    </Space>
                    {isEditing ? (
                        <>
                          <TextArea rows={15} value={tempContent[content.currentLang][descriptionKey]} onChange={(e) => handleContentChange(descriptionKey, e.target.value)} />
                          <Text type="secondary">{t.editHint}</Text>
                        </>
                    ) : (
                        <div className="markdown-body">
                           <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSlug]}>{t[descriptionKey]}</ReactMarkdown>
                        </div>
                    )}
                    {selectedDoc?.demo && <><Title level={2} id="demo">{t.liveDemo}</Title>{typeof DemoComponent === 'function' ? <DemoComponent t={t} language={content.currentLang} content={content} setContent={setContent} /> : DemoComponent}</>}
                    {selectedDoc?.code && <CodeBlock>{selectedDoc.code}</CodeBlock>}
               </div>
               <div style={{ width: 200, flexShrink: 0 }}>
                    <Anchor affix={true} offsetTop={80} targetOffset={80}>
                        <AnchorLink href="#overview" title={t[selectedKey]} />
                        {toc.map(item => (
                            <AnchorLink key={item.href} href={item.href} title={item.title} style={{ paddingLeft: (item.level - 1) * 16 }} />
                        ))}
                    </Anchor>
               </div>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default App;
