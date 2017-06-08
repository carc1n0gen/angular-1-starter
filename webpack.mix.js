let mix = require('laravel-mix');

mix.options({
        processCssUrls: false
   })
   .sourceMaps()
   .setPublicPath('dist/')
   .js('src/js/index.js', 'dist/js')
   .sass('src/sass/index.scss', 'dist/css')
   .copy('src/index.html', 'dist')
   .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'dist/fonts/bootstrap');
