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
    var faversion = '4.5.0';
    var fiversion = '1.0.0';

    /**
    * build the dist index (site demo and docs)
    */
    gulp.task('build-dist-index', ['build-temp-readme'], function() {

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
                    match: 'github',
                    replacement: pkg.repository.url
                }, {
                    match: 'download-zip',
                    replacement: 'https://github.com/sharvit/' + pkg.name + '/archive/v' + pkg.version + '.zip'
                }, {
                    match: 'download-tar',
                    replacement: 'https://github.com/sharvit/' + pkg.name + '/archive/v' + pkg.version + '.tar.gz'
                }, {
                    match: 'homepage',
                    replacement: pkg.homepage
                },  {
                    match: 'cdn-dist',
                    replacement: pkg.homepage + '/' + pkg.name + '-v' + pkg.version + '.js'
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
                    match: 'faversion',
                    replacement: faversion
                }, {
                    match: 'fiversion',
                    replacement: fiversion
                }, {
                    match: 'doc-installation-md',
                    replacement: fs.readFileSync('./.tmp/docs/installation.html', 'utf8')
                }, {
                    match: 'doc-usage-md',
                    replacement: fs.readFileSync('./.tmp/docs/usage.html', 'utf8')
                }, {
                    match: 'doc-html',
                    replacement: fs.readFileSync('./src/docs/demo.html', 'utf8')
                }, {
                    match: 'doc-js',
                    replacement: fs.readFileSync('./src/docs/demo.js', 'utf8')
                }, {
                    match: 'doc-contributing-md',
                    replacement: fs.readFileSync('./.tmp/docs/contributing.html', 'utf8')
                }, {
                    match: 'doc-license-md',
                    replacement: fs.readFileSync('./.tmp/docs/license.html', 'utf8')
                }]
            }))
            .pipe(gulp.dest('./dist'))
            .pipe(plugins.livereload())
        ;
    });
})();