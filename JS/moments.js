// ============================================================
// moments.js — CARRUSEL INFINITO DE MOMENTOS IMPORTANTES
// ------------------------------------------------------------
// Rellena el div #carousel con tarjetas de fotos.
// Truco del carrusel infinito:
//   1. Se duplican los momentos ([...moments, ...moments]).
//   2. CSS anima la franja completa con translateX(-50%)
//      (equivale a un "recorrido", y al llegar a -50% el
//      contenido vuelve a ser idéntico → parece continuo).
//   3. Al hacer clic en una tarjeta, se agranda y muestra el texto.
// ============================================================
export function initMoments(){

    // -------------------------------
    // 1) DATOS: cada momento = foto, título, fecha y descripción
    // -------------------------------
    const moments = [
        {
            img: "Assets/Images/5.jpeg",
            title: "Nuestro inicio",
            date: "26 de septiembre de 2025",
            desc: "El día que nos volvimos novios"
        },
        {
            img: "Assets/Images/10.jpeg",
            title: "Primer festividad juntos",
            date: "Octubre de 2025",
            desc: "Día de muertos en Oaxaca"
        },
        {
            img: "Assets/Images/17.jpeg",
            title: "Fiesta del trabajo",
            date: "Diciembre de 2025",
            desc: "Fiesta de navidad del trabajo"
        },
        {
            img: "Assets/Images/19.jpeg",
            title: "Primera navidad juntos",
            date: "Diciembre de 2025",
            desc: "Fiesta de navidad de redes"
        },
        {
            img: "Assets/Images/27.jpeg",
            title: "San valentin",
            date: "Febrero de 2026",
            desc: "Nuestro primer dia del amor y la amistad juntos"
        },
        {
            img: "Assets/Images/58.jpeg",
            title: "Campo de flores",
            date: "Febreo de 2026",
            desc: "Xoxocotlan Oaxaca"
        },
        {
            img: "Assets/Images/46.jpeg",
            title: "Primer viaje juntos",
            date: "Abril de 2026",
            desc: "Acuario Michin en CDMX"
        },
        {
            img: "Assets/Images/36.jpeg",
            title: "Primer viaje juntos",
            date: "Abril de 2026",
            desc: "Torre latinoamericana en CDMX"
        },
        {
            img: "Assets/Images/53.jpeg",
            title: "Primer viaje juntos",
            date: "Abril de 2026",
            desc: "Zocalo en CDMX"
        },
        {
            img: "Assets/Images/77.jpeg",
            title: "Viaje a la playa",
            date: "Julio de 2026",
            desc: "Puerto Escondido, Oaxaca"
        },
        {
            img: "Assets/Images/82.jpeg",
            title: "Cita en la playa por la noche",
            date: "Julio de 2026",
            desc: "Puerto Escondido, Oaxaca"
        },
        {
            img: "Assets/Images/80.jpeg",
            title: "Primer año como novios",
            date: "Septiembre de 2026",
            desc: "San Jose del Pacifico, Oaxaca"
        }
    ];

    // Referencia al contenedor donde se van a agregar las tarjetas
    const carousel = document.getElementById("carousel");

    // Se duplican los momentos → la animación de 50% se cierra en loop
    const duplicatedMoments = [...moments, ...moments];

    // -------------------------------
    // 2) Crear una tarjeta por cada momento (creación dinámica)
    //    createElement + innerHTML construye el HTML en memoria.
    // -------------------------------
    duplicatedMoments.forEach((m) => {
        const card = document.createElement("div");

        card.classList.add("moment-card"); // estilos de moments.css

        // Elemento plantilla con la imagen y la "overlay" de texto
        card.innerHTML = `
            <img src="${m.img}" alt="">

            <div class="moment-overlay">
                <h3>${m.title}</h3>
                <p>${m.date}</p>
                <span>${m.desc}</span>
            </div>
        `;

        // -------------------------------
        // 3) Clic en la tarjeta → expandir y mostrar el texto
        //    - stopPropagation: evita que el clic suba y dispare
        //      el listener del documento (que cierra todo).
        //    - Se guarda si esta tarjeta YA era la activa para
        //      poder "desactivarla" con un segundo clic.
        // -------------------------------
        card.addEventListener("click", (e) => {
            e.stopPropagation();

            // ¿Esta tarjeta ya estaba activa?
            const alreadyActive = card.classList.contains("active");

            // Quitar .active de TODAS las tarjetas
            document.querySelectorAll(".moment-card").forEach(c => c.classList.remove("active"));

            // Si no estaba activa, activarla (mostrar overlay)
            if(!alreadyActive){
                card.classList.add("active");
            }
        });

        // Se agrega la tarjeta al carrusel del DOM
        carousel.appendChild(card);
    });

    // -------------------------------
    // 4) Clic en CUALQUIER otra parte de la página
    //    Cierra todas las tarjetas (quita .active).
    //    closest() revisa si el clic ocurrió DENTRO de una tarjeta.
    // -------------------------------
    document.addEventListener("click", (e) => {
        if(!e.target.closest(".moment-card")){
            document.querySelectorAll(".moment-card").forEach(c => c.classList.remove("active"));
        }
    });
}