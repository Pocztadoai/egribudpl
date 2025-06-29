export class ContactPage {
    render() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = this.getPageHTML();
        this.initContactForm();
    }

    getPageHTML() {
        return `
            <div class="page-container">
                <div class="page-header">
                    <div class="container">
                        <nav class="breadcrumb">
                            <a href="#home" data-route="home">Strona główna</a>
                            <span>/</span>
                            <span>Kontakt</span>
                        </nav>
                        <h1>Kontakt</h1>
                        <p class="page-subtitle">Skontaktuj się z nami - jesteśmy do Twojej dyspozycji</p>
                    </div>
                </div>

                <div class="page-content">
                    <div class="container">
                        <div class="contact-grid">
                            <div class="contact-info">
                                <h2>EGRI-BUD Sp. z o.o.</h2>
                                <p class="company-description">
                                    Przedsiębiorstwo Produkcyjne i Projektowo Wykonawcze specjalizujące się 
                                    w projektowaniu i budowie zakładów przemysłu spożywczego.
                                </p>

                                <div class="contact-details">
                                    <div class="contact-item">
                                        <div class="contact-icon">📧</div>
                                        <div class="contact-content">
                                            <h4>Email</h4>
                                            <a href="mailto:info@egribud.com">info@egribud.com</a>
                                        </div>
                                    </div>

                                    <div class="contact-item">
                                        <div class="contact-icon">📞</div>
                                        <div class="contact-content">
                                            <h4>Telefon</h4>
                                            <a href="tel:+48XXXXXXXXX">+48 XXX XXX XXX</a>
                                        </div>
                                    </div>

                                    <div class="contact-item">
                                        <div class="contact-icon">📍</div>
                                        <div class="contact-content">
                                            <h4>Lokalizacja</h4>
                                            <p>Polska</p>
                                        </div>
                                    </div>

                                    <div class="contact-item">
                                        <div class="contact-icon">🌐</div>
                                        <div class="contact-content">
                                            <h4>Strona internetowa</h4>
                                            <a href="https://www.egribud.eu" target="_blank" rel="noopener">www.egribud.eu</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="business-hours">
                                    <h3>Godziny pracy</h3>
                                    <div class="hours-list">
                                        <div class="hours-item">
                                            <span>Poniedziałek - Piątek</span>
                                            <span>8:00 - 16:00</span>
                                        </div>
                                        <div class="hours-item">
                                            <span>Sobota - Niedziela</span>
                                            <span>Zamknięte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-form-section">
                                <h2>Wyślij zapytanie</h2>
                                <p>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.</p>

                                <form class="contact-form" id="contactForm">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="firstName">Imię *</label>
                                            <input type="text" id="firstName" name="firstName" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="lastName">Nazwisko *</label>
                                            <input type="text" id="lastName" name="lastName" required>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="email">Email *</label>
                                            <input type="email" id="email" name="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">Telefon</label>
                                            <input type="tel" id="phone" name="phone">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="company">Firma</label>
                                        <input type="text" id="company" name="company">
                                    </div>

                                    <div class="form-group">
                                        <label for="subject">Temat zapytania *</label>
                                        <select id="subject" name="subject" required>
                                            <option value="">Wybierz temat</option>
                                            <option value="mlynarski">Przemysł młynarski</option>
                                            <option value="paszowy">Przemysł paszowy</option>
                                            <option value="tluszczowy">Przemysł tłuszczowy</option>
                                            <option value="automatyka">Automatyka przemysłowa</option>
                                            <option value="serwis">Serwis i wsparcie</option>
                                            <option value="inne">Inne</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="message">Wiadomość *</label>
                                        <textarea id="message" name="message" rows="6" required placeholder="Opisz szczegóły swojego projektu lub zapytania..."></textarea>
                                    </div>

                                    <div class="form-group checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" id="privacy" name="privacy" required>
                                            <span class="checkmark"></span>
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności *
                                        </label>
                                    </div>

                                    <div class="form-group checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" id="newsletter" name="newsletter">
                                            <span class="checkmark"></span>
                                            Chcę otrzymywać informacje o nowych produktach i usługach
                                        </label>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-large">
                                        Wyślij zapytanie
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div class="additional-info">
                            <div class="info-grid">
                                <div class="info-card">
                                    <div class="info-icon">🚀</div>
                                    <h3>Szybka odpowiedź</h3>
                                    <p>Odpowiadamy na wszystkie zapytania w ciągu 24 godzin</p>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon">💡</div>
                                    <h3>Bezpłatne konsultacje</h3>
                                    <p>Oferujemy bezpłatne konsultacje techniczne dla nowych projektów</p>
                                </div>
                                <div class="info-card">
                                    <div class="info-icon">📋</div>
                                    <h3>Szczegółowe wyceny</h3>
                                    <p>Przygotowujemy dokładne wyceny z harmonogramem realizacji</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    initContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        if (!this.validateForm(data)) {
            return;
        }

        // Show loading state
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Wysyłanie...';
        submitButton.disabled = true;

        // Simulate form submission (in real app, this would be an API call)
        setTimeout(() => {
            this.showSuccessMessage();
            e.target.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    validateForm(data) {
        const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
        const errors = [];

        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                errors.push(`Pole ${this.getFieldLabel(field)} jest wymagane`);
            }
        });

        if (!data.privacy) {
            errors.push('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
        }

        if (data.email && !this.isValidEmail(data.email)) {
            errors.push('Podaj prawidłowy adres email');
        }

        if (errors.length > 0) {
            this.showErrorMessage(errors);
            return false;
        }

        return true;
    }

    getFieldLabel(field) {
        const labels = {
            firstName: 'Imię',
            lastName: 'Nazwisko',
            email: 'Email',
            subject: 'Temat zapytania',
            message: 'Wiadomość'
        };
        return labels[field] || field;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'alert alert-success';
        message.innerHTML = `
            <div class="alert-content">
                <span class="alert-icon">✅</span>
                <div>
                    <strong>Dziękujemy za wysłanie zapytania!</strong>
                    <p>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                </div>
            </div>
        `;
        
        this.showAlert(message);
    }

    showErrorMessage(errors) {
        const message = document.createElement('div');
        message.className = 'alert alert-error';
        message.innerHTML = `
            <div class="alert-content">
                <span class="alert-icon">❌</span>
                <div>
                    <strong>Wystąpiły błędy:</strong>
                    <ul>
                        ${errors.map(error => `<li>${error}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        this.showAlert(message);
    }

    showAlert(alertElement) {
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(alertElement, form);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertElement.parentNode) {
                alertElement.parentNode.removeChild(alertElement);
            }
        }, 5000);
        
        // Scroll to alert
        alertElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    destroy() {
        // Cleanup if needed
    }
}