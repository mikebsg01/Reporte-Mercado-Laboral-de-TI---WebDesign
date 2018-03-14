const gulp = require('gulp'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      notifier = require('node-notifier');

gulp.task('minifyCSS', () => {
  let isSuccess = true;

  return gulp
    .src('./assets/css/sass-project/main.scss')
    .pipe(concat('style.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', (e) => {
      isSuccess = false;
      console.log(e);
      notifier.notify({
        title: 'Error detected',
        message: 'An error has occurred with the CSS :(',
        type: 'error',
        sound: true
      });
    }))
    .pipe(gulp.dest('./assets/css'))
    .on('end', () => {
      if (isSuccess) {
        notifier.notify({
          title: 'Change detected',
          message: 'The CSS has been compiled successfully! :)',
          type: 'info',
          sound: true
        });
      }
    });
});

gulp.task('minifyLibrariesJS', () => {
  let isSuccess = true;

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
    .pipe(uglify().on('error', (e) => {
      isSuccess = false;
      console.log(e);
      notifier.notify({
        title: 'Error detected',
        message: 'An error has occurred with the LibrariesJS :(',
        type: 'error',
        sound: true
      });
    }))
    .pipe(gulp.dest('./assets/js'))
    .on('end', () => {
      if (isSuccess) {
        notifier.notify({
          title: 'Change detected',
          message: 'The LibrariesJS has been compiled successfully! :)',
          type: 'info',
          sound: true
        });
      }
    });
});

gulp.task('minifyAppJS', () => {
  let isSuccess = true;

  return gulp
    .src('./assets/js/app.js')
    .pipe(concat('app.min.js'))
    .pipe(babel({
      presets: [
        'es2015'
      ]
  }))
    .pipe(uglify().on('error', (e) => {
      isSuccess = false;
      console.log(e);
      notifier.notify({
        title: 'Error detected',
        message: 'An error has occurred with the AppJS :(',
        type: 'error',
        sound: true
      });
    }))
    .pipe(gulp.dest('./assets/js'))
    .on('end', () => {
      if (isSuccess) {
        notifier.notify({
          title: 'Change detected',
          message: 'The AppJS has been compiled successfully! :)',
          type: 'info',
          sound: true
        });
      }
    });
});

gulp.task('default', [
  'minifyCSS',
  'minifyLibrariesJS',
  'minifyAppJS'
]);

gulp.task('watch', () => {
  notifier.notify({
    title: 'Gulp',
    message: 'Watching changes...',
    type: 'info'
  });

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