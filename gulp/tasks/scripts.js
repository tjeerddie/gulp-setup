var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var iife = require('gulp-iife');
var rename = require('gulp-rename');

var config = require('../config');
var taskOptions = config.getKeys();

var localConfig = {
    src: ['./resources/js/**/*.js'],
    dest: './public/js/',
    buildFile: 'app.js',
    minifiedFile: 'app.min.js'
};

gulp.task('scripts', ['clean:scripts'], function () {
    return gulp.src(localConfig.src)
        .pipe(plumber({ errorHandler: config.onError }))
        .pipe(gulpif(taskOptions.concat, concat(localConfig.buildFile)))
        .pipe(gulpif(taskOptions.minify, uglify()))
        .pipe(iife())
        .pipe(gulpif(taskOptions.minify, rename(localConfig.minifiedFile)))
        .pipe(gulp.dest(localConfig.dest));
});
