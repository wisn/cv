const gulp = require('gulp')
const babel = require('gulp-babel')
const haml = require('gulp-haml')
const stylus = require('gulp-stylus')

gulp.task('babel', () => {
  return gulp.src('es/*.es')
         .pipe(babel({
            presets: ['es2015']
         }))
         .pipe(gulp.dest('js'))
})

gulp.task('haml', () => {
  return gulp.src('haml/*.haml')
         .pipe(haml({
            compiler: 'visionmedia'
         }))
         .pipe(gulp.dest('html'))
})

gulp.task('stylus', () => {
  return gulp.src('stylus/*.styl')
         .pipe(stylus())
         .pipe(gulp.dest('css'))
})

gulp.task('default', ['babel', 'haml', 'stylus'])

let watchBabel = gulp.watch('es/*.es', ['babel'])
watchBabel.on('change', (event) => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
})

let watchHaml = gulp.watch('haml/*.haml', ['haml'])
watchHaml.on('change', (event) => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
})

let watchStylus = gulp.watch('stylus/*.styl', ['stylus'])
watchStylus.on('change', (event) => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
})