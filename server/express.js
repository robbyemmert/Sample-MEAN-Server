var express = require('express');
var config = require('./config.js');

// Create an express server called 'app'
var app = express();

// Configure the server
config.configureApp(app);

// Run server
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('custom server listening at http://%s:%s', host, port);
});
