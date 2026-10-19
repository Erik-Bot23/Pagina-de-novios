// ============================================================
// quiz.js — QUIZ INTERACTIVO + MÚSICA DE FONDO
// ------------------------------------------------------------
// Controla el modal (.quiz-modal) que aparece con el botón
// "Comenzar Quiz". También es el encargado de iniciar la música,
// porque play() dentro del clic es considerado una "acción del
// usuario" (los navegadores bloquean el audio automático).
//
// Flujo:
//   1) Se abre el modal y se carga la primera pregunta.
//   2) Al responder se suma al marcador si es correcta.
//   3) Cuando se acaban las preguntas se muestra el resultado.
// ============================================================
export function initQuiz(){

    // ------------------------------------------------
    // 1) DATOS: banco de preguntas
    //    Cada pregunta = texto + 3 opciones + índice correcto
    //    (correct: 0 = primera opción, 1 = segunda, 2 = tercera)
    // ------------------------------------------------
    const questions = [
        {
            question: "¿Dónde fue nuestra primera cita?",
            img: "Assets/Images/11.jpeg",
            options: ["Hakuna Matata", "Pizzería", "Cempasúchil Café y Mezcal"],
            correct: 1
        },
        {
            question: "¿Quién dijo 'te amo' primero?",
            options: ["Erik", "Yanet", "Los dos"],
            correct: 0
        },
        {
            question: "¿Qué animal encontramos en nuestra visita al río?",
            options: ["Ranas", "Ambos", "Cangrejos"],
            correct: 1
        },
        {
            question: "¿A donde fue nuestra primera salida al aire libre?",
            options: ["San Jose", "Oaxaca", "San Bernardo"],
            correct: 2
        },
        {
            question: "¿Quién es más celoso?",
            options: ["Erik", "Yanet", "Empate"],
            correct: 0
        },
        {
            question: "¿A qué animal le dimos de comer en el acuario Michin?",
            options: ["Delfin", "Peces", "Mantarrayas"],
            correct: 2
        },
        {
            question: "¿Cuál fue nuestro primer viaje?",
            options: ["CDMX", "Playa", "Puebla"],
            correct: 0
        },
        {
            question: "¿Cuáles son los nombres de los padres y la hermana de Erik?",
            options: ["Albino, Sabina, Eva", "Albino, Sabina, Anais", "Juan, Elena, Anais"],
            correct: 1
        },
        {
            question: "¿Qué fue lo que pasó cuando fuimos al campo de flores?",
            options: ["Llovió toda la tarde", "Te lastimaste el pie", "Estaba cerrado"],
            correct: 1
        },
        {
            question: "¿Qué día comenzó nuestra historia?",
            options: ["14 febrero", "26 septiembre", "31 diciembre"],
            correct: 1
        },
        {
            question: "¿Cuál fue el primer regalo que te di?",
            options: ["Camisa", "Aretes", "Flores"],
            correct: 2
        },
        {
            question: "¿Seguiremos escribiendo nuestra historia juntos?",
            options: ["Siempre", "Obviamente", "Por supuesto"],
            correct: 0
        }
    ];

    // ------------------------------------------------
    // 2) Referencias a todos los elementos del modal.
    //    Se buscan una sola vez al iniciar.
    // ------------------------------------------------
    const modal = document.getElementById("quizModal");      // fondo del modal
    const music = document.getElementById("bgMusic");        // <audio> de la canción
    const openBtn = document.getElementById("openQuizBtn");  // botón "Comenzar Quiz"
    const closeBtn = document.getElementById("closeQuiz");   // botón ✕
    const questionText = document.getElementById("quizQuestion"); // <h2> pregunta
    const optionsContainer = document.getElementById("quizOptions"); // contenedor de botones
    const counter = document.getElementById("quizCounter");  // "Pregunta X de Y"
    const resultBox = document.getElementById("quizResult"); // pantalla de resultado
    const quizContent = document.getElementById("quizContent"); // pantalla de pregunta
    const scoreText = document.getElementById("scoreText");  // texto de puntaje
    const restartBtn = document.getElementById("restartQuiz"); // botón reiniciar
    const quizImage = document.getElementById("quizImage"); //Imagen de la pregunta

    // ------------------------------------------------
    // 3) ESTADO del juego
    // ------------------------------------------------
    let currentQuestion = 0; // ¿en qué pregunta vamos?
    let score = 0;           // respuestas correctas acumuladas

    // ------------------------------------------------
    // 4) loadQuestion(): pinta la pregunta actual en el modal
    //    - Escribe el texto de la pregunta
    //    - Actualiza el contador ("Pregunta 3 de 12")
    //    - Limpia las opciones anteriores (innerHTML = "")
    //    - Crea un <button> por cada opción y le asigna su
    //      comportamiento onclick (responder)
    // ------------------------------------------------
    function loadQuestion(){
        const q = questions[currentQuestion];
        questionText.innerText = q.question;
        counter.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
        optionsContainer.innerHTML = "";

        //Si la pregunta tiene imagen, la muestra; si no, la oculta
        if(q.img){
            quizImage.src = q.img;
            quizImage.style.display = "block"
        } else {
            quizImage.style.display = "none";
        }

        // Por cada opción se crea su botón
        q.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("quiz-option"); // estilos de quiz.css
            button.innerText = option;

            // Al hacer clic en una opción:
            button.onclick = () => {
                // Si el índice de la opción coincide con el correcto → +1
                if(index === q.correct){
                    score++;
                }

                // Avanzar a la siguiente pregunta
                currentQuestion++;

                // Si quedan preguntas, cargar la siguiente;
                // si no, mostrar el resultado final.
                if(currentQuestion < questions.length){
                    loadQuestion();
                }
                else{
                    showResult();
                }
            };
            optionsContainer.appendChild(button);
        });
    }

    // ------------------------------------------------
    // 5) showResult(): oculta las preguntas y muestra el puntaje
    // ------------------------------------------------
    function showResult(){
        quizContent.style.display = "none"; // esconder preguntas
        resultBox.classList.add("active");  // mostrar pantalla final (.quiz-result.active)
        scoreText.innerText = `Obtuviste ${score} de ${questions.length} respuestas correctas ❤️`;
    }

    // ------------------------------------------------
    // 6) resetQuiz(): reinicia el juego (usado al abrir y al reintentar)
    // ------------------------------------------------
    function resetQuiz(){
        currentQuestion = 0;
        score = 0;
        quizContent.style.display = "block"; // volver a mostrar preguntas
        resultBox.classList.remove("active");// ocultar resultado
        loadQuestion();                       // empezar en la pregunta 1
    }

    // ------------------------------------------------
    // 7) EVENTOS DE LOS BOTONES
    // ------------------------------------------------
    // Abrir el quiz (y empezar/AUTORIZAR la música).
    // Como play() ocurre dentro de un clic, el navegador lo permite.
    openBtn.addEventListener("click", () => {
        music.play();            // Reproducir música
        modal.classList.add("active"); // mostrar modal
        resetQuiz();             // empezar de cero
    });

    // Cerrar el modal (la música sigue si ya fue iniciada)
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Botón "Intentar otra vez" → reiniciar sin cerrar el modal
    restartBtn.addEventListener("click", () => {
        resetQuiz();
    });
}