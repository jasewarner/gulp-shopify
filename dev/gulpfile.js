'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const csslint = require('gulp-csslint');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

/**
 * SCSS task
 */
gulp.task('css', function () {
    gulp.src('scss/**/*.scss.liquid')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename('theme.scss.liquid'))
        .pipe(gulp.dest('../assets/'));
});

/**
 * JS task
 *
 * Note: you may or may not want to include the 2 below:
 * babel polyfill and jquery
 */
const jsFiles = [
    // './node_modules/babel-polyfill/dist/polyfill.js',
    // './node_modules/jquery/dist/jquery.slim.js',
    'js/*.js',
];
const jsDest = '../assets/';

gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('theme.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

/**
 * Images task
 */
gulp.task('images', function () {
    return gulp.src('image/**')
        .pipe(changed('../assets/')) // ignore unchanged files
        .pipe(gulp.dest('../assets/'))
});

/**
 * Fonts task
 */
gulp.task('fonts', function () {
    return gulp.src('font/**')
        .pipe(changed('../assets/')) // ignore unchanged files
        .pipe(gulp.dest('../assets/'))
});

/**
 * Watch task
 */
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('image/*.{jpg,jpeg,png,gif,svg}', ['images']);
    gulp.watch('font/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
});
