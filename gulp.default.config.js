module.exports = function(customOverrides) {
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
        },

        karma: {
            configPath: './karma.conf.js'
        }
    };

    return applyOverrides(config, customOverrides);

    function applyOverrides(value, override) {
        for(var i in value) {
            if(override[i] && (typeof value[i] === 'object')) {
                applyOverrides(value[i], override[i]);
            } else if(override[i]) {
                value[i] = override[i];
            }
        }
        return value;
    }
};
