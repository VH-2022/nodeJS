var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});
router.get('/hello', function(req, res){
   res.render('hello');
});
router.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
router.get('/multiparams/:id/:name', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
router.get('/reg/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});
router.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
router.use('/middleware', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});
router.get('/middleware', function(req, res, next){
   res.send('Things');
});
module.exports = router;