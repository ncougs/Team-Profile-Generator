// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const generateCard = require('./src/generateCard');
const generateHTML = require('./src/generateHTML');
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

let teamName;

// Questions to be asked to the user

function Question(type, name, message, choices) {
    this.type = type,
    this.name = name,
    this.message = message,
    this.choices = choices
};

const employeeQuestions = (role) => {

    role = role.toLowerCase();

    if (role=='no more team members') {
        return;
    }
    else {
        const questionsArray = [        
            new Question('input', 'name', `What is the ${role}'s name ?`),
            new Question('input', 'id', `What is the ${role}'s employee ID ?`),
            new Question('input', 'email', `What is the ${role}'s email ?`),
        ]; 
    
        if (role.toLowerCase() == 'manager') {
            questionsArray.push(new Question('input', 'officeNumber', `What is the ${role}'s office number ?`))
        };
    
        if (role.toLowerCase() == 'engineer') {
            questionsArray.push(new Question('input', 'github', `What is the ${role}'s github username ?`))
        };
    
        if (role.toLowerCase() == 'intern') {
            questionsArray.push(new Question('input', 'school', `What school does the ${role} got to ?`))
        };
    
        return questionsArray;
    } ;
};

const writeFile = (location, string) => {
    fs.writeFile(location, string, function (err) {
        if (err) {
            return console.error(err);
        };
    });
};

const getFileData = (fileName) => {
    return fs.readFileSync(fileName).toString()
  };



//function to inialize the application

const init = () => {

    //write blank txt file to append employee card HTML
    writeFile('src/employeeCards.txt', '');

    inquirer.prompt(
        [new Question('input', 'teamName', `What is your teams name ?`)]
    )
    .then((answers) => {
        //Answers are saved in JSON. 
        teamName = answers.teamName;
        //First ask for managers detail
        askEmployeeQuestion('manager');
    })
    .catch((error) => {
        //Catch errors
        console.error(error);
    });     
};

//
const askEmployeeQuestion = (role) => {

    role = role.toLowerCase();

    inquirer.prompt(
        employeeQuestions(role)
    )
    .then((answers) => {
        //Answers are saved in JSON. 
        if (role == 'manager') {
            const teamManager = new Employee.Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(teamManager);
            addEmployeeCard(generateCard(teamManager));
        };

        if (role == 'engineer') {
            const teamEngineer = new Employee.Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(teamEngineer);
            addEmployeeCard(generateCard(teamEngineer));
        };

        if (role == 'intern') {
            const teamIntern = new Employee.Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(teamIntern);
            addEmployeeCard(generateCard(teamIntern));
        };

        

        //ask if any more employees should be added
        askAddEmployee();
    })
    .catch((error) => {
        //Catch errors
        console.error(error);
    });     
};

const askAddEmployee = () => {
    inquirer.prompt(
        [new Question('list', 'employeeType', `Which employee would you like added to your team ?`, ['Engineer', 'Intern', 'No more team members'])]
    )
    .then((answers) => {
        //Answers are saved in JSON. 
        //IF More employees to add, repeat questions
        if(answers.employeeType != 'No more team members') {
            askEmployeeQuestion(answers.employeeType);
        }
        //IF NO more employees to add, generate HTML
        else {
            //This ends the loop of adding more questions
            const employeeCardsHTML = getFileData('src/employeeCards.txt');
            const completeHTML = generateHTML(teamName, employeeCardsHTML);
            writeFile('dist/renderedOutput.html', completeHTML);
        }
    })
    .catch((error) => {
        //Catch errors
        console.error(error);
    });     
};

//Add all employee cards to txt file before moving to HTML
const addEmployeeCard = (card) => {
    fs.appendFile("src/employeeCards.txt", card, (err) => {
        if (err) {
          console.error(err);
        }
        else {
         console.log('card added')
        }
      });
};


init();













