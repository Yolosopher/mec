import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps'
import dartsass from 'gulp-dart-sass'
import pug from 'gulp-pug'
import webpack from 'webpack-stream'

const jsPath = 'src/assets/js/app.js'
const cssPath = 'src/assets/css/**/*.scss'
const pugPath = 'src/**/*.pug'



export const fontsTasks = () => {
	return gulp
		.src('src/assets/fonts/**/*.{ttf,otf}')
		.pipe(gulp.dest('docs/assets/fonts/'))
}
export const renderViews = () => {
	return gulp
		.src('src/*.pug')
		.pipe(pug({ options: false, pretty: true }))
		.pipe(gulp.dest('docs'))
}
export const imgTask = () => {
	return gulp
		.src('src/assets/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/assets/img'))
}

export const jsTask = () => {
	return gulp
		.src(jsPath)
		.pipe(sourcemaps.init())
		.pipe(
			webpack({
				output: {
					filename: 'bundle.min.js',
					// clean: true,
				},
				mode: 'production',
			})
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('docs/assets/js'))
}
export const cssTask = () => {
	return gulp
		.src(cssPath)
		.pipe(sourcemaps.init())
		.pipe(concat('style.css'))
		.pipe(
			dartsass({ outputStyle: 'compressed' }).on(
				'error',
				dartsass.logError
			)
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('docs/assets/css'))
}

export const watchTask = () => {
	gulp.watch(
		[pugPath, cssPath, 'src/assets/css/**/*.sass', 'src/assets/js/**/*.js'],
		{ interval: 1000 },
		gulp.parallel(renderViews, cssTask, jsTask, imgTask)
	)
}
export default gulp.series(
	gulp.parallel(renderViews, imgTask, jsTask, cssTask)
)
