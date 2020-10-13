const mix = require('laravel-mix');
require('laravel-mix-nunjucks')

mix.sass('src/assets/scss/app.scss', 'dist/assets/css')
    .setPublicPath('dist')
    .options({
        processCssUrls: false
    });
   
mix.njk('src/', 'dist/', {
    ext: '.html',
    marked: null,
    watch: true,
    block: 'content',
    envOptions: {
        watch: true,
        noCache: true
     },
    manageEnv: (nunjucks) => {},
})
