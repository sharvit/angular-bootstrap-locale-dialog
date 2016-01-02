(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    var pkg = require('../package.json');

    gulp.task('build-dist-component', ['build-component'], function() {
        return gulp.src(['angular-bootstrap-locale-dialog.js', 'angular-bootstrap-locale-dialog.min.js'])
            .pipe(plugins.rename(function (path) {
                if (path.basename.match(/.min/g)) {
                    path.basename = path.basename.replace(/.min/g, '-v' + pkg.version + '.min');
                } else {
                    path.basename += '-v' + pkg.version;
                }
            }))
            .pipe(gulp.dest('./dist'))
            .pipe(plugins.livereload())
        ;
    });
})();