const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const browsersync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const gcmq = require('gulp-group-css-media-queries')
const npmDist = require('gulp-npm-dist')
const pug = require('gulp-pug')
const autoprefixerOptions = {
	browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
}

// BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./"
		}
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

// Libs task
function libs() {
	return gulp
		.src(npmDist(), {
			base: './node_modules/'
		})
		.pipe(rename(function (path) {
			path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '')
		}))
		.pipe(gulp.dest('./assets/libs'))
}

// CSS task
function css() {
	return gulp
		.src('src/scss/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gcmq())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(minify())
		.pipe(gulp.dest('assets/css'))
		.pipe(browsersync.stream())
}
// PUG task
function pugs() {
	return (
		gulp
		.src('src/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'))

	);
}
// JS task
function js() {
	return (
		gulp
		.src('src/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('assets/js'))
	);
}

// Watch files
function watchFiles() {
	gulp.watch('src/scss/**/*.scss', css);
	gulp.watch('src/js/*.js', js);
	gulp.watch('src/*.pug', pugs);
	gulp.watch('src/parts/*.pug', pugs);
	gulp.watch('*.html', browserSyncReload);
	gulp.watch('**/*.html', browserSyncReload);
	gulp.watch('assets/js/**/*.js', browserSyncReload)
	gulp.watch('assets/img/*.*', browserSyncReload)
}

const build = gulp.series(gulp.parallel(css, libs, js));
const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.libs = libs;
exports.js = js;
exports.pugs = pugs;
exports.build = build;
exports.watch = watch;
exports.default = build;