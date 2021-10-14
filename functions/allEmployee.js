const db = require("../db/connection");
const cTable = require("console.table");

const allEmployee = function () {
  const sql = `SELECT employee.*, role.title
                AS title
                FROM employee
                JOIN role
                ON employee.role_id = role.id`
  db.query(sql, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allEmployee;
