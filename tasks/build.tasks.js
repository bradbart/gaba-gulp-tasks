module.exports = function serveTasks(gulp, gulp$, util, config) {
    gulp.task('templatecache', function() {
        return gulp
            .src(config.html)
            .pipe(gulp$.angularTemplatecache('templates.js', {
                module: config.appModule
            }))
            .pipe(gulp.dest(config.appRoot));
    });
    gulp.task('build', ['compile', 'templatecache'], function() {
        var assets = gulp$.useref.assets({searchPath: './'});
        var cssFilter = gulp$.filter('**/*.css');
        
        return gulp
            .src(config.index)
            .pipe(gulp$.plumber())
            .pipe(assets)
            /* Optimize CSS files */
            .pipe(cssFilter)
            .pipe(gulp$.csso())
            .pipe(cssFilter.restore())
            /* Create distribution resources */
            .pipe(assets.restore())
            .pipe(gulp$.useref())
            .pipe(gulp.dest(config.distRoot));
    });
};
