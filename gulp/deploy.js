(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('deploy', ['build'], function() {
        return gulp.src('./dist/**/*')
            .pipe(plugins.ghPages())
        ;
    });
})();