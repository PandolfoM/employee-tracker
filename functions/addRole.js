const db = require("../db/connection");
const inquirer = require("inquirer");

const addRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role_title",
        message: "Role Name:",
        validate(answer) {
          if (!answer) {
            return "Enter a role title";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "role_salary",
        message: "Role salary:",
        validate(answer) {
          if (!answer) {
            return "Enter a role salary";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "role_department",
        message: "Role department id:",
        validate(answer) {
          if (!answer) {
            return "Enter a role department id";
          }
          return true;
        },
      },
    ])
    .then((answer) => {
      const roleName = JSON.stringify(answer.role_title)
      const roleSalary = JSON.stringify(answer.role_salary)
      const roleDepartment = JSON.stringify(answer.role_department)
      const sql = `INSERT INTO role (title, salary, department_id)
                VALUES (${roleName}, ${roleSalary}, ${roleDepartment})`;

      db.query(sql, (err, result) => {
        if (err) {
          console.log(err.message)
        } else {
          console.log(`Added ${answer.role_title} with a salary of ${answer.role_salary} to roles`);
        }
      });
    });
};

module.exports = addRole;
