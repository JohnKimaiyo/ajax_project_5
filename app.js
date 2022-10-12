import { post } from 'jquery';
import { brainhttp } from './brainhttp';
const serverURL = `http://127.0.0.1:3001/api/employee`;

//get button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployees();
});
let fetchEmployees = () => {
    let http = new brainhttp();
    let url = `{serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRows = '';
        for (let employees of employees) {
            tableRows += `<tr>
        <td>${employees.id}</td>
        <td>${employees.first_name}</td>
        <td>${employees.last_name}</td>
        <td>${employees.email}</td>
        <td>${employees.gender}</td>
        <td>${employees.id_address}</td>
        </tr>
        `
        }
        document.querySelector('#table-body').innerHTML = tableRows
    });
    console.log(users);
}

//post button
let postButton = document.querySelector('#post-btn');
postButton.addEventListenerListener('click', function () {

    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.0.5'
    }
    let http = new brainhttp();
    http: post(url, employees, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})