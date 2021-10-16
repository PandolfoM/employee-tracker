const db = require("../db/connection");
const inquirer = require("inquirer");

const addEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_firstName",
        message: "Employee first name:",
        validate(answer) {
          if (!answer) {
            return "Enter an employee first name";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "employee_lastName",
        message: "Employee last name:",
        validate(answer) {
          if (!answer) {
            return "Enter an employee last name";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "employee_role",
        message: "Role id:",
        validate(answer) {
          if (!answer) {
            return "Enter a role id";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "employee_manager",
        message: "Manager id:",
      },
    ])
    .then((answer) => {
      const employeeFirstName = JSON.stringify(answer.employee_firstName);
      const employeeLastName = JSON.stringify(answer.employee_lastName);
      const employeeRole = JSON.stringify(answer.employee_role);
      // If manager id is NULL write null
      if(answer.employee_manager == "") {
        var employeeManager = `NULL`
      } else {
        // write number
        var employeeManager = answer.employee_manager
      }

      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (${employeeFirstName}, ${employeeLastName}, ${employeeRole}, ${employeeManager})`;

      db.query(sql, (err, result) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(
            `Added ${answer.employee_firstName} ${answer.employee_lastName} to employee's`
          );
        }
      });
    });
};

module.exports = addEmployee;
