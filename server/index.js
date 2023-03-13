const express = require("express");
const routes = require("./router_login");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//const mysql = require('mysql')

// const db = mysql.createPool({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'atila',
//   database: 'cruddabase',
// });

// app.get('/', (req, res) => {

//   const sqlInsert = "INSERT INTO user_admins (name_user, password, email) VALUES ('atilateste', '123', 'atila@if.edu.br');"
//   db.query(sqlInsert, (error, result) => {
//     res.send(error)

//   })

// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
