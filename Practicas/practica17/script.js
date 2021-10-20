const parrafos = document.getElementsByTagName('p');
alert(parrafos);
alert(parrafos.length)
alert(parrafos[0]);
alert(parrafos[0].textContent);
parrafos[0].textContent = "bla bla bla";

for (let i = 0; i < parrafos.length; i++) {
    alert(parrafos[i].textContent);
    const enlaces = parrafos[i].getElementsByTagName('a');
    for (let j = 0; j < enlaces.length; j++) {
        console.log(enlaces[j].textContent);
    }
}