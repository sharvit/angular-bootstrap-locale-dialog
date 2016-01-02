(function() {

    'use strict';

    // dependencies 
    var gulp          =   require('gulp');
    var runSequence   =   require('run-sequence');
  
    /**
    * run development server and open the browser
    */
    gulp.task('serve', function (done) {
        runSequence(
            'build',
            'watch',
            'serve-run',
            done
        );
    });

})();