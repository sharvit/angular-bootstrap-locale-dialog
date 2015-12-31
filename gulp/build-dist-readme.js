(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('build-dist-readme', function() {
        return gulp.src(['src/**/readme.md', 'README.md'])
            .pipe(plugins.markdown())
            .pipe(gulp.dest('.tmp'))
        ;
    });
})();