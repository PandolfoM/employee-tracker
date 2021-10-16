const db = require("../db/connection");
const inquirer = require("inquirer");
const allUsers = `SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee`

const updateEmployee = function () { 
  inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "Employee Name:",
      choices: [
        
        ]
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO departments (name)
                VALUES (${JSON.stringify(answer.department)})`;

      db.query(sql, (err, result) => {
        console.log(`Added ${answer.department} to Departments`);
      });
    });
};

module.exports = updateEmployee;
