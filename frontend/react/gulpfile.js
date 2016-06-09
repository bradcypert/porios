const gulp = require('gulp');
const path = require('path');
const sync = require('gulp-sync')(gulp).sync;
var recipe = (name, config) => require('./gulp/recipes/' + name)(config);

const CONFIG = {
    NODE_MODULES: ['react', 'react-dom', 'material-ui', 'react-router', 'history', 'classnames', 'superagent'],
};

gulp.task('env', recipe('env', {
    NODE_PATH: 'source/js:node_modules'
}));

gulp.task('css', recipe('stylus', {
    input: './source/css/index.styl',
    output: './dist/css',
    name: 'source.css'
}));

gulp.task('js:node_modules', recipe('browserify', {
    input: '',
    require: CONFIG.NODE_MODULES,
    output: './dist/node_modules',
    name: 'node_modules.js'
}));

gulp.task('js:source', recipe('babelify', {
    input: './source/js/index.js',
    external: CONFIG.NODE_MODULES,
    output: './dist/js',
    name: 'source.js',
    transform: {
        stage: 1
    }
}));

gulp.task('bower', recipe('bower', {
    output: './dist/bower_components'
}));

gulp.task('inject', recipe('inject', {
    cwd: './dist',
    file: './source/html/**/*.html',
    sources: [[
        'node_modules/**/*',
        'bower_components/**/*'
    ], [
        'css/**/*',
        'js/**/*'
    ]],
    output: './dist'
}));

gulp.task('images', recipe('copy', {
    input: './source/images/**/*',
    output: './dist/images'
}));

gulp.task('audio', recipe('copy', {
    input: './source/audio/**/*',
    output: './dist/audio'
}));

gulp.task('server', recipe('server', {
    source: './dist',
    port: 3000
}));

gulp.task('watch', () => {
    gulp.watch('./source/**/*.styl', ['css']);
    gulp.watch('./source/**/*.js', ['js:source']);
    gulp.watch('./source/**/*.html', ['inject']);
    gulp.watch('./source/images/**/*', ['images']);
});

gulp.task('compile:vendor', ['js:node_modules']);
gulp.task('compile:static', ['images', 'audio']);
gulp.task('compile:source', ['env', 'js:source', 'css', 'compile:static']);
gulp.task('compile', sync(['compile:source', 'compile:vendor', 'inject']) );
gulp.task('compile-watch', ['compile:source', 'inject', 'watch']);
gulp.task('default', ['compile-watch', 'server']);
