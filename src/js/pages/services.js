export class ServicesPage {
    render() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = this.getPageHTML();
    }

    getPageHTML() {
        return `
            <div class="page-container">
                <div class="page-header">
                    <div class="container">
                        <nav class="breadcrumb">
                            <a href="#home" data-route="home">Strona główna</a>
                            <span>/</span>
                            <span>Usługi</span>
                        </nav>
                        <h1>Nasze usługi</h1>
                        <p class="page-subtitle">Kompleksowe rozwiązania dla przemysłu spożywczego</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="intro-section">
                            <p class="intro-text">
                                Nasza oferta obejmuje usługi pełnego wykonawstwa obiektów tzw. "pod klucz" 
                                oraz pojedyncze usługi w ramach wymienionych zakresów zgodnie z potrzebami klienta.
                            </p>
                        </div>

                        <div class="services-grid">
                            <div class="service-card">
                                <div class="service-icon">💡</div>
                                <h3>Doradztwo techniczne</h3>
                                <p>Profesjonalne konsultacje i doradztwo w zakresie optymalnych rozwiązań technologicznych dla Twojego projektu.</p>
                                <ul class="service-features">
                                    <li>Analiza potrzeb technologicznych</li>
                                    <li>Optymalizacja procesów produkcyjnych</li>
                                    <li>Dobór najlepszych rozwiązań</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">📐</div>
                                <h3>Projekt wykonawczy</h3>
                                <p>Kompleksowe projekty wykonawcze zgodne z najnowszymi normami i przepisami UE.</p>
                                <ul class="service-features">
                                    <li>Projekty technologiczne</li>
                                    <li>Projekty konstrukcyjne</li>
                                    <li>Dokumentacja wykonawcza</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">⚙️</div>
                                <h3>Dobór urządzeń</h3>
                                <p>Profesjonalny dobór i specyfikacja urządzeń od renomowanych producentów.</p>
                                <ul class="service-features">
                                    <li>Analiza wymagań technicznych</li>
                                    <li>Dobór optymalnych rozwiązań</li>
                                    <li>Współpraca z najlepszymi dostawcami</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">🔧</div>
                                <h3>Automatyka i sterowanie</h3>
                                <p>Nowoczesne systemy automatyki przemysłowej i sterowania procesami.</p>
                                <ul class="service-features">
                                    <li>Schematy i algorytmy sterowania</li>
                                    <li>Systemy SCADA</li>
                                    <li>Automatyzacja procesów</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">💻</div>
                                <h3>Oprogramowanie użytkowe</h3>
                                <p>Dedykowane oprogramowanie do zarządzania i monitorowania procesów produkcyjnych.</p>
                                <ul class="service-features">
                                    <li>Systemy zarządzania produkcją</li>
                                    <li>Interfejsy operatorskie</li>
                                    <li>Systemy raportowania</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">📦</div>
                                <h3>Kompletacja dostaw</h3>
                                <p>Kompleksowa organizacja dostaw urządzeń i prefabrykatów.</p>
                                <ul class="service-features">
                                    <li>Zarządzanie łańcuchem dostaw</li>
                                    <li>Kontrola jakości</li>
                                    <li>Logistyka i transport</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">🔨</div>
                                <h3>Montaż</h3>
                                <p>Profesjonalny montaż wykonywany przez doświadczone zespoły specjalistów.</p>
                                <ul class="service-features">
                                    <li>Montaż technologiczny</li>
                                    <li>Montaż elektryczny</li>
                                    <li>Montaż automatyki</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">🚀</div>
                                <h3>Uruchomienie</h3>
                                <p>Kompleksowy rozruch technologiczny i przekazanie obiektu do eksploatacji.</p>
                                <ul class="service-features">
                                    <li>Rozruch próbny</li>
                                    <li>Testy wydajnościowe</li>
                                    <li>Optymalizacja parametrów</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">🎓</div>
                                <h3>Szkolenia</h3>
                                <p>Profesjonalne szkolenia obsługi dla załogi w zakresie wykonanych instalacji.</p>
                                <ul class="service-features">
                                    <li>Szkolenia operatorów</li>
                                    <li>Szkolenia techniczne</li>
                                    <li>Dokumentacja szkoleniowa</li>
                                </ul>
                            </div>

                            <div class="service-card">
                                <div class="service-icon">🛠️</div>
                                <h3>Serwis</h3>
                                <p>Kompleksowy serwis gwarancyjny i pogwarancyjny realizowanych instalacji.</p>
                                <ul class="service-features">
                                    <li>Serwis gwarancyjny</li>
                                    <li>Serwis pogwarancyjny</li>
                                    <li>Części zamienne</li>
                                </ul>
                            </div>
                        </div>

                        <section class="process-section">
                            <div class="section-header">
                                <h2>Proces realizacji projektu</h2>
                                <p>Jak wygląda współpraca z EGRI-BUD</p>
                            </div>
                            
                            <div class="process-timeline">
                                <div class="timeline-item">
                                    <div class="timeline-number">1</div>
                                    <div class="timeline-content">
                                        <h4>Konsultacje i analiza</h4>
                                        <p>Poznajemy Twoje potrzeby i analizujemy wymagania projektu</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-number">2</div>
                                    <div class="timeline-content">
                                        <h4>Projekt i wycena</h4>
                                        <p>Opracowujemy projekt techniczny i szczegółową wycenę</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-number">3</div>
                                    <div class="timeline-content">
                                        <h4>Realizacja</h4>
                                        <p>Wykonujemy projekt zgodnie z harmonogramem i specyfikacją</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-number">4</div>
                                    <div class="timeline-content">
                                        <h4>Rozruch i przekazanie</h4>
                                        <p>Uruchamiamy instalację i przekazujemy do eksploatacji</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-number">5</div>
                                    <div class="timeline-content">
                                        <h4>Serwis i wsparcie</h4>
                                        <p>Zapewniamy długoterminowe wsparcie techniczne</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="cta-section">
                            <div class="cta-content">
                                <h2>Potrzebujesz wyceny projektu?</h2>
                                <p>Skontaktuj się z nami i omówmy szczegóły Twojego projektu. Oferujemy bezpłatne konsultacje.</p>
                                <a href="#contact" data-route="contact" class="btn btn-primary">Skontaktuj się z nami</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    }

    destroy() {
        // Cleanup if needed
    }
}