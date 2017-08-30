const gulp = require('gulp');
const path = require('path');
const open = require('open');
const glob = require('glob');
const size = require('gulp-size');
const svgmin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');

gulp.task('sprites', () => {
  const svgSource = './input';
  const svgDest = './output';

  return glob(svgSource, function(err, dirs) {
    dirs.forEach(function(dir) {
      gulp.src(path.join(dir, '*.svg'))
        .pipe(svgSprite(makeSvgSpriteOptions(dir)))
        .pipe(size({showFiles: true, title: svgDest}))
        .pipe(svgmin({js2svg: {pretty: true}}))
        .pipe(gulp.dest(svgDest))
        .pipe(open('svgDest'));
    })
  });

  function makeSvgSpriteOptions(dirPath) {
    return {
      mode: {
        symbol: {
          dest: '.',
          sprite: 'spritesheet.svg'
        }
      },
      shape: {
        id: {separator: '-'},
        transform: ['svgo']
      }
    };
  }
});

gulp.task('clean-input', () => {
  del(`${svgSource}/**/*`);
});

gulp.task('clean-output', () => {
  del(`${svgDest}/**/*`);
});
