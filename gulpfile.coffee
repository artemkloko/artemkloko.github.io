gulp = require 'gulp'
connect = require 'gulp-connect'
jade = require 'gulp-jade'

gulp.task 'connect', ->
    connect.server
        root: 'public'
        livereload: true
        fallback: 'public/index.html'

gulp.task 'jade', ->
    gulp.src 'index.jade'
        .pipe do jade
        .pipe gulp.dest 'public'

gulp.task 'html', ->
    gulp.src 'public/*.html'
        .pipe connect.reload()

gulp.task 'watch', ->
    gulp.watch 'index.jade', ['jade']
    gulp.watch 'public/*.html', ['html']

gulp.task 'default', ['jade', 'connect', 'watch']