//this brings in all the needed functionality for the tasks to run.
//if you have not run NPM install none of the tasks will work
var gulp = require('gulp')
,   concat = require('gulp-concat')
,   sass = require('gulp-sass')
,   annotate = require('gulp-ng-annotate')
,   sourcemaps = require('gulp-sourcemaps')
,   CacheBuster = require('gulp-cachebust')
,   print = require('gulp-print')
,   babel = require('gulp-babel');

var cachebust = new CacheBuster();

var paths = {
   jsSource: ['./frontend/js/**/*.js'],
   sassSource: ['./frontend/styles/**/*.scss'],
   indexSource: ['./frontend/index.html'],
   viewsSource: ['./frontend/views/**/*.html'],
   picturesSource: ['./frontend/pictures/**/*']
};


//SASS task, this compiles and compresses from SCSS fiels to a css file
gulp.task('sass', function() {
    return gulp.src(['./frontend/styles/reset.scss','./frontend/styles/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

//JS task This will convert all ES6 to ES5
//This compile and compress all js files in to one
gulp.task('js', function() {
    return gulp.src(['./frontend/js/app.js','./frontend/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({presets: ['es2015'] }))
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});

//this task will compress all of your views but will not compile them into one.
//the views need to be seperate files for ui-router to work.
gulp.task('views', function() {
    gulp.src('./frontend/html/**/*.html')
      .pipe(gulp.dest("./dist/views"));
});

//This task makes a copy of your index.html and compresses it and moves it to the dist folder
gulp.task('index', function() {
    gulp.src('./index.html')
      .pipe(gulp.dest("./dist"));
});

//this task copies all your pictures over to the dist folder.
gulp.task('pictures', function() {
    gulp.src('./frontend/images/**/*')
      .pipe(gulp.dest("./dist/images"));
});

//this watches all the files in the specified locations, if any files change it will recompile
//This wont watch newly created files while gulp is running, if you make a new file stop gulp with ctrl-c and re-run.
gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.indexSource, ['index']);
    gulp.watch(paths.viewsSource, ['views']);
    gulp.watch(paths.picturesSource, ['pictures']);
});

//when you type gulp and run it in the command like this is the default task that runs.
//this will run all the tasks listed in the array in order. when its done it watches for changes and will recompile if anything changes.
gulp.task('default', ['js', 'sass', 'index', 'views', 'pictures',
    'watch'
]);
