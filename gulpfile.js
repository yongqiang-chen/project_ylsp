const gulp = require("gulp"),   //引入gulp包
    sass = require("gulp-sass"),    //引入gulp-sass包，压缩sass
    uglify = require("gulp-uglify"),    //引入gulp-uglify包，压缩js
    babel = require("gulp-babel"),  //引入gulp-babel，ES6转ES5
    htmlmin = require("gulp-htmlmin"),  //引入gulp-htmlmin，压缩html
    connect = require("gulp-connect"); //引入gulp-connect，创建web容器

//启动web容器
gulp.task("conn",function(){
    connect.server({
        root:"dist",
        livereload:true
    });
});

//压缩sass文件
gulp.task("sass",function(){
    gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle:"compressed"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
});

//压缩html文件(首页)
gulp.task("index",function(){
    gulp.src("src/index.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload())
});

//压缩html文件(子页面)
gulp.task("html",function(){
    gulp.src("src/html/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload())
});

//压缩js
gulp.task("js",function(){
    gulp.src("src/js/*.js")
        .pipe(babel({
            presets:["env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload())
});

//复制img
gulp.task("copy-img",function(){
    gulp.src("src/img/**.*")
        .pipe(gulp.dest("dist/img"))
});

//复制mock
gulp.task("copy-mock",function(){
    gulp.src("src/mock/**.*")
        .pipe(gulp.dest("dist/mock"))
});

//复制php
gulp.task("copy-php",function(){
    gulp.src("src/php/**.*")
        .pipe(gulp.dest("dist/php"))
});

//复制lib
gulp.task("copy-lib",function(){
    gulp.src("src/lib/**/*.*")
        .pipe(gulp.dest("dist/lib"))
});

//整合复制任务
gulp.task("copy",["copy-php","copy-mock","copy-img","copy-lib"]);

//监视任务
gulp.task("watch",function(){
    gulp.watch("src/sass/*.scss",["sass"])
    gulp.watch("src/html/*.html",["html"])
    gulp.watch("src/index.html",["index"])
    gulp.watch("src/js/*.js",["js"])
    gulp.watch("src/lib/*.js",["lib"])
});

//定义默认任务
gulp.task("default",["sass","index","html","conn","watch","js","copy"]);
