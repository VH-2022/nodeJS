const express =require('express');
require('express-group-routes');
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();  
app.use(bodyParser.json());
app.use(cors())
const PORT = 5000;
const { connect } = require('mongoose');
const conn=require('./config/db');
conn()

app.use(bodyParser.urlencoded({ extended: true }));

require("./router/route")(app);
app.listen(PORT);