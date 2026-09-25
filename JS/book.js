// ============================================================
// book.js — LIBRO DE PÁGINAS FLIP (EN DESUSO / NO ACTIVADO)
// ------------------------------------------------------------
// NOTA: Este módulo NO se usa. En su lugar la página usa
// album.js (el álbum con portada e imágenes).
// Está comentado en main.js porque el HTML no contiene
// elementos con clase .page.
//
// Idea: permitía voltear "páginas" de un libro con solo hacerles
// clic (se les agregaba/quitaba la clase .flipped).
// ============================================================
export function initBook() {
  // Selecciona todas las páginas del libro
  const pages = document.querySelectorAll('.page');

  // Por cada página...
  pages.forEach((page, i) => {
    // Al hacer clic alterna (toggle) la clase .flipped.
    // toggle = si NO la tiene la agrega, si SÍ la tiene la quita.
    // El CSS sería el encargado de darle el efecto de rotación.
    page.addEventListener('click', () => {
      page.classList.toggle('flipped');
    });
  });
}