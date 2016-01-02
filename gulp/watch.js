(function() {

    'use strict';

    // dependencies 
    var gulp          =   require('gulp');
    var path          =   require('path');
    var plugins       =   require('gulp-load-plugins')();

    /**
    * run watchers to auto build source files
    */
    gulp.task('watch', function() {
        plugins.livereload.listen();

        gulp.watch('src/demo/assets/**/*', ['build-dist-assets']);
        gulp.watch('src/demo/assets/index.html', ['build-dist-index']);
        gulp.watch('src/docs/**/*', ['build-dist-index']);
        gulp.watch('src/*', ['build-dist-component']);
    });
})();