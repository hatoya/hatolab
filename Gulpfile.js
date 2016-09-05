var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat-util'),
    browserSync = require('browser-sync'),
    modRewrite = require('connect-modrewrite'),
    ngrok = require('ngrok'),
    typescript = require('gulp-typescript'),
    tsConfig = typescript.createProject("tsconfig.json"),
    rename = require('gulp-rename');

gulp.task('connect', function(){
    browserSync({
        server: {
            baseDir: "docs",
            middleware: [modRewrite(['!\\.\\w+$ /index.html [L]'])]
        },
        port: 8888,
        open: false,
    });
    ngrok.connect(8888, function(error, url) {
        console.log('[ngrok] ' + url);
    });
});

gulp.task('sass', function(){
    gulp.src(['./scss/foundation/*.scss', './scss/layout/*.scss', './scss/object/**/*.scss'])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(concat('application.scss'))
        .pipe(sass())
        .pipe(gulp.dest('./docs/css'));
});

gulp.task('ts', function() {
    gulp.src('ts/**/*.ts')
        .pipe(plumber())
        .pipe(typescript(tsConfig))
        .pipe(gulp.dest("./docs/js"));
});

gulp.task('copy', function(){
    gulp.src('./node_modules/core-js/**')
        .pipe(gulp.dest('./docs/js/modules/core-js'));
    gulp.src('./node_modules/zone.js/**')
        .pipe(gulp.dest('./docs/js/modules/zone.js'));
    gulp.src('./node_modules/reflect-metadata/**')
        .pipe(gulp.dest('./docs/js/modules/reflect-metadata'));
    gulp.src('./node_modules/systemjs/**')
        .pipe(gulp.dest('./docs/js/modules/systemjs'));
    gulp.src('./node_modules/rxjs/**')
        .pipe(gulp.dest('./docs/js/modules/rxjs'));
    gulp.src('./node_modules/@angular/**')
        .pipe(gulp.dest('./docs/js/modules/@angular'));
    gulp.src('./node_modules/angular2-in-memory-web-api/**')
        .pipe(gulp.dest('./docs/js/modules/angular2-in-memory-web-api'));
});

gulp.task('notification', function() {
    gulp.src('')
        .pipe(notify('COMPLETE'));
});

gulp.task('watch', function(){
    gulp.watch(['scss/**/*.scss'], ['sass']);
    gulp.watch(['ts/**/*.ts'], ['ts']);
    gulp.watch(['docs/**/*.html','docs/css/application.css', 'docs/js/application.js'], function(){
        browserSync.reload();
    });
});

gulp.task('default', ['sass', 'ts', 'connect', 'watch']);