/* gulp配置 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev-append'),	//自动添加版本号
	browserSync = require('browser-sync').create(); //热更新    $ cnpm install browser-sync gulp --save-dev

//合并js
gulp.task('testConcat', function () {
    gulp.src(['../js/base/*.js','../js/country/*.js','../js/student/*.js'])
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('../dist/js'));
});
//压缩js文件
gulp.task('jsOnlymin', function () {
    gulp.src('../js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../dist/js'));
});

//合并、压缩、并且输出一个新的js文件
gulp.task('jsmin', function () {
    gulp.src(['../js/base/*.js','../js/country/*.js','../js/student/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('../dist/js'))
        .pipe(browserSync.reload({stream:true})); 
});

//添加版本号
gulp.task('dev' , ['jsmin'], function(){

    gulp.src('../index.html')
    .pipe(rev())
    .pipe(gulp.dest('../')) 
    .pipe(browserSync.reload({stream:true}));   
	
});

//  热更新： 使用默认任务启动Browsersync，监听JS文件
gulp.task('serve', ['dev'], function () {
	gulp.start('dev'); 
	
    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "../../SH_agme1.0"
        }
    });
    gulp.watch("../js/**/*.js", ['dev']);	//监控文件变化，自动更新 
});

//默认任务
gulp.task('default',['serve']); 
