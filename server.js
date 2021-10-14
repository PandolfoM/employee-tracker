const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require("inquirer");
const apiRoutes = require("./routes/apiRoutes");
const allDept = require('./routes/apiRoutes/allDept.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT);

inquirer
  .prompt([
    {
      type: "list",
      name: "initial",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answer) => {
    if (answer.initial === "View all departments") {
      console.log(app.use('/api', allDept))
    }
  });
