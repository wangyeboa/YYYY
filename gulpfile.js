let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");

// gulp => 方法;
	//task 方法; => 绑定指令的方法;
// gulp.task("yanghuaizhi",()=>{
// 	//指令执行函数;
// 	console.log("hello this is my first task");
// });

//把index放进 dist文件夹之中;

gulp.task("index",()=>{
	//实现功能的时候一定要return;
	// gulp.src() => 找到源文件;
	// gulp.pipe(); => 在连缀之中想要继续调用gulp方法,就要用到pipe方法;
	// gulp.dest(); => 转存方法;
	
	return gulp.src(["HOT.html","js/HOT.js","js/require.js","js/jquery-1.11.3.min.js","js/header.js"]).pipe(gulp.dest("dist")).pipe(connect.reload());
})

gulp.task("data",()=>{
	return gulp.src("php/data.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("reset",()=>{
	return gulp.src(["css/bottom.css","css/header.css","css/reset.css"]).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})


//gulp.watch();

//把所有的js文件全部都放进线上的script文件夹之中;
gulp.task("script",()=>{
	return gulp.src(["libs/*.js","module/**/*","!module/world.txt"])
	.pipe(gulp.dest("dist/script"))
})

gulp.task("watch",()=>{
	//如果index.html发生改变 ,那么 执行index指令;
	gulp.watch(["HOT.html","sass/*.scss"],["index"]);
	gulp.watch(["css/bottom.css","css/header.css","css/reset.css"],["reset"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("php.data.htnl",["data"]);
	
})

gulp.task("server",()=>{
	connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true
    });
})

gulp.task("sass",()=>{
	 return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})


gulp.task("default",["server","watch"])
