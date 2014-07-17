var gulp = require('gulp'),
    deploy = require("gulp-gh-pages");
    replace = require('gulp-replace');
    connect = require('gulp-connect');

file = "gm-boilerplate.html"

gulp.task('deploy', function () {
    gulp.src(['bower_components/**/*',
              '!bower_components/gm-boileplate/**/*',
              'src/*', 'index.html'
             ])
        .pipe(deploy({
            "push":false,

        }));
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('build', function(){
  gulp.src(['src/'+file+''])
    .pipe(replace('bower_components', '..'))
    .pipe(gulp.dest('dist/'));
});
