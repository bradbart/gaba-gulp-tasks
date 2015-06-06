var gulp = require('gulp');
var gulp$ = require('gulp-load-plugins')({lazy: true});
var util = require('./util.js')();
var config = util.config;

gulp.task('compile-less', function() {
    util.logInfo('Compile LESS to CSS');
    return gulp.src(config.styles.less)
        .pipe(gulp$.plumber())
        .pipe(gulp$.less())
        .pipe(gulp$.concat(config.styles.compiledDest))
        .pipe(gulp.dest(config.styles.directory));
});

gulp.task('wire-dep', function() {
    util.logInfo('Inject dependencies into index.html');
    var wiredep = require('wiredep').stream;
    var injectSource = gulp.src(config.js.concat(config.styles.css), {read: false});

    return gulp.src(config.index)
        .pipe(wiredep(config.wiredepOptions))
        .pipe(gulp$.inject(injectSource))
        .pipe(gulp.dest(config.appRoot));
});
