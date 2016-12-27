var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Call me Sam")
});

gulp.task('html', function() {
  console.log("imagine some usefulness in HTML here")
});

gulp.task('watch', function() {

  watch('index.html', function() {
    gulp.start('html');
  });

});
