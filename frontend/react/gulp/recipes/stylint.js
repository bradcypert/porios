const gulp = require('gulp');
const stylint = require('gulp-stylint');

module.exports = (config) => {
    return () => {
        return gulp.src(config.input)
            .pipe(stylint({ rules: config.lint }))
            .pipe(stylint.reporter())
    };
};
