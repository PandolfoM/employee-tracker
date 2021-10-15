const db = require("../db/connection");
const cTable = require("console.table");

const allEmployee = function () {
  const sql = `
  SELECT employee.id, employee.first_name, employee.last_name, role.salary,
  role.title AS title, 
  role.salary AS salary, 
  departments.name AS department, 
  CONCAT(employee.first_name, ' ', employee.last_name) AS manager
  FROM employee
  LEFT JOIN role 
  ON employee.role_id = role.id
  LEFT JOIN departments
  ON role.department_id = departments.id
  LEFT JOIN employee AS employee_copy
  ON employee.manager_id = employee_copy.id
  `;
  db.query(sql, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allEmployee;
