(function() {
    var gulp = require('gulp');
    var gulp$ = require('gulp-load-plugins')({lazy: true});
    var util = require('./util.js')();

    var config = null; // set during initialization
    console.log('This is a message');
    module.exports = function(customConfig) {
        config = getConfig(customConfig);
        return {
            allTasks: allTasks,
            compileTasks: compileTasks,
            watchTasks: watchTasks
        };
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

    function getConfig(customConfig) {
        if(customConfig) {
            return customConfig;
        }
        else {
            return require('./gulp.default.config.js')();
        }
    }
}());
