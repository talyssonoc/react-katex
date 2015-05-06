var path = require('path');

var gulp = require('gulp');

var clean   = require('gulp-clean');
var concat  = require('gulp-concat');
var jest    = require('gulp-jest');
var jshint  = require('gulp-jshint');
var jsx     = require('gulp-react');
var rename  = require('gulp-rename');
var uglify  = require('gulp-uglify');
var umd     = require('gulp-umd');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
  .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src('src/react-katex.jsx')
  .pipe(jsx())
  .pipe(jshint())
  .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('build', function() {
  return gulp.src('src/react-katex.jsx')
  .pipe(jsx())
  .pipe(concat('react-katex.js'))
  .pipe(umd({
    exports: function(file) {
      return 'ReactKaTeX';
    },

    namespace: function() {
      return 'ReactKaTeX';
    },

    dependencies: function() {
      return [
        {
          name: 'react-with-addons',
          amd: 'react-with-addons',
          cjs: 'react/addons',
          global: 'React',
          param: 'React'
        },
        {
          name: 'katex-build',
          amd: 'katex-build',
          cjs: 'katex-build',
          global: 'katex',
          param: 'katex'
        }
      ];
    },

    template: path.join(__dirname, '/src/umd-template.js')
  }))
  .pipe(gulp.dest('dist'))
  .pipe(rename('react-katex.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**.jsx', ['build']);
});

gulp.task('test', ['build'], function () {
  return gulp.src('test').pipe(jest({
    scriptPreprocessor: 'support/preprocessor.js',
    unmockedModulePathPatterns: [
    'node_modules/react'
    ],
    testDirectoryName: 'test',
    testPathIgnorePatterns: [
    'node_modules',
    'test/support'
    ],
    moduleFileExtensions: [
    'js'
    ]
  }));
});
