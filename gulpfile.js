var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

var src_path_scss = './src/scss/*.scss',
    src_path_js = './src/js/*.js',
    src_path_html = './src/**/*.html',
    src_path_images = './src/images/**/*.+(jpg|png)',
    src_path_lib = './src/lib/**/*.+(js|css)';

gulp.task('sass', function(){
    var processors = [autoprefixer];
    gulp.src(src_path_scss)
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/styles/'))
});

gulp.task('js', function() {
    gulp.src(src_path_js)    
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('html', function() {
    gulp.src(src_path_html)    
    .pipe(gulp.dest('./public/'));
});

gulp.task('img', function() {
    gulp.src(src_path_images)
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('lib', function() {
    gulp.src(src_path_lib)
    .pipe(gulp.dest('./public/lib/'));
});

gulp.task('watch', function(){
    gulp.watch(src_path_scss, ['sass']);
    gulp.watch(src_path_js, ['js']);
    gulp.watch(src_path_html, ['html']);    
    gulp.watch(src_path_images, ['img']);
    gulp.watch(src_path_lib, ['lib']);   
});

gulp.task('build', ['sass', 'js', 'html', 'img', 'lib']);