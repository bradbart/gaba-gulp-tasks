require('../../index.js')({
    appModule: 'fakeApp',
    karma: {
        configPath: __dirname + '/karma.conf.js' }
    }).allTasks();
