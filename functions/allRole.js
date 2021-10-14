const db = require("../db/connection");
const cTable = require("console.table");

const allRole = function () {
  const sql = `SELECT role.id, role.title, role.salary,
                departments.name AS department
                FROM role
                LEFT JOIN departments
                ON role.department_id = departments.id`

  db.query(sql, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allRole;
