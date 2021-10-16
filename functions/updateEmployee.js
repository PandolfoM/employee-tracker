const db = require("../db/connection");
const inquirer = require("inquirer");
const allUsers = `SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee`;

const updateEmployee = function () {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Employee Id:",
      validate(answer) {
        if (!answer) {
          return "Enter a role title";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "role",
      message: "New role id:",
      validate(answer) {
        if (!answer) {
          return "Enter a role id";
        }
        return true;
      },
    },
  ])
  .then((answer) => {
    const name = JSON.stringify(answer.name)
    const role = JSON.stringify(answer.role)
    const sql = `UPDATE employee
                  SET role_id = ${role}
                  WHERE id = ${name}`;

    db.query(sql, (err, result) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log(`Updated ${answer.name}'s role`);
      }
    });
  });
};

module.exports = updateEmployee;
