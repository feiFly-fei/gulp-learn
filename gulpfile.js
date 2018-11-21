/**
 * Created by LiFei on 2018/11/14.
 */
var gulp = require('gulp');
var dev = require('./gulpfile.dev');
var prod = require('./gulpfile.build');
var Config = require('./gulpfile.config');
var mkdirp = require('mkdirp');

dev();
prod();

gulp.task('init', function() {
	// body... 
	var dirs = [Config.html.dir, Config.assets.dir, Config.css.dir, Config.sass.dir, Config.js.dir, Config.img.dir];
	dirs.forEach(function (dir) {
		mkdirp.sync(dir);
    });
})