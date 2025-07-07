import React from 'react';
import {
  Typography,
  Table,
  Tag,
  Row,
  Col,
  Card,
  Dropdown,
  Checkbox,
  Menu,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  SearchOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
} from '@ant-design/icons';

// Import all demo components
import ButtonDemo from './components/demos/ButtonDemo';
import CheckboxDemo from './components/demos/CheckboxDemo';
import DropdownDemo from './components/demos/DropdownDemo';
import FormDocumentation from './components/demos/FormDemo';
import GridDemo from './components/demos/GridDemo';
import IconDemo from './components/demos/IconDemo';
import SpaceDemo from './components/demos/SpaceDemo';
import TableDemo from './components/demos/TableDemo';
import TagDemo from './components/demos/TagDemo';
import TypographyDemo from './components/demos/TypographyDemo';


// This object holds the JSX for live demos and the corresponding code strings.
export const componentData = {
    overview: { demo: null, code: null },
    typography: { 
        demo: <TypographyDemo />, 
        code: `// Set in ConfigProvider theme\n<Title level={1}>H1. Title</Title>\n<Text>Base Text</Text>` 
    },
    button: { 
        demo: <ButtonDemo />, 
        code: `import { Button, Space } from 'antd';\nimport { SearchOutlined } from '@ant-design/icons';\n\n<Space wrap>\n  <Button type="primary">Primary</Button>\n  <Button>Default</Button>\n  <Button type="dashed">Dashed</Button>\n  <Button type="primary" icon={<SearchOutlined />}>Search</Button>\n  <Button type="primary" loading>Loading</Button>\n  <Button type="primary" danger>Danger</Button>\n</Space>` 
    },
    icon: { 
        demo: <IconDemo />, 
        code: `import { HomeOutlined } from '@ant-design/icons';\n<HomeOutlined />` 
    },
    grid: { 
        demo: <GridDemo />, 
        code: `<Row gutter={16}>\n  <Col span={12}>...</Col>\n  <Col span={12}>...</Col>\n</Row>` 
    },
    space: { 
        demo: <SpaceDemo />, 
        code: `<Space size="large">...</Space>` 
    },
    dropdown: { 
        demo: <DropdownDemo />, 
        code: `<Dropdown overlay={menu}>...</Dropdown>` 
    },
    checkbox: { 
        demo: <CheckboxDemo />, 
        code: `<Checkbox>Label</Checkbox>\n<Checkbox.Group options={...} />` 
    },
    table: { 
        demo: <TableDemo />, 
        code: `<Table columns={...} dataSource={...} />` 
    },
    tag: { 
        demo: <TagDemo />, 
        code: `<Tag color="volcano">Urgent</Tag>` 
    },
    form: { 
        demo: FormDocumentation, 
        code: `<Modal open={...} styles={{ body: { padding: 0 } }}>\n  {/* Custom Header, Body, and Footer */}\n  <Form>...</Form>\n</Modal>` 
    },
};

// This object holds all the editable text content (titles and descriptions).
export const initialContent = {
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

## What We Changed
- **Made Text Readable and International-Friendly:** We standardized a font size that would make the layout friendly for different languages without losing readability. 
- **Replaced Tables with Smart Cards:** The biggest change was switching from rigid tables to flexible cards. 
- **Added Show/Hide for Complex Information:** Not every user needs every detail every time. Essential info like product name and quantity stay visible.
- **Visual Cues:** Colors now have specific meanings: green for good/complete, red for urgent/weather-critical, orange for attention needed, blue for informational.

## What's Next
- **Platform Access and Real User Testing:** Our first priority is getting hands-on access to the live platform.
- **Technical Deep Dive:** With platform access, we can assess performance bottlenecks, integration points, and data flow issues.
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

这是我们为 COSMOS 开发此设计系统的第一步，基于截图和关于界面问题的具体反馈。

## 我们改变了什么
- **使文本可读且对国际友好：** 我们标准化了字体大小，使布局对不同语言友好，同时不失可读性。
- **用智能卡片替换表格：** 最大的变化是从刚性表格转换到灵活的卡片。
- **为复杂信息添加显示/隐藏功能：** 并非每个用户每次都需要每个细节。
- **视觉提示：** 颜色现在具有特定含义：绿色表示良好/完成，红色表示紧急/天气关键，橙色表示需要注意，蓝色表示信息性。

## 下一步是什么
- **平台访问和真实用户测试：** 我们的首要任务是亲身体验实时平台。
- **技术深入探讨：** 通过平台访问，我们可以评估性能瓶颈、集成点和数据流问题。
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
