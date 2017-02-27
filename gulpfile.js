/* global require */

var gulp = require('gulp');
var del = require('del');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var es = require('event-stream');
var imagemin = require('gulp-imagemin');
var config = require('./config.json');
var rename = require('gulp-rename');
var http = require('http');
var express = require('express');
var ecstatic = require('ecstatic');

// clean out the directory first
gulp.task('clean', function () {
	return del('./build');
});

gulp.task('scripts', function() {
	var requirejs = require('requirejs');

	return gulp.src('./app/**/*.js')
		.pipe(requirejs(function(file) {
			return {
				optimize: 'uglify',
				baseUrl: './app/',
				paths: {
					'lib': './lib/'
				}
			};
		}))
		.pipe(gulp.dest('./build/js'));
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
		.pipe(cssnano())
		.pipe(rename('bootstrap.css'))
		.pipe(gulp.dest(config.dev.styles));
});

gulp.task('watch', function() {
	gulp.watch(config.dev.less, ['less']);
});

gulp.task('default', ['watch'], function() {
	var app = express();
	app.use(ecstatic({ root: __dirname, defaultExt: 'html' }));
	http.createServer(app).listen(8088);

	console.log('Server running at http://127.0.0.1:8088/');
});

gulp.task('build', ['less', 'images']);
