(function() {

    'use strict';

    // dependencies 
    // var path          =   require('path');
    var gulp          =   require('gulp');
    var plugins       =   require('gulp-load-plugins')();

    // devDependencies 
    var gulpWebserver;
  
    /**
    * run development server and open the browser
    */
    gulp.task('serve', ['build'], function() {
        gulp.src('dist/')
        .pipe(
            plugins.webserver({
                path: '/',
                fallback: 'index.html',
                port: 3000,
                livereload: true,
                open: true
            })
        );
    });

})();