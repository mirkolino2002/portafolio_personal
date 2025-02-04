// JavaScript para controlar la aparición y funcionamiento del botón
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const header = document.querySelector('#cabecera'); // Asumiendo que tu cabecera tiene el id "cabecera"

    // Función para mostrar/ocultar el botón
    window.addEventListener('scroll', function() {
        // Obtener la posición del header
        const headerBottom = header.offsetTop + header.offsetHeight;
        
        // Mostrar el botón cuando se ha pasado el header
        if (window.pageYOffset > headerBottom) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Función para volver arriba cuando se hace click en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para un scroll suave
        });
    });
    
});