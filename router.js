const { Router, response } = require('express');
const express = require('express');
const router = router.Router();

// epmloyee data
let employee = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// get employees
router.get('/employees', (request) => {
    response.json(employees);
});

// post request
router.post('/employee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.ip.address
    }
    employee.push(employee);
    console.log(`POST Request Received at server .. ${new Date().tolocate()}`);
    response.json(employee);
});

// put request
router.put('/employee/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID;
    });
    employees.splice(employee.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`PUT Request Recived at server .. ${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'PUT Request is success' });
});

// delet request
Router.delete('/employees/:id', (request, response) => {
    let emID = request.params.id;
    employees = employees.filter((emplpoyee) => {
        return employee.id !== empId;
    });
    console.log(`delete Request Recived at server .. ${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete Request is success' });
})

module.exports = router;