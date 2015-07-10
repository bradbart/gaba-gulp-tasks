module.exports = function serveTasks(gulp, gulp$, util, config, del) {
    gulp.task('templatecache', function() {
        return gulp
            .src(config.html)
            .pipe(gulp$.angularTemplatecache('templates.js', {
                module: config.appModule
            }))
            .pipe(gulp.dest(config.appRoot));
    });
    gulp.task('build', ['compile', 'templatecache', 'clean'], function() {
        var assets = gulp$.useref.assets({searchPath: './'});
        var cssFilter = gulp$.filter('**/*.css');
        var jsFilter = gulp$.filter('**/*.js'); 
        
        return gulp
            .src(config.index)
            .pipe(gulp$.plumber())
            .pipe(assets)
            /* Optimize CSS files */
            .pipe(cssFilter)
            .pipe(gulp$.csso())
            .pipe(cssFilter.restore())
            /* Optimize CSS files */
            .pipe(jsFilter)
            .pipe(gulp$.ngAnnotate())
            .pipe(gulp$.uglify())
            .pipe(jsFilter.restore())
            /* Create distribution resources */
            .pipe(assets.restore())
            .pipe(gulp$.useref())
            .pipe(gulp.dest(config.distRoot));
    });
    gulp.task('clean', function(done) {
        del(config.distRoot + '**/*.*', done); 
    }); 
};
