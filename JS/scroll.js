// ============================================================
// scroll.js — ANIMACIÓN DE APARICIÓN AL HACER SCROLL
// ------------------------------------------------------------
// Hace que las tarjetas con clase .fade aparezcan suavemente
// (opacidad + deslizamiento) cuando entran a la pantalla.
// Combina con CSS/scroll.css:
//   .fade        → invisible (opacity 0, desplazada 30px abajo)
//   .fade.show   → visible  (opacity 1, desplazada 0px)
// La clase .show la agrega aquí, en JavaScript, en el momento
// justo en que la tarjeta entra al área visible.
// ============================================================
export function initScroll(){
  // Selecciona TODAS las tarjetas que tienen clase .card
  // (y además .fade). Entregar una NodeList: "colección viva" de
  // elementos que se puede recorrer con forEach.
  const elements = document.querySelectorAll('.card');

  // -------------------------------
  // showOnScroll(): decide qué tarjetas deben mostrarse
  // -------------------------------
  function showOnScroll() {
    elements.forEach(el => {
      // getBoundingClientRect().top = distancia del borde SUPERIOR
      // de la tarjeta respecto al borde superior de la ventana.
      // Si vale 0, la tarjeta está justo en el borde de la pantalla.
      const top = el.getBoundingClientRect().top;

      // window.innerHeight - 100 = "poco antes de que la tarjeta
      // llegue al borde inferior". Si la tarjeta está arriba de esa
      // línea, ya es visible para el usuario → se muestra.
      if (top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  // -------------------------------
  // Escuchar el evento 'scroll' (cada vez que el usuario baja)
  // NOTA: la animación corre solo UNA vez por tarjeta, porque
  // una vez que tiene .show ya no vuelve a ocultarse.
  // -------------------------------
  window.addEventListener('scroll', showOnScroll);
}