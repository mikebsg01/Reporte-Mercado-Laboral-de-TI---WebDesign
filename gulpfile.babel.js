const gulp = require('gulp'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify');

gulp.task('minifyCSS', () => {
  return gulp
    .src('./assets/css/sass-project/main.scss')
    .pipe(concat('style.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', (e) => {
      console.log(e);
    }))
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('minifyLibrariesJS', () => {
  return gulp
    .src([
      './assets/js/jquery-3.2.1.min.js',
      './assets/js/jquery.anchor.js',
      './assets/js/materialize.min.js',
      './assets/js/scrollspy.min.js',
      './assets/js/Chart.min.js',
    ])
    .pipe(babel({
        presets: [
          'es2015'
        ]
    }))
    .pipe(concat('libraries.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('minifyAppJS', () => {
  return gulp
    .src('./assets/js/app.js')
    .pipe(concat('app.min.js'))
    .pipe(babel({
      presets: [
        'es2015'
      ]
  }))
    .pipe(uglify().on('error', (e) => {
      console.log(e);
    }))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('default', [
  'minifyCSS',
  'minifyLibrariesJS',
  'minifyAppJS'
]);

gulp.task('watch', () => {
  gulp.watch('./assets/css/sass-project/main.scss', ['minifyCSS'])

  gulp.watch([
    './assets/js/jquery-3.2.1.min.js',
    './assets/js/jquery.anchor.js',
    './assets/js/materialize.min.js',
    './assets/js/scrollspy.min.js',
    './assets/js/Chart.min.js',
  ], ['minifyLibrariesJS']);

  gulp.watch('./assets/js/app.js', ['minifyAppJS'])
});