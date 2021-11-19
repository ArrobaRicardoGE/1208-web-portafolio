function validate(page) {
    if (page != sessionStorage.user) {
        alert("Credenciales inválidas. Favor de identificarse.");
        document.body.innerHTML = "";
    }
}

function populateGames() {
    let comp = null;
    let dummy = document.createElement("div");
    let products = JSON.parse(localStorage.products);
    for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
            comp = document.createElement("div");
            comp.className = "row";
            document.getElementById("games").appendChild(comp);
        }
        let product = products[i];
        dummy.innerHTML = `
            <div class="col">
                <div class="card mb-5 text-center pb-3">
                    <div class="card-header fs-5 fw-light">
                        ${product.name}
                    </div>
                    <p>Precio: \$${product.price}</p>
                    <div><button class="btn btn-outline-dark" onclick="addToCart(${i})">Comprar</button></div>
                </div>
            </div>
        `;
        comp.appendChild(dummy.firstElementChild);
    }
    let randInts = [];
    while (randInts.length < 6) {
        let r = Math.floor(Math.random() * 9);
        if (randInts.indexOf(r) === -1) randInts.push(r);
    }
    let cnt = 1;
    randInts.forEach((i) => {
        let col = document.getElementById("top" + cnt++);
        col.innerHTML = `
            <div class="card mb-5 text-center pb-3 text-white bg-dark">
                <div class="card-header fs-5 fw-light">
                    ${products[i].name}
                </div>
                <p>Precio: \$${products[i].price}</p>
                <div><button class="btn btn-outline-light" onclick="addToCart(${i})">Comprar</button></div>
            </div>
        `;
    });
}

function addToCart(id) {
    if (!localStorage.cart)
        localStorage.cart = JSON.stringify(Array(10).fill(0));
    let cart = JSON.parse(localStorage.cart);
    cart[id]++;
    localStorage.cart = JSON.stringify(cart);
    alert("Producto añadido con éxito");
}

populateGames();
