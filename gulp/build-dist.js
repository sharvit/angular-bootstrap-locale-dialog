(function() {

    'use strict';

    // dependencies 
    var gulp          =   require('gulp');
    var runSequence   =   require('run-sequence');

    /**
    * build the dist folder
    */
    gulp.task('build-dist', function (done) {
        runSequence(
            'clean',
            [
                'build-dist-component',
                'build-dist-assets'
            ],
            'build-dist-index',
            done
        );
    });
})();