(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('deploy:gh-pages', ['build'], function() {
        return gulp.src('./dist/**/*')
            .pipe(plugins.ghPages({
                remove: false
            }))
        ;
    });
})();