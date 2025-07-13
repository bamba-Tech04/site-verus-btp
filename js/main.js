// Configuration EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_USER_ID"); // Remplacer par votre User ID EmailJS réel
        console.log('EmailJS initialisé avec succès');
    } else {
        console.warn('EmailJS non disponible');
    }
})();

// Variables globales
let navbar, hamburger, navMenu, navLinks, quoteForm;

// Initialisation sécurisée des éléments DOM
document.addEventListener('DOMContentLoaded', function() {
    // Menu burger functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-menu .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    navbar = document.querySelector('.navbar');
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    navLinks = document.querySelectorAll('.nav-link');
    quoteForm = document.getElementById('quoteForm');
    
    // Initialiser les événements seulement si les éléments existent
    initializeNavigation();
    initializeQuoteForm();
    initializeProjectFilters();
    initializeAnimations();
});

function initializeNavigation() {
    if (!hamburger || !navMenu || !navLinks) return;
    
    // Navigation mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fermer le menu mobile en cliquant sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

function initializeQuoteForm() {
    if (!quoteForm) return;
    
    // Gestion du formulaire de devis
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = {
            prenom: document.getElementById('prenom')?.value || '',
            nom: document.getElementById('nom')?.value || '',
            telephone: document.getElementById('telephone')?.value || '',
            email: document.getElementById('email')?.value || '',
            surface: document.getElementById('surface')?.value || '',
            niveaux: document.getElementById('niveaux')?.value || '',
            localisation: document.getElementById('localisation')?.value || '',
            service: document.getElementById('service')?.value || '',
            budget: document.getElementById('budget')?.value || '',
            delai: document.getElementById('delai')?.value || '',
            message: document.getElementById('message')?.value || '',
            consent: document.getElementById('consent')?.checked || false,
            newsletter: document.getElementById('newsletter')?.checked || false
        };
        
        // Validation des champs requis
        if (!formData.prenom || !formData.nom || !formData.telephone || 
            !formData.surface || !formData.niveaux || !formData.localisation || !formData.service) {
            showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }
        
        // Validation du consentement
        if (!formData.consent) {
            showNotification('Vous devez accepter d\'être contacté pour envoyer votre demande.', 'error');
            return;
        }
        
        // Affichage du loader
        const submitButton = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Envoi en cours...</span>';
        submitButton.disabled = true;
        
        // Préparation du template pour EmailJS
        const templateParams = {
            to_name: 'VERUS BTP',
            from_name: `${formData.prenom} ${formData.nom}`,
            client_prenom: formData.prenom,
            client_nom: formData.nom,
            client_phone: formData.telephone,
            client_email: formData.email || 'Non renseigné',
            project_surface: formData.surface,
            project_niveaux: formData.niveaux,
            project_localisation: formData.localisation,
            project_service: getServiceName(formData.service),
            project_budget: getBudgetName(formData.budget),
            project_delai: getDelaiName(formData.delai),
            project_message: formData.message || 'Aucun message complémentaire',
            newsletter_consent: formData.newsletter ? 'Oui' : 'Non',
            reply_to: formData.email || formData.telephone,
            date_demande: new Date().toLocaleDateString('fr-FR')
        };
        
        // Envoi via EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Votre demande de devis a été envoyée avec succès! Nous vous contactons sous 24h.', 'success');
                    quoteForm.reset();
                    resetCheckboxes();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    showNotification('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement au +221 77 454 80 06.', 'error');
                })
                .finally(function() {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                });
        } else {
            // Simulation d'envoi si EmailJS n'est pas disponible
            setTimeout(() => {
                showNotification('Demande de devis enregistrée! Nous vous contactons sous 24h.', 'success');
                quoteForm.reset();
                resetCheckboxes();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 1000);
        }
    });
    
    // Validation en temps réel du formulaire
    document.querySelectorAll('#quoteForm input, #quoteForm select, #quoteForm textarea').forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Ajouter des événements pour les champs focus
        field.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
    });
    
    // Gestion des checkboxes personnalisées
    document.querySelectorAll('.checkbox-label').forEach(label => {
        label.addEventListener('click', function(e) {
            e.preventDefault();
            const checkbox = this.querySelector('input[type="checkbox"]');
            const checkmark = this.querySelector('.checkmark');
            
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                checkmark.style.backgroundColor = 'var(--primary-color)';
                checkmark.style.borderColor = 'var(--primary-color)';
                checkmark.innerHTML = '✓';
                checkmark.style.color = 'white';
                checkmark.style.fontSize = '14px';
                checkmark.style.fontWeight = 'bold';
            } else {
                checkmark.style.backgroundColor = '';
                checkmark.style.borderColor = 'var(--border-color)';
                checkmark.innerHTML = '';
            }
        });
    });
    
    // Amélioration de l'UX avec des compteurs pour les champs numériques
    const surfaceField = document.getElementById('surface');
    if (surfaceField) {
        surfaceField.addEventListener('input', function() {
            const value = this.value;
            if (value && !isNaN(value)) {
                this.setAttribute('data-suffix', 'm²');
            } else {
                this.removeAttribute('data-suffix');
            }
        });
    }

    // Formatage automatique du numéro de téléphone
    const telephoneField = document.getElementById('telephone');
    if (telephoneField) {
        telephoneField.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('221')) {
                    // Format sénégalais: +221 XX XXX XX XX
                    value = value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
                } else if (value.startsWith('77') || value.startsWith('78') || value.startsWith('70')) {
                    // Format local: 77 XXX XX XX
                    value = value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
                }
            }
            this.value = value;
        });
    }
    
    // Gestion des checkboxes personnalisées
    document.querySelectorAll('.checkbox-label').forEach(label => {
        label.addEventListener('click', function(e) {
            e.preventDefault();
            const checkbox = this.querySelector('input[type="checkbox"]');
            const checkmark = this.querySelector('.checkmark');
            const svg = checkmark.querySelector('.check-icon');
            
            // Toggle checkbox state
            checkbox.checked = !checkbox.checked;
            
            // Update visual state
            if (checkbox.checked) {
                checkmark.style.backgroundColor = 'var(--primary-color)';
                checkmark.style.borderColor = 'var(--primary-color)';
                if (svg) svg.style.display = 'block';
            } else {
                checkmark.style.backgroundColor = 'transparent';
                checkmark.style.borderColor = 'var(--border-color)';
                if (svg) svg.style.display = 'none';
            }
        });
    });
}

