export function initAlbum(){
  const album = [
      {
          img: "assets/images/1.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "assets/images/2.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "assets/images/3.jpeg",
          text: "Primer salida a Oaxaca"
      },
      {
          img: "assets/images/4.jpeg",
          text: "Nuestro inicio como novios"
      },
      {
          img: "assets/images/6.jpeg",
          text: "Nuestro inicio como novios"
      },
      {
          img: "assets/images/7.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "assets/images/8.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "assets/images/9.jpeg",
          text: "Día de muertos en Oaxaca"
      },
      {
          img: "assets/images/11.jpeg",
          text: "Salida al río"
      },
      {
          img: "assets/images/13.jpeg",
          text: "Salida al río"
      },
      {
          img: "assets/images/14.jpeg",
          text: "Salida a Oaxaca"
      },
      {
          img: "assets/images/15.jpeg",
          text: "Salida a Oaxaca"
      },
      {
          img: "assets/images/16.jpeg",
          text: "Cena de DOIX"
      },
      {
          img: "assets/images/18.jpeg",
          text: "Foto de Yan"
      },
      {
          img: "assets/images/20.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/21.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/22.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/28.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/29.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/30.jpeg",
          text: "Salida a San Bernardo"
      },
      {
          img: "assets/images/23.jpeg",
          text: "San Valentin"
      },
      {
          img: "assets/images/26.jpeg",
          text: "San Valentin"
      },
      {
          img: "assets/images/24.jpeg",
          text: "Aniversario en los Honguitos"
      },
      {
          img: "assets/images/25.jpeg",
          text: "Aniversario en los Honguitos"
      },
      {
          img: "assets/images/31.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "assets/images/32.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "assets/images/33.jpeg",
          text: "Fotos de Yan"
      },
      {
          img: "assets/images/34.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "assets/images/35.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "assets/images/41.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "assets/images/47.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "assets/images/49.jpeg",
          text: "Biblioteca Vasconcelos"
      },
      {
          img: "assets/images/37.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/38.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/40.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/44.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/45.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/46.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/48.jpeg",
          text: "Acuario Michin"
      },
      {
          img: "assets/images/54.jpeg",
          text: "Bellas artes"
      },
      {
          img: "assets/images/55.jpeg",
          text: "Bellas artes"
      },
      {
          img: "assets/images/56.jpeg",
          text: "Bellas artes"
      },
      {
          img: "assets/images/57.jpeg",
          text: "Bellas artes"
      },
      {
          img: "assets/images/50.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "assets/images/51.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "assets/images/52.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "assets/images/53.jpeg",
          text: "Zocalo de CDMX"
      },
      {
          img: "assets/images/42.jpeg",
          text: "Aniversario en los Horcones"
      },
      {
          img: "assets/images/43.jpeg",
          text: "Aniversario en los Horcones"
      },
      {
          img: "assets/images/59.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "assets/images/60.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "assets/images/63.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "assets/images/67.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "assets/images/69.jpeg",
          text: "Campo de flores Oaxaca"
      },
      {
          img: "assets/images/70.jpeg",
          text: "Campo de flores Oaxaca"
      }
  ];

  let current = 0;

  const img = document.getElementById("albumImage");
  const text = document.getElementById("albumText");
  const page = document.getElementById("bookPage");
  const cover = document.getElementById("bookCover");

  let opened = false;

  function render(){
      page.classList.add("flip");
      setTimeout(() => {
          img.src = album[current].img;
          text.innerText = album[current].text;
          page.classList.remove("flip");
      }, 400);
  }

  document.getElementById("next").onclick = () => {
      if(!opened){
          cover.classList.add("open");
          opened = true;
          return;
      }
      current = (current + 1) % album.length;
      render();
  };

  document.getElementById("prev").onclick = () => {
      if(!opened) return;
      current = (current - 1 + album.length) % album.length;
      render();
  };

  cover.addEventListener("click", () => {
    if(opened){
      cover.classList.remove("open");
      opened = false;
    } else {
      cover.classList.add("open");
      opened = true;
    }
  });

  render();
}