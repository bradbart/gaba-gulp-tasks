module.exports = function(gulp, gulp$, util, config) {
    gulp.task('watch:dev', ['watch:css', 'watch:js'], function() {
        util.logInfo('Set up watchers to facilitate development');
    });

    gulp.task('watch:css', function() {
        util.logInfo('Watch changes to LESS and run "compile-less"');
        gulp.watch([config.styles.less], ['compile:css']);
    });

    gulp.task('watch:js', function() {
        util.logInfo('Watch for new and removed JS files and run "wire-dep"');
        gulp.watch([config.js], ['compile:js']);
        gulp$.watch(config.js, { events: ['add', 'unlink']}, function () {
             gulp.start('compile:index');
       });
    });
};


