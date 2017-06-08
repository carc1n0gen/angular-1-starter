let mix = require('laravel-mix');

mix.js('src/js/index.js', 'dist/js')
   .sourceMaps()
   .sass('src/sass/index.scss', 'dist/css')
   .copy('src/index.html', 'dist');
