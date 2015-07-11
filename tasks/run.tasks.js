module.exports = function testTasks(gulp, gulp$, util, config) {
    gulp.task('test', ['compile'], function(done) {
        var karma = require('karma').server;
        var karmaOptions = {
            configFile: config.karma.configPath,
            single: true
        };
        karma.start(karmaOptions, done);
    });

    gulp.task('serve-dev', ['compile'], function() {
        var nodemonOptions = {
            script: config.serverEntry,
            delayTime: 1,
            env: {
                'NODE_ENV': 'development'
            }
        };
        return gulp$.nodemon(nodemonOptions);
    });

    gulp.task('serve', ['build'], function() {
        var nodemonOptions = {
                script: config.serverEntry,
                delayTime: 1,
                env: {
                    'NODE_ENV': 'production'
                }
            };
        return gulp$.nodemon(nodemonOptions);
    });
};
