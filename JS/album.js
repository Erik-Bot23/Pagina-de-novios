// ============================================================
// album.js — ÁLBUM DE FOTOS CON EFECTO LIBRO
// ------------------------------------------------------------
// Lógica del "libro" que vemos en la sección Nuestro álbum.
// - Arreglo `album`: lista de fotos (img) con su leyenda (text).
// - `current`: índice de la foto que se está mostrando.
// - `opened`: flag que dice si la portada ya se abrió.
//
// NOTA: la descripción solo explica cómo funciona, no cambia
// el comportamiento.
// ============================================================
export function initAlbum(){
  // -------------------------------
  // 1) DATOS: lista de recuerdos
  //    Cada objeto = una foto + el texto que la acompaña.
  //
  // -------------------------------
  const album = [
      {
          img: "Assets/Images/1.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "Assets/Images/2.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "Assets/Images/3.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "Assets/Images/4.jpeg",
          text: "Nuestro inicio como novios"
      },
      {
          img: "Assets/Images/6.jpeg",
          text: "Nuestro inicio como novios"
      },
      {
          img: "Assets/Images/7.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "Assets/Images/8.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "Assets/Images/9.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "Assets/Images/11.jpeg",
          text: "Salida al río"
      },
      {
          img: "Assets/Images/13.jpeg",
          text: "Salida al río"
      },
      {
          img: "Assets/Images/14.jpeg",
          text: "Salida a Oaxaca"
      },
      {
          img: "Assets/Images/15.jpeg",
          text: "Salida a Oaxaca"
      },
      {
          img: "Assets/Images/16.jpeg",
          text: "Cena de DOIX"
      },
      {
          img: "Assets/Images/18.jpeg",
          text: "Foto de Yan"
      },
      {
          img: "Assets/Images/20.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/21.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/22.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/28.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/29.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/30.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "Assets/Images/23.jpeg",
          text: "San Valentin"
      },
      {
          img: "Assets/Images/26.jpeg",
          text: "San Valentin"
      },
      {
          img: "Assets/Images/24.jpeg",
          text: "Aniversario en los Honguitos"
      },
      {
          img: "Assets/Images/25.jpeg",
          text: "Aniversario en los Honguitos"
      },
      {
          img: "Assets/Images/31.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "Assets/Images/32.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "Assets/Images/33.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "Assets/Images/34.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "Assets/Images/35.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "Assets/Images/41.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "Assets/Images/47.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "Assets/Images/49.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "Assets/Images/37.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/38.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/40.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/44.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/45.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/46.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/48.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "Assets/Images/54.jpeg",
          text: "Bellas artes"
      },
      {
          img: "Assets/Images/55.jpeg",
          text: "Bellas artes"
      },
      {
          img: "Assets/Images/56.jpeg",
          text: "Bellas artes"
      },
      {
          img: "Assets/Images/57.jpeg",
          text: "Bellas artes"
      },
      {
          img: "Assets/Images/50.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "Assets/Images/51.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "Assets/Images/52.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "Assets/Images/53.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "Assets/Images/42.jpeg",
          text: "Aniversario en los Horcones"
      },
      {
          img: "Assets/Images/43.jpeg",
          text: "Aniversario en los Horcones"
      },
      {
          img: "Assets/Images/59.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "Assets/Images/60.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "Assets/Images/63.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "Assets/Images/67.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "Assets/Images/69.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "Assets/Images/70.jpeg",
          text: "Campo de flores Oaxaca"
      }
  ];

  // -------------------------------
  // 2) ESTADO de la navegación
  // -------------------------------
  let current = 0;     // Índice de la foto actual
  let opened = false;  // ¿La portada del libro ya está abierta?

  // -------------------------------
  // 3) Referencias a los elementos del DOM
  //    Se buscan UNA sola vez (no cada vez que se renderiza),
  //    que es más eficiente y es la práctica recomendada.
  // -------------------------------
  const img = document.getElementById("albumImage");  // <img> de la foto
  const text = document.getElementById("albumText");  // <p> de la leyenda
  const page = document.getElementById("bookPage");   // página interior
  const cover = document.getElementById("bookCover"); // portada

  // -------------------------------
  // 4) render(): muestra la foto que toca
  //    - Agrega la clase .flip → efecto de "pasar la hoja" (rotateY)
  //    - Espera 400ms (duración de la animación) con setTimeout
  //    - Cambia el src y el texto
  //    - Quita .flip para que la página vuelva a su posición
  // -------------------------------
  function render(){
      page.classList.add("flip");
      setTimeout(() => {
          img.src = album[current].img;
          text.innerText = album[current].text;
          page.classList.remove("flip");
      }, 400);
  }

  // -------------------------------
  // 5) Botón siguiente (❯)
  //    - Si la portada NO está abierta: abre la portada y termina.
  //    - Si ya está abierta: avanza al siguiente recuerdo.
  //    `(current + 1) % album.length` = incremento circular:
  //    al llegar al final vuelve a 0 (como una ruleta).
  // -------------------------------
  document.getElementById("next").onclick = () => {
      if(!opened){
          cover.classList.add("open"); // anima rotación de la portada
          opened = true;
          return;
      }
      current = (current + 1) % album.length;
      render();
  };

  // -------------------------------
  // 6) Botón anterior (❮)
  //    - Si la portada no está abierta, no hace nada.
  //    - Retrocede de forma circular:
  //      `(current - 1 + album.length) % album.length` evita
  //      números negativos (si current=0, devuelve el último).
  // -------------------------------
  document.getElementById("prev").onclick = () => {
      if(!opened) return;
      current = (current - 1 + album.length) % album.length;
      render();
  };

  // -------------------------------
  // 7) Clic sobre la portada: la abre o la cierra
  //    Alterna la clase .open usando el flag `opened`.
  // -------------------------------
  cover.addEventListener("click", () => {
    if(opened){
      cover.classList.remove("open");
      opened = false;
    } else {
      cover.classList.add("open");
      opened = true;
    }
  });

  // -------------------------------
  // 8) Carga inicial: muestra el primer recuerdo
  //    (que queda oculto detrás de la portada hasta abrir).
  // -------------------------------
  render();
}