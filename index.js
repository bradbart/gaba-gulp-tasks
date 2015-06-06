(function() {
    var config = getConfig();

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
        require('./tasks/compile.tasks.js')(config);
    }

    function watchTasks() {
        require('./tasks/watch.tasks.js')(config);
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