// Fonction pour réinitialiser les checkboxes
function resetCheckboxes() {
    document.querySelectorAll('.checkbox-label').forEach(label => {
        const checkbox = label.querySelector('input[type="checkbox"]');
        const checkmark = label.querySelector('.checkmark');
        const svg = checkmark.querySelector('.check-icon');
        
        checkbox.checked = false;
        checkmark.style.backgroundColor = 'transparent';
        checkmark.style.borderColor = 'var(--border-color)';
        if (svg) svg.style.display = 'none';
    });
}

// Fonction pour convertir le code budget en nom lisible
function getBudgetName(budgetCode) {
    const budgets = {
        'moins-10m': 'Moins de 10 millions FCFA',
        '10-25m': '10 à 25 millions FCFA',
        '25-50m': '25 à 50 millions FCFA',
        '50-100m': '50 à 100 millions FCFA',
        'plus-100m': 'Plus de 100 millions FCFA'
    };
    return budgets[budgetCode] || 'Non spécifié';
}

// Fonction pour convertir le code délai en nom lisible
function getDelaiName(delaiCode) {
    const delais = {
        'urgent': 'Urgent (moins de 3 mois)',
        'court': 'Court terme (3-6 mois)',
        'moyen': 'Moyen terme (6-12 mois)',
        'long': 'Long terme (plus de 12 mois)'
    };
    return delais[delaiCode] || 'Non spécifié';
}

function initializeAnimations() {
    // Animation de la hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animation des statistiques
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        animateNumber(stat);
    });
}

// Navbar transparente/solide au scroll
window.addEventListener('scroll', () => {
    if (navbar && window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else if (navbar) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll pour les liens internes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    // Animation des compteurs
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target;
        }
    }

    // Observer pour les compteurs
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    });

    // Observer tous les compteurs
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    document.querySelectorAll('.service-card, .project-card, .team-member, .partner-card, .achievement-card').forEach(el => {
        observer.observe(el);
    });
});

// Fonction pour convertir le code service en nom lisible
function getServiceName(serviceCode) {
    const services = {
        'plans-architecturaux': 'Plans Architecturaux',
        'plan-beton-arme': 'Plan Béton Armé',
        'realisation': 'Réalisation',
        'etude-complete': 'Étude Complète'
    };
    return services[serviceCode] || serviceCode;
}

// Fonction pour convertir le code budget en nom lisible
function getBudgetName(budgetCode) {
    const budgets = {
        'moins-10m': 'Moins de 10 millions FCFA',
        '10-25m': '10 à 25 millions FCFA',
        '25-50m': '25 à 50 millions FCFA',
        '50-100m': '50 à 100 millions FCFA',
        'plus-100m': 'Plus de 100 millions FCFA'
    };
    return budgets[budgetCode] || 'Non spécifié';
}

