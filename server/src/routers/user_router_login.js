const express = require("express");
const routes = express.Router();
const router_db = require("./user_router_bd");
const dbConn = require("../../config/db.config");


/* const users = [
  {
    id: 1,
    name: "Atila",
    email: "atilafonseca@ifpa.edu.br",
    password: "123456",
  },
]; */




routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({messagem:"funcionando!"});

  router_db.get("/users/api/get", (req_get, res_get) => {
    const sqlSelect = "SELECT * FROM cruduserconta.userconta";

    
    dbConn.query(sqlSelect, (error, result) => {
     
       console.logo(res_get)

        // const user = users.find(
        //   (user) => user.email === email && user.password === password
        // );
        // if (user) {
        //   return res.status(200).json(user);
        // }
        // return res.status(401).json({ message: "Credenciais invalidas!" });


      });

      })
  })



module.exports = routes;
