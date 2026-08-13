'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import changed from 'gulp-changed';

const sass = gulpSass(dartSass);

/**
 * Paths
 */
const srcScss = 'scss/**/*.scss';
const srcJs = 'js/*.js';
const jsBundle = [
    // 'node_modules/dir/example.js',
    srcJs
];
const assetsDir = '../assets/';


/**
 * Styles
 */
export const css = () => {
    return gulp.src('scss/*.scss.liquid')
        .pipe(sass.sync({
            outputStyle: 'expanded',
            // Suppress the "slash as division" and other API warnings
            // that cause modern Sass to hang or fail on Bootstrap 5 code
            quietDeps: true,
            // Help Sass to find @import for Bootstrap files
            includePaths: ['node_modules'],
            // Silence the @import warnings
            silenceDeprecations: ['import', 'legacy-js-api'],
        }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('.scss', '.css')
            path.extname = '.liquid';
        }))
        .pipe(replace(`"{{`, "{{"))
        .pipe(replace(`}}"`, "}}"))
        .pipe(cleanCss())
        .pipe(gulp.dest(assetsDir));
};

/**
 * Scripts
 */
export const js = () => {
    return gulp.src(jsBundle)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('theme.js'))
        .pipe(uglify())
        .pipe(gulp.dest(assetsDir));
};

/**
 * Images
 */
export const images = () => {
    return gulp.src('images/**')
        .pipe(changed(assetsDir)) // Ignore unchanged files
        .pipe(gulp.dest(assetsDir));
};

/**
 * Fonts
 */
export const fonts = () => {
    return gulp.src('fonts/**')
        .pipe(changed(assetsDir)) // Ignore unchanged files
        .pipe(gulp.dest(assetsDir));
};

/**
 * Watch task
 */
export const watch = () => {
    gulp.watch(srcScss, css);
    gulp.watch(srcJs, js);
    gulp.watch(`images/*.{jpg,jpeg,png,gif,svg}`, images);
    gulp.watch(`fonts/*.{eot,svg,ttf,woff,woff2}`, fonts);
};

/**
 * Default task
 */
export default gulp.series(css, js, images, fonts);
