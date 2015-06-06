(function() {
    var config = getConfig();
    var gulp = require('gulp');
    var gulp$ = require('gulp-load-plugins')({lazy: true});
    var util = require('./util.js')();

    module.exports = {
        allTasks: allTasks,
        compileTasks: compileTasks,
        watchTasks: watchTasks
    };

    function allTasks() {
        compileTasks();
        watchTasks();
    }

    function compileTasks() {
        require('./tasks/compile.tasks.js')(gulp, gulp$, util, config);
    }

    function watchTasks() {
        require('./tasks/watch.tasks.js')(gulp, gulp$, util, config);
    }

    function getConfig() {
        try {
            return require('../../gulp.config.js')();
        }
        catch(ex) {
            return require('./gulp.default.config.js')();
        }
    }
}());
