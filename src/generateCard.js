const fs = require('fs');

const generateCard = (employee) => {
    return `
                <div class="card m-2 shadow" style="width: 18rem;">
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">${employee.name}</h5>
                        <h5 class="card-title">${icon(employee.role)} ${employee.role}</h5>
                    </div>
                    <ul class="llist-group list-group p-4 bg-light">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">${getUniqueItem(employee.role)}</li>
                    </ul>
                </div>
`
};

const getUniqueItem = (employee) => {

    let uniqueItem;

    if (employee.role == 'Manager') {
        uniqueItem = `Office Number: ${employee.officeNumber}`
    };

    if (employee.role == 'Engineer') {
        uniqueItem = `GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>`
    };

    if (employee.role == 'Intern') {
        uniqueItem = `School: ${employee.school}`
    };

    return uniqueItem;
};

const icon = (role) => {
    let icon;

    if (role == 'Manager') {
        icon = `<i class="bi bi-piggy-bank"></i>`
    };

    if (role == 'Engineer') {
        icon = `<i class="bi bi-braces"></i>`
    };

    if (role == 'Intern') {
        icon = `<i class="bi bi-tsunami"></i>`
    };

    return icon;
};

module.exports = generateCard;



