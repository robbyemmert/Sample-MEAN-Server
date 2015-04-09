var gulp = require('gulp');
var gls = require('gulp-live-server');  //GLS does some cool live reload things and pairs really well with gulp.

gulp.task('up', function(){
    console.log("Starting a server...");
    var server = gls.new('./server/express.js');    // This creates an express server as defined in ./server/express.js.  Add server config to this file.

    server.start();     // tell GLS to start your express server

    gulp.watch('client/*', server.notify);      // Whenever files change in the client folder, refresh the browser.

    gulp.watch('server/*', server.start);       // Whenever files change in the server, restart the server to apply the changes.
});
