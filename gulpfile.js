var gulp = require('gulp'); 


require('./index.js')(gulp, {
    appModule: '',
    karma: {
        configPath: __dirname + '/karma.conf.js' }
    }).allTasks();