// Fonction pour convertir le code délai en nom lisible
function getDelaiName(delaiCode) {
    const delais = {
        'urgent': 'Urgent (moins de 3 mois)',
        'court': 'Court terme (3-6 mois)',
        'moyen': 'Moyen terme (6-12 mois)',
        'long': 'Long terme (plus de 12 mois)'
    };
    return delais[delaiCode] || 'Non spécifié';
}

// Système de notifications
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Styles pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#DC2626' : '#2563EB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Ajouter les styles d'animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover {
                opacity: 0.7;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Bouton de fermeture
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function initializeProjectFilters() {
    // Ajouter les événements aux boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.filter;
            filterProjects(category);
        });
    });
    
    // Mettre à jour les compteurs initiaux
    updateFilterCounts();
    
    // Ajouter la gestion du clavier pour la modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.style.display === 'block') {
                closeProjectModal();
            }
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    // Supprimer les messages d'erreur existants
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Supprimer les styles d'erreur
    field.style.borderColor = '';
    
    // Validation des champs requis
    if (isRequired && !value) {
        showFieldError(field, 'Ce champ est obligatoire');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = '#DC2626';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #DC2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    field.parentNode.appendChild(errorElement);
}

// Animation des nombres
function animateNumber(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + '+';
        
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 16);
}

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Performance: Lazy loading des images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===== FONCTIONS POUR LES PROJETS =====

// Données des services pour les modals
const servicesData = {
    'etudes': {
        title: 'Études Techniques',
        icon: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/>
                <path d="M16 13H8"/>
                <path d="M16 17v-2a2 2 0 0 0-2-2H8"/>
               </svg>`,
        description: 'Nos études approfondies constituent la base solide de tout projet de construction réussi. Nous analysons chaque aspect de votre projet pour garantir sa faisabilité et son succès.',
        features: [
            'Analyses de faisabilité technique et économique',
            'Études de sol et géotechniques détaillées',
            'Diagnostics techniques de bâtiments existants',
            'Études d\'impact environnemental',
            'Conseils personnalisés et optimisation des coûts',
            'Rapports détaillés et recommandations d\'experts'
        ],
        process: [
            'Analyse des besoins et contraintes du projet',
            'Études préliminaires et investigations sur site',
            'Calculs et simulations techniques',
            'Rédaction du rapport d\'étude complet',
            'Présentation et validation avec le client'
        ],
        duration: '2-6 semaines selon la complexité',
        price: 'À partir de 500 000 FCFA'
    },
    'plans-architecturaux': {
        title: 'Plans Architecturaux',
        icon: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3h6l6 18h6"/>
                <path d="M14 3h7"/>
               </svg>`,
        description: 'Nos architectes expérimentés conçoivent des plans détaillés qui allient esthétique, fonctionnalité et conformité réglementaire pour donner vie à vos projets.',
        features: [
            'Conception architecturale personnalisée',
            'Plans de masse et d\'implantation précis',
            'Plans de niveaux détaillés avec cotations',
            'Élévations et coupes architecturales',
            'Conformité aux réglementations locales',
            'Modélisation 3D et visualisation réaliste'
        ],
        process: [
            'Briefing client et analyse du programme',
            'Esquisse et avant-projet sommaire',
            'Avant-projet détaillé avec plans techniques',
            'Dossier de permis de construire',
            'Plans d\'exécution et détails constructifs'
        ],
        duration: '4-12 semaines selon le projet',
        price: 'À partir de 1 000 000 FCFA'
    },
    'plans-beton-arme': {
        title: 'Plans Béton Armé',
        icon: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
                <path d="M12 22V12"/>
                <path d="M2 7l10 5 10-5"/>
               </svg>`,
        description: 'Nos ingénieurs structures calculent et dimensionnent avec précision tous les éléments en béton armé pour garantir la solidité et la durabilité de vos constructions.',
        features: [
            'Calculs de structures et dimensionnement précis',
            'Plans de ferraillage détaillés et cotés',
            'Notes de calcul justificatives complètes',
            'Optimisation des matériaux et coûts',
            'Respect strict des normes en vigueur',
            'Suivi technique pendant l\'exécution'
        ],
        process: [
            'Analyse des charges et contraintes',
            'Modélisation structurelle et calculs',
            'Dimensionnement des éléments porteurs',
            'Élaboration des plans de ferraillage',
            'Validation et notes de calcul'
        ],
        duration: '3-8 semaines selon la complexité',
        price: 'À partir de 800 000 FCFA'
    },
    'realisation': {
        title: 'Réalisation de Projets',
        icon: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
                <path d="M6 1v4"/>
                <path d="M10 1v4"/>
                <path d="M14 1v4"/>
                <path d="M18 1v4"/>
               </svg>`,
        description: 'De la première pierre aux finitions, nous gérons intégralement vos projets de construction avec un suivi rigoureux et une qualité irréprochable.',
        features: [
            'Gestion complète de projet clés en main',
            'Travaux de gros œuvre et fondations',
            'Second œuvre et finitions de qualité',
            'Coordination des corps d\'état techniques',
            'Contrôle qualité permanent sur chantier',
            'Livraison dans les délais convenus'
        ],
        process: [
            'Préparation du chantier et démarches',
            'Travaux de terrassement et fondations',
            'Élévation des murs et charpente',
            'Second œuvre et équipements techniques',
            'Finitions et réception des travaux'
        ],
        duration: 'Variable selon le projet',
        price: 'Devis personnalisé sur mesure'
    }
};

