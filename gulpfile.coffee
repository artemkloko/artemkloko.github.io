gulp            = require 'gulp'
connect         = require 'gulp-connect'
minifyInline    = require 'gulp-minify-inline'
pug             = require 'gulp-pug'

gulp.task 'livereload', ->
    connect.server
        root: 'public'
        livereload: true
        fallback: 'public/index.html'

gulp.task 'build', ->
    gulp.src 'src/index.pug'
        .pipe do pug
        .pipe do minifyInline
        .pipe gulp.dest 'public/'
    gulp.src 'static/**/*'
        .pipe gulp.dest 'public/static/'
    gulp.src [ 'bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/components-font-awesome/css/font-awesome.min.css' ]
        .pipe gulp.dest 'public/static/css/'

gulp.task 'html', ->
    gulp.src 'public/*.html'
        .pipe do connect.reload

gulp.task 'watch', ->
    gulp.watch 'src/index.pug', ['build']
    gulp.watch 'public/*.html', ['html']

gulp.task 'default', ['build', 'livereload', 'watch']