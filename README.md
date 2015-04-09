#Example MEAN Express Server
An example Node JS Epress server with gulp and livereload.

###Installation:
1. Clone the repository  
`git clone https://github.com/robbyemmert/Sample-MEAN-Server`
2. Install NPM dependencies  
`npm install`  
*(Optional)* **Install gulp globally**  
`npm install -g gulp`  
**Note:** be sure to check out https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
for an up-to-date intro to gulp.
3. Start the server  
`gulp up`

###Dependencies:
- Express: *A server framework for Node JS*
- Gulp: *A task runner*  
Allows you to simply run it from the command line with `gulp up`, watches files for changes, and more.
- gulp-live-server: *aka: GLS*  
GLS is a quick shortcut to easily manage an Express server with Gulp.  Ideally, you should be able to do everything this does yourself, so this might get replaced at some point with more documented code.  It's just a nice utility to get some of the boring stuff out of the way.
- connect-livereload: *A browser refresher*  
Pairs with livereload plugin(s) in your browser to refresh the page you're viewing whenever your project changes, keeping your browser up-to-date with your dev environment.
