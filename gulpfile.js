const gulp = require('gulp');
const babel = require('gulp-babel');//Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
const uglify = require('gulp-uglify');  //压缩js文件
const rename = require('gulp-rename');  //重命名文件
const cssnano = require('gulp-cssnano');//压缩css文件
const concat = require('gulp-concat');//合并文件
const connect = require('gulp-connect'); //引入gulp-connect，用来启动服务
const browserify = require('browserify');//让你使用类似于node的require()来组织浏览器的js代码
const source = require('vinyl-source-stream');//将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('app/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// 合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('app/css/*.css')
    .pipe(concat('app.css'))
    .pipe(cssnano())
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist/css'));
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('app/css/*.css', ['convertCSS']);
  gulp.watch('app/js/*.js', ['convertJS', 'browserify']);
})

// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "dist/js/app.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('connect', ['convertJS', 'convertCSS', 'browserify', 'watch'],function(){
	return connect.server({
        name: 'devServer',
        root: 'app',
        port: '8083'
    })
});
// 通过watch，可以在保存代码之后，让gulp自动将代码构建一遍，而不用自己在重新敲一遍