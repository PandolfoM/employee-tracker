const db = require("../db/connection");
const cTable = require("console.table");

const allEmployee = function () {
  const sql = `
  SELECT emp.id, emp.first_name, emp.last_name, role.salary,
  role.title AS title, 
  role.salary AS salary, 
  departments.name AS department,
  CONCAT (man.first_name, ' ', man.last_name) AS manager
  
  FROM employee emp
  LEFT JOIN role 
  ON emp.role_id = role.id
  LEFT JOIN departments
  ON role.department_id = departments.id
  LEFT JOIN employee man 
  ON emp.manager_id = man.id
  `;
  db.query(sql, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allEmployee;
