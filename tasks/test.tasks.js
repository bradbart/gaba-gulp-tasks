module.exports = function testTasks(gulp, gulp$, util, config) {
    gulp.task('test', ['compile:js'], function(done) {
        var karma = require('karma').server;
        var karmaOptions = {
            configFile: config.karma.configPath,
            single: true
        };
        karma.start(karmaOptions, done);
    });
};
