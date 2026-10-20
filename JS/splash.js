// ============================================================
// PANTALLA INICIAL (CORTINA DE ENTRADA)
// ------------------------------------------------------------
// Los navegadores prohíben reproducir audio sin que el usuario
// haya interactuado antes con la página (política de autoplay).
// Esta cortina aprovecha el primer clic ("Ver nuestra historia")
// para arrancar la música de fondo y, al mismo tiempo, ocultarse
// con una animación de desvanecimiento.
// ============================================================
export function initSplash(){
    const splash = document.getElementById("splash");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bgMusic");

    //Mientras la cortina esté visible, la página de atrás no debe 
    //hacer scroll. Se reutiliza la clase .modal-open que ya existe
    document.body.classList.add("modal-open");

    //El clic del usuario es la acción que autoriza al navegador a 
    //reproducir el audio. Por eso play() va detro del addEventListener
    startBtn.addEventListener("click", () => {
        music.play(); //Inicia la canción
        document.body.classList.remove("modal-open"); //Devuelve el scroll
        splash.classList.add("hide"); //Se desvanece
    });
}