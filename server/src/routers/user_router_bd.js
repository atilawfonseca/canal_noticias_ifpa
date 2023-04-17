const express = require("express");
const routes_bd = express.Router();
const dbConn = require("../../config/db.config");



routes_bd.get("/api/get", (req, resp) => {

    const sqlSelect = "SELECT * FROM cruduserconta.userconta";
  
    dbConn.query(sqlSelect, (error, result) => {
        resp.send(result);
        
      })
  });
  
  routes_bd.post("/api/insert", (req, resp) => {
  
    const name = req.body.contaName;
    const mail = req.body.contaMail; 
    const phone = req.body.contaPhone; 
    const password = req.body.contaPass; 
  
    const sqlInsert = "INSERT INTO `cruduserconta`.`userconta` (`username`, `user_email`, `usertelefone`, `user_senha`) VALUES (?, ?, ?, ?)";
    
    dbConn.query(sqlInsert, [name, mail, phone, password], (error, result)=> {
      console.log(result);
    })
  
  });

  

  module.exports = routes_bd;