const gulp = require('gulp');
const env = require('gulp-env');

module.exports = (config) => {
    return () => {
        env({
            vars: config
        })
    }
};