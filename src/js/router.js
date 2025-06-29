import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ServicesPage } from './pages/services.js';
import { IndustryPage } from './pages/industry.js';
import { GalleryPage } from './pages/gallery.js';
import { ContactPage } from './pages/contact.js';
import { SitemapPage } from './pages/sitemap.js';

export class Router {
    constructor() {
        this.routes = {
            '': HomePage,
            'home': HomePage,
            'obszar': AboutPage,
            'about': AboutPage,
            'potencjal': ServicesPage,
            'services': ServicesPage,
            'postep': IndustryPage,
            'industry': IndustryPage,
            'zbozowy': () => new IndustryPage('zbozowy'),
            'paszowy': () => new IndustryPage('paszowy'),
            'tluszczowy': () => new IndustryPage('tluszczowy'),
            'galeria': GalleryPage,
            'gallery': GalleryPage,
            'kontakt': ContactPage,
            'contact': ContactPage,
            'mapa_strony': SitemapPage,
            'sitemap': SitemapPage
        };
        this.currentPage = null;
    }

    init() {
        this.handleRoute();
    }

    navigate(route) {
        const url = route ? `#${route}` : '';
        window.history.pushState(null, '', url);
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.substring(1);
        const route = hash || 'home';
        
        this.loadPage(route);
        this.updateActiveNavigation(route);
        this.updatePageMeta(route);
    }

    loadPage(route) {
        const PageClass = this.routes[route] || HomePage;
        
        if (this.currentPage && this.currentPage.destroy) {
            this.currentPage.destroy();
        }
        
        if (typeof PageClass === 'function' && PageClass.prototype) {
            this.currentPage = new PageClass();
        } else {
            this.currentPage = PageClass();
        }
        
        this.currentPage.render();
    }

    updateActiveNavigation(route) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current nav item
        const activeNavItem = document.querySelector(`[data-route="${route}"]`);
        if (activeNavItem) {
            const navItemParent = activeNavItem.closest('.nav-item');
            if (navItemParent) {
                navItemParent.classList.add('active');
            }
        }
    }

    updatePageMeta(route) {
        const metaData = {
            'home': {
                title: 'EGRI-BUD - Projektowanie i budowa zakładów przemysłu spożywczego',
                description: 'EGRI-BUD Sp. z o.o. - projektowanie i budowa zakładów przemysłu piekarskiego, młynarskiego, paszowego, tłuszczowego. Kompleksowe rozwiązania pod klucz.'
            },
            'about': {
                title: 'O firmie EGRI-BUD - Obszar działań i doświadczenie',
                description: 'Poznaj EGRI-BUD - przedsiębiorstwo z 35-letnim doświadczeniem w projektowaniu zakładów przemysłu spożywczego. Nasze obszary działań i specjalizacje.'
            },
            'services': {
                title: 'Usługi EGRI-BUD - Kompleksowe rozwiązania pod klucz',
                description: 'Oferujemy pełen zakres usług: od projektu po rozruch. Doradztwo techniczne, montaż, automatyka, serwis i szkolenia dla przemysłu spożywczego.'
            },
            'industry': {
                title: 'Branże przemysłowe - Specjalizacje EGRI-BUD',
                description: 'Specjalizujemy się w przemyśle młynarskim, paszowym i tłuszczowym. Nowoczesne technologie i rozwiązania zgodne z normami UE.'
            },
            'gallery': {
                title: 'Galeria projektów EGRI-BUD - Zrealizowane inwestycje',
                description: 'Zobacz nasze zrealizowane projekty: młyny, wytwórnie pasz, olejarnie, elewatory. Portfolio najważniejszych inwestycji EGRI-BUD.'
            },
            'contact': {
                title: 'Kontakt z EGRI-BUD - Skontaktuj się z nami',
                description: 'Skontaktuj się z EGRI-BUD. Dane kontaktowe, formularz kontaktowy, lokalizacja. Zapraszamy do współpracy w zakresie projektów przemysłowych.'
            }
        };

        const meta = metaData[route] || metaData['home'];
        document.title = meta.title;
        
        // Update meta description
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', meta.description);
        }
    }
}