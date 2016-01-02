(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('build-temp-readme', function() {
        return gulp.src(['src/**/*.md'])
            .pipe(plugins.markdown())
            .pipe(gulp.dest('.tmp'))
        ;
    });
})();