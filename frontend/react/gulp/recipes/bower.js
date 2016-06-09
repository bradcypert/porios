const gulp = require('gulp');
const bower = require('main-bower-files');

module.exports = (config) => {
    return () => {
        return gulp.src(bower())
            .pipe(gulp.dest(config.output));
    }
}
