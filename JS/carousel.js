// ============================================================
// carousel.js — CARRUSEL SIMPLE (EN DESUSO / NO ACTIVADO)
// ------------------------------------------------------------
// NOTA: Este módulo NO se usa. En su lugar la página usa
// moments.js (el carrusel infinito con keyframes de CSS).
// Está comentado en main.js porque el HTML no contiene
// elementos .carousel img.
//
// Idea: un carrusel de imágenes que se van mostrando una por
// una, alternando la clase .active cada 3 segundos.
// ============================================================
export function initCarousel(){
  // Índice de la imagen actualmente visible
  let index = 0;

  // Selecciona todas las imágenes dentro de .carousel
  const images = document.querySelectorAll('.carousel img');

  // setInterval ejecuta el bloque cada 3000ms (3 segundos):
  setInterval(() => {
    // 1) Quitar .active a la imagen actual (se oculta)
    images[index].classList.remove('active');

    // 2) Avanzar el índice de forma circular (% images.length)
    index = (index + 1) % images.length;

    // 3) Agregar .active a la siguiente (se muestra)
    images[index].classList.add('active');
  }, 3000);
}