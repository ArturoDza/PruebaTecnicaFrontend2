const questions = [
    {
        question: "¿Cuál es la raíz cuadrada de 25?",
        options: ["5", "3", "25", "2"],
        answer: "5"
    },
    {
        question: "¿Cuánto es 10 + 5?",
        options: ["12", "15", "20", "10"],
        answer: "15"
    },
    {
        question: "¿Cuánto es 11 + 7?",
        options: ["12", "18", "20", "10"],
        answer: "18"
    }
];

let currentQuestion = 0;
let userAnswers = [];

const questionText = document.getElementById("questionText");
const optionsForm = document.getElementById("optionsForm");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* Fucnion para mostrar la pregunta */
function showQuestion(index) {
    const q = questions[index];

    questionText.textContent = q.question;
    counter.textContent = `Pregunta ${index + 1} de ${questions.length}`;

    optionsForm.innerHTML = "";

    q.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("form-check");

        div.innerHTML = `
        <input class="form-check-input" type="radio" name="option" value="${option}"
        ${userAnswers[index] === option ? "checked" : ""}>
        <label class="form-check-label">${option}</label>
    `;

        optionsForm.appendChild(div);
    });
}

/* Guarda respuesta */
optionsForm.addEventListener("change", (e) => {
    userAnswers[currentQuestion] = e.target.value;
});

/* Boton de siguiente */
nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
});

/* Boton de anterior */
prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

/* Cargar pregunta */
showQuestion(currentQuestion);
