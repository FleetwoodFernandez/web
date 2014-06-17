/* global require */

var gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat')
	jshint = require('gulp-jshint'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	es = require('event-stream'),
	imagemin = require('gulp-imagemin'),
	config = require('./config.json'),
	rename = require('gulp-rename');

// clean out the directory first
gulp.task('clean', function () {
	return gulp.src('./build', { read: false })
		.pipe(clean());
});

// copy images to the build folder. we have a seperate task for this
// because we want to run it through an image min task
gulp.task('images', function() {
	return gulp.src(config.dev.images + '**')
		.pipe(imagemin())
        .pipe(gulp.dest(config.release.images));
});

// compile our less files to css
gulp.task('less', function() {
	return gulp.src(config.dev.less + 'bootstrap.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(rename('bootstrap.css'))
		.pipe(gulp.dest(config.dev.styles));
});

gulp.task('watch', function() {
	gulp.watch(config.dev.less, ['less']);
});

gulp.task('build', ['less', 'images']);
