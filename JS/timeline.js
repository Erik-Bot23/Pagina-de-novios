// ============================================================
// timeline.js — LÍNEA DE TIEMPO (EN DESUSO / NO ACTIVADO)
// ------------------------------------------------------------
// NOTA: Este módulo NO se usa en la página actual. Está
// comentado en main.js porque el HTML no tiene un elemento
// #timeline (si se llamara, crashearía).
//
// Idea: dibuja una "línea de tiempo" vertical con los hitos
// de la relación. Se dejó como referencia; si algún día quieres
// usarla, debes: (1) crear <div id="timeline"></div> en el HTML
// y (2) descomentar initTimeline() en main.js.
// ============================================================
export function initTimeline(){
  // ------------------------------------------------
  // 1) DATOS: arreglo de eventos (fecha + texto)
  //    Nota: las fechas del ejemplo son de 2024, mientras que
  //    el resto del proyecto dice que la historia inició en
  //    septiembre de 2025. Habría que actualizarlas.
  // ------------------------------------------------
  const events = [
    {
      date: "14 Feb 2024",
      text: "Nuestro primer San Valentín ❤️"
    },
    {
      date: "10 Mar 2024",
      text: "Nuestro primer viaje juntos ✈️"
    }
  ];

  // Referencia al contenedor donde vivirán los eventos
  const timeline = document.getElementById("timeline");

  // ------------------------------------------------
  // 2) Render: por cada evento crea un div y lo inserta
  // ------------------------------------------------
  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event"); // estilos en general.css (.event)
    div.innerHTML = `<h3>${event.date}</h3><p>${event.text}</p>`;
    timeline.appendChild(div);
  });
}