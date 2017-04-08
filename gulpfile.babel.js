import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';


// Перетворення es6 => es5
gulp.task('build', () => {
    return browserify({
        entries : './js/app.js',
        extensions : ['js'],
        debug : true
    })
    .transform('babelify',{
        presets : ['es2015', 'react'],
        plugins : ['transform-class-properties'],
    })
    .bundle()
    .on('error', (err) => {
        gutil.log(gutil.colors.red.bold('[browserify error]'));
        gutil.log(err.message);
        // this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

// Слідкує за змінами в файлах і перетворює їх на es5 
gulp.task('watch', ['build'], () => {
    gulp.watch('./js/**/*.js', ['build']);
});

gulp.task('default', ['watch']);
