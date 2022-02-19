const express =require('express');
require('express-group-routes');
var cors = require('cors')
const app = express();  

app.use(cors())
const PORT = 5000;
const { connect } = require('mongoose');
const conn=require('./config/db');
conn()



require("./router/route")(app);
app.listen(PORT);