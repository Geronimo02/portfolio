document.addEventListener('DOMContentLoaded', () => {
    // ==================== ANIMACIONES AL SCROLL ====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Aplicar a todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Animación para cards individuales con delay
    const cards = document.querySelectorAll('.service-card, .result-card, .cert-card, .project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // ==================== FORMULARIO DE CONTACTO ====================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulación de envío (en producción conectar con backend o servicio)
            formStatus.className = 'form-status';
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.display = 'block';

            // Simular delay de envío
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado exitosamente! Te responderé pronto.';
                contactForm.reset();

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);

            // En producción, usar fetch o emailjs:
            /*
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '¡Mensaje enviado exitosamente!';
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
            }
            */
        });
    }

    // ==================== MODO OSCURO ====================
    // Crear botón de toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Cambiar tema');
    themeToggle.setAttribute('title', 'Cambiar tema');
    
    // Comprobar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        themeToggle.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);

    // ==================== SMOOTH SCROLL ====================
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

    // ==================== CONTADORES ANIMADOS ====================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.result-number');
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const number = parseInt(target.replace(/[^0-9]/g, ''));
            
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    clearInterval(timer);
                    current = number;
                }
                counter.textContent = (isPlus ? '+' : '') + Math.floor(current) + (isPercentage ? '%' : '');
            }, 30);
        });
    };

    // Activar contadores cuando sean visibles
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const resultsSection = document.getElementById('results');
    if (resultsSection) {
        counterObserver.observe(resultsSection);
    }
});