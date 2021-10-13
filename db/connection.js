const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Pandolfo2",
    database: "manager",
  },
  console.log("Connected to database")
);

module.exports = db;
