import React from 'react';

// Import all demo components
import AvatarDemo from './components/demos/AvatarDemo';
import BadgeDemo from './components/demos/BadgeDemo';
import ButtonDemo from './components/demos/ButtonDemo';
import CalendarDemo from './components/demos/CalendarDemo';
import CardDemo from './components/demos/CardDemo';
import CarouselDemo from './components/demos/CarouselDemo';
import CheckboxDemo from './components/demos/CheckboxDemo';
import CollapseDemo from './components/demos/CollapseDemo';
import DescriptionsDemo from './components/demos/DescriptionsDemo';
import DividerDemo from './components/demos/DividerDemo';
import DropdownDemo from './components/demos/DropdownDemo';
import EmptyDemo from './components/demos/EmptyDemo';
import FormDocumentation from './components/demos/FormDemo';
import GridDemo from './components/demos/GridDemo';
import IconDemo from './components/demos/IconDemo';
import ImageDemo from './components/demos/ImageDemo';
import LayoutDemo from './components/demos/LayoutDemo';
import ListDemo from './components/demos/ListDemo';
import PopoverDemo from './components/demos/PopoverDemo';
import SegmentedDemo from './components/demos/SegmentedDemo';
import SpaceDemo from './components/demos/SpaceDemo';
import StatisticDemo from './components/demos/StatisticDemo';
import TableDemo from './components/demos/TableDemo';
import TagDemo from './components/demos/TagDemo';
import TimelineDemo from './components/demos/TimelineDemo';
import TooltipDemo from './components/demos/TooltipDemo';
import TreeDemo from './components/demos/TreeDemo';
import TypographyDemo from './components/demos/TypographyDemo';
import InventoryDemo from './components/demos/InventoryDemo'; // <-- Import the new demo

