// Main JavaScript for Cosmos Codex Express.js App

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize language selector
    initLanguageSelector();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize TOC
    initTableOfContents();
    
    // Initialize image slider
    initImageSlider();
    
    // Check for mobile
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileDrawer.style.display = mobileDrawer.style.display === 'none' ? 'block' : 'none';
            mobileDrawer.classList.toggle('open');
        });
        
        // Close drawer when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileDrawer.classList.remove('open');
                setTimeout(() => {
                    if (!mobileDrawer.classList.contains('open')) {
                        mobileDrawer.style.display = 'none';
                    }
                }, 300);
            }
        });
    }
}

function initLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            const currentUrl = new URL(window.location);
            currentUrl.searchParams.set('lang', selectedLang);
            window.location.href = currentUrl.toString();
        });
    }
}

function initNavigation() {
    const menuItems = document.querySelectorAll('.ant-menu-item[data-page]');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            const currentUrl = new URL(window.location);
            currentUrl.searchParams.set('page', page);
            window.location.href = currentUrl.toString();
        });
    });
}

function initTableOfContents() {
    const tocContent = document.getElementById('tocContent');
    const content = document.getElementById('pageContent');
    
    if (!tocContent || !content) return;
    
    // Find all headings in content
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) return;
    
    tocContent.innerHTML = '';
    
    headings.forEach((heading, index) => {
        // Create ID if it doesn't exist
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const link = document.createElement('div');
        link.className = 'ant-anchor-link';
        link.innerHTML = `<a href="#${heading.id}" class="ant-anchor-link-title">${heading.textContent}</a>`;
        
        tocContent.appendChild(link);
    });
    
    // Add smooth scrolling
    tocContent.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

function initImageSlider() {
    const slider = document.getElementById('imageSlider');
    
    if (slider) {
        slider.addEventListener('input', function() {
            const value = this.value;
            const beforeItem = document.querySelector('.slider-item:first-child');
            const afterItem = document.querySelector('.slider-item:last-child');
            
            if (beforeItem && afterItem) {
                beforeItem.style.opacity = (100 - value) / 100;
                afterItem.style.opacity = value / 100;
            }
        });
    }
}

function checkMobile() {
    const isMobile = window.innerWidth < 768;
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const desktopSider = document.getElementById('desktopSider');
    const rightSidebar = document.getElementById('rightSidebar');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.style.display = isMobile ? 'block' : 'none';
    }
    
    if (desktopSider) {
        desktopSider.style.display = isMobile ? 'none' : 'block';
    }
    
    if (rightSidebar) {
        rightSidebar.style.display = isMobile ? 'none' : 'block';
    }
    
    // Adjust main content margin
    const mainLayout = document.querySelector('.main-layout');
    const mainContent = document.querySelector('.main-content');
    
    if (mainLayout && mainContent) {
        if (isMobile) {
            mainLayout.style.marginLeft = '0';
            mainLayout.style.width = '100%';
            mainContent.style.paddingRight = '16px';
        } else {
            mainLayout.style.marginLeft = 'var(--sidebar-width)';
            mainLayout.style.width = 'calc(100% - var(--sidebar-width))';
            mainContent.style.paddingRight = 'calc(24px + var(--right-sidebar-width))';
        }
    }
}

// Export functions for use in other scripts
window.CosmosCodex = {
    initMobileMenu,
    initLanguageSelector,
    initNavigation,
    initTableOfContents,
    initImageSlider,
    checkMobile
};