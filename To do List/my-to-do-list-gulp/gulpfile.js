var gulp = require('gulp');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('dist/**', {read: false})
    .pipe(clean());
});

gulp.task('copy', function() {
  return gulp.src('src/**')
    .pipe(gulp.dest('dist/'));
});

gulp.task('babel', () =>
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
);
gulp.task('eslint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['eslint', 'clean', 'copy', 'babel']);
