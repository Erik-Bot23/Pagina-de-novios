export function initMoments(){

    const moments = [
        {
            img: "assets/images/5.jpeg",
            title: "Nuestro inicio",
            date: "26 de septiembre de 2025",
            desc: "El día que nos volvimos novios"
        },
        {
            img: "assets/images/10.jpeg",
            title: "Primer festividad juntos",
            date: "Octubre de 2025",
            desc: "Día de muertos en Oaxaca"
        },
        {
            img: "assets/images/17.jpeg",
            title: "Fiesta del trabajo",
            date: "Diciembre de 2025",
            desc: "Fiesta de navidad del trabajo"
        },
        {
            img: "assets/images/19.jpeg",
            title: "Primera navidad juntos",
            date: "Diciembre de 2025",
            desc: "Fiesta de navidad de redes"
        },
        {
            img: "assets/images/27.jpeg",
            title: "San valentin",
            date: "Febrero de 2026",
            desc: "Nuestro primer dia del amor y la amistad juntos"
        },
        {
            img: "assets/images/46.jpeg",
            title: "Primer viaje juntos",
            date: "Febrero de 2026",
            desc: "Acuario Michin en CDMX"
        },
        {
            img: "assets/images/36.jpeg",
            title: "Primer viaje juntos",
            date: "Febrero de 2026",
            desc: "Torre latinoamericana en CDMX"
        },
        {
            img: "assets/images/53.jpeg",
            title: "Primer viaje juntos",
            date: "Febrero de 2026",
            desc: "Zocalo en CDMX"
        },
        {
            img: "assets/images/58.jpeg",
            title: "Campo de flores",
            date: "Mayo de 2026",
            desc: "Xoxocotlan Oaxaca"
        }
    ];

    const carousel = document.getElementById("carousel");
    const duplicatedMoments = [...moments, ...moments];

    duplicatedMoments.forEach((m) => {
        const card = document.createElement("div");

        card.classList.add("moment-card");

        card.innerHTML = `
            <img src="${m.img}" alt="">

            <div class="moment-overlay">
                <h3>${m.title}</h3>
                <p>${m.date}</p>
                <span>${m.desc}</span>
            </div>
        `;

        card.addEventListener("click", (e) => {
            e.stopPropagation();

            const alreadyActive =card.classList.contains("active");

            document.querySelectorAll(".moment-card").forEach(c => c.classList.remove("active"));

            if(!alreadyActive){
                card.classList.add("active");
            }
        });
        carousel.appendChild(card);
    });

    document.addEventListener("click", (e) => {
        if(!e.target.closest(".moment-card")){
            document.querySelectorAll(".moment-card").forEach(c => c.classList.remove("active"));
        }
    });
}