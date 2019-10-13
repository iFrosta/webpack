// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// let replace = require('gulp-replace');
// let browserSync = require("browser-sync").create();

// Global Destination
const dist = 'dist/public/';
const dev = 'src/';

// File paths
const files = {
    scssPath: dev + 'scss/**/*.scss',
    jsPath: dev + 'js/**/*.js',
    // indexPath: dev + '**.html'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(dist + '/css/')
        ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(dest(dist + '/js/')
        );
}

// function copy() {
//     return src('src/index.html')
//         .pipe(dest(dist));
// }

// Cachebust
// let cbString = new Date().getTime();
// function cacheBustTask(){
//     return src([dist + '/index.html'])
//         .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
//         .pipe(dest(dev));
// }

// function copyCSS() {
//     return src( dist + 'public/css/**')
//         .pipe(dest(dev + '/css/'));
// }

// // A simple task to reload the page
// function reload() {
//     browserSync.reload();
// }
//
// // Add browsersync initialization at the start of the watch task
// function liveReload() {
//     browserSync.init({
//         // You can tell browserSync to use this directory and serve it as a mini-server
//         server: {
//             baseDir: "./src"
//         }
//         // If you are already serving your website locally using something like apache
//         // You can use the proxy setting to proxy that instead
//         // proxy: "yourlocal.dev"
//     });
//     // We should tell gulp which files to watch to trigger the reload
//     // This can be html or whatever you're using to develop your website
//     // Note -- you can obviously add the path to the Paths object
//     watch("src/*.html", reload);
// }

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask),
//    cacheBustTask,
    watchTask
);