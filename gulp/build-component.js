(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();
    var streamqueue   = require('streamqueue');

    var pkg = require('../package.json');

    /**
    * build the componnent
    */
    gulp.task('build-component', function() {

        // using data from package.json
        var banner = [
            '/**',
            ' * <%= pkg.name %> - <%= pkg.description %>',
            ' * @version v<%= pkg.version %>',
            ' * @link <%= pkg.homepage %>',
            ' * @license <%= pkg.license %>',
            ' */',
            ''
        ].join('\n');

        var scriptsStream = gulp.src('src/angular-bootstrap-locale-dialog.js');

        var templatesStream = gulp.src('src/angular-bootstrap-locale-dialog.html')
            .pipe(plugins.angularTemplatecache('templates.js', {
                root: 'angular-bootstrap-locale-dialog/',
                module: 'ui.bootstrap.locale-dialog',
                htmlmin: true
            }))
        ;


        return streamqueue({ objectMode: true }, scriptsStream, templatesStream)

            .pipe(plugins.ngAnnotate({'single_quotes': true}))
            .pipe(plugins.header(banner, { pkg : pkg } ))
            .pipe(plugins.concat('angular-bootstrap-locale-dialog.js'))

            .pipe(gulp.dest('./'))

            .pipe(plugins.stripDebug())
            .pipe(plugins.uglify())
            .pipe(plugins.header(banner, { pkg : pkg } ))
            .pipe(plugins.rename({suffix: '.min'}))

            .pipe(gulp.dest('./'))
        ;
    });
})();