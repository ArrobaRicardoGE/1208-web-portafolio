function shuffle(array) {
    // Creditos: https://stackoverflow.com/a/2450976
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

const questions = [{
        question: '¿Qué significa HTML?',
        options: [
            'HyperText Markup Language',
            'HyperText Markdown Language',
            'HyperTeam Markup Language',
            'HyperTeam Makdown Language',
        ],
        answer: 0,
    },
    {
        question: '¿Qué significa CSS?',
        options: [
            'Casting Style Sheets',
            'Cascading Simple Style',
            'Cascading Style Sheets',
            'Casting Sheets Style',
        ],
        answer: 2,
    },
    {
        question: '¿Qué relación tienen Java y JavaScript?',
        options: [
            'Fueron creados por la misma persona',
            'Fueron creados por la misma compañía',
            'Tienen sintaxis muy similar',
            'Ninguna de las anteriores',
        ],
        answer: 3,
    },
];

let score = 0,
    index = -1;

resetQuiz();

function nextQuestion() {
    if (index != -1) {
        registerAnswer();
    }
    index++;
    if (index == questions.length) {
        showScore();
        return;
    }
    document.getElementById('question').remove();
    let question = document.createElement('div');
    question.id = 'question';
    let text = document.createElement('p');
    text.innerText = questions[index].question;
    let options = document.createElement('select');
    options.id = 'answers';
    for (let i = 0; i < 4; i++) {
        let op = document.createElement('option');
        op.value = i;
        op.textContent = questions[index].options[i];
        options.appendChild(op);
    }
    let next = document.createElement('button');
    next.textContent = 'Siguiente';
    next.onclick = () => nextQuestion();
    question.appendChild(text);
    question.appendChild(options);
    question.appendChild(next);
    document.body.appendChild(question);
}

function registerAnswer() {
    if (document.getElementById('answers').value == questions[index].answer)
        score++;
}

function showScore() {
    let question = document.getElementById('question');
    question.innerHTML = '';
    let text = document.createElement('div');
    text.innerText = "Fin. Puntaje: " + score;
    let reset = document.createElement('button');
    reset.textContent = 'Reiniciar';
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