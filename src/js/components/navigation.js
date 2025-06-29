export class Navigation {
    constructor() {
        this.navigationData = [
            { name: 'Strona główna', route: 'home', icon: '🏠' },
            { name: 'O firmie', route: 'about', icon: '🏢' },
            { name: 'Usługi', route: 'services', icon: '⚙️' },
            { name: 'Branże', route: 'industry', icon: '🏭' },
            { name: 'Galeria', route: 'gallery', icon: '📸' },
            { name: 'Kontakt', route: 'contact', icon: '📞' }
        ];
    }

    render() {
        const navigationContainer = document.getElementById('navigation');
        navigationContainer.innerHTML = this.getNavigationHTML();
    }

    getNavigationHTML() {
        return `
            <div class="nav-container">
                <div class="nav-brand">
                    <a href="#home" data-route="home" class="brand-link">
                        <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" alt="EGRI-BUD Logo" class="brand-logo">
                        <span class="brand-text">EGRI-BUD</span>
                    </a>
                </div>
                
                <nav class="nav-menu">
                    ${this.navigationData.map(item => `
                        <div class="nav-item">
                            <a href="#${item.route}" data-route="${item.route}" class="nav-link">
                                <span class="nav-icon">${item.icon}</span>
                                <span class="nav-text">${item.name}</span>
                            </a>
                        </div>
                    `).join('')}
                </nav>
                
                <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div class="mobile-menu">
                    ${this.navigationData.map(item => `
                        <a href="#${item.route}" data-route="${item.route}" class="mobile-nav-link">
                            <span class="nav-icon">${item.icon}</span>
                            <span class="nav-text">${item.name}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
}