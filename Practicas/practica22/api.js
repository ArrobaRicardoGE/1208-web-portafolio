let request = new XMLHttpRequest();

const url = 'https://dummy.restapiexample.com/api/v1/employees ';
request.open('GET', url);
request.onload = () => {
    let obj = JSON.parse(request.response);
    let dummy = document.createElement('tbody');
    let table = document.getElementById('body-table');
    obj.data.forEach(register => {
        dummy.innerHTML = `<tr>
            <th scope="row">${register.id}</th>
            <td>${register.employee_name}</td>
            <td>${register.employee_age}</td>
            <td>${register.employee_salary}</td>
        </tr>`;
        table.appendChild(dummy.firstElementChild);
    });
}
request.send();