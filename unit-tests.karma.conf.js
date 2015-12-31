(function() {

    'use strict';

    module.exports = function (config) {
        var cfg = {

            basePath : './',

            files : [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap.min.js',
                
                'node_modules/angular-mocks/angular-mocks.js',

                'angular-bootstrap-locale-dialog.min.js',
                'src/angular-bootstrap-locale-dialog.spec.js'
            ],

            autoWatch : true,

            frameworks: ['jasmine'],

            browsers : ['Chrome'],

            plugins : [
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-jasmine'
            ],

            customLaunchers: {
                'Chrome_travis_ci': {
                    base: 'Chrome',
                    flags: ['--no-sandbox']
                }
            }
        };

        if (process.env.TRAVIS) {
            cfg.browsers = ['Chrome_travis_ci', 'Firefox'];
        }

        config.set(cfg);
    };
})();
