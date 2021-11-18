function validate(page) {
    if (page != sessionStorage.user) {
        alert("Credenciales inválidas. Favor de identificarse.");
        document.body.innerHTML = "";
    }
}

function populateGames() {
    let comp = null;
    let dummy = document.createElement("div");
    products = JSON.parse(localStorage.products);
    for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
            comp = document.createElement("div");
            comp.className = "row";
            document.getElementById("games").appendChild(comp);
        }
        product = products[i];
        dummy.innerHTML = `
            <div class="col">
                <div class="card mb-5 text-center pb-3">
                    <div class="card-header fs-5 fw-light">
                        ${product.name}
                    </div>
                    <p>Precio: \$${product.price}</p>
                    <div><button class="btn btn-outline-dark">Editar</button></div>
                </div>
            </div>
        `;
        comp.appendChild(dummy.firstElementChild);
    }
    products = shuffle(products);
    for (let i = 1; i <= 6; i++) {
        let col = document.getElementById("top" + i);
        col.innerHTML = `
            <div class="card mb-5 text-center pb-3">
                <div class="card-header fs-5 fw-light">
                    ${products[i].name}
                </div>
                <p>Precio: \$${products[i].price}</p>
                <div><button class="btn btn-outline-dark">Editar</button></div>
            </div>
        `;
    }
}

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

populateGames();
