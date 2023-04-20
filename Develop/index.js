// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//here we are trying to create the questions for user input 
// TODO: Create an array of questions for user input
const questions = [
    //creating a question for tittle 
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
        //here we are using validate because we want to make sure the user adds something
        
    },
    //creating a question for the description 
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project",
       
    },

    //creating a question on how to install
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation on how to install the software",
       
    },
    //creating how we can use this 
    {
        type: "input",
        name: "usage",
        message: "describe how we can use this program",
        
    },
   //creating options for our license 
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
    //creating questions for tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        
    },
    //creating questjions for the section in github
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        
    },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err){
    if (err) {
        return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((data) =>{ 
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = getLicense(data.license);
    writeToFile("./example/README.md", data);
});
}

// Function call to initialize app
init();
