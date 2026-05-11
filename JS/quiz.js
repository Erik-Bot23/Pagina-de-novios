export function initQuiz(){

    const questions = [
        {
            question: "¿Dónde fue nuestra primera cita? ❤️",
            options: ["Hakuna Matata", "Pizzería", "Cempasúchil Café y Mezcal"],
            correct: 1
        },
        {
            question: "¿Quién dijo 'te amo' primero?",
            options: ["Erik", "Yanet", "Los dos"],
            correct: 0
        },
        {
            question: "¿Qué animal encontramos en nuestra visista al río?",
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
            question: "¿Cuál son los nombres de la los padres y hermana de Erik?",
            options: ["Albino, Sabina, Eva", "Albino, Sabina, Anais", "Juan, Elena, Anais"],
            correct: 1
        },
        {
            question: "¿Qué fue lo que pasó cuando fuimos al campo de flores",
            options: ["Llovió toda la tarde", "Te lastimaste el pie", "Estaba cerrado"],
            correct: 1
        },
        {
            question: "¿Qué día comenzó nuestra historia?",
            options: ["14 febrero", "26 septiembre", "31 diciembre"],
            correct: 1
        },
        {
            question: "¿Cuál fue el rpimer regalo que te di?",
            options: ["Camisa", "Aretes", "Flores"],
            correct: 2
        },
        {
            question: "¿Seguiremos escribiendo nuestra historia juntos?",
            options: ["Siempre ❤️", "Obviamente", "Por supuesto"],
            correct: 0
        }
    ];

    const modal = document.getElementById("quizModal");
    const music = document.getElementById("bgMusic");
    const openBtn = document.getElementById("openQuizBtn");
    const closeBtn = document.getElementById("closeQuiz");
    const questionText = document.getElementById("quizQuestion");
    const optionsContainer = document.getElementById("quizOptions");
    const counter = document.getElementById("quizCounter");
    const resultBox = document.getElementById("quizResult");
    const quizContent = document.getElementById("quizContent");
    const scoreText = document.getElementById("scoreText");
    const restartBtn = document.getElementById("restartQuiz");

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion(){
        const q = questions[currentQuestion];
        questionText.innerText = q.question;
        counter.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
        optionsContainer.innerHTML = "";

        q.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("quiz-option");
            button.innerText = option;

            button.onclick = () => {
                if(index === q.correct){
                    score++;
                }

                currentQuestion++;

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

    function showResult(){
        quizContent.style.display = "none";
        resultBox.classList.add("active");
        scoreText.innerText = `Obtuviste ${score} de ${questions.length} respuestas correctas ❤️`;
    }

    function resetQuiz(){
        currentQuestion = 0;
        score = 0;
        quizContent.style.display = "block";
        resultBox.classList.remove("active");
        loadQuestion();
    }

    openBtn.addEventListener("click", () => {
        //Reproducir música
        music.play();

        //Otras acciones
        modal.classList.add("active");
        resetQuiz();
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    restartBtn.addEventListener("click", () => {
        resetQuiz();
    });
}