// Menu hamburguesa móvil - DEBE CARGARSE PRIMERO
(function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            console.log('Menu toggle clicked');
        });
        
        // Cerrar menú cuando se hace click en un enlace
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
        
        // Cerrar menú si se hace click fuera
        document.addEventListener('click', function(e) {
            if(!e.target.closest('nav') && !e.target.closest('.mobile-toggle')) {
                navLinks.classList.remove('active');
            }
        });
    }
})();

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value || 'No especificada';
            const plan = document.getElementById('plan').value || 'No especificado';
            const message = document.getElementById('message').value;
            
            // Crear mensaje formateado
            const whatsappMessage = `*NUEVO CONTACTO DESDE WEB*%0A%0A` +
                                   `*Nombre:* ${name}%0A` +
                                   `*Email:* ${email}%0A` +
                                   `*Empresa:* ${company}%0A` +
                                   `*Plan de interés:* ${plan}%0A` +
                                   `*Mensaje:*%0A${message}%0A%0A` +
                                   `*Enviado desde:* NexoDigital Portafolio`;
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${573116457927}?text=${whatsappMessage}`;
            
            // Abrir WhatsApp en nueva pestaña
            window.open(whatsappURL, '_blank');
            
            // Opcional: Mostrar confirmación
            alert(`Mensaje listo para enviar a WhatsApp. Se abrirá la aplicación.`);
            
            // Opcional: Resetear formulario después de 2 segundos
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(108, 99, 255, 0.15)';
    }
});