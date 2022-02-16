var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var Person = require('./models/person');
var upload = multer();

// -------HelloWorld
// app.get('/', function(req, res){
//    res.send("Hello Dhara!");
// });

//----------------POST method
// app.post('/hello', function(req, res){
//     res.send("You just called the post method at '/hello'!\n");
//  });

//---------------URL building
// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });

// app.get('/things/:name/:id', function(req, res) {
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
//  });

//regex 
// app.get('/things/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
//  });


//404 not found page
// app.get('*', function(req, res){
//     res.send('Sorry, this is an invalid URL.');
//  });

//Middleware
// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
    
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//     next();
//  });

 //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//     console.log("A request for things received at " + Date.now());
//     next();
//  });

// Route handler that sends the response
// app.get('/things', function(req, res){
//     res.send('Things');
//  });

//First middleware before response is sent
/* app.use(function(req, res, next){
    console.log("Start");
    next();
 }); */

 //Route handler
/* app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 }); */

//  app.use('/', function(req, res){
//     console.log('End');
//  });

//pug
//  app.set('view engine', 'pug');
// app.set('views','./views');

// app.get('/first_template', function(req, res){
//     res.render('first_view');
//  });

//  app.get('/dynamic_view', function(req, res){
//     res.render('dynamic', {
//        name: "TutorialsPoint", 
//        url:"http://www.google.com"
//     });
//  });

app.get('/', function(req, res){
    res.render('form');
 });
 
 app.set('view engine', 'pug');
 app.set('views', './views');
 
 // for parsing application/json
 app.use(bodyParser.json()); 
 
 // for parsing application/xwww-
 app.use(bodyParser.urlencoded({ extended: true })); 
 //form-urlencoded
 
 // for parsing multipart/form-data
//  app.use(upload.array()); 
//  app.use(express.static('public'));
 
//  app.post('/', function(req, res){
//     console.log(req.body);
//     res.send("recieved your request!");
//  });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_db');

app.get('/person', function(req, res){
   res.render('person');
});

app.post('/personnew', function(req, res){
   
   var personInfo = req.body; //Get the parsed information
   
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      console.log('data inserterd');
   } else {
     
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });
		
      newPerson.save(function(err, Person){
         if(err)
           console.log('data inserterd'); 
         else
          console.log('error');  
      });
   }
});
app.listen(3005);