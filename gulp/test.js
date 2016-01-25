(function() {

    'use strict';

    // dependencies 
    var path            =   require('path');
    var gulp            =   require('gulp');
    var KarmaServer     =   require('karma').Server;

    /**
    * run karma server and start run unit testing
    */
    gulp.task('test', ['build'], function (done) {
        new KarmaServer({
            configFile: path.resolve(__dirname, '../unit-tests.karma.conf.js'),
            singleRun: true
        }, done).start();
    });
})();