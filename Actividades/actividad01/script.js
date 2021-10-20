class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    toString() {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    _toHex(n) {
        let hex = n.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }
    toHex() {
        return '#' + this._toHex(this.r) + this._toHex(this.g) + this._toHex(this.b);
    }
}

function randInt(top) {
    return Math.round(Math.random() * top);
}

function randomColor() {
    let color = new Color(randInt(255), randInt(255), randInt(255));
    return color;
}

function newSet() {
    let texto = document.getElementById('texto');
    correctColor = randomColor();
    texto.textContent = correctColor.toString();
    const botones = document.getElementById('botones').getElementsByTagName('div');
    for (let i = 0; i < botones.length; i++) {
        let color = randomColor();
        botones[i].style.backgroundColor = color.toHex();
    }
    ans = randInt(5);
    botones[ans].style.backgroundColor = correctColor.toHex();
}

function clicked(x) {
    if (disableInput)
        return;
    let status = document.getElementById('status');
    let ronda = document.getElementById('ronda');
    status.textContent = "Incorrecto! La respuesta correcta es el color " + (ans + 1);
    if (x == ans) {
        puntaje++;
        status.textContent = "Correcto!";
    }
    disableInput = true;
    if (pregunta == 10) {
        setTimeout(() => {
            status.textContent = "Puntaje Final: " + puntaje + '. Click aquí para reiniciar.';
        }, 1000);
        return;
    }
    setTimeout(() => {
        disableInput = false;
        pregunta++;
        newSet();
        ronda.textContent = pregunta;
        status.textContent = "";
    }, 1000);

}

function reset() {
    pregunta = 1;
    puntaje = 0;
    disableInput = false;
    newSet();
    let status = document.getElementById('status');
    status.textContent = "";
    let ronda = document.getElementById('ronda');
    ronda.textContent = pregunta;
}

let ans = 0,
    pregunta = 1,
    puntaje = 0,
    disableInput = false;

newSet();