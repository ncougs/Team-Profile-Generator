// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

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

//function to inialize the application

const init = () => {
    inquirer.prompt(
        [new Question('input', 'teamName', `What is your teams name ?`)]
    )
    .then((answers) => {
        //Answers are saved in JSON. 
        console.log(answers)
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
        };

        if (role == 'engineer') {
            const teamEngineer = new Employee.Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(teamEngineer);
        };

        if (role == 'intern') {
            const teamIntern = new Employee.Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(teamIntern);
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
        [new Question('list', 'addEmployee', `Which employee would you like added to your team ?`, ['Engineer', 'Intern', 'No more team members'])]
    )
    .then((answers) => {
        //Answers are saved in JSON. 
        if(answers.addEmployee != 'No more team members') {
            askEmployeeQuestion(answers.addEmployee);
        }
        else {
            console.log(answers);
        }
    })
    .catch((error) => {
        //Catch errors
        console.error(error);
    });     
};

init();













