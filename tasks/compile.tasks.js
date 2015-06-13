module.exports = function compileTasks(gulp, gulp$, util, config) {
    gulp.task('compile:css', function() {
        util.logInfo('Compile LESS to CSS');
        return gulp.src(config.styles.less)
            .pipe(gulp$.plumber())
            .pipe(gulp$.less())
            .pipe(gulp$.concat(config.styles.compiledDest))
            .pipe(gulp.dest(config.styles.directory));
    });

    gulp.task('compile:js', function() {
        return gulp.src(config.alljs)
            .pipe(gulp$.jscs())
            .pipe(gulp$.jshint())
            .pipe(gulp$.jshint.reporter('jshint-stylish', {verbose: true}))
            .pipe(gulp$.jshint.reporter('fail'));
    });

    gulp.task('compile:index', function() {
        util.logInfo('Inject dependencies into index.html');
        var wiredep = require('wiredep').stream;
        var injectSource = gulp.src(config.js.concat(config.styles.css), {read: false});

        return gulp.src(config.index)
            .pipe(wiredep(config.wiredepOptions))
            .pipe(gulp$.inject(injectSource))
            .pipe(gulp.dest(config.appRoot));
    });
};


