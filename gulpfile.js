var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default',() => {
    runSequence('indexjs', 'watch')
})

//处理渲染
gulp.task('indexjs', ()=>{
    console.log('666')
})

//监听变动
gulp.task('watch', () => {
    gulp.watch(['./js/*.js'], ()=>{
        //监听到后就重新渲染
        runSequence('indexjs')
    })
})