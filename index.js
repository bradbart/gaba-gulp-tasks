(function() {
    var requirePeer = require('require-linked-peer'); 
    var gulp = requirePeer('gulp');
    var gulp$ = require('gulp-load-plugins')({lazy: true});
    var util = require('./util.js')();
    var del = require('del'); 

    var config = null; // set during initialization
    module.exports = function(customConfig) {
        config = require('./gulp.default.config.js')(customConfig || {});
        gulp.task('gaba:help', gulp$.taskListing);
        return {
            allTasks: allTasks,
            compileTasks: compileTasks,
            watchTasks: watchTasks,
            buildTasks: buildTasks,
            runTasks: runTasks
        };
    };

    function allTasks() {
        compileTasks();
        watchTasks();
        runTasks();
        buildTasks();
    }

    function compileTasks() {
        require('./tasks/compile.tasks.js')(gulp, gulp$, util, config);
    }

    function watchTasks() {
        require('./tasks/watch.tasks.js')(gulp, gulp$, util, config);
    }

    function runTasks() {
        require('./tasks/run.tasks.js')(gulp, gulp$, util, config);
    }

    function buildTasks() {
        require('./tasks/build.tasks.js')(gulp, gulp$, util, config, del);
    }
}());
