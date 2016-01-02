(function() {

    'use strict';

    // dependencies 
    var gulp          =   require('gulp');
    var plugins       =   require('gulp-load-plugins')();
  
    /**
    * run development server and open the browser
    */
    gulp.task('serve-run', function() {
        gulp.src('dist')
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