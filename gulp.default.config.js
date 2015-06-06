module.exports = function() {
    var appRoot = './app/';

    var config = {
        /* Client Side file paths */
        appRoot: appRoot,
        index: appRoot + 'index.html',
        js: [
            appRoot + 'scripts/**/*.module.js',
            appRoot + 'scripts/**/*.js',
            '!' + appRoot + 'scripts/**/*.spec.js',
        ],
        styles: {
            css: appRoot + 'styles/app.css',
            compiledDest: 'app.css',
            directory: appRoot + 'styles/',
            less: appRoot + 'styles/app.less'
        },

        /* Options for wiredep */
        wiredepOptions: {
            ignorePath: '..'
        }
    };

    return config;
};
