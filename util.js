var gulp$ = require('gulp-load-plugins')({lazy: true});

module.exports = function() {
    var gulpHelpers = {
        logInfo: logInfo,
        logVerbose: logVerbose,
        config: getConfig()
    };
    return gulpHelpers;

    function logInfo(msg) {
        gulp$.util.log(gulp$.util.colors.blue(msg));
    }

    function logVerbose(msg) {
        gulp$.util.log(msg);
    }

    function getConfig() {
        try {
            require('../gulp.config.js')();
        }
        catch(ex) {
            logVerbose('No config file found. Using default config.');
            return require('./gulp.default.config.js')();
        }
    }
};
