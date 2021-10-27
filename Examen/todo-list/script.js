document.addEventListener("keydown", (event) => {
    if (event.key != "Enter") return;
    const elements = document.getElementById("tasks");
    const text = document.getElementById("text");
    if (text == "") return;
    let task = document.createElement("div");
    task.className = "task";
    task.oncontextmenu = (event) => event.target.remove();
    task.onclick = (event) => (event.target.className = "task--crossed");
    task.innerText = text.value;
    elements.appendChild(task);
    text.value = "";
});
