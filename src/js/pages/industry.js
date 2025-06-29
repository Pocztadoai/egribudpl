export class IndustryPage {
    constructor(industry = null) {
        this.industry = industry;
        this.industryData = {
            zbozowy: {
                title: 'Przemysł zbożowo-młynarski',
                description: 'Specjalizujemy się w projektowaniu i budowie nowoczesnych młynów oraz elewatorów zbożowych',
                items: [
                    'Młyny przemysłowe',
                    'Elewatory zbożowe',
                    'Systemy czyszczenia zbóż',
                    'Linie sortowania',
                    'Transport pneumatyczny',
                    'Systemy aspiracji',
                    'Magazynowanie zbóż',
                    'Automatyka procesów młynarskich'
                ],
                image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
            },
            paszowy: {
                title: 'Przemysł paszowy',
                description: 'Kompleksowe rozwiązania dla produkcji pasz wysokiej jakości',
                items: [
                    'Wytwórnie pasz',
                    'Przyjęcie produktów sypkich transportem pneumatycznym',
                    'Linie granulacji',
                    'Linie dozowania i mieszania',
                    'Linie pakowania',
                    'Linie wydawania produktów luzem',
                    'Systemy aspiracji punktowej'
                ],
                image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
            },
            tluszczowy: {
                title: 'Przemysł tłuszczowy',
                description: 'Nowoczesne technologie produkcji olejów i tłuszczów roślinnych',
                items: [
                    'Tłocznie z ekstrakcją',
                    'Głębokie tłoczenie',
                    'Odszlamianie',
                    'Magazynowanie',
                    'Bielenie',
                    'Tostowanie wraz z mokrymi łapaczami pyłków',
                    'Wielostopniowe linie destylacji miscelli',
                    'Linie odzysku rozpuszczalnika (absorbery i desorbery)'
                ],
                image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800&h=600'
            }
        };
    }

    render() {
        const mainContent = document.getElementById('main-content');
        
        if (this.industry && this.industryData[this.industry]) {
            mainContent.innerHTML = this.getSpecificIndustryHTML();
        } else {
            mainContent.innerHTML = this.getGeneralIndustryHTML();
        }
    }

    getSpecificIndustryHTML() {
        const data = this.industryData[this.industry];
        
        return `
            <div class="page-container">
                <div class="page-header">
                    <div class="container">
                        <nav class="breadcrumb">
                            <a href="#home" data-route="home">Strona główna</a>
                            <span>/</span>
                            <a href="#industry" data-route="industry">Branże</a>
                            <span>/</span>
                            <span>${data.title}</span>
                        </nav>
                        <h1>${data.title}</h1>
                        <p class="page-subtitle">${data.description}</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="industry-detail">
                            <div class="industry-hero">
                                <div class="industry-hero-image">
                                    <img src="${data.image}" alt="${data.title}">
                                </div>
                                <div class="industry-hero-content">
                                    <h2>Nasze rozwiązania</h2>
                                    <p>${data.description}</p>
                                </div>
                            </div>

                            <div class="industry-services">
                                <h3>Oferujemy:</h3>
                                <div class="services-list">
                                    ${data.items.map(item => `
                                        <div class="service-item">
                                            <span class="service-icon">✓</span>
                                            <span class="service-text">${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="industry-features">
                                <h3>Dlaczego warto wybrać nasze rozwiązania?</h3>
                                <div class="features-grid">
                                    <div class="feature-item">
                                        <div class="feature-icon">🔬</div>
                                        <h4>Nowoczesne technologie</h4>
                                        <p>Wykorzystujemy najnowocześniejsze rozwiązania technologiczne</p>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-icon">🏆</div>
                                        <h4>Wysoka jakość</h4>
                                        <p>Wszystkie projekty realizujemy zgodnie z normami UE</p>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-icon">⚡</div>
                                        <h4>Efektywność energetyczna</h4>
                                        <p>Projektujemy energooszczędne rozwiązania</p>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-icon">🛠️</div>
                                        <h4>Kompleksowy serwis</h4>
                                        <p>Zapewniamy pełne wsparcie techniczne</p>
                                    </div>
                                </div>
                            </div>

                            <div class="cta-section">
                                <div class="cta-content">
                                    <h3>Zainteresowany naszymi rozwiązaniami?</h3>
                                    <p>Skontaktuj się z nami i omówmy szczegóły Twojego projektu</p>
                                    <div class="cta-actions">
                                        <a href="#contact" data-route="contact" class="btn btn-primary">Skontaktuj się</a>
                                        <a href="#gallery" data-route="gallery" class="btn btn-outline">Zobacz realizacje</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getGeneralIndustryHTML() {
        return `
            <div class="page-container">
                <div class="page-header">
                    <div class="container">
                        <nav class="breadcrumb">
                            <a href="#home" data-route="home">Strona główna</a>
                            <span>/</span>
                            <span>Branże przemysłowe</span>
                        </nav>
                        <h1>Branże przemysłowe</h1>
                        <p class="page-subtitle">Postęp techniczny i nowoczesne rozwiązania</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="intro-section">
                            <p class="intro-text">
                                Kadra inżynierska stale podnosi swoje kwalifikacje poprzez udział w szkoleniach, 
                                konferencjach, seminariach organizowanych przez jednostki naukowo-badawcze oraz 
                                producentów maszyn renomowanych firm. W oferowanych projektach proponujemy 
                                najnowocześniejszą technologię bazując na unikatowych własnych rozwiązaniach 
                                oraz na rozwiązaniach instytutów badawczych, z którymi współpracujemy.
                            </p>
                        </div>

                        <div class="industries-overview">
                            <h2>Nasze specjalizacje</h2>
                            <div class="industries-grid">
                                ${Object.entries(this.industryData).map(([key, data]) => `
                                    <div class="industry-card">
                                        <div class="industry-image">
                                            <img src="${data.image}" alt="${data.title}">
                                        </div>
                                        <div class="industry-content">
                                            <h3>${data.title}</h3>
                                            <p>${data.description}</p>
                                            <div class="industry-highlights">
                                                ${data.items.slice(0, 3).map(item => `
                                                    <span class="highlight-item">• ${item}</span>
                                                `).join('')}
                                            </div>
                                            <a href="#industry" data-route="${key}" class="btn btn-outline">
                                                Dowiedz się więcej
                                            </a>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="technology-section">
                            <h2>Postęp techniczny</h2>
                            <div class="technology-content">
                                <div class="technology-text">
                                    <p>
                                        Nieustannie inwestujemy w rozwój technologiczny i podnoszenie kwalifikacji 
                                        naszych specjalistów. Współpracujemy z wiodącymi instytutami badawczymi 
                                        i producentami maszyn, aby oferować najnowocześniejsze rozwiązania.
                                    </p>
                                </div>
                                <div class="technology-features">
                                    <div class="tech-feature">
                                        <div class="tech-icon">🔬</div>
                                        <h4>Badania i rozwój</h4>
                                        <p>Współpraca z instytutami badawczymi</p>
                                    </div>
                                    <div class="tech-feature">
                                        <div class="tech-icon">🎓</div>
                                        <h4>Szkolenia</h4>
                                        <p>Regularne podnoszenie kwalifikacji</p>
                                    </div>
                                    <div class="tech-feature">
                                        <div class="tech-icon">💡</div>
                                        <h4>Innowacje</h4>
                                        <p>Własne unikatowe rozwiązania</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    destroy() {
        // Cleanup if needed
    }
}