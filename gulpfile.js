var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');

sourceImage600 = ['./assets/images/coverflow.jpg',
					'./assets/images/durga2.jpg',
					'./assets/images/durga3.jpg',
					'./assets/images/durga4.jpg',
					'./assets/images/durga5.jpg',
					'./assets/images/durga6.jpg',
					'./assets/images/durga7.jpg',
					'./assets/images/durga8.jpg',
					'./assets/images/durga10.jpg'
]

sourceImage300 = ['./assets/images/venue.png',
					'./assets/images/duty.png',
					'./assets/images/gallery.png',
					'./assets/images/mahalaya.jpg'
]

sourceImage780 = ['./assets/images/kalpakkam1.jpg',
					'./assets/images/kalpakkam2.jpg',
					'./assets/images/impossible.png',
					'./assets/images/face2.jpg',
					'./assets/images/face1.jpg'
]

gulp.task('minify', function() {
  return gulp.src('./html.bak/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'))
});

gulp.task('compresscss', function () {
  gulp.src(['./assets/css/style.css', './assets/css/slider.css', './assets/css/flipclock.css'])
    .pipe(uglifycss({
      "maxLineLen": 1000,
      "uglyComments": false
    }))
    .pipe(gulp.dest('./assets/css/new'));
});

gulp.task('compressjs', function (cb) {
  pump([
        gulp.src('./assets/js/scripts.js'),
        uglify(),
        gulp.dest('./assets/js/new')
    ],
    cb
  );
});

gulp.task('default', function () {
  gulp.src(sourceImage600)
    .pipe(imageResize({
      width : 600,
      crop : false,
      upscale : false,
      quality : 0
    }))
    .pipe(gulp.dest('./assets/images/newresized'));
});

gulp.task('resizebgimg', function() {
	gulp.src('./assets/images/coverimage.jpg')
		.pipe(imageResize({
			width : 1200,
			crop : false,
			upscale : false,
			qualilty : 5
		}))
		.pipe(gulp.dest('./assets/images/newresized'))
})

gulp.task('resizeport', function() {
	gulp.src(sourceImage300)
		.pipe(imageResize({
			width : 300,
			crop : false,
			upscale : false,
			qualilty : 0
		}))
		.pipe(gulp.dest('./assets/images/newresized'))
})

gulp.task('resize780', function() {
	gulp.src(sourceImage780)
		.pipe(imageResize({
			width : 400,
			crop : false,
			upscale : false,
			quality : 0
		}))
		.pipe(gulp.dest('./assets/images/newresized'))
})
