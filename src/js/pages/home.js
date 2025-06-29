export class HomePage {
    render() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = this.getPageHTML();
        this.initInteractions();
    }

    getPageHTML() {
        return `
            <section class="hero">
                <div class="hero-background">
                    <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" alt="Nowoczesny zakład przemysłowy" class="hero-image">
                    <div class="hero-overlay"></div>
                </div>
                <div class="hero-content">
                    <div class="container">
                        <h1 class="hero-title">
                            Projektowanie i budowa zakładów<br>
                            <span class="highlight">przemysłu spożywczego</span>
                        </h1>
                        <p class="hero-subtitle">
                            Ponad 35 lat doświadczenia w realizacji kompleksowych projektów dla przemysłu młynarskiego, paszowego i tłuszczowego
                        </p>
                        <div class="hero-actions">
                            <a href="#about" data-route="about" class="btn btn-primary">Poznaj nas</a>
                            <a href="#contact" data-route="contact" class="btn btn-secondary">Skontaktuj się</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="container">
                    <div class="section-header">
                        <h2>Dlaczego EGRI-BUD?</h2>
                        <p>Kompleksowe rozwiązania dla przemysłu spożywczego</p>
                    </div>
                    
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🏭</div>
                            <h3>35+ lat doświadczenia</h3>
                            <p>Działamy od 1989 roku, realizując projekty dla największych firm w branży spożywczej</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">⚙️</div>
                            <h3>Kompleksowe usługi</h3>
                            <p>Od projektu po rozruch - oferujemy pełen zakres usług "pod klucz"</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">🔬</div>
                            <h3>Nowoczesne technologie</h3>
                            <p>Wykorzystujemy najnowocześniejsze rozwiązania zgodne z normami UE</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">🛠️</div>
                            <h3>Własne zespoły montażowe</h3>
                            <p>Posiadamy własne grupy montażu technologicznego, elektrycznego i automatyki</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="industries">
                <div class="container">
                    <div class="section-header">
                        <h2>Nasze specjalizacje</h2>
                        <p>Projektujemy i budujemy zakłady dla różnych branż przemysłu spożywczego</p>
                    </div>
                    
                    <div class="industries-grid">
                        <div class="industry-card" data-industry="zbozowy">
                            <div class="industry-image">
                                <img src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Przemysł młynarski">
                            </div>
                            <div class="industry-content">
                                <h3>Przemysł młynarski</h3>
                                <p>Młyny, elewatory, systemy czyszczenia i sortowania zbóż</p>
                                <a href="#industry" data-route="zbozowy" class="industry-link">Dowiedz się więcej →</a>
                            </div>
                        </div>
                        
                        <div class="industry-card" data-industry="paszowy">
                            <div class="industry-image">
                                <img src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Przemysł paszowy">
                            </div>
                            <div class="industry-content">
                                <h3>Przemysł paszowy</h3>
                                <p>Wytwórnie pasz, linie granulacji, systemy mieszania</p>
                                <a href="#industry" data-route="paszowy" class="industry-link">Dowiedz się więcej →</a>
                            </div>
                        </div>
                        
                        <div class="industry-card" data-industry="tluszczowy">
                            <div class="industry-image">
                                <img src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Przemysł tłuszczowy">
                            </div>
                            <div class="industry-content">
                                <h3>Przemysł tłuszczowy</h3>
                                <p>Tłocznie, olejarnie, systemy ekstrakcji i rafinacji</p>
                                <a href="#industry" data-route="tluszczowy" class="industry-link">Dowiedz się więcej →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2>Gotowy na realizację swojego projektu?</h2>
                        <p>Skontaktuj się z nami i omówmy Twoje potrzeby. Oferujemy bezpłatne konsultacje i wyceny projektów.</p>
                        <div class="cta-actions">
                            <a href="#contact" data-route="contact" class="btn btn-primary">Skontaktuj się z nami</a>
                            <a href="#gallery" data-route="gallery" class="btn btn-outline">Zobacz nasze projekty</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    initInteractions() {
        // Add hover effects to industry cards
        const industryCards = document.querySelectorAll('.industry-card');
        industryCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Add scroll animations
        this.initScrollAnimations();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .industry-card').forEach(el => {
            observer.observe(el);
        });
    }

    destroy() {
        // Cleanup if needed
    }
}