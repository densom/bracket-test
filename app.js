var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/',function(req, res){
    res.send('asdf');
});

var port = 3000;

app.listen(port, function(err){
    console.log('running server on port ' + port);
});