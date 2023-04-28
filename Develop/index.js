
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

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((data) => {
//     data.getLicense = generateMarkdown.renderLicenseBadge(data.license);
//     writeToFile("./example/README.md", data);
//   });
// }
// Create a function to initialize app
function getLicense(license) {
  const licenseBadgeUrl = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);
  
  return { badge: licenseBadgeUrl, link: licenseLink, section: licenseSection };
}

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    const { badge, link, section } = getLicense(data.license);
    data.licenseBadge = badge;
    data.licenseLink = link;
    data.licenseSection = section;
    writeToFile("./example/README.md", data);
  });
}


// Call the initialize function
init();

