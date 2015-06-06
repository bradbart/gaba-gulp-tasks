var gulp$ = require('gulp-load-plugins')({lazy: true});

module.exports = function() {
    var gulpHelpers = {
        logInfo: logInfo,
        logVerbose: logVerbose,
    };
    return gulpHelpers;

    function logInfo(msg) {
        gulp$.util.log(gulp$.util.colors.blue(msg));
    }

    function logVerbose(msg) {
        gulp$.util.log(msg);
    }
};
