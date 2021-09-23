import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps'
import dartsass from 'gulp-dart-sass'
import pug from 'gulp-pug'
import webpack from 'webpack-stream'
import ugl from 'gulp-uglify-es'
import notify from 'gulp-notify'
import browserS from 'browser-sync'

const jsPath = 'src/assets/js/pages/home.js'
const cssPath = 'src/assets/css/**/*.scss'
const pugPath = 'src/**/*.pug'
const browserSync = browserS.create()
const uglify = ugl.default

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
		.src(['src/assets/js/pages/home.js', 'src/assets/js/pages/about.js'])
		.pipe(
			webpack({
				entry: {
					home: './src/assets/js/pages/home.js',
					about: './src/assets/js/pages/about.js',
				},
				output: {
					filename: '[name].min.js',
				},
				mode: 'production',
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
								},
							},
						},
					],
				},
			})
		)
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err)
			this.emit('end') // Don't stop the rest of the task
		})
		.pipe(sourcemaps.init())
		.pipe(uglify().on('error', notify.onError()))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('docs/assets/js'))
		.pipe(browserSync.stream())
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

// individual watchers
export const cssTaskWatch = () => {
	gulp.watch(
		[cssPath, 'src/assets/css/**/*.sass'],
		{ interval: 1000 },
		gulp.parallel(cssTask)
	)
}
export const jsTaskWatch = () => {
	gulp.watch(
		['src/assets/js/**/*.js'],
		{ interval: 1000 },
		gulp.parallel(jsTask)
	)
}
export const renderViewsWatch = () => {
	gulp.watch([pugPath], { interval: 1000 }, gulp.parallel(renderViews))
}
export const imgTaskWatch = () => {
	gulp.watch(
		['src/assets/img/**/*'],
		{ interval: 1000 },
		gulp.parallel(imgTask)
	)
}

export const watchTask = () => {
	gulp.watch(
		[
			pugPath,
			'src/assets/img/**/*',
			cssPath,
			'src/assets/css/**/*.sass',
			'src/assets/js/**/*.js',
		],
		{ interval: 1000 },
		gulp.parallel(renderViews, cssTask, jsTask, imgTask)
	)
}

export const watcha = () => {
	cssTaskWatch()
	jsTaskWatch()
	renderViewsWatch()
	imgTaskWatch()
}
export default gulp.series(gulp.parallel(renderViews, jsTask, cssTask, imgTask))
