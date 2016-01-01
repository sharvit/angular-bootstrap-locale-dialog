(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();

    gulp.task('deploy:gh-pages', ['build'], function() {
        var options = {
            remove: false
        };

        if (process.env.TRAVIS) {
            console.log('deploy gh-pages with travis');

            options.remoteUrl = 'https://' + process.env.GH_TOKEN + '@github.com/sharvit/angular-bootstrap-locale-dialog.git';
        }

        return gulp.src('./dist/**/*')
            .pipe(plugins.ghPages(options))
        ;
    });
})();