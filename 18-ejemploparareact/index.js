document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carrusel-prev');
    const nextButton = document.querySelector('.carrusel-next');
    const slides = document.querySelectorAll('.carrusel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carrusel-contenido').style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Opcional: Auto-reproducción
    setInterval(() => {
        nextButton.click();
    }, 3000); // Cambia la imagen cada 3 segundos
});