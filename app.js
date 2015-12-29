var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/',function(req, res){
    res.render('index');
});

var port = 3000;

app.listen(port, function(err){
    console.log('running server on port ' + port);
});