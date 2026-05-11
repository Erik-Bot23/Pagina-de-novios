//Esta clase de momento no se usa, sería repetitivo porque ya esta moments.js
export function initTimeline(){
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

  const timeline = document.getElementById("timeline");

  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event");
    div.innerHTML = `<h3>${event.date}</h3><p>${event.text}</p>`;
    timeline.appendChild(div);
  });
}
