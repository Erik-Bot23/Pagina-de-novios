// ============================================================
// phrases.js — FRASES QUE CAMBIAN SOLAS
// ------------------------------------------------------------
// Cambia el texto del elemento #phrase cada 2 segundos.
// Las frases se guardan en un arreglo y se elige una al azar.
// ============================================================
export function initPhrases(){
  // -------------------------------
  // 1) BANCO de frases (el arreglo de donde se elige)
  // -------------------------------
  const phrases = [
    "No eres un trebol de tres hojas pero eres mi amuleto de la suerte",
    "Eres mi lugar favorito",
    "Contigo todo es mejor",
    "Eres hermosa en cada faceta que te conozco",
    "Gracias por cada momento juntos",
    "Cada momento contigo es maravilloso",
    "Quiero vivir mi vida a tu lado"
  ];

  // -------------------------------
  // 2) changePhrase(): muestra UNA frase aleatoria
  //    Math.random() -> número entre 0 y 0.999...
  //    * phrases.length -> lo escala hasta el tamaño del arreglo
  //    Math.floor()    -> lo redondea hacia abajo (índice entero)
  //    document.getElementById(...).innerText = texto
  //    Nota: innerText reemplaza el contenido HTML interno del
  //    elemento. Es el equivalente a "escribir" en la página.
  // -------------------------------
  function changePhrase() {
    const random = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").innerText = phrases[random];
  }

  // -------------------------------
  // 3) TEMPORIZADOR
  //    setInterval(función, milisegundos) ejecuta changePhrase
  //    cada 2000ms (2 segundos) indefinidamente.
  //    Se llama una vez más de inmediato para que no haya que
  //    esperar los primeros 2 segundos antes de ver el cambio.
  // -------------------------------
  setInterval(changePhrase, 2000);
  changePhrase();
}