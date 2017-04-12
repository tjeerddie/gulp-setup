var gulp = require('gulp');
var runSequence = require('run-sequence');
var localConfig = {
    scriptsFiles: './resources/js/**/*.js'
}

gulp.task('watch:scripts', function () {
    gulp.watch(localConfig.scriptsFiles, function () {
        runSequence('scripts', 'inject');
    });
});

gulp.task('watch', ['watch:scripts']);
