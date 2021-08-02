// JS file required to test generateCard functions

const generateCard = require('../src/generateCard');
const Employee = require('../lib/employee');

describe("generateCard", () => {

    describe("Initialization", () => {

        it(`It should return an string of HTML, whislt parsing details relating to the Manager class`, () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
            const htmlString = generateCard(harry);
            
            expect(htmlString).toEqual(`
                <div class="card m-2 shadow" style="width: 18rem;">
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">${harry.name}</h5>
                        <h5 class="card-title"><i class="bi bi-piggy-bank"></i> ${harry.role}</h5>
                    </div>
                    <ul class="llist-group list-group p-4 bg-light">
                        <li class="list-group-item">ID: ${harry.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${harry.email}">${harry.email}</a></li>
                        <li class="list-group-item">Office Number: ${harry.officeNumber}</li>
                    </ul>
                </div>
`);
        });

        it(`It should return an string of HTML, whislt parsing details relating to the Engineer class`, () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
            const htmlString = generateCard(harry);
            
            expect(htmlString).toEqual(`
                <div class="card m-2 shadow" style="width: 18rem;">
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">${harry.name}</h5>
                        <h5 class="card-title"><i class="bi bi-braces"></i> ${harry.role}</h5>
                    </div>
                    <ul class="llist-group list-group p-4 bg-light">
                        <li class="list-group-item">ID: ${harry.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${harry.email}">${harry.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${harry.github}" target="_blank">${harry.github}</a></li>
                    </ul>
                </div>
`);
        });

        it(`It should return an string of HTML, whislt parsing details relating to the Intern class`, () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
            const htmlString = generateCard(harry);
            
            expect(htmlString).toEqual(`
                <div class="card m-2 shadow" style="width: 18rem;">
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">${harry.name}</h5>
                        <h5 class="card-title"><i class="bi bi-tsunami"></i> ${harry.role}</h5>
                    </div>
                    <ul class="llist-group list-group p-4 bg-light">
                        <li class="list-group-item">ID: ${harry.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${harry.email}">${harry.email}</a></li>
                        <li class="list-group-item">School: ${harry.school}</li>
                    </ul>
                </div>
`);
        });
  

  
    });
    
  });

