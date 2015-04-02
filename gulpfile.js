'use strict';

var fs = require('fs');
var gulp = require('gulp');
var moment = require('moment');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();
var $log = $.util.log;
var sh = require('shelljs');
var argv = require('yargs').argv;
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

var DIST = 'dist';

gulp.task('clean', require('del').bind(null, [
  DIST + '/*', 
  '!' + DIST + '/.git*'
]));

gulp.task('assets', function() {
  var src = ['src/index.html'];
  return gulp.src(src)
    .pipe($.copy(DIST, { prefix: 1 }))
    .pipe($.size({title: 'assets'}));
});

// gulp.task('webpack', function () {
//   return gulp.src('src/scripts/main.js')
//   .pipe($.webpack(webpackDistConfig))
//   .pipe(gulp.dest(DIST + '/assets'))
//   .pipe($.size({ title: 'webpack' }));
// });

gulp.task('build', ['clean'], function(cb) {
  runSequence(['webpack', 'assets'], cb);
});

gulp.task('serve', function (done) {
  var compiler = webpack(webpackConfig),
      host = '0.0.0.0', port = 8080;

  new WebpackDevServer(compiler, {
    contentBase: 'src/',
    hot: true, port: port,
    publicPath: '/assets/',
    noInfo: true
  })
  .listen(port, host, function (err){
    if (err) $log('[webpack-dev-server] error', err);

    $log('[webpack-dev-server] started');
    require('opn')('http://localhost:8080/');
  });
});

gulp.task('default', function () {
});