// This object holds the JSX for live demos and the corresponding code strings.
export const componentData = {
    overview: { demo: null, code: null },
    // General
    button: { demo: <ButtonDemo />, code: `import { Button } from 'antd';` },
    icon: { demo: <IconDemo />, code: `import { HomeOutlined } from '@ant-design/icons';` },
    typography: { demo: <TypographyDemo />, code: `import { Typography } from 'antd';` },
    // Layout
    divider: { demo: <DividerDemo />, code: `import { Divider } from 'antd';` },
    grid: { demo: <GridDemo />, code: `import { Row, Col } from 'antd';` },
    layout: { demo: <LayoutDemo />, code: `import { Layout } from 'antd';` },
    space: { demo: <SpaceDemo />, code: `import { Space } from 'antd';` },
    // Data Display
    inventory: { demo: InventoryDemo, code: `<Modal open={...} width="95%"><InventoryStandalone /></Modal>` },
    avatar: { demo: <AvatarDemo />, code: `import { Avatar } from 'antd';` },
    badge: { demo: <BadgeDemo />, code: `import { Badge } from 'antd';` },
    calendar: { demo: <CalendarDemo />, code: `import { Calendar } from 'antd';` },
    card: { demo: <CardDemo />, code: `import { Card } from 'antd';` },
    carousel: { demo: <CarouselDemo />, code: `import { Carousel } from 'antd';` },
    collapse: { demo: <CollapseDemo />, code: `import { Collapse } from 'antd';` },
    descriptions: { demo: <DescriptionsDemo />, code: `import { Descriptions } from 'antd';` },
    empty: { demo: <EmptyDemo />, code: `import { Empty } from 'antd';` },
    image: { demo: <ImageDemo />, code: `import { Image } from 'antd';` },
    list: { demo: <ListDemo />, code: `import { List } from 'antd';` },
    popover: { demo: <PopoverDemo />, code: `import { Popover } from 'antd';` },
    segmented: { demo: <SegmentedDemo />, code: `import { Segmented } from 'antd';` },
    statistic: { demo: <StatisticDemo />, code: `import { Statistic } from 'antd';` },
    table: { demo: <TableDemo />, code: `import { Table } from 'antd';` },
    tag: { demo: <TagDemo />, code: `import { Tag } from 'antd';` },
    timeline: { demo: <TimelineDemo />, code: `import { Timeline } from 'antd';` },
    tooltip: { demo: <TooltipDemo />, code: `import { Tooltip } from 'antd';` },
    tree: { demo: <TreeDemo />, code: `import { Tree } from 'antd';` },
    dropdown: { demo: <DropdownDemo />, code: `import { Dropdown } from 'antd';` },
    // Data Entry
    checkbox: { demo: <CheckboxDemo />, code: `import { Checkbox } from 'antd';` },
    form: { demo: FormDocumentation, code: `<Modal><Form>...</Form></Modal>` },
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
        inventory: 'Inventory',
        avatar: 'Avatar', badge: 'Badge', button: 'Button', calendar: 'Calendar', card: 'Card', carousel: 'Carousel', checkbox: 'Checkbox', collapse: 'Collapse', descriptions: 'Descriptions', divider: 'Divider', dropdown: 'Dropdown', empty: 'Empty', form: 'Form', grid: 'Grid', icon: 'Icon', image: 'Image', layout: 'Layout', list: 'List', popover: 'Popover', segmented: 'Segmented', space: 'Space', statistic: 'Statistic', table: 'Table', tag: 'Tag', timeline: 'Timeline', tooltip: 'Tooltip', tree: 'Tree', typography: 'Typography',
        // Descriptions
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
        inventoryDescription: 'A full-page inventory management interface, launched in a wide modal.',
        avatarDescription: 'Avatars can be used to represent people or objects.',
        badgeDescription: 'Small numerical value or status descriptor for UI elements.',
        buttonDescription: 'To trigger an operation.',
        calendarDescription: 'A container for displaying data in a calendar layout.',
        cardDescription: 'Simple rectangular container.',
        carouselDescription: 'A slideshow component for cycling through elements.',
        checkboxDescription: 'Checkbox component.',
        collapseDescription: 'A content area which can be collapsed and expanded.',
        descriptionsDescription: 'Display a list of key-value pairs.',
        dividerDescription: 'A divider line separates content.',
        dropdownDescription: 'A dropdown menu.',
        emptyDescription: 'Empty state placeholder.',
        formDescription: 'Form provides data collection functionality in a modal.',
        gridDescription: '24-column responsive grid system.',
        iconDescription: 'To represent actions and concepts.',
        imageDescription: 'Image display component.',
        layoutDescription: 'The layout wrapper, for wrapping a page structure.',
        listDescription: 'A component for displaying list data.',
        popoverDescription: 'The floating card popped by clicking or hovering.',
        segmentedDescription: 'A group of segments.',
        spaceDescription: 'Set spacing between components.',
        statisticDescription: 'Displays a statistic number.',
        tableDescription: 'A table displays rows of data.',
        tagDescription: 'Tag for categorization.',
        timelineDescription: 'Vertical display of a series of information.',
        tooltipDescription: 'A simple text popup tip.',
        treeDescription: 'A hierarchical list structure.',
        typographyDescription: 'Basic text writing.',
        // Form Content
        launchForm: 'Launch Order Creation Form',
        editHint: 'You can use Markdown for formatting. For images, use `![alt](url)`.',
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
        // Standalone Page Translations
        prodMgmtSystem: 'Production Management System',
        agriInfoSystem: 'Agricultural Information System',
        orderInfo: 'Order Information',
        bayerBase: 'Bayer Kanguru Base',
        bayerProduct: 'Bayer Product (Group Management)',
        totalOrders: (n) => `Total ${n} orders`,
        updated: (m) => `Updated ${m} min ago`,
        urgent: 'urgent',
        scheduledReports: 'Order Scheduled Reports',
        customerInfo: 'Customer Information',
        all: 'All',
        pending: 'Pending',
        dispatched: 'Dispatched',
        canceled: 'Canceled',
        searchPlaceholder: 'Search orders, customers, routes...',
        returnStatus: 'Return status',
        collectionStatus: 'Collection status',
        dispatch: 'Dispatch',
        anyCustomer: 'Any customer',
        dates: 'Dates',
        anyRoute: 'Any route',
        activeFilters: 'Active filters',
        notDispatched: 'not dispatched',
        clearAll: 'Clear all',
        route: 'ROUTE',
        weight: 'WEIGHT',
        status: 'STATUS',
        actions: 'ACTIONS',
        details: 'Details',
        high: 'High',
        low: 'Low',
        normal: 'Normal',
        collected: 'Collected',
        basicInfo: 'Basic Information',
        seedManagement: 'Seed Management',
        envMonitoring: 'Environmental Monitoring',
        cropProtection: 'Crop Protection',
        fieldOps: 'Field Operations',
        payroll: 'Payroll Management',
        yieldForecasting: 'Yield Forecasting',
        realtimeDashboard: 'Real-time Dashboard',
        inventoryManagement: 'Inventory Management',
        packaging: 'Packaging Management',
    },
    zh: {
        appTitle: 'Cosmos Codex',
        overview: '概述',
        general: '通用',
        layout: '布局',
        dataDisplay: '数据展示',
        dataEntry: '数据录入',
        // Components
        inventory: '库存',
        avatar: '头像', badge: '徽标数', button: '按钮', calendar: '日历', card: '卡片', carousel: '走马灯', checkbox: '复选框', collapse: '折叠面板', descriptions: '描述列表', divider: '分割线', dropdown: '下拉菜单', empty: '空状态', form: '表单', grid: '栅格', icon: '图标', image: '图片', layout: '布局', list: '列表', popover: '气泡卡片', segmented: '分段控制器', space: '间距', statistic: '统计数值', table: '表格', tag: '标签', timeline: '时间轴', tooltip: '文字提示', tree: '树形控件', typography: '排版',
        // Descriptions
        inventoryDescription: '一个在宽模态框中启动的完整库存管理界面演示。',
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
        avatarDescription: '头像可用于代表人物或对象。',
        badgeDescription: '用于 UI 元素的小数值或状态描述符。',
        buttonDescription: '用于触发一个操作。',
        calendarDescription: '用于在日历布局中显示数据的容器。',
        cardDescription: '简单的矩形容器。',
        carouselDescription: '用于循环显示元素的幻灯片组件。',
        checkboxDescription: '复选框组件。',
        collapseDescription: '可以折叠和展开的内容区域。',
        descriptionsDescription: '显示键值对列表。',
        dividerDescription: '分割线用于分隔内容。',
        dropdownDescription: '下拉菜单。',
        emptyDescription: '空状态占位符。',
        formDescription: '表单提供数据收集功能。',
        gridDescription: '24列响应式网格系统。',
        iconDescription: '用于表示操作和概念。',
        imageDescription: '图片显示组件。',
        layoutDescription: '布局容器，用于包裹页面结构。',
        listDescription: '用于显示列表数据的组件。',
        popoverDescription: '通过单击或悬停弹出的浮动卡片。',
        segmentedDescription: '一组分段。',
        spaceDescription: '设置组件之间的间距。',
        statisticDescription: '显示统计数字。',
        tableDescription: '用于展示多行数据。',
        tagDescription: '用于分类的标签。',
        timelineDescription: '垂直显示一系列信息。',
        tooltipDescription: '简单的文本弹出提示。',
        treeDescription: '层次列表结构。',
        typographyDescription: '基本的文本写作。',
        // Form Content
        launchForm: '启动订单创建表单',
        editHint: '您可以使用 Markdown 进行格式化。对于图片，请使用 `![alt](url)`。',
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
        // Standalone Page Translations
        prodMgmtSystem: '生产管理系统',
        agriInfoSystem: '农业信息系统',
        orderInfo: '订单信息',
        bayerBase: '拜耳康古鲁基地',
        bayerProduct: '拜耳产品（集团管理）',
        totalOrders: (n) => `共 ${n} 个订单`,
        updated: (m) => `${m} 分钟前更新`,
        urgent: '紧急',
        scheduledReports: '订单预定报告',
        customerInfo: '客户信息',
        all: '全部',
        pending: '待处理',
        dispatched: '已发货',
        canceled: '已取消',
        searchPlaceholder: '搜索订单、客户、路线...',
        returnStatus: '退货状态',
        collectionStatus: '收款状态',
        dispatch: '发货',
        anyCustomer: '任何客户',
        dates: '日期',
        anyRoute: '任何路线',
        activeFilters: '活动过滤器',
        notDispatched: '未发货',
        clearAll: '全部清除',
        route: '路线',
        weight: '重量',
        status: '状态',
        actions: '操作',
        details: '详情',
        high: '高',
        low: '低',
        normal: '正常',
        collected: '已收款',
        basicInfo: '基础信息',
        seedManagement: '种子管理',
        envMonitoring: '环境监测',
        cropProtection: '作物保护',
        fieldOps: '田间作业',
        payroll: '薪资管理',
        yieldForecasting: '产量预测',
        realtimeDashboard: '实时仪表板',
        inventoryManagement: '库存管理',
        packaging: '包装管理',
    }
};
