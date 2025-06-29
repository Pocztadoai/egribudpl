export class AboutPage {
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
                            <span>O firmie</span>
                        </nav>
                        <h1>O firmie EGRI-BUD</h1>
                        <p class="page-subtitle">Poznaj naszą historię, doświadczenie i obszary działalności</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="content-grid">
                            <div class="content-main">
                                <section class="content-section">
                                    <h2>Historia i doświadczenie</h2>
                                    <p>
                                        <strong>PRZEDSIĘBIORSTWO PRODUKCYJNE I PROJEKTOWO WYKONAWCZE "EGRI-BUD" Sp. z o.o.</strong> 
                                        zostało założone w 1989 roku. Posiadamy wieloletnie doświadczenie w projektowaniu i budowie 
                                        zakładów przemysłu zbożowo-młynarskiego, piekarskiego, paszowego, tłuszczowego i innych 
                                        zakładów przemysłu spożywczego.
                                    </p>
                                    <p>
                                        Bazujemy na tradycjach i osiągnięciach niedziałającego już Biura Projektów Spichrzów i Młynów 
                                        oraz BPPC "Cukroprojekt" Warszawa. Obok zaplecza projektowego-konsultingowego posiadamy własne 
                                        grupy montażu technologicznego, elektrycznego i automatyki.
                                    </p>
                                </section>

                                <section class="content-section">
                                    <h2>Obszar działań</h2>
                                    <p>Obszarem działań naszego przedsiębiorstwa są:</p>
                                    <div class="areas-grid">
                                        <div class="area-item">
                                            <div class="area-icon">🌾</div>
                                            <h4>Przemysł zbożowo-młynarski</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🐄</div>
                                            <h4>Przemysł paszowy</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🫒</div>
                                            <h4>Przemysł tłuszczowy</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🍯</div>
                                            <h4>Przemysł cukrowniczy</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🥫</div>
                                            <h4>Przemysł koncentratów spożywczych</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🥛</div>
                                            <h4>Przemysł mleczarski</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🍎</div>
                                            <h4>Przemysł owocowo-warzywny</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">⚗️</div>
                                            <h4>Przemysł chemiczny</h4>
                                        </div>
                                        <div class="area-item">
                                            <div class="area-icon">🌱</div>
                                            <h4>Ochrona środowiska</h4>
                                        </div>
                                    </div>
                                </section>

                                <section class="content-section">
                                    <h2>Nasze specjalizacje</h2>
                                    <p>W szczególności projektujemy i wykonujemy pod klucz obiekty takie jak:</p>
                                    <div class="specializations">
                                        <div class="specialization-card">
                                            <h4><a href="#industry" data-route="zbozowy" class="internal-link">Przemysł zbożowo-młynarski</a></h4>
                                            <ul>
                                                <li>Młyny przemysłowe</li>
                                                <li>Elewatory zbożowe</li>
                                                <li>Systemy czyszczenia zbóż</li>
                                                <li>Linie sortowania</li>
                                            </ul>
                                        </div>
                                        <div class="specialization-card">
                                            <h4><a href="#industry" data-route="paszowy" class="internal-link">Przemysł paszowy</a></h4>
                                            <ul>
                                                <li>Wytwórnie pasz</li>
                                                <li>Linie granulacji</li>
                                                <li>Systemy mieszania</li>
                                                <li>Transport pneumatyczny</li>
                                            </ul>
                                        </div>
                                        <div class="specialization-card">
                                            <h4><a href="#industry" data-route="tluszczowy" class="internal-link">Przemysł tłuszczowy</a></h4>
                                            <ul>
                                                <li>Tłocznie oleju</li>
                                                <li>Systemy ekstrakcji</li>
                                                <li>Rafinerie</li>
                                                <li>Magazynowanie olejów</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section class="content-section">
                                    <div class="highlight-box">
                                        <h3>Zgodność z normami UE</h3>
                                        <p>
                                            Wszystkie obiekty są projektowane i wykonywane zgodnie z wymogami 
                                            i przepisami <strong>UNII EUROPEJSKIEJ</strong>.
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div class="content-sidebar">
                                <div class="sidebar-widget">
                                    <h3>Nowa strona internetowa</h3>
                                    <div class="widget-content">
                                        <p><strong>ZAPRASZAMY NA NOWĄ STRONĘ!</strong></p>
                                        <a href="https://www.egribud.eu" target="_blank" rel="noopener" class="external-link">
                                            www.egribud.eu
                                        </a>
                                    </div>
                                </div>

                                <div class="sidebar-widget">
                                    <h3>Szybki kontakt</h3>
                                    <div class="widget-content">
                                        <div class="contact-item">
                                            <span class="contact-icon">📧</span>
                                            <span>info@egribud.com</span>
                                        </div>
                                        <div class="contact-item">
                                            <span class="contact-icon">📞</span>
                                            <span>+48 XXX XXX XXX</span>
                                        </div>
                                        <a href="#contact" data-route="contact" class="btn btn-primary btn-small">
                                            Skontaktuj się
                                        </a>
                                    </div>
                                </div>

                                <div class="sidebar-widget">
                                    <h3>Powiązane strony</h3>
                                    <div class="widget-content">
                                        <ul class="related-links">
                                            <li><a href="#services" data-route="services">Nasze usługi</a></li>
                                            <li><a href="#industry" data-route="industry">Branże przemysłowe</a></li>
                                            <li><a href="#gallery" data-route="gallery">Galeria projektów</a></li>
                                        </ul>
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