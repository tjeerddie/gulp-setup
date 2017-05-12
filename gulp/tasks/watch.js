var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    localConfig = {
        scriptsFiles: './resources/assets/js/**/*.js',
        stylesFiles: './resources/assets/styles/**/*.js'
    };

gulp.task('watch:scripts', function () {
    gulp.watch(localConfig.scriptsFiles, function () {
        runSequence('scripts', 'inject');
    });
});

gulp.task('watch:styles', function () {
    gulp.watch(localConfig.scriptsFiles, function () {
        runSequence('styles', 'inject');
    });
});

gulp.task('watch', ['watch:scripts', 'watch:styles']);