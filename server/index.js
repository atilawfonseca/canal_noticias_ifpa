const express = require("express");
const dbConn = require("./config/db.config");
const routes = require("./src/routers/router_login");

const bodyParser = require('body-parser');



const app = express();
const cors = require("cors");
const port = 5000 || process.env.port;

app.use(express.json());
app.use(cors());
app.use(routes);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get("/api/get", (req, resp) => {

  const sqlSelect = "SELECT * FROM cruduserconta.userconta";

  dbConn.query(sqlSelect, (error, result) => {
      resp.send(result);
      console.log(result);
    })
});

app.post("/api/insert", (req, resp) => {

  const name = req.body.contaName;
  const mail = req.body.contaMail; 
  const phone = req.body.contaPhone; 
  const password = req.body.contaPass; 

  const sqlInsert = "INSERT INTO `cruduserconta`.`userconta` (`username`, `user_email`, `usertelefone`, `user_senha`) VALUES (?, ?, ?, ?)";
  
  dbConn.query(sqlInsert, [name, mail, phone, password], (error, result)=> {
    console.log(result);
  })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
