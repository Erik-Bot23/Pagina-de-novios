export function initPhrases(){
  const phrases = [
    "Eres mi lugar favorito",
    "Contigo todo es mejor",
    "Gracias por cada momento juntos",
    "Eres mi historia favorita",
    "Cada momento contigo es maravilloso",
    "Quiero vivir mi vida a tu lado"
  ];

  function changePhrase() {
    const random = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").innerText = phrases[random];
  }

  setInterval(changePhrase, 2000);
  changePhrase();
}
