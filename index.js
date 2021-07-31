// Packages needed for this application

const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

// Questions to be asked to the user

function Question(type, name, message, choices) {
    this.type = type,
    this.name = name,
    this.message = message,
    this.choices = choices
};

const teamName = new Question('input', 'teamName', `What is your teams name?`);

const employeeQuestions = (role) => {
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

};

console.log(employeeQuestions('Intern'));








