export class GalleryPage {
    constructor() {
        this.projects = [
            { id: 1, name: 'PPZ KAPKA S.J.', category: 'Przemysł paszowy' },
            { id: 2, name: 'Firma Produkcyjno-Handlowa "Paula"', category: 'Przemysł młynarski' },
            { id: 3, name: 'SPC - WARSZAWA', category: 'Przemysł spożywczy' },
            { id: 4, name: 'POLSKIE MŁYNY', category: 'Przemysł młynarski' },
            { id: 5, name: 'ROLIMPEX S.A.', category: 'Przemysł zbożowy' },
            { id: 6, name: 'DOBROPASZ - GRUPA ROLIMPEX', category: 'Przemysł paszowy' },
            { id: 7, name: 'CARGILL - BIELANY WROCŁAWSKIE', category: 'Przemysł zbożowy' },
            { id: 8, name: 'DOSSCHE - KALISZ', category: 'Przemysł młynarski' },
            { id: 9, name: 'Młyn Prochowice sp. z o.o.', category: 'Przemysł młynarski' },
            { id: 10, name: 'JANTUR sp. z o.o.', category: 'Przemysł spożywczy' },
            { id: 11, name: 'Młyny Przemysłowo Handlowe Jerzy Wysocki', category: 'Przemysł młynarski' },
            { id: 12, name: 'ELEWATOR PORTOWY EWA', category: 'Elewatory' },
            { id: 13, name: 'PZZ KRAKÓW', category: 'Przemysł zbożowy' },
            { id: 14, name: 'INWESTYCJE ZAGRANICZNE', category: 'Międzynarodowe' }
        ];
    }

    render() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = this.getPageHTML();
        this.initGallery();
    }

    getPageHTML() {
        return `
            <div class="page-container">
                <div class="page-header">
                    <div class="container">
                        <nav class="breadcrumb">
                            <a href="#home" data-route="home">Strona główna</a>
                            <span>/</span>
                            <span>Galeria projektów</span>
                        </nav>
                        <h1>Galeria projektów</h1>
                        <p class="page-subtitle">Poznaj nasze zrealizowane inwestycje</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="gallery-filters">
                            <button class="filter-btn active" data-filter="all">Wszystkie</button>
                            <button class="filter-btn" data-filter="Przemysł młynarski">Przemysł młynarski</button>
                            <button class="filter-btn" data-filter="Przemysł paszowy">Przemysł paszowy</button>
                            <button class="filter-btn" data-filter="Przemysł zbożowy">Przemysł zbożowy</button>
                            <button class="filter-btn" data-filter="Elewatory">Elewatory</button>
                        </div>

                        <div class="gallery-grid">
                            ${this.projects.map(project => this.getProjectHTML(project)).join('')}
                        </div>

                        <div class="gallery-info">
                            <div class="info-content">
                                <h2>Nasze doświadczenie</h2>
                                <p>
                                    Przez ponad 35 lat działalności zrealizowaliśmy setki projektów dla największych 
                                    firm w branży spożywczej. Nasze realizacje obejmują kompleksowe zakłady przemysłowe, 
                                    od małych młynów lokalnych po duże kompleksy przemysłowe.
                                </p>
                                <div class="stats-grid">
                                    <div class="stat-item">
                                        <div class="stat-number">200+</div>
                                        <div class="stat-label">Zrealizowanych projektów</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">35+</div>
                                        <div class="stat-label">lat doświadczenia</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">15+</div>
                                        <div class="stat-label">krajów</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getProjectHTML(project) {
        // Use placeholder images from Pexels for different project types
        const imageMap = {
            'Przemysł młynarski': 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'Przemysł paszowy': 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'Przemysł zbożowy': 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'Przemysł spożywczy': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'Elewatory': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'Międzynarodowe': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300'
        };

        const image = imageMap[project.category] || imageMap['Przemysł spożywczy'];

        return `
            <div class="gallery-item" data-category="${project.category}">
                <div class="gallery-card">
                    <div class="gallery-image">
                        <img src="${image}" alt="${project.name}" loading="lazy">
                        <div class="gallery-overlay">
                            <button class="gallery-btn" onclick="this.closest('.gallery-page').showProjectDetails(${project.id})">
                                Zobacz szczegóły
                            </button>
                        </div>
                    </div>
                    <div class="gallery-content">
                        <h3>${project.name}</h3>
                        <span class="gallery-category">${project.category}</span>
                    </div>
                </div>
            </div>
        `;
    }

    initGallery() {
        // Add gallery-page class to container for method access
        document.querySelector('.page-container').classList.add('gallery-page');
        
        // Initialize filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease-in-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Add method to show project details
        document.querySelector('.gallery-page').showProjectDetails = (projectId) => {
            const project = this.projects.find(p => p.id === projectId);
            if (project) {
                this.showProjectModal(project);
            }
        };
    }

    showProjectModal(project) {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <h2>${project.name}</h2>
                    <div class="modal-category">${project.category}</div>
                    <div class="modal-description">
                        <p>Szczegółowe informacje o projekcie ${project.name} będą dostępne wkrótce.</p>
                        <p>Projekt zrealizowany w ramach kategorii: ${project.category}</p>
                    </div>
                    <div class="modal-actions">
                        <a href="#contact" data-route="contact" class="btn btn-primary">Zapytaj o podobny projekt</a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeModal = () => {
            document.body.removeChild(modal);
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                closeModal();
            }
        });

        // Close on Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    destroy() {
        // Cleanup if needed
        const galleryPage = document.querySelector('.gallery-page');
        if (galleryPage) {
            galleryPage.classList.remove('gallery-page');
        }
    }
}