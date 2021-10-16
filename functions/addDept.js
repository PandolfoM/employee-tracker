const db = require("../db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");

const addDept = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Department Name:",
        validate(answer) {
          if (!answer) {
            return "Enter a department name";
          }
          return true;
        },
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

const addDept2 = function (name, req) {};

module.exports = addDept;
