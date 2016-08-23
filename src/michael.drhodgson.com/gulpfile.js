/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
 
Install Gulp plugins using npm.
Manage from package.json in project.
e.g.
 
*/

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');

var paths = {
    webroot: "./wwwroot/"
}
var paths = {
    bower: "./bower_components/",
    webroot: "./wwwroot/",
    lib: "./wwwroot/lib/"
};

var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    "jquery": "jquery/dist/jquery*.{js,map}",
    "font-awesome": "font-awesome/{css,fonts}/*.{otf,css,ttf,svg,woff,woff2,eot}",
}

gulp.task('clean', function () {
    return gulp.src(paths.lib, { read: false })
        .pipe(clean());
});

gulp.task("copy", function () {
    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});

gulp.task("default", ["clean", "copy"]);