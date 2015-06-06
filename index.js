(function() {
    var gulp = require('gulp');
    var gulp$ = require('gulp-load-plugins')({lazy: true});
    var util = require('./util.js')();

    var config = null; // set during initialization
    module.exports = function(customConfig) {
        config = require('./gulp.default.config.js')(customConfig || {});
        gulp.task('gaba:help', gulp$.taskListing);
        return {
            allTasks: allTasks,
            compileTasks: compileTasks,
            watchTasks: watchTasks
        };
    };

    function allTasks() {
        compileTasks();
        watchTasks();
        testTasks();
    }

    function compileTasks() {
        require('./tasks/compile.tasks.js')(gulp, gulp$, util, config);
    }

    function watchTasks() {
        require('./tasks/watch.tasks.js')(gulp, gulp$, util, config);
    }

    function testTasks() {
        require('./tasks/test.tasks.js')(gulp, gulp$, util, config);
    }
}());
