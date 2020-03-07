const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('hello', function (done) {
  console.log('Привет, мир!');
  done();
});


// Static server
gulp.task('browser-sync', function (done) {
  browserSync.init({
    server: {
      baseDir: "src/./"
    }
  });
  gulp.watch("src/./").on('change', browserSync.reload);
  done();
});


gulp.task('default', function (done) {
  gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'));
  done();
});