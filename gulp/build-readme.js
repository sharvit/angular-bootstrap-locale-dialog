(function() {

    'use strict';

    // dependencies 
    var gulp          = require('gulp');
    var plugins       = require('gulp-load-plugins')();
    var streamqueue   = require('streamqueue');

    var fs = require('fs');

    var capitalize = require('capitalize');

    var pkg = require('../package.json');

    /**
    * build the README.md file
    */
    gulp.task('build-readme', function() {

        return gulp.src('src/docs/layout.md')
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
                    match: 'homepage',
                    replacement: pkg.homepage
                }, {
                    match: 'cdn-dist',
                    replacement: pkg.homepage + '/' + pkg.name + '-v' + pkg.version + '.js'
                }, {
                    match: 'doc-installation-md',
                    replacement: fs.readFileSync('./src/docs/installation.md', 'utf8')
                }, {
                    match: 'doc-html',
                    replacement: fs.readFileSync('./src/docs/demo.html', 'utf8')
                }, {
                    match: 'doc-js',
                    replacement: fs.readFileSync('./src/docs/demo.js', 'utf8')
                }, {
                    match: 'doc-usage-md',
                    replacement: fs.readFileSync('./src/docs/usage.md', 'utf8')
                }, {
                    match: 'doc-contributing-md',
                    replacement: fs.readFileSync('./src/docs/contributing.md', 'utf8')
                }, {
                    match: 'doc-license-md',
                    replacement: fs.readFileSync('./src/docs/license.md', 'utf8')
                }]
            }))
            .pipe(plugins.rename('README.md'))
            .pipe(gulp.dest('./'))
        ;
    });
})();