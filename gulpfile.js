var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "client"
        }
    });
    gulp.watch('client/**/*').on('change' , browserSync.reload);
});
