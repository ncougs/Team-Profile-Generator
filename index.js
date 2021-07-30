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

