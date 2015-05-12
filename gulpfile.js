var		gulp 		 	= require('gulp'),
      	sass 		 	= require('gulp-ruby-sass'),
      	autoprefixer 	= require('gulp-autoprefixer'),
      	del  		 	= require('del'),
      	webserver 		= require('gulp-webserver');

var 	config = {
     		bowerDir: 	'./bower_components' ,
     		npmDir: 	'./node_modules' 
}

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'jquery', 'watch', 'webserver');
});

gulp.task('styles', function() {
    return sass('app/assets/scss/styles.scss', { 
      style: 'expanded',
      loadPath:[
        config.bowerDir + '/bourbon/app/assets/stylesheets',
        config.bowerDir + '/neat/app/assets/stylesheets'
      ]
      })
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/assets/css'))
  });

gulp.task('jquery', function() { 
    return gulp.src(config.npmDir + '/jquery/dist/jquery.min.js') 
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('scripts', function() { 
    return gulp.src('app/js/static.js') 
        .pipe(gulp.dest('dist/js')); 
});