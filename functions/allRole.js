const db = require("../db/connection");
const cTable = require("console.table");

const allRole = function () {
  db.query(`SELECT * FROM role`, (err, result) => {
    const table = cTable.getTable(result);
    console.log(table);
  });
};

module.exports = allRole;
