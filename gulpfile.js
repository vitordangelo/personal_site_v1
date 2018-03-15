var gulp = require('gulp'),
broswerSync = require('browser-sync');

gulp.task('server', function() {
  broswerSync.init({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch('src/**/*').on('change', broswerSync.reload);
});
