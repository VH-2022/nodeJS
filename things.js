var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

app.get('/things/:name/:id', function (req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
/* It checks if number is 5 digits length not then run '*' sorry route */
app.get('/things/:id([0-9]{5})', function (req, res) {
    res.send('id: ' + req.params.id);
});
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});
/* It checks if number is 5 digits length not then run '*' sorry route */
app.listen(3000);