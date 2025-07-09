// Server-side content configuration for Express.js app
// Based on src/content.js but adapted for server-side rendering

const marked = require('marked');

// This object holds all the editable text content (titles and descriptions).
const initialContent = {
    en: {
        appTitle: 'Cosmos Codex',
        overview: 'Overview',
        general: 'General',
        layout: 'Layout',
        dataDisplay: 'Data Display',
        dataEntry: 'Data Entry',
        
        // Page content
        colors: 'Colors',
        button: 'Button',
        icon: 'Icon',
        typography: 'Typography',
        inventory: 'Inventory',
        form: 'Form',
        
        // Descriptions
        overviewDescription: `# COSMOS Agricultural Design System

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

This roadmap starts with understanding what we're really working with, then builds toward a comprehensive agricultural platform that serves users in all conditions and contexts. We are very excited to advance in the next step of this project.`,

        formDescription: 'Form provides data collection functionality in a modal.',
        inventoryDescription: 'A full-page inventory management interface, launched in a wide modal.',
        colorsDescription: 'Color palette and usage guidelines for the design system.',
        buttonDescription: 'Button components with various states and styles.',
        iconDescription: 'Icon library and usage guidelines.',
        typographyDescription: 'Typography scale and text styling guidelines.',
        
        // Form specific content
        launchForm: 'Launch Order Creation Form',
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
        
        // Inventory specific content
        launchInventory: 'Launch Inventory Demo',
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
        route: 'Route',
        weight: 'Weight',
        status: 'Status',
        actions: 'Actions',
        details: 'Details',
        high: 'High',
        low: 'Low',
        normal: 'Normal',
        collected: 'COLLECTED',
        
        // Navigation
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
        
        // Demo labels
        liveDemo: 'Live Demo',
        editHint: 'You can use Markdown for formatting. For images, use ![alt](url).',
        note: 'Note: The live demo does not update in real-time from the editor. This requires a local development environment.'
    },
    
    zh: {
        appTitle: 'Cosmos Codex',
        overview: '概览',
        general: '通用',
        layout: '布局',
        dataDisplay: '数据展示',
        dataEntry: '数据录入',
        
        // Page content
        colors: '颜色',
        button: '按钮',
        icon: '图标',
        typography: '字体排版',
        inventory: '库存',
        form: '表单',
        
        // Descriptions - Chinese versions would go here
        overviewDescription: `# COSMOS 农业设计系统

这是我们为 COSMOS 开发此设计系统的第一步，基于截图和关于界面问题的具体反馈。虽然这给了我们对当前问题的宝贵见解 - 这也意味着我们正在处理有限的信息。

要做我们最好的工作，我们真的需要使用实际的平台。我们需要点击工作流程，测试不同的用户场景，并看看系统在真实条件下的行为表现。截图可以显示布局问题，但它们无法揭示数据如何加载、错误如何处理，或系统在峰值使用期间的表现。

该提案解决了我们可以看到和预期的具体问题，但这只是起点。一旦我们可以与实时平台交互，我们将发现在静态图像中看不到的额外改进机会。

农业行业有独特的需求 - 季节性工作流程、合规要求、天气依赖性和田间作业。这些复杂性需要实际测试才能真正理解界面应该如何适应和响应。

我们在这里呈现的内容修复了明显的问题并建立了坚实的基础。但真正的设计系统工作始于我们可以观察实际用户在实时平台上完成真实任务时。

## 我们改变了什么

- **使文本可读且对国际友好：** 我们标准化了字体大小，使布局对不同语言友好，同时不失可读性。这有助于每个人更好地阅读，特别是当文本在其他语言中变长时。我们还使输入字段变得灵活，这样在翻译成需要更多空间的语言时它们不会中断。

此路径图从了解我们真正在处理什么开始，然后建立一个在所有条件和环境中为用户服务的全面农业平台。我们非常兴奋能在这个项目的下一步中前进。`,
        
        // Add other Chinese translations...
        formDescription: '表单在模态框中提供数据收集功能。',
        inventoryDescription: '在宽模态框中启动的全页面库存管理界面。',
        
        // Form content in Chinese
        launchForm: '启动订单创建表单',
        createOrderTitle: '创建新农业订单',
        createOrderSubtitle: '农作物供应、设备和物流管理',
        cancel: '取消',
        createOrder: '创建订单',
        
        // Demo labels
        liveDemo: '实时演示',
        note: '注意：实时演示不会从编辑器实时更新。这需要本地开发环境。'
    }
};

// Export for server use
module.exports = {
    initialContent,
    marked
};