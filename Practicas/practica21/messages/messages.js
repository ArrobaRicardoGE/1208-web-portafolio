function validate() {
    console.log(sessionStorage.user);
    if ("admin" != sessionStorage.user) {
        alert("Credenciales inválidas. Favor de identificarse.");
        document.body.innerHTML = "";
        window.location.replace("../");
    }
}

function populate() {
    if (!localStorage.messages) return;
    let messages = JSON.parse(localStorage.messages);
    let dummmy = document.createElement("div");
    for (let i = 0; i < messages.length; i++) {
        dummmy.innerHTML = `<li
                                    class="
                                        list-group-item
                                        d-flex
                                        justify-content-between
                                        align-items-start
                                    "
                                >
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">De: ${messages[i].email}</div>
                                        Mensaje: ${messages[i].message}
                                    </div>
                                </li>`;
        document
            .getElementById("message-list")
            .appendChild(dummmy.firstElementChild);
    }
}

validate();
populate();
