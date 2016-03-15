const gulp = require('gulp');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob');
const concat = require('gulp-concat');

module.exports = (config) => {
    return () => {
      return gulp.src(config.input)
        .pipe(glob())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat(config.name))
        .pipe(gulp.dest(config.output));
    };
};
