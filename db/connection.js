const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    root: "root",
    password: "",
    database: "manager",
  },
  console.log("Connected to database")
);

module.exports = db;
