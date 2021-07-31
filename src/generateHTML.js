// Include fs module
const fs = require('fs');

const generateHTML = (teamName, employeeCards) => {
    return `<!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>${teamName}</title>
        </head>
        <body class="min-vh-100">
            <section class="text-center container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="fw-light p-5">${teamName}</h1>
                    </div>
                </div>
            </section>
            <section class="container d-flex justify-content-center flex-wrap my-auto">
            <!-- Add employee cards below -->
            ${employeeCards}
            </section>
        </body>
    </html>`
};

module.exports = generateHTML;