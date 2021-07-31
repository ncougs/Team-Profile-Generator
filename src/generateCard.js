const fs = require('fs');

const generateCard = (employee) => {
    return `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employee.name}</h5>
                        <h5 class="card-title">${employee.role}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">${getUniqueItem(employee)}</li>
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
        uniqueItem = `GitHub: ${employee.github}`
    };

    if (employee.role == 'Intern') {
        uniqueItem = `School: ${employee.school}`
    };

    return uniqueItem;
};

module.exports = generateCard;



