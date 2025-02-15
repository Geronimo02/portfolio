document.addEventListener('DOMContentLoaded', () => {
    // Animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    // Aplicar a todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Botón de tema oscuro
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 18px;
        border-radius: 50%;
        background: #2A9D8F;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;

    // Función para cambiar tema
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerHTML = document.body.classList.contains('dark-theme') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    };

    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);

    // Efecto hover para proyectos
    document.querySelectorAll('.project-card').forEach(card => {
        const link = card.querySelector('a');
        
        card.addEventListener('mouseenter', () => {
            link.style.color = '#2A9D8F';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            link.style.color = '#264653';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });
});