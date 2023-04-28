
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter an explanation on how to install the software",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how we can use this program",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any testing instructions you would like to provide for this project.",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('File written successfully!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers)=>{
      const markdownData = generateMarkdown(answers);
      writeToFile('README.md', markdownData);
  })
}

// Function call to initialize app
init();

