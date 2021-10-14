const inquirer = require("inquirer");
const allDept = require("./functions/allDept")
const allRole = require("./functions/allRole")

inquirer
  .prompt([
    {
      type: "list",
      name: "initial",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answer) => {
    if (answer.initial === "View all departments") {
      allDept()
    }
    if (answer.initial === "View all roles") {
      allRole()
    }
  });
