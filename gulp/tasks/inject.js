var gulp = require('gulp');
var plumber = require('gulp-plumber');
var inject = require('gulp-inject');

var config = require('../config');
var taskOptions = config.getKeys();

var localConfig = {
  src: ['./public/index.html'],
  target: ['./public/css/*.css', './public/js/*.js'],
  dest: './public/'
}

gulp.task('inject', function () {
  return gulp.src(localConfig.src)
    .pipe(plumber({ errorHandler: config.onError }))
    .pipe(inject(gulp.src(localConfig.target), { ignorePath: '/public/' }, {read: false}))
    .pipe(gulp.dest(localConfig.dest));
});
