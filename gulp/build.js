(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');

    /**
    * build the componnent
    */
    gulp.task('build', ['build-dist', 'build-readme']);
})();