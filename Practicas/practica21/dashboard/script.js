function validate(page) {
    if (page != sessionStorage.user) {
        alert("Credenciales inválidas. Favor de identificarse.");
        document.body.innerHTML = "";
    }
}

function populateGames() {
    let comp = null;
    products = JSON.parse(localStorage.products);
    for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
            comp = document.createElement("div");
            comp.className = "row";
            document.getElementById("games").appendChild(comp);
        }
        product = products[i];
        let col = document.createElement("div");
        col.className = "col";
        let card = document.createElement("div");
        card.className = "card mb-5 text-center";
        let header = document.createElement("p");
        header.className = "card-header fs-5 fw-light";
        header.textContent = product.name;
        let text = document.createElement("p");
        text.textContent = `Precio: \$${product.price}`;
        card.appendChild(header);
        card.appendChild(text);
        col.appendChild(card);
        comp.appendChild(col);
    }
}
populateGames();
