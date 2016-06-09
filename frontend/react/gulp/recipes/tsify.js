const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');

module.exports = function(config) {
    return () => {
        var b = browserify(config.input)
            .plugin(tsify, { target: 'es6' });

        if(config.transform) {
            b.transform(babelify.configure(config.transform));
        }

        if(config.require) {
            b.require(config.require);
        }

        if(config.external) {
            b.external(config.external);
        }

        return b
            .bundle()
            .pipe(source(config.name))
            .pipe(gulp.dest(config.output));
    };
};
