(function() {
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
        require('./compile.tasks.js');
    }

    function watchTasks() {
        require('./watch.tasks.js');
    }
}());
