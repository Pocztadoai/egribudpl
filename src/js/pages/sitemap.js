export class SitemapPage {
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
                            <span>Mapa strony</span>
                        </nav>
                        <h1>Mapa strony</h1>
                        <p class="page-subtitle">Przegląd wszystkich sekcji i stron naszej witryny</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="sitemap-grid">
                            <div class="sitemap-section">
                                <h2>Główne sekcje</h2>
                                <ul class="sitemap-list">
                                    <li>
                                        <a href="#home" data-route="home" class="sitemap-link">
                                            🏠 Strona główna
                                        </a>
                                        <p>Wprowadzenie do firmy EGRI-BUD i przegląd naszych usług</p>
                                    </li>
                                    <li>
                                        <a href="#about" data-route="about" class="sitemap-link">
                                            🏢 O firmie
                                        </a>
                                        <p>Historia, doświadczenie i obszary działalności</p>
                                        <ul class="sitemap-sublist">
                                            <li><a href="#about" data-route="about">Obszar działań</a></li>
                                            <li><a href="#industry" data-route="zbozowy">Przemysł zbożowo-młynarski</a></li>
                                            <li><a href="#industry" data-route="paszowy">Przemysł paszowy</a></li>
                                            <li><a href="#industry" data-route="tluszczowy">Przemysł tłuszczowy</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#services" data-route="services" class="sitemap-link">
                                            ⚙️ Usługi
                                        </a>
                                        <p>Kompleksowe usługi projektowe i wykonawcze</p>
                                    </li>
                                    <li>
                                        <a href="#industry" data-route="industry" class="sitemap-link">
                                            🏭 Branże przemysłowe
                                        </a>
                                        <p>Nasze specjalizacje i postęp techniczny</p>
                                    </li>
                                    <li>
                                        <a href="#gallery" data-route="gallery" class="sitemap-link">
                                            📸 Galeria projektów
                                        </a>
                                        <p>Zrealizowane inwestycje i projekty</p>
                                    </li>
                                    <li>
                                        <a href="#contact" data-route="contact" class="sitemap-link">
                                            📞 Kontakt
                                        </a>
                                        <p>Dane kontaktowe i formularz zapytań</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="sitemap-section">
                                <h2>Specjalizacje branżowe</h2>
                                <ul class="sitemap-list">
                                    <li>
                                        <a href="#industry" data-route="zbozowy" class="sitemap-link">
                                            🌾 Przemysł zbożowo-młynarski
                                        </a>
                                        <ul class="sitemap-sublist">
                                            <li>Młyny przemysłowe</li>
                                            <li>Elewatory zbożowe</li>
                                            <li>Systemy czyszczenia zbóż</li>
                                            <li>Transport pneumatyczny</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#industry" data-route="paszowy" class="sitemap-link">
                                            🐄 Przemysł paszowy
                                        </a>
                                        <ul class="sitemap-sublist">
                                            <li>Wytwórnie pasz</li>
                                            <li>Linie granulacji</li>
                                            <li>Systemy mieszania</li>
                                            <li>Linie pakowania</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#industry" data-route="tluszczowy" class="sitemap-link">
                                            🫒 Przemysł tłuszczowy
                                        </a>
                                        <ul class="sitemap-sublist">
                                            <li>Tłocznie z ekstrakcją</li>
                                            <li>Olejarnie</li>
                                            <li>Systemy rafinacji</li>
                                            <li>Magazynowanie olejów</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="sitemap-section">
                                <h2>Usługi</h2>
                                <ul class="sitemap-list">
                                    <li>💡 Doradztwo techniczne</li>
                                    <li>📐 Projekt wykonawczy</li>
                                    <li>⚙️ Dobór urządzeń</li>
                                    <li>🔧 Automatyka i sterowanie</li>
                                    <li>💻 Oprogramowanie użytkowe</li>
                                    <li>📦 Kompletacja dostaw</li>
                                    <li>🔨 Montaż</li>
                                    <li>🚀 Uruchomienie</li>
                                    <li>🎓 Szkolenia</li>
                                    <li>🛠️ Serwis</li>
                                </ul>
                            </div>

                            <div class="sitemap-section">
                                <h2>Informacje dodatkowe</h2>
                                <ul class="sitemap-list">
                                    <li>
                                        <span class="sitemap-text">📋 Mapa strony</span>
                                        <p>Obecna strona - przegląd struktury witryny</p>
                                    </li>
                                    <li>
                                        <a href="https://www.egribud.eu" target="_blank" rel="noopener" class="sitemap-link external">
                                            🌐 Nowa strona internetowa
                                        </a>
                                        <p>Odwiedź naszą nową stronę internetową</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="sitemap-footer">
                            <div class="sitemap-stats">
                                <h3>Statystyki strony</h3>
                                <div class="stats-grid">
                                    <div class="stat-item">
                                        <span class="stat-number">6</span>
                                        <span class="stat-label">Głównych sekcji</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-number">3</span>
                                        <span class="stat-label">Specjalizacje branżowe</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-number">10</span>
                                        <span class="stat-label">Rodzajów usług</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-number">14</span>
                                        <span class="stat-label">Projektów w galerii</span>
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