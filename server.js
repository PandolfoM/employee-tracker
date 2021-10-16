const inquirer = require("inquirer");
const chalk = require('chalk');

// Functions
const allDept = require("./functions/allDept")
const allRole = require("./functions/allRole")
const allEmployee = require("./functions/allEmployee")
const addDept = require("./functions/addDept")
const addRole = require("./functions/addRole")

console.log(chalk.red(`
███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████     ████████ ██████   █████   ██████ ██   ██ ███████ ██████  
██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
█████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████          ██    ██████  ███████ ██      █████   █████   ██████  
██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████        ██    ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ 
                                                                                                                                  
                                                                                                                                  
`))

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
    if (answer.initial === "View all employees") {
      allEmployee()
    }
    if (answer.initial === "Add a department") {
      addDept()
    }
    if (answer.initial === "Add a role") {
      addRole()
    }
  });