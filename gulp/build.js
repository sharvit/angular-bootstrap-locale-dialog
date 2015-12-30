(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();
    var streamqueue   = require('streamqueue');

    /**
    * build the componnent
    */
    gulp.task('build', function() {

        var templatesStream = gulp.src('src/*.html')
            .pipe(plugins.angularTemplatecache('templates.js', {
                root: 'angular-bootstrap-locale-dialog/',
                module: 'ui.bootstrap.locale-dialog',
                htmlmin: true
            }))
        ;

        var scriptsStream = gulp.src('src/*.js');


        return streamqueue({ objectMode: true }, scriptsStream, templatesStream)

            .pipe(plugins.ngAnnotate({'single_quotes': true}))
            .pipe(plugins.stripDebug())
            .pipe(plugins.concat('angular-bootstrap-locale-dialog.min.js'))
            .pipe(plugins.uglify())

            .pipe(gulp.dest('./dist'))
        ;

    }).help = {
        '': 'build the componnent'
    };
})();