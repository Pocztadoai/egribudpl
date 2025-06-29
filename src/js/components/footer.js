export class Footer {
    render() {
        const footerContainer = document.getElementById('footer');
        footerContainer.innerHTML = this.getFooterHTML();
    }

    getFooterHTML() {
        return `
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>EGRI-BUD Sp. z o.o.</h3>
                        <p>Projektowanie i budowa zakładów przemysłu spożywczego od 1989 roku.</p>
                        <div class="footer-social">
                            <a href="https://www.egribud.eu" target="_blank" rel="noopener" class="social-link">
                                🌐 www.egribud.eu
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Nasze specjalizacje</h4>
                        <ul class="footer-links">
                            <li><a href="#industry" data-route="zbozowy">Przemysł młynarski</a></li>
                            <li><a href="#industry" data-route="paszowy">Przemysł paszowy</a></li>
                            <li><a href="#industry" data-route="tluszczowy">Przemysł tłuszczowy</a></li>
                            <li><a href="#services" data-route="services">Automatyka przemysłowa</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Informacje</h4>
                        <ul class="footer-links">
                            <li><a href="#about" data-route="about">O firmie</a></li>
                            <li><a href="#services" data-route="services">Usługi</a></li>
                            <li><a href="#gallery" data-route="gallery">Galeria projektów</a></li>
                            <li><a href="#sitemap" data-route="sitemap">Mapa strony</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Kontakt</h4>
                        <div class="contact-info">
                            <p>📧 info@egribud.com</p>
                            <p>📞 +48 XXX XXX XXX</p>
                            <p>📍 Polska</p>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <p>&copy; ${new Date().getFullYear()} EGRI-BUD Sp. z o.o. Wszystkie prawa zastrzeżone.</p>
                        <div class="footer-bottom-links">
                            <a href="#contact" data-route="contact">Kontakt</a>
                            <span>|</span>
                            <a href="#sitemap" data-route="sitemap">Mapa strony</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}