// Fonction pour ouvrir la modal d'un service
function openServiceModal(serviceId) {
    const service = servicesData[serviceId];
    if (!service) {
        console.error('Service non trouvé:', serviceId);
        return;
    }

    const modal = document.getElementById('serviceModal') || createServiceModal();
    const modalBody = modal.querySelector('#serviceModalBody');
    
    // Créer le contenu de la modal
    modalBody.innerHTML = `
        <div class="modal-service-content">
            <div class="modal-service-header">
                <div class="service-icon-large">
                    ${service.icon}
                </div>
                <div class="modal-service-info">
                    <h2>${service.title}</h2>
                    <p class="modal-service-description">${service.description}</p>
                    
                    <div class="service-details">
                        <div class="detail-item">
                            <strong>⏱️ Durée:</strong> ${service.duration}
                        </div>
                        <div class="detail-item">
                            <strong>💰 Tarif:</strong> ${service.price}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-service-features">
                <h3>Ce qui est inclus</h3>
                <div class="features-grid">
                    ${service.features.map(feature => `
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-service-process">
                <h3>Notre processus</h3>
                <div class="process-steps">
                    ${service.process.map((step, index) => `
                        <div class="process-step">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-content">
                                <p>${step}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-service-actions">
                <button class="btn btn-primary" onclick="contactForService('${serviceId}')">
                    Demander un Devis
                </button>
                <button class="btn btn-secondary" onclick="closeServiceModal()">
                    Fermer
                </button>
            </div>
        </div>
    `;
    
    // Afficher la modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);
}

// Fonction pour créer la modal de service si elle n'existe pas
function createServiceModal() {
    const modal = document.createElement('div');
    modal.id = 'serviceModal';
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeServiceModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeServiceModal()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
            <div class="modal-body" id="serviceModalBody">
                <!-- Contenu dynamique -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Fonction pour fermer la modal de service
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('modal-active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Fonction pour contacter pour un service spécifique
function contactForService(serviceId) {
    const service = servicesData[serviceId];
    const message = `Bonjour, je suis intéressé(e) par votre service "${service.title}". Pouvez-vous me fournir un devis personnalisé ?`;
    
    // Rediriger vers la page de devis avec le service pré-sélectionné
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `devis.html?service=${serviceId}&message=${encodedMessage}`;
}

// Données des projets pour les modals
const projectsData = {
    'residence-moderne': {
        title: 'Résidence Moderne',
        category: 'Maquette 3D',
        location: 'Dakar',
        status: 'En cours',
        progress: 65,
        surface: '3,500m²',
        duration: '18 mois',
        units: '24 logements',
        description: 'Complexe résidentiel moderne de 24 logements avec espaces verts et équipements modernes. Ce projet innovant combine confort, durabilité et design contemporain.',
        features: [
            'Architecture moderne et épurée',
            'Espaces verts aménagés',
            'Parking souterrain sécurisé',
            'Équipements sportifs et de loisirs',
            'Système de sécurité 24h/24',
            'Efficacité énergétique optimisée'
        ],
        images: [
            'public/images/realisation2.jpeg?auto=compress&cs=tinysrgb&w=600',
            'public/images/realisation.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'centre-commercial': {
        title: 'Centre Commercial',
        category: 'Étude & Plans',
        location: 'Thiès',
        status: 'Planification',
        progress: 25,
        surface: '2,500m²',
        duration: '24 mois',
        units: '50 boutiques',
        description: 'Surface commerciale moderne avec parking souterrain et espaces de loisirs. Un projet ambitieux qui transformera le paysage commercial de Thiès.',
        features: [
            'Design architectural moderne',
            'Parking souterrain de 200 places',
            'Espaces de restauration',
            'Zone de divertissement',
            'Système de climatisation centralisé',
            'Accessibilité PMR complète'
        ],
        images: [
            'images/realisation3.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'immeuble-bureaux': {
        title: 'Immeuble de Bureaux',
        category: 'Maquette 3D',
        location: 'Dakar',
        status: 'En cours',
        progress: 45,
        surface: '4,200m²',
        duration: '30 mois',
        units: '8 étages',
        description: 'Tour moderne de bureaux avec façade en verre et équipements high-tech. Un symbole de modernité au cœur de Dakar.',
        features: [
            'Façade en verre haute performance',
            'Système de gestion intelligent',
            'Ascenseurs haute vitesse',
            'Terrasse panoramique',
            'Salles de conférence équipées',
            'Certification environnementale'
        ],
        images: [
            'images/realisation4.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'villa-contemporaine': {
        title: 'Villa Contemporaine',
        category: 'Étude & Plans',
        location: 'Saly',
        status: 'Terminé',
        progress: 100,
        surface: '450m²',
        duration: '12 mois',
        units: 'R+2',
        description: 'Villa de luxe avec piscine, jardin paysager et architecture moderne. Un projet résidentiel d\'exception.',
        features: [
            'Piscine à débordement',
            'Jardin paysager',
            'Domotique intégrée',
            'Garage double',
            'Terrasses panoramiques',
            'Matériaux haut de gamme'
        ],
        images: [
            'public/images/realisation5.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'complexe-hospitalier': {
        title: 'Complexe Hospitalier',
        category: 'Maquette 3D',
        location: 'Saint-Louis',
        status: 'Planification',
        progress: 15,
        surface: '8,000m²',
        duration: '36 mois',
        units: '150 lits',
        description: 'Centre médical moderne avec équipements de pointe et héliport. Un projet d\'envergure pour améliorer l\'offre de soins.',
        features: [
            'Équipements médicaux de pointe',
            'Héliport pour urgences',
            'Laboratoires spécialisés',
            'Blocs opératoires modernes',
            'Système de gestion hospitalière',
            'Espaces de convalescence'
        ],
        images: [
            'images/realisation6.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'complexe-educatif': {
        title: 'Complexe Éducatif',
        category: 'Étude & Plans',
        location: 'Kaolack',
        status: 'En cours',
        progress: 75,
        surface: '5,500m²',
        duration: '20 mois',
        units: '1000 élèves',
        description: 'École moderne avec laboratoires, bibliothèque et terrains de sport. Un investissement dans l\'avenir de l\'éducation.',
        features: [
            'Laboratoires scientifiques',
            'Bibliothèque multimédia',
            'Terrains de sport',
            'Amphithéâtre',
            'Salles informatiques',
            'Espaces verts pédagogiques'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.25.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'hotel-luxe': {
        title: 'Hôtel de Luxe',
        category: 'Maquette 3D',
        location: 'Cap Skirring',
        status: 'Terminé',
        progress: 100,
        surface: '6,200m²',
        duration: '28 mois',
        units: '120 chambres',
        description: 'Hôtel 5 étoiles avec spa, restaurants et vue sur mer. Un joyau touristique au Cap Skirring.',
        features: [
            'Spa et centre de bien-être',
            'Restaurants gastronomiques',
            'Piscines à débordement',
            'Suites avec vue mer',
            'Centre de conférences',
            'Activités nautiques'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.26 (1).jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'logements-sociaux': {
        title: 'Logements Sociaux',
        category: 'Étude & Plans',
        location: 'Rufisque',
        status: 'Planification',
        progress: 30,
        surface: '12,000m²',
        duration: '24 mois',
        units: '200 logements',
        description: 'Programme de logements abordables avec équipements communautaires. Un projet social d\'envergure.',
        features: [
            'Logements abordables',
            'Équipements communautaires',
            'Espaces verts communs',
            'Écoles de proximité',
            'Centres de santé',
            'Transports en commun'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.26 (3).jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    }
};

// Données des réalisations pour les modals
const realisationsData = {
    'residence-palmiers': {
        title: 'Résidence Les Palmiers',
        category: 'Résidentiel',
        location: 'Dakar',
        status: 'Terminé',
        progress: 100,
        surface: '3,500m²',
        duration: '18 mois',
        units: '24 logements',
        year: '2023',
        description: 'Complexe résidentiel moderne de 24 logements avec espaces verts et équipements modernes. Ce projet innovant combine confort, durabilité et design contemporain.',
        features: [
            'Architecture moderne et épurée',
            'Espaces verts aménagés de 800m²',
            'Parking souterrain sécurisé',
            'Équipements sportifs et de loisirs',
            'Système de sécurité 24h/24',
            'Efficacité énergétique optimisée',
            'Ascenseurs dans tous les bâtiments',
            'Terrasses privatives pour chaque logement'
        ],
        images: [
            'public/images/realisation.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'tour-elegance': {
        title: 'Tour Élégance',
        category: 'Commercial',
        location: 'Dakar',
        status: 'Terminé',
        progress: 100,
        surface: '4,800m²',
        duration: '30 mois',
        units: '12 étages',
        year: '2023',
        description: 'Immeuble de bureaux de 12 étages avec façade moderne et équipements high-tech. Un symbole de modernité au cœur de Dakar.',
        features: [
            'Façade en verre haute performance',
            'Système de gestion intelligent du bâtiment',
            'Ascenseurs haute vitesse',
            'Terrasse panoramique au dernier étage',
            'Salles de conférence équipées',
            'Certification environnementale LEED',
            'Parking souterrain de 150 places',
            'Système de climatisation centralisé'
        ],
        images: [
            'public/images/realisation2.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'villa-prestige': {
        title: 'Villa Prestige',
        category: 'Villa',
        location: 'Saly',
        status: 'Terminé',
        progress: 100,
        surface: '450m²',
        duration: '12 mois',
        units: 'R+2',
        year: '2022',
        description: 'Villa de luxe avec piscine, jardin paysager et architecture moderne. Un projet résidentiel d\'exception face à l\'océan.',
        features: [
            'Piscine à débordement de 15m',
            'Jardin paysager de 1000m²',
            'Domotique intégrée complète',
            'Garage double avec espace atelier',
            'Terrasses panoramiques vue océan',
            'Matériaux haut de gamme importés',
            'Suite parentale avec dressing',
            'Cuisine équipée design italien'
        ],
        images: [
            'public/images/realisation3.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'centre-sea-plaza': {
        title: 'Centre Sea Plaza',
        category: 'Commercial',
        location: 'Dakar',
        status: 'Terminé',
        progress: 100,
        surface: '2,500m²',
        duration: '24 mois',
        units: '50 boutiques',
        year: '2022',
        description: 'Centre commercial moderne avec parking souterrain et espaces de loisirs. Un projet qui a transformé le paysage commercial de la zone.',
        features: [
            'Design architectural moderne',
            'Parking souterrain de 200 places',
            'Espaces de restauration variés',
            'Zone de divertissement familiale',
            'Système de climatisation centralisé',
            'Accessibilité PMR complète',
            'Système de sécurité avancé',
            'Espaces événementiels modulables'
        ],
        images: [
            'public/images/realisation4.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'complexe-horizon': {
        title: 'Complexe Horizon',
        category: 'Bureaux',
        location: 'Dakar',
        status: 'Terminé',
        progress: 100,
        surface: '3,200m²',
        duration: '20 mois',
        units: '8 étages',
        year: '2021',
        description: 'Complexe de bureaux avec équipements modernes et espaces de coworking. Un environnement de travail innovant et collaboratif.',
        features: [
            'Espaces de coworking flexibles',
            'Salles de réunion high-tech',
            'Cafétéria et espaces détente',
            'Terrasse jardin au 8ème étage',
            'Fibre optique très haut débit',
            'Système de ventilation naturelle',
            'Espaces de stockage sécurisés',
            'Accès contrôlé par badges'
        ],
        images: [
            'public/images/realisation5.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'cite-nouvelle': {
        title: 'Cité Nouvelle',
        category: 'Social',
        location: 'Thiès',
        status: 'Terminé',
        progress: 100,
        surface: '8,000m²',
        duration: '24 mois',
        units: '150 logements',
        year: '2021',
        description: 'Programme de logements sociaux avec équipements communautaires. Un projet social d\'envergure qui améliore les conditions de vie.',
        features: [
            'Logements abordables T2 et T3',
            'Équipements communautaires complets',
            'Espaces verts communs aménagés',
            'École de proximité intégrée',
            'Centre de santé communautaire',
            'Accès transports en commun',
            'Terrain de sport multisport',
            'Système d\'assainissement moderne'
        ],
        images: [
            'public/images/realisation6.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'hotel-atlantique': {
        title: 'Hôtel Atlantique',
        category: 'Hôtellerie',
        location: 'Saint-Louis',
        status: 'Terminé',
        progress: 100,
        surface: '4,500m²',
        duration: '28 mois',
        units: '80 chambres',
        year: '2020',
        description: 'Hôtel 4 étoiles avec spa, restaurants et vue sur fleuve. Un joyau touristique qui valorise le patrimoine de Saint-Louis.',
        features: [
            'Spa et centre de bien-être',
            'Restaurant gastronomique vue fleuve',
            'Piscines à débordement',
            'Suites avec vue panoramique',
            'Centre de conférences 200 places',
            'Activités nautiques organisées',
            'Architecture inspirée du patrimoine',
            'Jardins tropicaux aménagés'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.25.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'ecole-moderne': {
        title: 'École Moderne',
        category: 'Éducatif',
        location: 'Kaolack',
        status: 'Terminé',
        progress: 100,
        surface: '5,500m²',
        duration: '20 mois',
        units: '800 élèves',
        year: '2020',
        description: 'Complexe éducatif avec laboratoires, bibliothèque et terrains de sport. Un investissement dans l\'avenir de l\'éducation.',
        features: [
            'Laboratoires scientifiques équipés',
            'Bibliothèque multimédia moderne',
            'Terrains de sport multiples',
            'Amphithéâtre de 300 places',
            'Salles informatiques connectées',
            'Espaces verts pédagogiques',
            'Cantine scolaire équipée',
            'Infirmerie et espaces administratifs'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.26 (1).jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    },
    'clinique-sante-plus': {
        title: 'Clinique Santé Plus',
        category: 'Médical',
        location: 'Ziguinchor',
        status: 'Terminé',
        progress: 100,
        surface: '2,800m²',
        duration: '18 mois',
        units: '50 lits',
        year: '2019',
        description: 'Centre médical moderne avec équipements de pointe et laboratoires. Une infrastructure de santé de référence pour la région.',
        features: [
            'Équipements médicaux de dernière génération',
            'Laboratoires d\'analyses complets',
            'Blocs opératoires aux normes internationales',
            'Service d\'urgences 24h/24',
            'Pharmacie hospitalière',
            'Espaces de convalescence confortables',
            'Système de gestion hospitalière informatisé',
            'Héliport pour évacuations d\'urgence'
        ],
        images: [
            'public/images/WhatsApp Image 2025-07-11 at 21.20.26 (2).jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    }
};

// Fonction pour ouvrir la modal d'un projet
function openProjectModal(projectId) {
    // Chercher d'abord dans projectsData, puis dans realisationsData
    const project = projectsData[projectId] || realisationsData[projectId];
    if (!project) {
        console.error('Projet non trouvé:', projectId);
        return;
    }

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Créer le contenu de la modal
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <div class="modal-project-header">
                <div class="modal-project-images">
                    ${project.images.map(img => `
                        <img src="${img}" alt="${project.title}" class="modal-project-image">
                    `).join('')}
                </div>
                <div class="modal-project-info">
                    <h2>${project.title}</h2>
                    <div class="modal-project-badges">
                        <span class="badge badge-${project.category.toLowerCase().replace(/\s+/g, '-')}">${project.category}</span>
                        <span class="badge badge-location">📍 ${project.location}</span>
                    </div>
                    <p class="modal-project-description">${project.description}</p>
                    
                    <div class="modal-project-specs">
                        <div class="spec-item">
                            <strong>Surface:</strong> ${project.surface}
                        </div>
                        <div class="spec-item">
                            <strong>Durée:</strong> ${project.duration}
                        </div>
                        <div class="spec-item">
                            <strong>Capacité:</strong> ${project.units}
                        </div>
                        <div class="spec-item">
                            <strong>Statut:</strong> 
                            <span class="status status-${project.status.toLowerCase().replace(/\s+/g, '-')}">${project.status}</span>
                        </div>
                    </div>
                    
                    <div class="modal-project-progress">
                        <div class="progress-info">
                            <span>Avancement du projet</span>
                            <span class="progress-percentage">${project.progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-project-features">
                <h3>Caractéristiques du projet</h3>
                <div class="features-grid">
                    ${project.features.map(feature => `
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-project-actions">
                <button class="btn btn-primary" onclick="contactForProject('${projectId}')">
                    Nous Contacter pour ce Projet
                </button>
                <button class="btn btn-secondary" onclick="downloadProjectInfo('${projectId}')">
                    Télécharger la Fiche
                </button>
            </div>
        </div>
    `;
    
    // Afficher la modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);
}

// Fonction pour fermer la modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('modal-active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Fonction pour contacter pour un projet spécifique
function contactForProject(projectId) {
    const project = projectsData[projectId];
    const message = `Bonjour, je suis intéressé(e) par le projet "${project.title}" à ${project.location}. Pouvez-vous me fournir plus d'informations ?`;
    
    // Rediriger vers la page de devis avec le projet pré-sélectionné
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `devis.html?project=${projectId}&message=${encodedMessage}`;
}

// Fonction pour télécharger les informations du projet
function downloadProjectInfo(projectId) {
    const project = projectsData[projectId];
    
    // Créer un contenu PDF-like en HTML
    const projectInfo = `
        VERUS BTP - Fiche Projet
        
        Projet: ${project.title}
        Localisation: ${project.location}
        Catégorie: ${project.category}
        Statut: ${project.status}
        
        Spécifications:
        - Surface: ${project.surface}
        - Durée: ${project.duration}
        - Capacité: ${project.units}
        - Avancement: ${project.progress}%
        
        Description:
        ${project.description}
        
        Caractéristiques:
        ${project.features.map(f => `- ${f}`).join('\n')}
        
        Contact: +221 33 XXX XX XX
        Email: contact@verusbtp.sn
    `;
    
    // Créer et télécharger le fichier
    const blob = new Blob([projectInfo], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VERUS_BTP_${project.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Fiche projet téléchargée avec succès!', 'success');
}

// ===== FONCTIONS DE FILTRAGE DES PROJETS =====

// Variables pour le filtrage
let currentFilter = 'all';
let currentSort = 'default';

// Fonction pour filtrer les projets
function filterProjects(category) {
    currentFilter = category;
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noProjectsMessage = document.getElementById('noProjects');
    
    // Mettre à jour les boutons actifs
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    let visibleCount = 0;
    
    // Filtrer les cartes de projets
    projectCards.forEach(card => {
        const cardCategories = card.dataset.category.split(' ');
        const shouldShow = category === 'all' || cardCategories.includes(category);
        
        if (shouldShow) {
            card.style.display = 'block';
            card.classList.add('fade-in-up');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in-up');
        }
    });
    
    // Afficher/masquer le message "aucun projet"
    if (visibleCount === 0) {
        noProjectsMessage.style.display = 'block';
    } else {
        noProjectsMessage.style.display = 'none';
    }
    
    // Mettre à jour les compteurs
    updateFilterCounts();
}

// Fonction pour mettre à jour les compteurs de filtres
function updateFilterCounts() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        const category = btn.dataset.filter;
        const countElement = btn.querySelector('.filter-count');
        
        if (countElement) {
            let count = 0;
            
            if (category === 'all') {
                count = projectCards.length;
            } else {
                projectCards.forEach(card => {
                    const cardCategories = card.dataset.category.split(' ');
                    if (cardCategories.includes(category)) {
                        count++;
                    }
                });
            }
            
            countElement.textContent = count;
        }
    });
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
    filterProjects('all');
    currentSort = 'default';
    
    // Réinitialiser l'ordre des projets si nécessaire
    const projectsGrid = document.getElementById('projectsGrid');
    const projectCards = Array.from(projectsGrid.querySelectorAll('.project-card'));
    
    // Remettre l'ordre original (par ordre d'apparition dans le HTML)
    projectCards.forEach(card => {
        projectsGrid.appendChild(card);
    });
    
    showNotification('Filtres réinitialisés', 'info');
}

// Fonction pour trier les projets
function sortProjects(sortType) {
    currentSort = sortType;
    const projectsGrid = document.getElementById('projectsGrid');
    const projectCards = Array.from(projectsGrid.querySelectorAll('.project-card'));
    
    projectCards.sort((a, b) => {
        switch (sortType) {
            case 'name':
                const nameA = a.querySelector('h3').textContent.toLowerCase();
                const nameB = b.querySelector('h3').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
                
            case 'location':
                const locationA = a.dataset.location || '';
                const locationB = b.dataset.location || '';
                return locationA.localeCompare(locationB);
                
            case 'year':
                const yearA = parseInt(a.dataset.year) || 0;
                const yearB = parseInt(b.dataset.year) || 0;
                return yearB - yearA; // Plus récent en premier
                
            case 'progress':
                const progressA = parseInt(a.querySelector('.progress-fill').style.width) || 0;
                const progressB = parseInt(b.querySelector('.progress-fill').style.width) || 0;
                return progressB - progressA; // Plus avancé en premier
                
            default:
                return 0;
        }
    });
    
    // Réorganiser les cartes dans le DOM
    projectCards.forEach(card => {
        projectsGrid.appendChild(card);
    });
}

// Initialisation des filtres au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter les événements aux boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.filter;
            filterProjects(category);
        });
    });
    
    // Mettre à jour les compteurs initiaux
    updateFilterCounts();
    
    // Ajouter la gestion du clavier pour la modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.style.display === 'block') {
                closeProjectModal();
            }
        }
    });
});

console.log('🏗️ VERUS BTP - Site Web Chargé avec Succès!');