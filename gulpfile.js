const gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel");

//编译sass
gulp.task("sass", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle:"compressed"}))
		.pipe(gulp.dest("dist/css"));
});