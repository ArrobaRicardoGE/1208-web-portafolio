function validate() {
    if (!sessionStorage.user) {
        alert("Favor de identificarse.");
        document.body.innerHTML = "";
    }
}

function populate() {
    let cart = JSON.parse(localStorage.cart);
    let products = JSON.parse(localStorage.products);
    let dummmy = document.createElement("div");
    let total = 0;
    for (let i = 0; i < 10; i++) {
        if (cart[i] > 0) {
            dummmy.innerHTML = `<li
                                    class="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-start
                                    "
                                >
                                    <button class="btn btn-danger" onclick="removeElement(${i})">—</button>
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">${
                                            products[i].name
                                        }</div>
                                        Precio: \$${
                                            products[i].price
                                        } Subtotal: \$${
                products[i].price * cart[i]
            }
                                    </div>
                                    <span class="badge bg-primary rounded-pill">${
                                        cart[i]
                                    }</span>
                                </li>`;
            document
                .getElementById("cart-list")
                .appendChild(dummmy.firstElementChild);
            total += products[i].price * cart[i];
        }
    }
    dummmy.innerHTML = `<h2 class="text-end" id="total">Total: \$${total}</h2>`;
    document
        .getElementById("main-container")
        .appendChild(dummmy.firstElementChild);
}

function update() {
    document.getElementById("cart-list").innerHTML = "";
    document.getElementById("total").remove();
    populate();
}

function removeElement(id) {
    let cart = JSON.parse(localStorage.cart);
    cart[id]--;
    cart[id] = Math.max(cart[id], 0);
    localStorage.cart = JSON.stringify(cart);
    alert("Producto quitado con éxito");
    update();
}

function comprar() {
    if (!localStorage.inventory)
        localStorage.inventory = JSON.stringify(Array(10).fill(0));
    let inventory = JSON.parse(localStorage.inventory);
    let cart = JSON.parse(localStorage.cart);
    for (let i = 0; i < 10; i++) {
        inventory[i] += cart[i];
    }
    localStorage.inventory = JSON.stringify(inventory);
    localStorage.cart = JSON.stringify(Array(10).fill(0));
    alert("Compra efectuada!");
    update();
}

populate();
