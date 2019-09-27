var gulp = require('gulp'); // require gulp
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// CSS section
gulp.task('sass', function(){
    return gulp.src('app/public/scss/layout.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/public/css'))
});
gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer')
    const sourcemaps = require('gulp-sourcemaps')
    const postcss = require('gulp-postcss')

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'))
});
gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
