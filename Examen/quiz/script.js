function shuffle(array) {
    // Creditos: https://stackoverflow.com/a/2450976
    // Esta función se usa para que las preguntas salgan en orden aleatorio
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

const questions = [
    {
        question: "¿Qué significa HTML?",
        options: [
            "HyperText Markup Language",
            "HyperText Markdown Language",
            "HyperTeam Markup Language",
            "HyperTeam Makdown Language",
        ],
        answer: 0,
    },
    {
        question: "¿Qué significa CSS?",
        options: [
            "Casting Style Sheets",
            "Cascading Simple Style",
            "Cascading Style Sheets",
            "Casting Sheets Style",
        ],
        answer: 2,
    },
    {
        question: "¿Qué relación tienen Java y JavaScript?",
        options: [
            "Fueron creados por la misma persona",
            "Fueron creados por la misma compañía",
            "Tienen sintaxis muy similar",
            "Ninguna de las anteriores",
        ],
        answer: 3,
    },
    {
        question: "JavaScript es un lenguaje...",
        options: [
            "Compilado y fuertemente tipado",
            "Compilado y débilmente tipado",
            "Interpretado y fuertemente tipado",
            "Interpretado y débilmente tipado",
        ],
        answer: 3,
    },
    {
        question:
            "¿Cuáles son los bloques fundamentales de un documento de HTML?",
        options: ["Componentes", "Archivos JSON", "Nodos", "Letras"],
        answer: 2,
    },
    {
        question: "¿Cuál es el tag que corresponde a la listas ordenadas?",
        options: ["<ol>", "<ul>", "<hr>", "<br>"],
        answer: 0,
    },
    {
        question: "En JavaScript, podemos representar strings usando...",
        options: [
            "Únicamente comillas simples",
            "Comillas simples o comillas dobles",
            "Únicamente comilas dobles",
            "Paréntesis",
        ],
        answer: 1,
    },
    {
        question:
            "En formularios de HTML, ¿qué método expone las respuestas en la URL de la solicitud?",
        options: ["POST", "PUT", "DELETE", "GET"],
        answer: 3,
    },
    {
        question:
            "¿Cuál es un lenguaje de programación derivado directamente de JavaScript?",
        options: ["React", "TypeScript", "Hack", "PHP"],
        answer: 1,
    },
    {
        question:
            '¿Qué significa que los estilos aplicacados con CSS estén "en cascada"?',
        options: [
            "Que el orden de los estilos importa",
            "Que se pueden crear estilos muy bonitos, como las cascadas",
            "Que los estilos serán fluidos",
            "Nada en particular, es solo el nombre que recibe",
        ],
        answer: 0,
    },
];

let score = 0,
    index = -1;

shuffle(questions);

function nextQuestion() {
    if (index != -1) {
        registerAnswer();
    }
    index++;
    if (index == questions.length) {
        showScore();
        return;
    }
    document.getElementById("question").remove();
    let question = document.createElement("div");
    question.id = "question";
    question.className = "question";
    let text = document.createElement("p");
    text.innerText = questions[index].question;
    let options = document.createElement("select");
    options.id = "answers";
    for (let i = 0; i < 4; i++) {
        let op = document.createElement("option");
        op.value = i;
        op.textContent = questions[index].options[i];
        options.appendChild(op);
    }
    let next = document.createElement("button");
    next.textContent = "Siguiente";
    next.onclick = () => nextQuestion();
    question.appendChild(text);
    question.appendChild(options);
    question.appendChild(next);
    document.body.appendChild(question);
}

function registerAnswer() {
    if (document.getElementById("answers").value == questions[index].answer)
        score++;
}

function showScore() {
    let question = document.getElementById("question");
    question.innerHTML = "";
    let text = document.createElement("p");
    text.innerHTML =
        "¡Acabaste! <br> Puntaje: " + score + "/" + questions.length;
    let reset = document.createElement("button");
    reset.textContent = "Reintentar";
    reset.onclick = () => resetQuiz();
    question.appendChild(text);
    question.appendChild(reset);
}

function resetQuiz() {
    shuffle(questions);
    index = -1;
    score = 0;
    nextQuestion();
}
