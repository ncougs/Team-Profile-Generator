// JS file required to test generateCard functions

const generateHTML = require('../src/generateHTML');
const generateCard = require('../src/generateCard');
const Employee = require('../lib/employee');

describe("generateHTML", () => {

    describe("Initialization", () => {

        it(`It should return a string of HTML, whislt parsing details relating to the callback from generateCard`, () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
            const employeeCard = generateCard(harry);
            const teamName = 'Team Name';
            const htmlString = generateHTML(teamName, employeeCard);
            
            expect(htmlString).toEqual(`<!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>${teamName}</title>
        </head>
        <body class="min-vh-100">
            <section class="text-center container-fluid p-0 bg-primary bg-gradient">
                <div class="row">
                    <div class="col-12">
                        <h1 class="fw-light p-5 text-white">${teamName}</h1>
                    </div>
                </div>
            </section>
            <section class="container d-flex justify-content-center flex-wrap my-auto">
            <!-- Add employee cards below -->
            ${employeeCard}
            </section>
        </body>
    </html>`);
        });

    });
    
  });

