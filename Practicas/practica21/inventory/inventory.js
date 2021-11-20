function validate() {
    if (sessionStorage.user != "admin") {
        alert("Credenciales inválidas. No tiene permiso para ver esta página.");
        document.body.innerHTML = "";
        window.location.replace("../");
    }
}

function populate() {
    let inventory = JSON.parse(localStorage.inventory);
    let products = JSON.parse(localStorage.products);
    let dummmy = document.createElement("div");
    let total = 0;
    for (let i = 0; i < 10; i++) {
        if (inventory[i] > 0) {
            dummmy.innerHTML = `<li
                                    class="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-start
                                    "
                                >
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">${
                                            products[i].name
                                        }</div>
                                        Precio: \$${
                                            products[i].price
                                        } - Subtotal: \$${
                products[i].price * inventory[i]
            }
                                    </div>
                                    <span class="badge bg-primary rounded-pill">${
                                        inventory[i]
                                    }</span>
                                </li>`;
            document
                .getElementById("inventory-list")
                .appendChild(dummmy.firstElementChild);
            total += products[i].price * inventory[i];
        }
    }
    dummmy.innerHTML = `<h2 class="text-end" id="total">Ganancia bruta: \$${total}</h2>`;
    document
        .getElementById("main-container")
        .appendChild(dummmy.firstElementChild);
}

populate();
