import { Router } from './js/router.js';
import { Navigation } from './js/components/navigation.js';
import { Footer } from './js/components/footer.js';

class App {
    constructor() {
        this.router = new Router();
        this.navigation = new Navigation();
        this.footer = new Footer();
        this.init();
    }

    init() {
        // Initialize components
        this.navigation.render();
        this.footer.render();
        
        // Initialize router
        this.router.init();
        
        // Handle navigation clicks
        this.handleNavigation();
        
        // Initialize smooth scrolling
        this.initSmoothScrolling();
        
        // Initialize mobile menu
        this.initMobileMenu();
    }

    handleNavigation() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-route]');
            if (link) {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.router.navigate(route);
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.router.handleRoute();
        });
    }

    initSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
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

    initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});