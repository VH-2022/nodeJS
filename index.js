var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
/* mongo database connection */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testproject');
/* mongo database connection */
const test = require('./Model/person');
var upload = multer();
var app = express();
/* insert data into mongo DB */
// const data = new test({
//     name: "Mihir",
//     age: 24, 
// });
data.save().then((result) => {
        console.log(result);
        app.data(response)
    })
    //     .catch(err => console.log(err));
    /* insert data into mongo DB */
test.remove({ name: "Mihir" }, { age: 54 },
    function(err, response) {
        console.log(response);
    });
/* app.get('/', function(req, res) {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views'); */

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res) {
    console.log(req.body);
    res.send(res);
});
app.listen(3000);