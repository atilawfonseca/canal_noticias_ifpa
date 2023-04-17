const express = require("express");
const routes_login = require("./src/routers/user_router_login");
const router_db = require("./src/routers/user_router_bd");

const bodyParser = require('body-parser');



const app = express();
const cors = require("cors");
const port = 5000 || process.env.port;

app.use(express.json());
app.use(cors());
app.use(routes_login);
app.use('/users',router_db);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
