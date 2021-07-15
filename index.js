// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "What's the description of your project",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What are the installation instructions for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "What's the usage of your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test your code",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["MIT", "GNU", "Apache"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      console.log(error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("readMe.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
