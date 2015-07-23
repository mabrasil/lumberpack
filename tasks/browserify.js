'use strict';

// Necessary Plugins
var env        = require('minimist')(process.argv.slice(2))
  ,plumber     = require('gulp-plumber')
  ,browserify  = require('gulp-browserify')
  ,uglify      = require('gulp-uglify')
  ,concat      = require('gulp-concat')
  ,gulpif      = require('gulp-if');

// Call Uglify and Concat JS
module.exports = function (gulp) {
  return function () {
    gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(browserify({debug: !env.p }))
      .pipe(gulpif(env.p, uglify()))
      .pipe(gulp.dest('build/js'))
  };
};