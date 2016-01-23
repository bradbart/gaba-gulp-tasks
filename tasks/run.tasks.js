var karma = require('karma'); 

module.exports = function testTasks(gulp, gulp$, util, config) {
    gulp.task('test', ['compile'], function(done) {
        new karma.Server(config.karma, done).start();
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
