var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var fs = require('fs');

gulp.task('default',() => {
    runSequence('mainjs', 'watch')
})

//处理渲染
gulp.task('mainjs', ()=>{
    console.log('处理渲染')
    //assets里面放的是处理前的静态文件
    //然后通过处理放在main.js里面
    browserify().add('./assets/js/index.js').bundle().pipe(fs.createWriteStream('./js/main.js'))
})

//监听变动
gulp.task('watch', () => {
    gulp.watch(['./assets/js/*.js'], ()=>{
        //监听到后就重新渲染
        runSequence('mainjs')
    })
})