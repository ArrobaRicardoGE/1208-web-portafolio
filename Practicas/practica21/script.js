function loadData() {
    localStorage.users = JSON.stringify({ admin: "123", user: "123" });
    localStorage.products = JSON.stringify([
        {
            name: "Forza Horizons 5",
            price: 3199,
        },
        {
            name: "Street Fighter",
            price: 129,
        },
        {
            name: "Rocket League",
            price: "Free",
        },
        {
            name: "Red Dead Redemption 2",
            price: 1099,
        },
        {
            name: "Cyber Punk 2077",
            price: 1099,
        },
        {
            name: "FIFA 2021",
            price: 899,
        },
        {
            name: "Star Wars: Battlefront",
            price: 599,
        },
        {
            name: "Grand Theft Auto 5",
            price: 799,
        },
        {
            name: "Madden 22",
            price: 1399,
        },
        {
            name: "Genshin Impact",
            price: 189,
        },
    ]);
}

function logIn() {
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    users = JSON.parse(localStorage.users);
    if (!users.hasOwnProperty(user)) {
        alert("Usuario inválido");
        return;
    }
    if (users[user] != password) {
        alert("Contraseña incorrecta");
        return;
    }
    sessionStorage.user = user;
    window.location.replace(`dashboard/${user}.html`);
}

loadData();
