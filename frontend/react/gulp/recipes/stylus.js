const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');

module.exports = (config) => {
    return () => {
      return gulp.src(config.input)
        .pipe(stylus({ 'import': config.include || [] }))
        .pipe(concat(config.name))
        .pipe(gulp.dest(config.output));
    };
};
