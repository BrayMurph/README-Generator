// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project? (Needed)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Need to enter a title to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "desc1",
        message: "What is the project and what problem is this application going to solve? (Needed)",
        validate: desc1Input => {
            if (desc1Input) {
                return true;
            } else {
                console.log("Need to enter a description of the project to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "desc2",
        message: "Why was this project created? (Needed)",
        validate: desc2Input => {
            if (desc2Input) {
                return true;
            } else {
                console.log("Need to enter a reason for the creation of the project to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "desc3",
        message: "How is the client going to use this application? (Needed)",
        validate: desc3Input => {
            if (desc3Input) {
                return true;
            } else {
                console.log("Need to enter a way that the client is going to use this application to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions of the project. (Needed)",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Need to enter a way for the installation of the project to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of the use of this application. (Needed)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Need to enter a way that this application is to be used to continue");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What is the lisences (if any) are going to be used for this project?",
        choices: ["apache", "mit", "no license"]
    },
    {
        type: "input",
        name: "contribute",
        message: "Provide guidelines for contributions (Needed)",
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Need to enter rules for contributing to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Provide instructions on how to test the application. (Needed)",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Need to enter instructions how to test the application to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is you GitHub Username? (Needed)",
        validate: githubUserInput => {
            if (githubUserInput) {
                return true;
            } else {
                console.log("Need to enter a GitHub Username to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? (Needed)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Need to enter an email address to continue");
                return false;
            }
        }
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(`./dist/${fileName}`, data, (err) => 
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(answers => generateMarkdown(answers))
.then(generatedREADME => writeToFile("README.md", generatedREADME));

