'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

let autoprefixer;
let changed;
const startup = async () => {
    autoprefixer = (await import('gulp-autoprefixer')).default;
    changed = (await import('gulp-changed')).default;
}

/**
 * Asset paths
 */
const srcScss = 'scss/**/*.scss';
const srcJs = 'js/*.js';
const assetsDir = '../assets/';

/**
 * Task to run before anything else
 */
gulp.task('startup', async () => {
    await startup();
});

/**
 * Task for styles
 */
gulp.task('css', gulp.series('startup', () => {
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
}));

/**
 * Scripts task
 */
const jsFiles = [
    // 'node_modules/dir/example.js',
    srcJs
];

gulp.task('js', () => {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('theme.js'))
        .pipe(uglify())
        .pipe(gulp.dest(assetsDir));
});

/**
 * Images task
 */
gulp.task('images', gulp.series('startup', () => {
    return gulp.src('images/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
}));

/**
 * Fonts task
 */
gulp.task('fonts', gulp.series('startup', () => {
    return gulp.src('fonts/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
}));

/**
 * Watch task
 */
gulp.task('watch', () => {
    gulp.watch(srcScss, gulp.series('css'));
    gulp.watch(srcJs, gulp.series('js'));
    gulp.watch(`images/*.{jpg,jpeg,png,gif,svg}`, gulp.series('images'));
    gulp.watch(`fonts/*.{eot,svg,ttf,woff,woff2}`, gulp.series('fonts'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('css', 'js', 'images', 'fonts'));
