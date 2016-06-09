'use strict';

const gulp = require('gulp');
const inject = require('gulp-inject');
const series = require('stream-series');

module.exports = (config) => {
    return () => {

        let streams = config.sources
            .map(sources => {
                return gulp.src(sources, {
                    read: false,
                    cwd: config.cwd
                });
            });

        return gulp.src(config.file)
            .pipe(inject(series.apply(series, streams), {
                addRootSlash: false
            }))
            .pipe(gulp.dest(config.output));
    }
};