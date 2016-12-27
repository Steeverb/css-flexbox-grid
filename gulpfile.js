var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Yay")
});

gulp.task('html', function() {
  console.log("imaging usefulness")
});

gulp.task('watch', function() {

  watch('index.html')

})
