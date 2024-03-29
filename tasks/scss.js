const gulp = require('gulp');
const connect = require('gulp-connect');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function scss(){
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('tmp/assets/css'))
        .pipe(connect.reload());
}

function buildSCSS(){
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(gulp.dest('dist/assets/css'));
}

function watchSCSS(){
    return gulp
        .watch('./src/scss/**/*.scss', {
            ignoreInitial: false
        },scss);
}

module.exports = {
    watchSCSS,
    buildSCSS
}