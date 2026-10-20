// ============================================================
// main.js — PUNTO DE ENTRADA de toda la página
// ------------------------------------------------------------
// Este es el "orquestador": no contiene lógica propia, solo
// importa los demás módulos y los enciende uno por uno.
// Cada módulo es una función exportada (initXxx) que, al
// ejecutarse, busca sus elementos en el HTML y empieza a
// funcionar.
//
// Se usa `export`/`import`, así que el archivo debe cargarse
// con type="module" (ya está así en Index.html).
// ============================================================

// Importaciones: una por sección de la página.
import { initAlbum } from "./album.js";      // Álbum tipo libro
import { initMoments } from "./moments.js";  // Carrusel de momentos
import { initPhrases } from "./phrases.js";  // Frases cambiantes
import { initQuiz } from "./quiz.js";        // Quiz + música
import { initScroll } from "./scroll.js";    // Animación de aparición al hacer scroll
import { initSplash } from "./splash.js";

// DOMContentLoaded: espera a que TODO el HTML (incluidas
// imágenes y <audio>) esté cargado y parseado antes de correr.
// Si se ejecutara antes, document.getElementById() retornaría
// null porque los elementos aún no existen.
document.addEventListener("DOMContentLoaded", () => {
    // Módulos ACTIVOS (los que usa la página):
    initSplash();
    initAlbum();     // Álbum de fotos con efecto libro
    initMoments();   // Carrousel infinito de momentos
    initPhrases();   // Cambia la frase cada 2 segundos
    initScroll();    // Muestra las tarjetas .fade al hacer scroll
    initQuiz();      // Quiz + dispara la música
});