var express = require('express');
var app = express();

// <!-- Pass ONE Parameters Only ID -->
//  app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });

// <!-- Pass Two Parameters ID & NAME --> 
// app.get('/:id/:name', function(req, res) {
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
//  });

// <!-- Pattern Match Route -->
// Allow 5 NUMERIC VALUE IN PARAMETER
// app.get('/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
//  }); 

// When route not proper that time this route call
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});


app.listen(3000);