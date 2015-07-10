var express = require('express');

// Create an express server called 'app'
var app = express();

// Configure the server
app.use(express.static('client'));  // This serves everything in the client folder as static content (sort of like Nginx's www folder);
app.use(require('connect-livereload')());

app.get('/peter', function(req, res){
    res.send("Hi Peter");
})

// Run server
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('custom server listening at http://%s:%s', host, port);
});
