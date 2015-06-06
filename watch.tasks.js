var gulp = require('gulp');
var gulp$ = require('gulp-load-plugins')({lazy: true});
var util = require('./util.js')();
var config = util.config;

gulp.task('watch-dev', ['watch-less', 'watch-new-js'], function() {
    util.logInfo('Set up watchers to facilitate development');
});

gulp.task('watch-less', function() {
    util.logInfo('Watch changes to LESS and run "compile-less"');
    gulp.watch([config.styles.less], ['compile-less']);
});

gulp.task('watch-new-js', function() {
    util.logInfo('Watch for new and removed JS files and run "wire-dep"');
    gulp$.watch(config.js, { events: ['add', 'unlink']}, function () {
         gulp.start('wire-dep');
   });
});
