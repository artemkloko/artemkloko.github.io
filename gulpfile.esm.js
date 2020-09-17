import gulp from 'gulp'
import connect from 'gulp-connect'
import minifyInline from 'gulp-minify-inline'
import pug from 'gulp-pug'
import rename from 'gulp-rename'
import merge from 'merge-stream'

const buildPug = () => gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(minifyInline())
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())

const addBootstrap = () => gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('public/static/css'))

const addFontAwesome = () => merge(
    gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(rename('fontawesome.min.css'))
        .pipe(gulp.dest('public/static/css')),
    gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('public/static/webfonts'))
)

const addStatic = () => gulp.src('static/**/*')
    .pipe(gulp.dest('public/static'))

const watchPug = () => gulp.watch('src/index.pug', buildPug)

const livereload = () => connect.server({
    port: 3000,
    root: 'public',
    livereload: true
})

const build = gulp.parallel(buildPug, addBootstrap, addFontAwesome, addStatic)
const dev = gulp.series(build, gulp.parallel(livereload, watchPug))

exports.dev = dev
exports.build = build
exports.default = build
