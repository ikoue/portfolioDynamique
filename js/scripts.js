document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Site E-commerce',
            description: 'Une plateforme de commerce électronique développée avec React et Node.js, incluant un système de paiement sécurisé et une gestion des stocks en temps réel.',
            image: 'images/ecommerce.jpg',
            link: '#',
            technologies: ['React', 'Node.js', 'MongoDB']
        },
        {
            title: 'Application Mobile',
            description: 'Application mobile cross-platform développée avec Flutter, permettant le suivi d\'activités sportives et la connexion avec des capteurs IoT.',
            image: 'images/app-mobile.jpg',
            link: '#',
            technologies: ['Flutter', 'Firebase', 'BLE']
        },
        {
            title: 'Dashboard Analytics',
            description: 'Interface d\'analyse de données en temps réel avec visualisations interactives et rapports personnalisables.',
            image: 'images/dashboard.jpg',
            link: '#',
            technologies: ['Vue.js', 'D3.js', 'Python']
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">Voir le projet</a>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Animation au défilement
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skill-tag')) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                }
            }
        });
    }, observerOptions);

    // Observer les éléments
    document.querySelectorAll('.project, .skill-tag, .chat-message').forEach(el => {
        observer.observe(el);
    });

    // Effet de parallaxe modifié
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.profile-image');
        
        parallaxElements.forEach(el => {
            const speed = 0.05;
            const yPos = -(scrolled * speed);
            el.style.transform = `scale(1.05) translateY(${yPos}px)`;
        });
    });

    // Animation des skills au survol modifiée
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = `translateY(-5px)`;
        });
        
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'translateY(0)';
        });
    });

    // Gestion du formulaire de contact avec animation
    const contactForm = document.getElementById('contact-form');
    const formInputs = contactForm.querySelectorAll('input, textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        btn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
        btn.classList.add('success');
        
        setTimeout(() => {
            contactForm.reset();
            btn.innerHTML = 'Envoyer';
            btn.classList.remove('success');
        }, 3000);
    });
});
