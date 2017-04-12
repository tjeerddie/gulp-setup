var gulp = require('gulp');
var clean = require('gulp-clean');
var cached = require('gulp-cached');

var localConfig = {
  styles: {
    src: ['./public/css/*'],
    read: false
  },
  scripts: {
    src: ['./public/js/*'],
    read: false
  },
}

gulp.task('clean:styles', function () {
  gulp.src(localConfig.styles.src, { read: localConfig.styles.read })
    .pipe(clean());
});

gulp.task('clean:scripts', function () {
  gulp.src(localConfig.scripts.src, { read: localConfig.scripts.read })
    .pipe(clean());
});

gulp.task('clean', function () {
  cached.caches = {};
});
