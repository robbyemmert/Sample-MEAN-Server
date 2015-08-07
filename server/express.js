var express = require('express');
var api = require('./api.js');

// Create an express server called 'app'
var app = express();

// Configure the server
app.use(express.static('client'));  // This serves everything in the client folder as static content (sort of like Nginx's www folder);
app.use(require('connect-livereload')());
app.use(require('body-parser').json({strict: false}));

app.get('/peter', function(req, res){
    res.send("Hi Peter");
})

app.use('/api', api);

// Run server
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('custom server listening at http://%s:%s', host, port);
});
