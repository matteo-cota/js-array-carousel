// MILESTONE 2: Creazione di un array di immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

let currentIndex = 0;

// MILESTONE 2: Funzione per caricare il carosello dinamicamente
function loadCarousel() {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[currentIndex]; // Imposta l'immagine attiva
    
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = ''; 

     // Creazione delle miniature
     images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

}

// Funzione per aggiornare l'immagine attiva e le miniature
function updateCarousel() {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[currentIndex];
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentIndex);
    });
}

// Event listener per i tasti di navigazione
document.getElementById('prev-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

document.getElementById('next-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});



// Inizializza il carosello
loadCarousel();