// Obtener los botones de ordenamiento
const btnSortDateDescending = document.querySelector('#btn-fecha-descendente');
const btnSortDateAscending = document.querySelector('#btn-fecha-ascendente');
const btnSortRatingDescending = document.querySelector('#btn-resena-descendente');
const btnSortRatingAscending = document.querySelector('#btn-resena-ascendente');

// Obtener el contenedor de las reseñas
const reviewsContainer = document.querySelector('.reviews-container');

// Obtener todas las reseñas
const reviews = Array.from(document.querySelectorAll('.review'));

// Función para ordenar las reseñas por fecha (más reciente primero)
function sortReviewsByDateDescending() {
    reviews.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA;
    });

    reviews.forEach(review => reviewsContainer.appendChild(review));
}

// Función para ordenar las reseñas por fecha (más antiguo primero)
function sortReviewsByDateAscending() {
    reviews.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateA - dateB;
    });

    reviews.forEach(review => reviewsContainer.appendChild(review));
}

// Función para ordenar las reseñas por valoración (más altas primero)
function sortReviewsByRatingDescending() {
    reviews.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute('data-rating'));
        const ratingB = parseInt(b.getAttribute('data-rating'));
        return ratingB - ratingA;
    });

    reviews.forEach(review => reviewsContainer.appendChild(review));
}

// Función para ordenar las reseñas por valoración (más bajas primero)
function sortReviewsByRatingAscending() {
    reviews.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute('data-rating'));
        const ratingB = parseInt(b.getAttribute('data-rating'));
        return ratingA - ratingB;
    });

    reviews.forEach(review => reviewsContainer.appendChild(review));
}

// Asignar los eventos click a los botones de ordenamiento
btnSortDateDescending.addEventListener('click', sortReviewsByDateDescending);
btnSortDateAscending.addEventListener('click', sortReviewsByDateAscending);
btnSortRatingDescending.addEventListener('click', sortReviewsByRatingDescending);
btnSortRatingAscending.addEventListener('click', sortReviewsByRatingAscending);