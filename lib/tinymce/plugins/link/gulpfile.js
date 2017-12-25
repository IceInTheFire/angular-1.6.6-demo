const gulp = require('gulp');
const uglify = require("gulp-uglify");
const rename = require('gulp-rename');
const watch = require('gulp-watch');

gulp.task("default", function() {
    gulp.src('plugin.js')
        .pipe(uglify())
        .pipe(rename('plugin.min.js'))
        .pipe(gulp.dest('./'));
})


gulp.task('watch', function () {

    gulp.watch('./plugin.js',["default"]);
});