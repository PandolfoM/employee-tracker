const db = require("../db/connection");
const cTable = require("console.table");

const allDept = function () {
  db.query(`SELECT * FROM departments`, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allDept;
