(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('build-dist-assets', ['clean'], function() {
        return gulp.src('src/demo/assets/**/*.*')
            .pipe(gulp.dest('./dist/assets'))
        ;
    });
})();