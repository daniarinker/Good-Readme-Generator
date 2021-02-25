const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//welcome text
console.log("WELCOME TO YOUR GOOD READ ME GENERATOR");
console.log(
  "Please answer the following questions to help generate a good readme:"
);

//generator with questions begins
inquirer.prompt([
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please answer this question before continuing.";
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
        return "This is a required field. Please answer this question before continuing.";
      }
    },
  },
  {
    type: "input",
    message: "Can you please jot the table of contents here?",
    name: "contents",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "This is a required field. Please answer this question before continuing.";
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
        return "This is a required field. Please answer this question before continuing.";
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
  //   {
  //     type: "input",
  //     message:
  //       "If any, can you please describe the licensing this project may have?",
  //     name: "license",
  //   },
  //   {
  //     type: "list",
  //     message:
  //       "If any, can you please select the licensing this project may have?",
  //     name: "test",
  //   },
]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
