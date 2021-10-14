const db = require("../db/connection");
const cTable = require("console.table");

const allEmployee = function () {
  const sql = `SELECT employee.*, 
                role.title AS title,
                departments.name AS department
                FROM employee
                LEFT JOIN role 
                ON employee.role_id = role.id
                LEFT JOIN departments
                ON role.department_id = departments.id`;
  db.query(sql, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allEmployee;
