var express = require('express');

exports.configureApp = function(app){
    app.use(express.static('client'));  // This serves everything in the client folder as static content (sort of like Nginx's www folder);
    app.use(require('connect-livereload')());

    return app;
}
