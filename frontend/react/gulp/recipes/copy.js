const gulp = require('gulp');
const path = require('path');

module.exports = (config) => {
  return () => {
    return gulp.src(config.input)
      .pipe(gulp.dest(config.output));
  }
};
