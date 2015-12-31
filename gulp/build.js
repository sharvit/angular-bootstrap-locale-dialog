(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();
    var streamqueue   = require('streamqueue');

    var fs = require('fs');

    var capitalize = require('capitalize');

    var pkg = require('../package.json');

    var ngversion = '1.4.7';
    var bsversion = '3.3.5';
    var uiversion = '0.14.3';

    /**
    * build the componnent
    */
    gulp.task('build', ['build-dist-component', 'build-dist-assets', 'build-dist-readme'], function() {

        // injects 'src' into index.html at position 'tag'
        var _inject = function(src, tag) {
            return plugins.inject(src, {
                starttag: '<!-- inject:' + tag + ':{{ext}} -->',
                read: false,
                addRootSlash: false
            });
        };

        return gulp.src('src/demo/index.html')
            .pipe(
                _inject(gulp.src('assets/*.css', { cwd:  'dist', read: false }), 'assets-styles')
            )
            .pipe(
                _inject(gulp.src('assets/**/*.js', { cwd:  'dist', read: false }), 'assets-scripts')
            )
            .pipe(plugins.replaceTask({
                patterns: [{
                    match: 'version',
                    replacement: pkg.version
                }, {
                    match: 'name',
                    replacement: capitalize.words(pkg.name.split('-').join(' '))
                }, {
                    match: 'description',
                    replacement: pkg.description
                }, {
                    match: 'ngversion',
                    replacement: ngversion
                }, {
                    match: 'bsversion',
                    replacement: bsversion
                }, {
                    match: 'uiversion',
                    replacement: uiversion
                }, {
                    match: 'demo-md',
                    replacement: fs.readFileSync('./.tmp/README.html', 'utf8')
                }, {
                    match: 'doc-md',
                    replacement: fs.readFileSync('./.tmp/docs/readme.html', 'utf8')
                }, {
                    match: 'doc-html',
                    replacement: fs.readFileSync('./src/docs/demo.html', 'utf8')
                }, {
                    match: 'doc-js',
                    replacement: fs.readFileSync('./src/docs/demo.js', 'utf8')
                }]
            }))
            .pipe(gulp.dest('./dist'))
        ;
    });
})();