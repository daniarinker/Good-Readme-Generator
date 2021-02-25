const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//welcome text
console.log("WELCOME TO YOUR GOOD READ ME GENERATOR");
console.log(
  "Please answer the following questions to help generate a good readme:"
);

// setting the questions for user to answer to generate readme
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please provide your project title before continuing.";
      }
    },
  },
  {
    type: "input",
    message: "Can you please describe your project?",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please describe your project before continuing.";
      }
    },
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please provide installation instructions before continuing.";
      }
    },
  },
  {
    type: "input",
    message: "How is this project to be used?",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please answer this question before continuing.";
      }
    },
  },
  {
    type: "list",
    message:
      "If any, can you please describe the licensing this project may have?",
    name: "license",
    choices: ["None", "MIT", "GNU GPLv3", "The Unlicense"],
    default: "MIT",
  },
  {
    type: "input",
    message: "Please fill in anything regarding any contribution below",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "author",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please answer this question before continuing.";
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
function generate() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", generateMarkdown(response));
  });
}

// function call to initialize program
generate();
