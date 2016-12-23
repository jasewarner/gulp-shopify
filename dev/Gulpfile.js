var autoprefixer = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var csslint = require('gulp-csslint');
var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Styles.
gulp.task('styles', function () {
    gulp.src('sass/**/*.scss.liquid')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 30 versions'],
            cascade: false
        }))
        .pipe(rename('theme.scss.liquid'))
        .pipe(gulp.dest('../assets/'));
});

// Scripts.
var jsFiles = 'js/functions/*.js',
    jsDest = '../assets/';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('theme.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// Images.
gulp.task('images', function() {
    return gulp.src('image/**')
        .pipe(changed('../assets/')) // Ignore unchanged files
        .pipe(gulp.dest('../assets/'))
});

// Fonts.
gulp.task('fonts', function() {
    return gulp.src('font/**')
        .pipe(changed('../assets/')) // Ignore unchanged files
        .pipe(gulp.dest('../assets/'))
});

// Watch.
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('image/*.{jpg,jpeg,png,gif,svg}', ['images']);
    gulp.watch('font/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
});
