module.exports = function(customOverrides) {
    var appRoot = './app/';
    var svcRoot = './svc/';

    var config = {
        /* Required */
        appModule: '',
         
        /* Client Side file paths */
        appRoot: appRoot,
        index: appRoot + 'index.html',
        js: [
            appRoot + '**/*.module.js',
            appRoot + '**/*.js'
        ],
        specs: [
            appRoot + '**/*.spec.js'            
        ], 
        html: [
            appRoot + '**/*.html',
            '!' + appRoot + 'index.html'
        ],
        styles: {
            css: appRoot + 'app.css',
            compiledDest: 'app.css',
            directory: appRoot,
            less: appRoot + 'app.less'
        },
        fonts: [],
        assets: [],

        /* Options for wiredep */
        wiredepOptions: {
            ignorePath: '..'
        },

        /* Distribution root */
        distRoot: './public/',

        /* Server side options */
        serverEntry: svcRoot + 'index.js'
    };
    config.karma = karmaConfig(config); 
    
    return applyOverrides(config, customOverrides);

    function applyOverrides(value, override) {
        for(var i in value) {
            if(override[i] && (typeof value[i] === 'object' && !(value[i] instanceof Array))) {
                applyOverrides(value[i], override[i]);
            } else if(override[i]) {
                value[i] = override[i];
            }
        }
        return value;
    }
    
    function karmaConfig (config) {
        return {
             // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '',

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'],


            // list of files / patterns to load in the browser
            files: [].concat(
                require('wiredep')({devDependencies: true})['js'],
                config.js
            ),

            // list of files to exclude
            exclude: [
            ],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {
            },


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['progress'],


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: false,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['PhantomJS'],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        }; 
    }
};
