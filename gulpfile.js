(function() {

  'use strict';

  var gulp = require('gulp');
  var path = require('path');

  // Require all tasks.
  require('require-dir')(
    path.resolve(__dirname, 'gulp'),
    { recurse: true }
  );

  /**
   * Default Task
  **/
  gulp.task('default', ['build']);

})();
