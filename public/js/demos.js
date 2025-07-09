// Demo functionality for Form and Inventory components

document.addEventListener('DOMContentLoaded', function() {
    initFormDemo();
    initInventoryDemo();
});

function initFormDemo() {
    const launchFormBtn = document.getElementById('launchFormBtn');
    
    if (launchFormBtn) {
        launchFormBtn.addEventListener('click', function() {
            showFormModal();
        });
    }
}

function initInventoryDemo() {
    const launchInventoryBtn = document.getElementById('launchInventoryBtn');
    
    if (launchInventoryBtn) {
        launchInventoryBtn.addEventListener('click', function() {
            showInventoryModal();
        });
    }
}

function showFormModal() {
    const modalContainer = document.getElementById('modalContainer');
    
    const modalHTML = `
        <div class="modal-overlay" id="formModalOverlay">
            <div class="modal-content form-modal">
                <div class="modal-header">
                    <div class="modal-title-section">
                        <div class="title-icon">
                            <svg class="anticon" viewBox="64 64 896 896" width="48" height="48">
                                <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 256a4 4 0 00-4 4v58c0 2.2 1.8 4 4 4h224c2.2 0 4-1.8 4-4v-58c0-2.2-1.8-4-4-4H572zm0 192a4 4 0 00-4 4v58c0 2.2 1.8 4 4 4h224c2.2 0 4-1.8 4-4v-58c0-2.2-1.8-4-4-4H572zM236 320h200c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H236c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm200 192H236c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h200c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                            </svg>
                        </div>
                        <div class="title-text">
                            <h4>Create New Agriculture Order</h4>
                            <p>Crop supplies, equipment & logistics management</p>
                        </div>
                    </div>
                    <button class="modal-close-btn" onclick="closeModal('formModalOverlay')">
                        <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3.1-3.6-7.6-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3.1 3.6 7.6 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="modal-body">
                    <form class="form-demo" onsubmit="handleFormSubmit(event)">
                        <div class="form-row">
                            <div class="form-item">
                                <label>Order Number</label>
                                <input type="text" value="Auto-generated on save" disabled class="ant-input">
                            </div>
                            <div class="form-item">
                                <label><span class="required">*</span> Customer</label>
                                <select class="ant-select">
                                    <option value="">Please select</option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                </select>
                            </div>
                            <div class="form-item">
                                <label><span class="required">*</span> Planned Delivery Date</label>
                                <input type="date" class="ant-input" placeholder="mm/dd/yy">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-item">
                                <label><span class="required">*</span> Delivery Purpose</label>
                                <select class="ant-select">
                                    <option value="">Please select delivery purpose</option>
                                    <option value="purpose1">Field Application</option>
                                    <option value="purpose2">Storage</option>
                                </select>
                            </div>
                            <div class="form-item">
                                <label>Order Remarks</label>
                                <select class="ant-select">
                                    <option value="">Please select</option>
                                    <option value="remark1">Urgent</option>
                                    <option value="remark2">Standard</option>
                                </select>
                            </div>
                            <div class="form-item">
                                <label>Priority Level</label>
                                <select class="ant-select">
                                    <option value="normal" selected>Normal Priority</option>
                                    <option value="high">High Priority</option>
                                    <option value="low">Low Priority</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-item">
                                <label><span class="required">*</span> Farm Location</label>
                                <select class="ant-select">
                                    <option value="">Select farm location...</option>
                                    <option value="farm1">Farm Location 1</option>
                                    <option value="farm2">Farm Location 2</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-alert">
                            <div class="alert-content">
                                <div class="alert-text">Click the expand button on each item to access pricing and remarks</div>
                                <div class="alert-actions">
                                    <button type="button" class="expand-btn">Expand All</button>
                                    <button type="button" class="collapse-btn">Collapse All</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="order-items">
                            <div class="order-item expanded">
                                <div class="item-header" onclick="toggleOrderItem(this)">
                                    <div class="item-info">
                                        <span class="item-number">2</span>
                                        <span class="item-status">Complete</span>
                                        <span class="item-tag">
                                            <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                                <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32z"></path>
                                            </svg>
                                            Seasonal
                                        </span>
                                    </div>
                                    <div class="item-actions">
                                        <strong>$2500.00</strong>
                                        <button type="button" class="delete-btn">
                                            <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h48v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h48v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.1 0 62.3-26.9 63.9-61l24.7-523H896c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z"></path>
                                            </svg>
                                        </button>
                                        <svg class="anticon expand-icon" viewBox="64 64 896 896" width="14" height="14">
                                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="item-details">
                                    <div class="form-row">
                                        <div class="form-item">
                                            <label><span class="required">*</span> Agricultural Product</label>
                                            <select class="ant-select">
                                                <option value="">Select product</option>
                                                <option value="soybeans" selected>Soybeans - Premium Grade</option>
                                                <option value="corn">Corn Seeds</option>
                                            </select>
                                        </div>
                                        <div class="form-item">
                                            <label><span class="required">*</span> Planned Quantity</label>
                                            <div class="quantity-input">
                                                <input type="number" value="1000" class="ant-input-number">
                                                <span class="unit">Kg</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-footer">
                            <div class="summary-info">
                                <div class="summary-stats">
                                    <span>Items: 3</span>
                                    <span>Completed: 3</span>
                                    <span>Priority: Normal</span>
                                    <strong>Total: $25000.00</strong>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="left-actions">
                                    <button type="button" class="ant-btn">
                                        <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"></path>
                                        </svg>
                                        Copy Template
                                    </button>
                                    <button type="button" class="ant-btn">
                                        <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                            <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7z"></path>
                                        </svg>
                                        Import CSV
                                    </button>
                                </div>
                                <div class="right-actions">
                                    <button type="button" class="ant-btn" onclick="closeModal('formModalOverlay')">Cancel</button>
                                    <button type="submit" class="ant-btn ant-btn-primary">Create Order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    modalContainer.innerHTML = modalHTML;
    document.body.style.overflow = 'hidden';
}

function showInventoryModal() {
    const modalContainer = document.getElementById('modalContainer');
    
    const modalHTML = `
        <div class="modal-overlay" id="inventoryModalOverlay">
            <div class="modal-content inventory-modal">
                <div class="inventory-layout">
                    <div class="inventory-sidebar">
                        <div class="sidebar-header">
                            <div class="system-title">
                                <h5>COSMOS Smart Future</h5>
                                <p>Agricultural Information System</p>
                            </div>
                        </div>
                        <div class="inventory-menu">
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z"></path>
                                </svg>
                                Basic Information
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v224h249.9c17.7 0 32-14.3 32-32V614.3H901c35.3 0 64-28.7 64-64 0-17-6.7-33.3-18.5-45.3z"></path>
                                </svg>
                                Seed Management
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Environmental Monitoring
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Crop Protection
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Field Operations
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Payroll Management
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Yield Forecasting
                            </div>
                            <div class="menu-item">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                </svg>
                                Real-time Dashboard
                            </div>
                            <div class="menu-item active">
                                <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                    <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"></path>
                                </svg>
                                Inventory Management
                                <div class="submenu">
                                    <div class="submenu-item active">Order Information</div>
                                    <div class="submenu-item">Material Information</div>
                                    <div class="submenu-item">Warehouse Information</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="inventory-main">
                        <div class="inventory-header">
                            <div class="header-title">
                                <h4>Production Management System</h4>
                                <p>Inventory Management / Order Information</p>
                            </div>
                            <div class="header-user">
                                <div class="user-badge">
                                    <strong>Bayer Kanguru Base</strong>
                                    <span class="badge-dot"></span>
                                </div>
                                <div class="user-info">
                                    <div class="user-avatar">BP</div>
                                    <span>Bayer Product (Group Management)</span>
                                    <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="inventory-content">
                            <div class="page-header">
                                <div class="page-title">
                                    <h2>Order Information</h2>
                                    <div class="status-indicators">
                                        <div class="status-item">
                                            <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z"></path>
                                            </svg>
                                            Total 247 orders
                                        </div>
                                        <div class="status-item">
                                            <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                            </svg>
                                            Updated 2 min ago
                                        </div>
                                        <div class="status-item urgent">
                                            <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                            </svg>
                                            2 urgent
                                        </div>
                                    </div>
                                </div>
                                <div class="page-actions">
                                    <button class="action-btn">Order Scheduled Reports</button>
                                    <button class="action-btn">Customer Information</button>
                                    <button class="ant-btn ant-btn-primary">
                                        <svg class="anticon" viewBox="64 64 896 896" width="14" height="14">
                                            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                                            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                                        </svg>
                                        Create Order
                                    </button>
                                </div>
                            </div>
                            
                            <div class="filter-tabs">
                                <button class="tab-btn active">All <span class="count">247</span></button>
                                <button class="tab-btn">Pending <span class="count">0</span></button>
                                <button class="tab-btn">Dispatched <span class="count">0</span></button>
                                <button class="tab-btn">Completed <span class="count">156</span></button>
                                <button class="tab-btn">Canceled <span class="count">12</span></button>
                            </div>
                            
                            <div class="filter-section">
                                <div class="search-filters">
                                    <div class="search-input">
                                        <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412s31.3 155.5 87.9 212.1c56.6 56.8 132 87.9 212.1 87.9 67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6z"></path>
                                        </svg>
                                        <input type="text" placeholder="Search orders, customers, routes..." class="ant-input">
                                    </div>
                                    <select class="filter-select">
                                        <option>Return status</option>
                                    </select>
                                    <select class="filter-select">
                                        <option>Collection status</option>
                                    </select>
                                    <button class="filter-btn">Dispatch <span class="count">2</span></button>
                                </div>
                                
                                <div class="active-filters">
                                    <span>Active filters:</span>
                                    <span class="filter-tag">Dispatched <button>×</button></span>
                                    <span class="filter-tag">not dispatched <button>×</button></span>
                                    <button class="clear-all">Clear all</button>
                                </div>
                            </div>
                            
                            <div class="orders-table">
                                <table class="ant-table">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox"></th>
                                            <th></th>
                                            <th>Order Number</th>
                                            <th>Customer</th>
                                            <th>Planned Delivery Date</th>
                                            <th>Route</th>
                                            <th>Weight</th>
                                            <th>Priority</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox"></td>
                                            <td></td>
                                            <td>SO2503170002</td>
                                            <td>666-555</td>
                                            <td>2025-03-04</td>
                                            <td>1111</td>
                                            <td>63 kg</td>
                                            <td><span class="priority normal">Normal</span></td>
                                            <td><span class="status not-dispatched">NOT DISPATCHED</span></td>
                                            <td>
                                                <button class="action-btn">Details</button>
                                                <button class="more-btn">⋮</button>
                                            </td>
                                        </tr>
                                        <tr class="urgent-row">
                                            <td><input type="checkbox"></td>
                                            <td><svg class="warning-icon" viewBox="64 64 896 896" width="16" height="16">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                            </svg></td>
                                            <td>SO2503170001</td>
                                            <td>This is a test - Go to Taste</td>
                                            <td>2025-03-04</td>
                                            <td>-</td>
                                            <td>1 koska</td>
                                            <td><span class="priority high">High</span></td>
                                            <td><span class="status not-dispatched">NOT DISPATCHED</span></td>
                                            <td>
                                                <button class="action-btn">Details</button>
                                                <button class="more-btn">⋮</button>
                                            </td>
                                        </tr>
                                        <tr class="urgent-row">
                                            <td><input type="checkbox"></td>
                                            <td><svg class="warning-icon" viewBox="64 64 896 896" width="16" height="16">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"></path>
                                            </svg></td>
                                            <td>SO2501130001</td>
                                            <td>This is a test - Go to Taste</td>
                                            <td>2025-03-13</td>
                                            <td>1111</td>
                                            <td>355 kg</td>
                                            <td><span class="priority urgent">urgent</span></td>
                                            <td><span class="status not-dispatched">NOT DISPATCHED</span></td>
                                            <td>
                                                <button class="action-btn">Details</button>
                                                <button class="more-btn">⋮</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <button class="modal-close-btn inventory-close" onclick="closeModal('inventoryModalOverlay')">
                            <svg class="anticon" viewBox="64 64 896 896" width="16" height="16">
                                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3.1-3.6-7.6-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3.1 3.6 7.6 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modalContainer.innerHTML = modalHTML;
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Order created successfully! (This is a demo)');
    closeModal('formModalOverlay');
}

function toggleOrderItem(element) {
    const orderItem = element.closest('.order-item');
    const details = orderItem.querySelector('.item-details');
    const expandIcon = element.querySelector('.expand-icon');
    
    if (orderItem.classList.contains('expanded')) {
        orderItem.classList.remove('expanded');
        details.style.display = 'none';
        expandIcon.style.transform = 'rotate(0deg)';
    } else {
        orderItem.classList.add('expanded');
        details.style.display = 'block';
        expandIcon.style.transform = 'rotate(180deg)';
    }
}

// Export functions for global access
window.DemoFunctions = {
    showFormModal,
    showInventoryModal,
    closeModal,
    handleFormSubmit,
    toggleOrderItem
};